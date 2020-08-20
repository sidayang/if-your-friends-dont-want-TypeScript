const { EMIT_PATH, SRC_PATH, TSCONFIG_EMIT_PATH } = require('./path')

const shell = require('shelljs')

shell.exec(`rm -rf ${EMIT_PATH}/*`)
shell.exec(`rsync -a --exclude='*.tsx' --exclude='*.ts' ${SRC_PATH}/ ${EMIT_PATH}`)
shell.exec(`tsc -p ${TSCONFIG_EMIT_PATH}`)