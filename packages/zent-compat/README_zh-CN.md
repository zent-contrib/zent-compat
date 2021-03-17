# @zent/compat

@zent/compat 是 zent 的兼容包，目的是方便增量升级现有代码。包里的组件都是从老版本的 zent 里迁移过来的，这些组件不做任何功能迭代，仅酌情处理严重的 bug 或者安全问题。

### 安装

```bash
yarn add @zent/compat
```

### 使用组件

```jsx
import { Table } from 'zent';

// 全量引入样式
import '@zent/compat/css/index.css';

ReactDOM.render(<Table columns={[]} datasets={[]} />, mountNode);
```

### 按需加载

[babel-plugin-zent](https://youzan.github.io/zent/zh/guides/babel-plugin-zent) 这个 babel 插件可以帮助减小打包文件的大小。
