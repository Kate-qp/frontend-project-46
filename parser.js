import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
const parseData = (data, extension) => {
  switch (extension) {
    case '.yml':
    case '.yaml':
      return yaml.load(data);
    case '.json':
      return JSON.parse(data);
    default:
      throw new Error(`Unknown extension ${extension}`);
  }
};
const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  const ext = path.extname(filepath);
  return parseData(data, ext);
};
export default parseFile;