const axios = require("axios");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");

class GetFisheryAction {
  async getAll() {
    const { data } = await axios.get(
      "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list"
    );
    return data;
  }

  async getAllByFilter({
    commodity,
    province,
    town,
    size,
    startPrice,
    endPrice,
    startDate,
    endDate,
  }) {
    const commodityPath = commodity ? `"komoditas":"${commodity}"` : "";
    const provincePath = province ? `"area_provinsi":"${province}"` : "";
    const townPath = town ? `"area_kota":"${town}"` : "";
    const sizePath = size ? `"size":"${size}"` : "";

    const paths = [commodityPath, provincePath, townPath, sizePath].filter(
      (path) => !!path
    );

    const { data } = await axios.get(
      `https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?search={${paths.join(
        ","
      )}}`
    );

    const filteringDate = startDate && endDate;
    const filteringPrice = startPrice && endPrice;

    const newData = data.filter((item) => {
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

    return data;
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
