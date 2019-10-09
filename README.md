# get-package

Get the nearest package.json

```javascript
import getPkg from 'get-package'

// defaults to process.cwd()
getPkg().then(pkg => {
  console.log(pkg)
})
```

```javascript
import getPkg from 'get-package'
getPkg('from-some-path').then(pkg => {
  console.log(pkg)
})
```

```javascript
import getPkg from 'get-package'
getPkg('from-some-path', true).then(dirPath => {
  // package.json directory path
  console.log(dirPath)
})
```
