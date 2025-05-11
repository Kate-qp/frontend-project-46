import { readFileSync } from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildDiff from './buildDiff.js';
import format from './formatters/index.js';

const getFileContent = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return readFileSync(absolutePath, 'utf-8');
};

const getFileFormat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const content1 = getFileContent(filepath1);
  const content2 = getFileContent(filepath2);
  
  const data1 = parse(content1, getFileFormat(filepath1));
  const data2 = parse(content2, getFileFormat(filepath2));
  
  const diff = buildDiff(data1, data2);
  return format(diff, formatName);
};

export default genDiff;