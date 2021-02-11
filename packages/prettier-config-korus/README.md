# prettier-config-korus

This package provides Korus's .prettierrc.js as an extensible shared config.

## Usage

### Install package:
```shell script
npm install --save-dev prettier-config-korus
```
### Extend your config .prettierrc.js
```javascript
module.exports = {
  ...require("prettier-config-korus"),
  // ...
}
```
