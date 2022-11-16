const GetFisheryAction = require("../actions");

exports.command = "statistics";

exports.describe = "Get commodity data statistics";

exports.builder = (yargs) => {
  return yargs.help(true);
};

exports.handler = async () => {
  const action = new GetFisheryAction();

  const data = await action.getAllStatistics();

  console.log("\n");
  data.forEach((el) => {
    console.log(`${el.title}: ${el.value}`);
  });
  console.log("\n");
};
