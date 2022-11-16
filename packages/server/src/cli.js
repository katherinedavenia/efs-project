const yargs = require("yargs");

const options = yargs
  .usage("fishery")
  .option("l", {
    alias: "language",
    describe: "Translate to language",
    type: "string",
    demandOption: false,
  })
  .option("s", {
    alias: "sentence",
    describe: "Sentence to be translated",
    type: "string",
    demandOption: false,
  })
  .help(true).argv;
