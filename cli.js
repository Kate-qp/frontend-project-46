#!/usr/bin/env node
import { program } from 'commander'
import genDiff from 'file:///C:/Users/kpark/OneDrive/Рабочий%20стол/Project/frontend-project-46/src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const diff = genDiff(filepath1, filepath2, options.format);
    console.log(diff);
  })
  .helpOption('-h, --help', 'display help for command');
program.parse(process.argv);