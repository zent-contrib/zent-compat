# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.3.1] - 2024-07-23

### Changed
- 更新 zent 依赖到 10.0.12 版本
- 修复 zent 包内部 utils 引用不到问题


## [2.3.0] - 2022-03-28
### Changed
- 更新 zent 依赖到 10.0 版本
- 组件支持样式隔离（form 除外，因为项目中会有直接挂 form 相关 class 的写法）

## [2.2.1] - 2022-03-10
### Changed
- 更新 select、cascader、table 样式，贴近新版设计语言

## [2.2.0] - 2022-02-09
### Added
- 增加 zent@9 的 `Tree` 和 `Link` 组件

## [2.1.1] - 2021-11-05

### Changed

- 修复 Form Field `asyncValidation` 类型定义问题


## [2.1.0] - 2021-01-28

### Added

- `Form` 增加 `willScrollToError` 参数，可以控制滚动的偏移量

## [2.0.0] - 2020-12-15

### Added

- 增加 zent@8 的 `Select`, `Cascader`, `Table`, `Popover`, `Pop`, `Tooltip`, `DatePicker` 以及 `DateRangeQuickPicker` 组件
- 增加兼容 `formulr` 的 `Select` `DatePicker` 以及 `DateRangeQuickPicker` 对应的 `Field` 组件，入口在 `@zent/compat/es/formulr/form-components`，这些组件不在主入口导出

### Changed

- 升级 React@17
- 升级 zent 依赖到 `9.0` 正式版

## [1.2.0] - 2021-01-26

### Added

- `Form` 增加 `willScrollToError` 参数，可以控制滚动的偏移量

## [1.1.0] - 2020-01-17

### Added

- 增加 zent@7 的 `Upload` 组件

### Changed

- 更新 `Form` 报错样式
- `Form` 的 `setFieldExternalErrors` 方法仅更新指定字段的错误信息

## [1.0.5] - 2019-12-11

### Changed

- 修复迁移时丢失的 `Input` 和 `Select` 组件的报错样式

## [1.0.4] - 2019-12-05

### Changed

- 打包结果中自动引入依赖的 zent 组件样式文件

## [1.0.3] - 2019-11-25

### Changed

- 修复文档中 `Form` 组件没有从当前目录引入的问题
- 将 zent 已到 `peerDependencies`

## [1.0.2] - 2019-11-18

### Changed

- 更新依赖的 zent 版本到 7.x 正式版

## [1.0.1] - 2019-11-18

### Changed

- 修复 `Form` 中 `validations` 以及 `createForm` 的类型定义问题

## [1.0.0] - 2019-10-25

### Added

- zent@6 的 `Form`
