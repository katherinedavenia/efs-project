#! /usr/bin/env node
const yargs = require("yargs");

const getCommand = require("./commands/get");
const getStatisticsCommand = require("./commands/getStatistics");
const getCategories = require("./commands/getCategories");
const getByFilter = require("./commands/getByFilter");

const commands = [getCommand, getStatisticsCommand, getCategories, getByFilter];

const installCommands = () => {
  commands.forEach((command) => yargs.command(command));
};

installCommands();
yargs.demandCommand().help().argv;
