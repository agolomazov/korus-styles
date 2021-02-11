# eslint-config-korus

This package provides Korus's .eslintrc as an extensible shared config.

## Usage

### Install package:
```shell script
npm install --save-dev eslint-config-korus
```
### Extend your config .eslintrc

If you only want to use the basic configuration:
```json
{
  "extends": [
    "eslint-config-korus"
  ]
}
```
If you want to use config for react:
```json
{
  "extends": [
    "eslint-config-korus/react"
  ]
}
```
