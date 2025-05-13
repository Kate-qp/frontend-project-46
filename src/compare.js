import fs from 'fs'

const compareFiles = (filepath1, filepath2) => {
  const file1Content = fs.readFileSync(filepath1, 'utf-8');
  const file2Content = fs.readFileSync(filepath2, 'utf-8');

  if (file1Content === file2Content) {
    return 'Файлы идентичны'
  }
  return 'Файлы различаются'
}

export default compareFiles
