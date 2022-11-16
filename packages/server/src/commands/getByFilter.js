const GetFisheryAction = require("../actions");

exports.command = "get-filter";

exports.describe = "Get filtered commodities data";

exports.builder = (yargs) => {
  return yargs
    .options({
      commodity: { type: "string", desc: "filter by commodity" },
      town: { type: "string", desc: "filter by town" },
      province: { type: "string", desc: "filter by province" },
      size: { type: "string", desc: "filter by size" },
      minPrice: { type: "string", desc: "filter by minimum price" },
      maxPrice: { type: "string", desc: "filter by maximal price" },
    })
    .help(true);
};

exports.handler = async (args) => {
  const action = new GetFisheryAction();

  const filters =
    args.commodity ||
    args.town ||
    args.province ||
    args.size ||
    args.minPrice ||
    args.maxPrice;

  if (filters) {
    const data = await action.getAllByFilter({
      commodity: args.commodity?.toUpperCase(),
      town: args.town?.toUpperCase(),
      province: args.province?.toUpperCase(),
      size: args.size,
      startPrice: args.minPrice,
      endPrice: args.maxPrice,
    });

    if (data.length) {
      console.log(data);
    } else {
      console.log("Sorry. Data not found!");
    }
  } else {
    console.log("Please enter your filter option. See help: fishery get-filter --help");
  }
};
