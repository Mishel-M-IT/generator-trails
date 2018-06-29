module.exports = function () {
  return this.prompt([
    {
      type: 'input',
      name: 'desc',
      message: 'Model Description',
      default: 'TODO document this Model'
    },
    {
      type: 'input',
      name: 'parentResolver',
      message: 'Parent Resolver',
      default: 'Resolver'
    }
  ]).then(answers => {
    this.answers = Object.assign(this.answers || {}, answers)
  })
}
