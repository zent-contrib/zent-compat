# @zent/compat

@zent/compat is a compatibility layer for zent. Components in this package are copied from zent when a breaking change is made to them in zent. All components are in maintanence mode, only bugfixes.

### Install

```bash
yarn add @zent/compat
```

### Using Components

```jsx
import { Table } from 'zent';

// Load all component styles
import '@zent/compat/css/index.css';

ReactDOM.render(<Table columns={[]} datasets={[]} />, mountNode);
```

### Import as Needed

Use this babel plugin [babel-plugin-zent](https://youzan.github.io/zent/zh/guides/babel-plugin-zent).
