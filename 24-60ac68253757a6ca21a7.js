(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{659:function(a,n,t){"use strict";t.d(n,"a",function(){return l});var s=t(559),e=t(2),c=t(3),o=t.n(c),p=t(260),l=Object(e.forwardRef)(function(a,n){var t=Object(e.useContext)(p.a),c=a.className,l=a.disabled,i=void 0===l?t.value:l,u=a.onClick,d=Object(s.c)(a,["className","disabled","onClick"]);return e.createElement("a",Object(s.a)({},d,{className:o()(c,"zent-link",{"zent-link__disabled":i}),ref:n,onClick:i?r:u,"data-cp-zv":"2.3.0"}))});function r(a){a.preventDefault(),a.stopPropagation()}l.displayName="Link"},675:function(a,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var s=t(21),e=t.n(s),c=t(561),o=t.n(c),p=t(2),l=t.n(p),r=t(261),i=t(659),u=function(){return l.a.createElement("div",null,l.a.createElement(i.a,{href:"https://youzan.com",target:"_blank"},"有赞首页"),l.a.createElement(i.a,{href:"https://youzan.com",disabled:!0},"有赞首页"))};function d(a){return l.a.createElement(a.tag,o()({},a.attributes,{dangerouslySetInnerHTML:{__html:a.html}}))}function m(a){return l.a.createElement(d,{tag:"section",html:a.html,attributes:{className:"zandoc-react-markdown"}})}function k(a){return l.a.createElement(d,{tag:"style",html:a.style})}class h extends p.Component{constructor(...a){super(...a),e()(this,"state",{showCode:!1}),e()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var a=this.state.showCode,n=this.props,t=n.title,s=n.src,e=n.children;return l.a.createElement("div",{className:"zandoc-react-demo"},l.a.createElement("div",{className:"zandoc-react-demo__preview"},e),l.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},l.a.createElement("div",{className:"zandoc-react-demo__title"},l.a.createElement("p",null,t||"")),l.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(a?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),a&&l.a.createElement("pre",{className:"zandoc-react-demo__code"},l.a.createElement(d,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}class f extends p.Component{componentDidMount(){var a=location.hash;if(a){var n=document.querySelector('a[href="'.concat(a,'"]'));n&&Object(r.a)(document.documentElement,0,function a(n,t){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(t+=n.offsetTop),a(n.parentNode,t);return t}(n,-9))}}render(){return l.a.createElement("div",{className:"zandoc-react-container",key:null},l.a.createElement(k,{style:".zent-link {\n    margin-left: 10px;\n  }"}),l.a.createElement(m,{html:'<h2 class="anchor-heading"><a href="#link">¶</a><a href="javascript:void(0)" id="link" class="anchor-point"></a>Link</h2>\n<p>超链接，是对原生 <code>a</code> 标签的一个样式封装，同时支持禁用链接。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),l.a.createElement(h,{title:"链接",id:"Demo1basic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Link</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'@zent/compat\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>有赞首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n      有赞首页\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},l.a.createElement(u)),l.a.createElement(m,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>支持 <code>&#x3C;a></code> 的所有属性。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td><code>boolean</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>'}))}}}}]);