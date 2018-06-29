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
      when: responses => {
        return !(this.options.resolverParent !== undefined && this.options.resolverParent.length>0);
      },
      name: 'resolverParent',
      message: 'Resolver Parent',
      default: 'Resolver'
    }
  ]).then(answers => {
    this.answers = Object.assign(this.answers || {}, answers)
  })
}
