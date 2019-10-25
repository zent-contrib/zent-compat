# Compatibility layer for Zent >= 7.0.0

## Components

- Form(legacy)

## Usage

`yarn add @zent/compat`

```js
/*
 You have to require styles by yourself or use babel-plugin-zent

 {
  "plugins": [
    ["babel-plugin-zent", { "automaticStyleImport": true, "noModuleRewrite": true }, "zent"],
    [
      "babel-plugin-zent",
      { "libraryName": "@zent/compat", "automaticStyleImport": true, "noModuleRewrite": true },
      "@zent/compat"
    ]
  ]
}
*/
import { Form } from '@zent/compat';
```

## Documentation

https://zent-contrib.github.io/zent-compat
