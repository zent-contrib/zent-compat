(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{717:function(n,a,s){"use strict";s.d(a,"a",function(){return d});var t=s(629),e=s(2),p=s(4),o=s.n(p),c=s(637),u=s(272),l=s(269),i=s(710),r=s(699),k=864e5,d=function(n){function a(a){var s,t=n.call(this,a)||this;t.handleTimeChange=function(n){(0,t.props.onChange)(n,NaN)},t.handleChosenDays=function(n){var a=t.props,s=a.format;(0,a.onChange)(function(n,a,s){var t,e,p=(l=new Date,l.setHours(0),l.setMinutes(0),l.setSeconds(0),l.setMilliseconds(0),l.getTime()),o=p+k;var l;Array.isArray(a)?(t=a[0],e=a[1]):(t=a>1?p-(a-1)*k:p-a*k,e=0===a?o-1e3:1===a?p-1e3:Date.now());var i=Object(u.a)(t),r=Object(u.a)(e);if("number"===s)return[i.getTime(),r.getTime()];if("date"===s)return[i,r];var d=Object(c.a)(i,n),m=Object(c.a)(r,n);return[d,m]}(s,n,a.valueType),n)};var e=a.value,p=a.defaultSelectedPresetIndex,o=a.preset;if("number"==typeof p&&(!e||Array.isArray(e)&&!e.length)){var l=null===(s=o[p])||void 0===s?void 0:s.value;void 0!==l&&t.handleChosenDays(l)}return t}return Object(t.b)(a,n),a.prototype.render=function(){var n=this,a=this.props,s=a.className,p=a.format,c=a.value,u=a.chooseDays,k=a.chosenDays,d=a.preset,m=Object(t.c)(a,["className","format","value","chooseDays","chosenDays","preset"]),h="YYYY-MM-DD"===p,g=null!=k?k:u;return e.createElement("div",{className:o()("zent-date-range-picker",s)},e.createElement(i.b,Object(t.a)({value:c,onChange:this.handleTimeChange,format:p,showTime:!h},m)),e.createElement("div",{className:"zent-date-range-picker__filter"},d.map(function(a,s){return e.createElement(r.a,{key:s,componentName:"RangePicker"},function(t){return e.createElement("span",{key:s,className:o()("zent-date-range-picker__btn",{active:Object(l.a)(g,a.value)}),onClick:n.handleChosenDays.bind(n,a.value)},a.text||("number"==typeof a.value?t[a.value]:"N/A"))})})))},a.defaultProps={prefix:"zent",className:"",value:[],valueType:"string",format:"YYYY-MM-DD",preset:[{value:7},{value:30}],min:"",max:""},a}(e.Component)},747:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return S});var t=s(632),e=s.n(t),p=s(25),o=s.n(p),c=s(26),u=s.n(c),l=s(27),i=s.n(l),r=s(28),k=s.n(r),d=s(39),m=s.n(d),h=s(29),g=s.n(h),v=s(30),y=s.n(v),f=s(2),D=s.n(f),b=s(267),Y=s(717),C=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(e))),y()(m()(s),"state",{}),y()(m()(s),"handleChange",function(n,a){s.setState({value:n,chosenDays:a})}),y()(m()(s),"handleChange1",function(n,a){s.setState({value1:n,chosenDays1:a})}),s}return g()(a,n),u()(a,[{key:"render",value:function(){var n=this.state,a=n.value,s=n.chosenDays,t=n.value1,e=n.chosenDays1;return D.a.createElement("div",null,D.a.createElement(Y.a,{onChange:this.handleChange,value:a,format:"YYYY-MM-DD HH:mm:ss",valueType:"number",chosenDays:s}),D.a.createElement("br",null),D.a.createElement(Y.a,{onChange:this.handleChange1,value:t,format:"YYYY-MM-DD HH:mm:ss",chosenDays:e,preset:[{text:"Today",value:0},{text:"Yesterday",value:1},{text:"7 days",value:7},{text:"30 days",value:30}]}))}}]),a}(f.Component);return D.a.createElement(n,null)},w=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(e))),y()(m()(s),"state",{}),y()(m()(s),"handleChange",function(n,a){s.setState({value:n,chosenDays:a})}),y()(m()(s),"handleChange1",function(n,a){s.setState({value1:n,chosenDays1:a})}),y()(m()(s),"handleChange2",function(n,a){s.setState({value2:n,chosenDays2:a})}),s}return g()(a,n),u()(a,[{key:"render",value:function(){var n=this.state,a=n.value,s=n.chosenDays,t=n.value1,e=n.chosenDays1,p=n.value2,o=n.chosenDays2;return D.a.createElement("div",null,D.a.createElement(Y.a,{onChange:this.handleChange,value:a,format:"YYYY-MM-DD HH:mm:ss",valueType:"number",chosenDays:s}),D.a.createElement("br",null),D.a.createElement(Y.a,{onChange:this.handleChange1,value:t,format:"YYYY-MM-DD HH:mm:ss",chosenDays:e,preset:[{text:"Previous cycle",value:["2019-01-01","2019-01-02"]},{text:"January",value:["2019-01-01","2019-01-31"]}]}),D.a.createElement("br",null),D.a.createElement(Y.a,{onChange:this.handleChange2,value:p,format:"YYYY-MM-DD HH:mm:ss",valueType:"number",chosenDays:o,defaultSelectedPresetIndex:1}))}}]),a}(f.Component);return D.a.createElement(n,null)};function E(n){return D.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function M(n){return D.a.createElement(E,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return D.a.createElement(E,{tag:"style",html:n.style})}var x=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(e))),y()(m()(s),"state",{showCode:!1}),y()(m()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return g()(a,n),u()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return D.a.createElement("div",{className:"zandoc-react-demo"},D.a.createElement("div",{className:"zandoc-react-demo__preview"},e),D.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},D.a.createElement("div",{className:"zandoc-react-demo__title"},D.a.createElement("p",null,s||"")),D.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&D.a.createElement("pre",{className:"zandoc-react-demo__code"},D.a.createElement(E,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(f.Component),S=function(n){function a(){return o()(this,a),i()(this,k()(a).apply(this,arguments))}return g()(a,n),u()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return D.a.createElement("div",{className:"zandoc-react-container",key:null},D.a.createElement(j,{style:""}),D.a.createElement(M,{html:'<h2 class="anchor-heading"><a href="#daterangequickpicker">¶</a><a href="javascript:void(0)" id="daterangequickpicker" class="anchor-point"></a>DateRangeQuickPicker</h2>\n<p>DateRangeQuickPicker is used for time range selection, it has 2 quick options which points previous 7 days and previous 30 days.</p>\n<h3 class="anchor-heading"><a href="#usage-scenarios">¶</a><a href="javascript:void(0)" id="usage-scenarios" class="anchor-point"></a>Usage Scenarios</h3>\n<p>Select a date range in one click.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),D.a.createElement(x,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">DateRangeQuickPicker</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'@zent/compat\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> chosenDays</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> chosenDays</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value1<span class="token operator">:</span> value<span class="token punctuation">,</span>\n      chosenDays1<span class="token operator">:</span> chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> chosenDays<span class="token punctuation">,</span> value1<span class="token punctuation">,</span> chosenDays1 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DateRangeQuickPicker</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">valueType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>chosenDays<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DateRangeQuickPicker</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange1</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value1<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>chosenDays1<span class="token punctuation">}</span></span>\n          <span class="token attr-name">preset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'Today\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'Yesterday\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'7 days\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'30 days\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},D.a.createElement(C)),D.a.createElement(x,{title:"Quickly choose a time range",id:"Demopreset",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">DateRangeQuickPicker</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'@zent/compat\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> chosenDays</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> chosenDays</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value1<span class="token operator">:</span> value<span class="token punctuation">,</span>\n      chosenDays1<span class="token operator">:</span> chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> chosenDays</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value2<span class="token operator">:</span> value<span class="token punctuation">,</span>\n      chosenDays2<span class="token operator">:</span> chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      chosenDays<span class="token punctuation">,</span>\n      value1<span class="token punctuation">,</span>\n      chosenDays1<span class="token punctuation">,</span>\n      value2<span class="token punctuation">,</span>\n      chosenDays2<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DateRangeQuickPicker</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">valueType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>chosenDays<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DateRangeQuickPicker</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange1</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value1<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>chosenDays1<span class="token punctuation">}</span></span>\n          <span class="token attr-name">preset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'Previous cycle\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'2019-01-01\'</span><span class="token punctuation">,</span> <span class="token string">\'2019-01-02\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'January\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'2019-01-01\'</span><span class="token punctuation">,</span> <span class="token string">\'2019-01-31\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DateRangeQuickPicker</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange2</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value2<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">valueType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>chosenDays2<span class="token punctuation">}</span></span>\n          <span class="token attr-name">defaultSelectedPresetIndex</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},D.a.createElement(w)),D.a.createElement(M,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Props</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternatives</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>Change event callback</td>\n<td>func</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>Starting and end time</td>\n<td>array</td>\n<td><code>[]</code></td>\n<td></td>\n</tr>\n<tr>\n<td>preset</td>\n<td>Custom quick options</td>\n<td>array</td>\n<td><code>[{text: '7 days', value: 7}, {text: '30 days', value: 30}]</code></td>\n<td></td>\n</tr>\n<tr>\n<td>defaultSelectedPresetIndex</td>\n<td>Default selected item index in \n<code>preset</code></td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>valueType</td>\n<td>Argument type of onChange</td>\n<td><code>string</code></td>\n<td><code>''</code></td>\n<td><code>'date'</code>\n, \n<code>'number'</code>\n, \n<code>'string'</code></td>\n</tr>\n<tr>\n<td>format</td>\n<td>Format of returned Date string</td>\n<td><code>string</code></td>\n<td><code>'YYYY-MM-DD'</code>\n, \n<code>'YYYY-MM-DD HH:mm:ss'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>chosenDays</td>\n<td>Number of choosen days</td>\n<td><code>number</code>\n \n|\n \n<code>array</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>min</td>\n<td>Minimum value of optional date</td>\n<td><code>string</code>\n \n|\n \n<code>Date</code></td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>max</td>\n<td>Maximum number of optional date</td>\n<td><code>string</code>\n \n|\n \n<code>Date</code></td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom classname</td>\n<td><code>string</code></td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(f.Component)}}]);