const fs = require('fs')
const path = require('path')
const join = path.join

const isPkg = str => {
  return /package\.json$/.test(str)
}

const isFile = str => {
  return /(\.js|\.mjs|\.JS|\.jsx|\.JSX|\.json|\.JSON|\.css|\.CSS|\.gql|\.node)$/.test(
    str
  )
}

const getDir = (path, index, cb, returnPath) => {
  if (!index) {
    cb(new Error('cannot find package.json'))
  } else {
    const file =
      index === path.length ? path.join('/') : path.slice(0, index).join('/')

    fs.stat(file, (err, stat) => {
      if (err || !stat.isDirectory()) {
        getDir(path, --index, cb)
      } else {
        fs.readdir(file, (err, list) => {
          if (err) {
            cb(err)
          } else {
            if (list.includes('package.json')) {
              fs.readFile(join(file, 'package.json'), (err, v) => {
                if (err) {
                  console.log(err)
                }
                try {
                  v = JSON.parse(v)
                  if (!v.name) {
                    // console.log('No name in pkg skip!')
                    getDir(path, --index, cb, returnPath)
                  } else {
                    cb(null, returnPath ? file : v)
                  }
                } catch (e) {
                  console.log('error', f, v)
                  cb(null, returnPath ? file : {})
                }
              })
            } else {
              getDir(path, --index, cb, returnPath)
            }
          }
        })
      }
    })
  }
}

const getPackage = (p = process.cwd(), returnPath) =>
  new Promise((resolve, reject) => {
    if (isPkg(p)) {
      resolve(path.dirname(p))
    } else {
      const arr = p.split(path.sep)
      getDir(
        arr,
        !isFile(p) ? arr.length : arr.length - 1,
        (err, val) => {
          if (err) {
            reject(err)
          } else {
            resolve(val)
          }
        },
        returnPath
      )
    }
  })

module.exports = getPackage
getPackage.getPackagePath = p => {
  return getPackage(p, true)
}
