const findPkg = require('../lib')

findPkg().then(v => {
  console.log(v)
})

findPkg(process.cwd(), true).then(v => {
  console.log(v)
})
