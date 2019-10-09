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

/*
cannot find parsed browser /Users/jim/saulx/v2/apps/app/node_modules/react/cjs/react.development
cannot find parsed browser /Users/jim/saulx/v2/apps/app/node_modules/react-dom/cjs/react-dom.development
cannot find parsed browser /Users/jim/saulx/v2/apps/app/src/hub
cannot find parsed browser /Users/jim/saulx/v2/apps/app/src/App
*/

// /Users/jim/saulx/v2/apps/app/server.js

getPackagePath('/Users/jim/saulx/v2/apps/app/server.js')
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
