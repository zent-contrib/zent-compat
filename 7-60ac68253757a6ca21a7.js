(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{667:function(a,e,n){"use strict";n.r(e),n.d(e,"default",function(){return t});n(21);var c=n(561),h=n.n(c),d=n(2),o=n.n(d),i=n(261);function r(a){return o.a.createElement(a.tag,h()({},a.attributes,{dangerouslySetInnerHTML:{__html:a.html}}))}function s(a){return o.a.createElement(r,{tag:"section",html:a.html,attributes:{className:"zandoc-react-markdown"}})}function l(a){return o.a.createElement(r,{tag:"style",html:a.style})}class t extends d.Component{componentDidMount(){var a=location.hash;if(a){var e=document.querySelector('a[href="'.concat(a,'"]'));e&&Object(i.a)(document.documentElement,0,function a(e,n){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(n+=e.offsetTop),a(e.parentNode,n);return n}(e,-9))}}render(){return o.a.createElement("div",{className:"zandoc-react-container",key:null},o.a.createElement(l,{style:""}),o.a.createElement(s,{html:'<h1 class="anchor-heading"><a href="#changelog">¶</a><a href="javascript:void(0)" id="changelog" class="anchor-point"></a>Changelog</h1>\n<p>All notable changes to this project will be documented in this file.</p>\n<p>The format is based on <a href="https://keepachangelog.com/en/1.0.0/">Keep a Changelog</a>,\nand this project adheres to <a href="https://semver.org/spec/v2.0.0.html">Semantic Versioning</a>.</p>\n<h2 class="anchor-heading"><a href="#2-3-1-2024-07-23">¶</a><a href="javascript:void(0)" id="2-3-1-2024-07-23" class="anchor-point"></a>[2.3.1] - 2024-07-23</h2>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>更新 zent 依赖到 10.0.12 版本</li>\n<li>修复 zent 包内部 utils 引用不到问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#2-3-0-2022-03-28">¶</a><a href="javascript:void(0)" id="2-3-0-2022-03-28" class="anchor-point"></a>[2.3.0] - 2022-03-28</h2>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>更新 zent 依赖到 10.0 版本</li>\n<li>组件支持样式隔离（form 除外，因为项目中会有直接挂 form 相关 class 的写法）</li>\n</ul>\n<h2 class="anchor-heading"><a href="#2-2-1-2022-03-10">¶</a><a href="javascript:void(0)" id="2-2-1-2022-03-10" class="anchor-point"></a>[2.2.1] - 2022-03-10</h2>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>更新 select、cascader、table 样式，贴近新版设计语言</li>\n</ul>\n<h2 class="anchor-heading"><a href="#2-2-0-2022-02-09">¶</a><a href="javascript:void(0)" id="2-2-0-2022-02-09" class="anchor-point"></a>[2.2.0] - 2022-02-09</h2>\n<h3 class="anchor-heading"><a href="#added">¶</a><a href="javascript:void(0)" id="added" class="anchor-point"></a>Added</h3>\n<ul>\n<li>增加 zent@9 的 <code>Tree</code> 和 <code>Link</code> 组件</li>\n</ul>\n<h2 class="anchor-heading"><a href="#2-1-1-2021-11-05">¶</a><a href="javascript:void(0)" id="2-1-1-2021-11-05" class="anchor-point"></a>[2.1.1] - 2021-11-05</h2>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>修复 Form Field <code>asyncValidation</code> 类型定义问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#2-1-0-2021-01-28">¶</a><a href="javascript:void(0)" id="2-1-0-2021-01-28" class="anchor-point"></a>[2.1.0] - 2021-01-28</h2>\n<h3 class="anchor-heading"><a href="#added">¶</a><a href="javascript:void(0)" id="added" class="anchor-point"></a>Added</h3>\n<ul>\n<li><code>Form</code> 增加 <code>willScrollToError</code> 参数，可以控制滚动的偏移量</li>\n</ul>\n<h2 class="anchor-heading"><a href="#2-0-0-2020-12-15">¶</a><a href="javascript:void(0)" id="2-0-0-2020-12-15" class="anchor-point"></a>[2.0.0] - 2020-12-15</h2>\n<h3 class="anchor-heading"><a href="#added">¶</a><a href="javascript:void(0)" id="added" class="anchor-point"></a>Added</h3>\n<ul>\n<li>增加 zent@8 的 <code>Select</code>, <code>Cascader</code>, <code>Table</code>, <code>Popover</code>, <code>Pop</code>, <code>Tooltip</code>, <code>DatePicker</code> 以及 <code>DateRangeQuickPicker</code> 组件</li>\n<li>增加兼容 <code>formulr</code> 的 <code>Select</code> <code>DatePicker</code> 以及 <code>DateRangeQuickPicker</code> 对应的 <code>Field</code> 组件，入口在 <code>@zent/compat/es/formulr/form-components</code>，这些组件不在主入口导出</li>\n</ul>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>升级 React@17</li>\n<li>升级 zent 依赖到 <code>9.0</code> 正式版</li>\n</ul>\n<h2 class="anchor-heading"><a href="#1-2-0-2021-01-26">¶</a><a href="javascript:void(0)" id="1-2-0-2021-01-26" class="anchor-point"></a>[1.2.0] - 2021-01-26</h2>\n<h3 class="anchor-heading"><a href="#added">¶</a><a href="javascript:void(0)" id="added" class="anchor-point"></a>Added</h3>\n<ul>\n<li><code>Form</code> 增加 <code>willScrollToError</code> 参数，可以控制滚动的偏移量</li>\n</ul>\n<h2 class="anchor-heading"><a href="#1-1-0-2020-01-17">¶</a><a href="javascript:void(0)" id="1-1-0-2020-01-17" class="anchor-point"></a>[1.1.0] - 2020-01-17</h2>\n<h3 class="anchor-heading"><a href="#added">¶</a><a href="javascript:void(0)" id="added" class="anchor-point"></a>Added</h3>\n<ul>\n<li>增加 zent@7 的 <code>Upload</code> 组件</li>\n</ul>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>更新 <code>Form</code> 报错样式</li>\n<li><code>Form</code> 的 <code>setFieldExternalErrors</code> 方法仅更新指定字段的错误信息</li>\n</ul>\n<h2 class="anchor-heading"><a href="#1-0-5-2019-12-11">¶</a><a href="javascript:void(0)" id="1-0-5-2019-12-11" class="anchor-point"></a>[1.0.5] - 2019-12-11</h2>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>修复迁移时丢失的 <code>Input</code> 和 <code>Select</code> 组件的报错样式</li>\n</ul>\n<h2 class="anchor-heading"><a href="#1-0-4-2019-12-05">¶</a><a href="javascript:void(0)" id="1-0-4-2019-12-05" class="anchor-point"></a>[1.0.4] - 2019-12-05</h2>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>打包结果中自动引入依赖的 zent 组件样式文件</li>\n</ul>\n<h2 class="anchor-heading"><a href="#1-0-3-2019-11-25">¶</a><a href="javascript:void(0)" id="1-0-3-2019-11-25" class="anchor-point"></a>[1.0.3] - 2019-11-25</h2>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>修复文档中 <code>Form</code> 组件没有从当前目录引入的问题</li>\n<li>将 zent 已到 <code>peerDependencies</code></li>\n</ul>\n<h2 class="anchor-heading"><a href="#1-0-2-2019-11-18">¶</a><a href="javascript:void(0)" id="1-0-2-2019-11-18" class="anchor-point"></a>[1.0.2] - 2019-11-18</h2>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>更新依赖的 zent 版本到 7.x 正式版</li>\n</ul>\n<h2 class="anchor-heading"><a href="#1-0-1-2019-11-18">¶</a><a href="javascript:void(0)" id="1-0-1-2019-11-18" class="anchor-point"></a>[1.0.1] - 2019-11-18</h2>\n<h3 class="anchor-heading"><a href="#changed">¶</a><a href="javascript:void(0)" id="changed" class="anchor-point"></a>Changed</h3>\n<ul>\n<li>修复 <code>Form</code> 中 <code>validations</code> 以及 <code>createForm</code> 的类型定义问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#1-0-0-2019-10-25">¶</a><a href="javascript:void(0)" id="1-0-0-2019-10-25" class="anchor-point"></a>[1.0.0] - 2019-10-25</h2>\n<h3 class="anchor-heading"><a href="#added">¶</a><a href="javascript:void(0)" id="added" class="anchor-point"></a>Added</h3>\n<ul>\n<li>zent@6 的 <code>Form</code></li>\n</ul>'}))}}}}]);