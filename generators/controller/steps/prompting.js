module.exports = function () {
  return this.prompt([
    {
      type: 'input',
      name: 'parentClass',
      message: 'Parent Controller Class',
      default: 'Controller'
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Controller Description',
      default: 'TODO document this Controller'
    }
  ]).then(answers => {
    this.answers = Object.assign(this.answers || {}, answers)
  })
}
