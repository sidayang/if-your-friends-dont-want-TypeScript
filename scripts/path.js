const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '../')
const EMIT_PATH = path.resolve(ROOT_PATH, './src-js')
const SRC_PATH = path.resolve(ROOT_PATH, './src')
const TSCONFIG_PATH = path.resolve(ROOT_PATH, './tsconfig.json')
const TSCONFIG_EMIT_PATH = path.resolve(ROOT_PATH, './tsconfig-emit.json')
const JSCONFIG_PATH = path.resolve(ROOT_PATH, './jsconfig.json')

module.exports = {
    ROOT_PATH, EMIT_PATH, SRC_PATH, TSCONFIG_PATH, TSCONFIG_EMIT_PATH, JSCONFIG_PATH
}