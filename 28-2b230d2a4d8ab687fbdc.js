(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{666:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return r});s(21);var t=s(561),e=s.n(t),p=s(2),o=s.n(p),c=s(261);function u(n){return o.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function l(n){return o.a.createElement(u,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function i(n){return o.a.createElement(u,{tag:"style",html:n.style})}class r extends p.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(c.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return o.a.createElement("div",{className:"zandoc-react-container",key:null},o.a.createElement(i,{style:""}),o.a.createElement(l,{html:'<h1 class="anchor-heading"><a href="#zent-compat">¶</a><a href="javascript:void(0)" id="zent-compat" class="anchor-point"></a>@zent/compat</h1>\n<p>@zent/compat 是 zent 的兼容包，目的是方便增量升级现有代码。包里的组件都是从老版本的 zent 里迁移过来的，这些组件不做任何功能迭代，仅酌情处理严重的 bug 或者安全问题。</p>\n<h3 class="anchor-heading"><a href="#an-zhuang">¶</a><a href="javascript:void(0)" id="an-zhuang" class="anchor-point"></a>安装</h3>\n<pre><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> @zent/compat</code></pre>\n<h3 class="anchor-heading"><a href="#shi-yong-zu-jian">¶</a><a href="javascript:void(0)" id="shi-yong-zu-jian" class="anchor-point"></a>使用组件</h3>\n<pre><code class="language-jsx"><span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Table</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 全量引入样式</span>\n<span class="token keyword module">import</span> <span class="token string">\'@zent/compat/css/index.css\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Table</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">datasets</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#an-xu-jia-zai">¶</a><a href="javascript:void(0)" id="an-xu-jia-zai" class="anchor-point"></a>按需加载</h3>\n<p><a href="https://youzan.github.io/zent/zh/guides/babel-plugin-zent">babel-plugin-zent</a> 这个 babel 插件可以帮助减小打包文件的大小。</p>'}))}}}}]);