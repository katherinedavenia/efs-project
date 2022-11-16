const GetFisheryAction = require("../actions");

exports.command = "get";

exports.describe = "Get all commodity data or by id";

exports.builder = (yargs) => {
  return yargs
    .options({
      id: { type: "string", desc: "find by commodity id" },
    })
    .help(true);
};

exports.handler = async (args) => {
  const action = new GetFisheryAction();

  if (args.id) {
    const data = await action.getById(args.id);

    if (data.length) {
      console.log(data[0]);
    } else {
      console.log("Sorry. Data not found!");
    }
  } else {
    const data = await action.getAll();
    console.log(data);
  }
};
