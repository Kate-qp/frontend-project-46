import _ from 'lodash'
import yaml from 'js-yaml'

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
}

export default (data, ext) => {
  const format = ext.startsWith('.') ? ext.slice(1) : ext

  if (!_.has(parsers, format)) {
    throw new Error(`Unsupported format: '${format}'`)
  }

  return parsers[format](data)
}
