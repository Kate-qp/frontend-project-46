#!/usr/bin/env node
import { program } from 'commander';
import parseJsonFile from './parser.js';
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .action((filepath1, filepath2) => {
    const data1 = parseJsonFile(filepath1);
    const data2 = parseJsonFile(filepath2);
    console.log('Data from file 1:', data1);
    console.log('Data from file 2:', data2);
    
  })
  .helpOption('-h, --help', 'display help for command');
program.parse(process.argv);
