module.exports = {
  'zh-CN': [
    {
      name: '使用指南',
      groups: [
        {
          groupName: '使用',
          list: [
            {
              title: '快速上手',
              path: 'guides/quickstart',
              source:
                "DocLoadable({ loader: () => import('../../packages/zent-compat/README_zh-CN.md') })",
            },
          ],
        },
        {
          groupName: '升级',
          list: [
            {
              title: '更新日志',
              path: 'guides/changelog',
              source:
                "DocLoadable({ loader: () => import('../../packages/zent-compat/RELEASE_zh-CN.md') })",
            },
          ],
        },
      ],
    },
    {
      name: '组件',
      groups: [],
    },
  ],

  'en-US': [
    {
      name: 'Guides',
      groups: [
        {
          groupName: 'Usage',
          list: [
            {
              title: 'Quickstart',
              path: 'guides/quickstart',
              source:
                "DocLoadable({ loader: () => import('../../packages/zent-compat/README_en-US.md') })",
            },
          ],
        },
        {
          groupName: 'Releases',
          list: [
            {
              title: 'Changelog',
              path: 'guides/changelog',
              source:
                "DocLoadable({ loader: () => import('../../packages/zent-compat/RELEASE_zh-CN.md') })",
            },
          ],
        },
      ],
    },
    {
      name: 'Components',
      groups: [],
    },
  ],
};
