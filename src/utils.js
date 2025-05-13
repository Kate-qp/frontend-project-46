import { existsSync, readFileSync } from 'fs'
import { extname, resolve } from 'path'

export const getFilePath = filePath => {
  const absolutePath = resolve(process.cwd(), filePath)

  if (!existsSync(absolutePath)) {
    throw new Error(`Path '${filePath}' not found!`)
  }

  return absolutePath
}

export const getFileContent = filePath => readFileSync(filePath).toString()

export const getFileExt = filePath => extname(filePath).slice(1)