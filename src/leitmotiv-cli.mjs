// @flow

import chalk from 'chalk'
import leitmotiv from './leitmotiv.mjs'

export default (val: string) => {
  console.log(chalk.blue(val))
  leitmotiv(val)
}
