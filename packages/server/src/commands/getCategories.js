const GetFisheryAction = require("../actions");

exports.command = "categories";

exports.describe = "Get all commodity categories";

exports.builder = (yargs) => {
  return yargs.help(true);
};

exports.handler = async () => {
  const action = new GetFisheryAction();

  const data = await action.getAllCategories();

  console.log(`\nCommodity Categories:\n${data.commodity} \n`);
  console.log(`Area Categories:\n${data.area} \n`);
  console.log(`Size Categories:\n${data.size} \n`);
};
