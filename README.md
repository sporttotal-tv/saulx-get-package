# get-package

Get the nearest package.json

## Default

```javascript
import getPkg from 'get-package'

getPkg('from-some-path').then(pkg => {
  console.log(pkg)
})

// Not passing a path defaults to process.cwd()
getPkg().then(pkg => {
  console.log(pkg)
})
```

## getPackagePath

```javascript
import { getPackagePath } from 'get-package'
getPackagePath('from-some-path').then(dirPath => {
  // package.json directory path
  console.log(dirPath)
})
```
