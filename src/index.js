import compareFiles from './compare.js';
const genDiff = (filepath1, filepath2) => {
  const result = compareFiles(filepath1, filepath2);
  return result;
};
export default genDiff;