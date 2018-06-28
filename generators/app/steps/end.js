const chalk = require('chalk')
const printMessage = require('print-message')

module.exports = function () {
  printMessage([
    `Your ${chalk.green('Trails')} Application has been created! (using :'${chalk.yellow('Mishel.M.IT generator-trails')}')`,
    '---',
    `To start your application, run: ${chalk.red('npm start')}`
  ], {
    printFn: this.log
  })
}


