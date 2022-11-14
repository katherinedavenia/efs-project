const axios = require("axios");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");

class GetFisheryAction {
  async getAll() {
    const { data } = await axios.get(
      "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list"
    );

    return data
      .filter((item) => item.uuid !== null)
      .sort(function (a, b) {
        return new Date(b.tgl_parsed) - new Date(a.tgl_parsed);
      });
  }

  async getAllByFilter({
    commodity,
    area,
    size,
    startPrice,
    endPrice,
    startDate,
    endDate,
  }) {
    const commodityPath = commodity ? `"komoditas":"${commodity}"` : "";
    const areaPath = area ? `"area_kota":"${area}"` : "";
    const sizePath = size ? `"size":"${size}"` : "";

    const paths = [commodityPath, areaPath, sizePath].filter((path) => !!path);

    const { data } = await axios.get(
      `https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?search={${paths.join(
        ","
      )}}`
    );

    const filteringDate = startDate && endDate;
    const filteringPrice = startPrice && endPrice;

    const filteredData = data
      .filter((value) => JSON.stringify(value) !== "{}")
      .sort(function (a, b) {
        return new Date(b.tgl_parsed) - new Date(a.tgl_parsed);
      });

    const newData = filteredData.filter((item) => {
      if (filteringDate || filteringPrice) {
        return (
          (!filteringDate ||
            (moment(item.tgl_parsed).isBefore(endDate) &&
              moment(item.tgl_parsed).isAfter(startDate)) ||
            moment(item.tgl_parsed).isSame(startDate) ||
            moment(item.tgl_parsed).isSame(endDate)) &&
          (!filteringPrice ||
            (Number(item.price) > Number(startPrice) &&
              Number(item.price) < Number(endPrice)) ||
            Number(item.price) === Number(startPrice) ||
            Number(item.price) === Number(endPrice))
        );
      }
      return item;
    });

    return newData;
  }

  async getById(id) {
    const { data } = await axios.get(
      `https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?search={"uuid":"${id}"}`
    );

    return data.filter((item) => item.uuid !== null);
  }

  async getAllCategories() {
    const { data } = await axios.get(
      "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list"
    );

    const commodityCategories = data
      .map((item) => item.komoditas)
      .reduce(function (a, b) {
        if (a.indexOf(b) < 0 && b !== null) a.push(b);
        return a;
      }, []);

    const sizeCategories = data
      .map((item) => item.size)
      .reduce(function (a, b) {
        if (a.indexOf(b) < 0 && b !== null) a.push(b);
        return a;
      }, []);

    const areaCategories = data
      .map(
        (item) =>
          item.area_kota !== null &&
          item.area_provinsi !== null &&
          `${item.area_kota}, ${item.area_provinsi}`
      )
      .reduce(function (a, b) {
        if (a.indexOf(b) < 0 && b !== false) a.push(b);
        return a;
      }, []);

    return {
      commodity: commodityCategories,
      size: sizeCategories,
      area: areaCategories,
    };
  }

  async add({ commodity, province, town, size, price }) {
    await axios.post(
      "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list",
      [
        {
          uuid: uuidv4(),
          komoditas: commodity,
          area_provinsi: province,
          area_kota: town,
          size: String(size),
          price: String(price),
          tgl_parsed: new Date().toISOString(),
          timestamp: Date.now(),
        },
      ]
    );
  }

  async updateById({ id, commodity, province, town, size, price }) {
    const { data } = await axios.put(
      "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list",
      {
        condition: { uuid: id },
        set: {
          komoditas: commodity,
          area_provinsi: province,
          area_kota: town,
          size: String(size),
          price: String(price),
          tgl_parsed: new Date().toISOString(),
          timestamp: Date.now(),
        },
      }
    );
    return data;
  }

  async deleteById(id) {
    await axios.delete(
      "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list",
      {
        data: {
          condition: {
            uuid: id,
          },
        },
      }
    );
  }
}

module.exports = GetFisheryAction;
