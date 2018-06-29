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
        console.log('this.options');
        console.log(this.options);
        return !this.options.resolverParent;
      },
      name: 'resolverParent',
      message: 'Resolver Parent',
      default: 'Resolver'
    }
  ]).then(answers => {
    this.answers = Object.assign(this.answers || {}, answers)
  })
}
