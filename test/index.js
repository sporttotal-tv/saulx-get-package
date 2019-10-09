const findPkg = require('../lib')
const { getPackagePath } = findPkg
const path = require('path')

findPkg().then(v => {
  console.log(v)
})

findPkg(process.cwd(), true).then(v => {
  console.log(v)
})

getPackagePath(process.cwd(), true)
  .then(v => {
    console.log(v)
  })
  .catch(err => {
    console.log(Error)
  })

getPackagePath(path.join(process.cwd(), 'test/server.js'))
  .then(v => {
    console.log(v)
  })
  .catch(err => {
    console.log(Error)
  })
