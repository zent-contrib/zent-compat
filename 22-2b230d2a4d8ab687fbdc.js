(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{648:function(n,a,s){"use strict";s.d(a,"a",function(){return d});var t=s(559),p=s(2),e=s(3),o=s.n(e),c=s(567),u=s(266),l=s(263),i=s(641),r=s(630),k=864e5,d=function(n){function a(a){var s,t=n.call(this,a)||this;t.handleTimeChange=function(n){(0,t.props.onChange)(n,NaN)},t.handleChosenDays=function(n){var a=t.props,s=a.format;(0,a.onChange)(function(n,a,s){var t,p,e=(l=new Date,l.setHours(0),l.setMinutes(0),l.setSeconds(0),l.setMilliseconds(0),l.getTime()),o=e+k;var l;Array.isArray(a)?(t=a[0],p=a[1]):(t=a>1?e-(a-1)*k:e-a*k,p=0===a?o-1e3:1===a?e-1e3:Date.now());var i=Object(u.a)(t),r=Object(u.a)(p);if("number"===s)return[i.getTime(),r.getTime()];if("date"===s)return[i,r];var d=Object(c.a)(i,n),m=Object(c.a)(r,n);return[d,m]}(s,n,a.valueType),n)};var p=a.value,e=a.defaultSelectedPresetIndex,o=a.preset;if("number"==typeof e&&(!p||Array.isArray(p)&&!p.length)){var l=null===(s=o[e])||void 0===s?void 0:s.value;void 0!==l&&t.handleChosenDays(l)}return t}return Object(t.b)(a,n),a.prototype.render=function(){var n=this,a=this.props,s=a.className,e=a.format,c=a.value,u=a.chooseDays,k=a.chosenDays,d=a.preset,m=Object(t.c)(a,["className","format","value","chooseDays","chosenDays","preset"]),h="YYYY-MM-DD"===e,g=null!=k?k:u;return p.createElement("div",{className:o()("zent-date-range-picker",s),"data-cp-zv":"2.3.0"},p.createElement(i.b,Object(t.a)({value:c,onChange:this.handleTimeChange,format:e,showTime:!h},m)),p.createElement("div",{className:"zent-date-range-picker__filter","data-cp-zv":"2.3.0"},d.map(function(a,s){return p.createElement(r.a,{key:s,componentName:"RangePicker"},function(t){return p.createElement("span",{key:s,className:o()("zent-date-range-picker__btn",{active:Object(l.a)(g,a.value)}),onClick:n.handleChosenDays.bind(n,a.value),"data-cp-zv":"2.3.0"},a.text||("number"==typeof a.value?t[a.value]:"N/A"))})})))},a.defaultProps={prefix:"zent",className:"",value:[],valueType:"string",format:"YYYY-MM-DD",preset:[{value:7},{value:30}],min:"",max:""},a}(p.Component)},672:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return v});var t=s(561),p=s.n(t),e=s(21),o=s.n(e),c=s(2),u=s.n(c),l=s(261),i=s(648),r=function(){return u.a.createElement(class extends c.Component{constructor(...n){super(...n),o()(this,"state",{}),o()(this,"handleChange",(n,a)=>{this.setState({value:n,chosenDays:a})}),o()(this,"handleChange1",(n,a)=>{this.setState({value1:n,chosenDays1:a})})}render(){var n=this.state,a=n.value,s=n.chosenDays,t=n.value1,p=n.chosenDays1;return u.a.createElement("div",null,u.a.createElement(i.a,{onChange:this.handleChange,value:a,format:"YYYY-MM-DD HH:mm:ss",valueType:"number",chosenDays:s}),u.a.createElement("br",null),u.a.createElement(i.a,{onChange:this.handleChange1,value:t,format:"YYYY-MM-DD HH:mm:ss",chosenDays:p,preset:[{text:"今",value:0},{text:"昨",value:1},{text:"近7天",value:7},{text:"近30天",value:30}]}))}},null)},k=function(){return u.a.createElement(class extends c.Component{constructor(...n){super(...n),o()(this,"state",{}),o()(this,"handleChange",(n,a)=>{this.setState({value:n,chosenDays:a})}),o()(this,"handleChange1",(n,a)=>{this.setState({value1:n,chosenDays1:a})}),o()(this,"handleChange2",(n,a)=>{this.setState({value2:n,chosenDays2:a})})}render(){var n=this.state,a=n.value,s=n.chosenDays,t=n.value1,p=n.chosenDays1,e=n.value2,o=n.chosenDays2;return u.a.createElement("div",null,u.a.createElement(i.a,{onChange:this.handleChange,value:a,format:"YYYY-MM-DD HH:mm:ss",valueType:"number",chosenDays:s}),u.a.createElement("br",null),u.a.createElement(i.a,{onChange:this.handleChange1,value:t,format:"YYYY-MM-DD HH:mm:ss",chosenDays:p,preset:[{text:"上一周期",value:["2019-01-01","2019-01-02"]},{text:"一月",value:["2019-01-01","2019-01-31"]}]}),u.a.createElement("br",null),u.a.createElement(i.a,{onChange:this.handleChange2,value:e,format:"YYYY-MM-DD HH:mm:ss",valueType:"number",chosenDays:o,defaultSelectedPresetIndex:1}))}},null)};function d(n){return u.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function m(n){return u.a.createElement(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function h(n){return u.a.createElement(d,{tag:"style",html:n.style})}class g extends c.Component{constructor(...n){super(...n),o()(this,"state",{showCode:!1}),o()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return u.a.createElement("div",{className:"zandoc-react-demo"},u.a.createElement("div",{className:"zandoc-react-demo__preview"},p),u.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},u.a.createElement("div",{className:"zandoc-react-demo__title"},u.a.createElement("p",null,s||"")),u.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&u.a.createElement("pre",{className:"zandoc-react-demo__code"},u.a.createElement(d,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}class v extends c.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(l.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return u.a.createElement("div",{className:"zandoc-react-container",key:null},u.a.createElement(h,{style:""}),u.a.createElement(m,{html:'<h2 class="anchor-heading"><a href="#daterangequickpicker">¶</a><a href="javascript:void(0)" id="daterangequickpicker" class="anchor-point"></a>DateRangeQuickPicker</h2>\n<p>简单的时间范围选择组件, 提供前 7 天和前 30 天的快速选项.</p>\n<h3 class="anchor-heading"><a href="#shi-yong-chang-jing">¶</a><a href="javascript:void(0)" id="shi-yong-chang-jing" class="anchor-point"></a>使用场景</h3>\n<p>快速选择日期区间</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),u.a.createElement(g,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">DateRangeQuickPicker</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'@zent/compat\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> chosenDays</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> chosenDays</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value1<span class="token operator">:</span> value<span class="token punctuation">,</span>\n      chosenDays1<span class="token operator">:</span> chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> chosenDays<span class="token punctuation">,</span> value1<span class="token punctuation">,</span> chosenDays1 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DateRangeQuickPicker</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">valueType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>chosenDays<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DateRangeQuickPicker</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange1</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value1<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>chosenDays1<span class="token punctuation">}</span></span>\n          <span class="token attr-name">preset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'今\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'昨\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'近7天\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'近30天\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},u.a.createElement(r)),u.a.createElement(g,{title:"快速选择时间范围",id:"Demopreset",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">DateRangeQuickPicker</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'@zent/compat\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> chosenDays</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> chosenDays</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value1<span class="token operator">:</span> value<span class="token punctuation">,</span>\n      chosenDays1<span class="token operator">:</span> chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChange2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> chosenDays</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value2<span class="token operator">:</span> value<span class="token punctuation">,</span>\n      chosenDays2<span class="token operator">:</span> chosenDays<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      chosenDays<span class="token punctuation">,</span>\n      value1<span class="token punctuation">,</span>\n      chosenDays1<span class="token punctuation">,</span>\n      value2<span class="token punctuation">,</span>\n      chosenDays2<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DateRangeQuickPicker</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">valueType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>chosenDays<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DateRangeQuickPicker</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange1</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value1<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>chosenDays1<span class="token punctuation">}</span></span>\n          <span class="token attr-name">preset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'上一周期\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'2019-01-01\'</span><span class="token punctuation">,</span> <span class="token string">\'2019-01-02\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              text<span class="token operator">:</span> <span class="token string">\'一月\'</span><span class="token punctuation">,</span>\n              value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'2019-01-01\'</span><span class="token punctuation">,</span> <span class="token string">\'2019-01-31\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DateRangeQuickPicker</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange2</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value2<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD HH:mm:ss<span class="token punctuation">"</span></span>\n          <span class="token attr-name">valueType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n          <span class="token attr-name">chosenDays</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>chosenDays2<span class="token punctuation">}</span></span>\n          <span class="token attr-name">defaultSelectedPresetIndex</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},u.a.createElement(k)),u.a.createElement(m,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>时间变更回调函数</td>\n<td><code>(value, chosenDay) => void</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>起始、结束时间</td>\n<td>array</td>\n<td><code>[]</code></td>\n<td></td>\n</tr>\n<tr>\n<td>preset</td>\n<td>自定义快捷选项</td>\n<td>array</td>\n<td><code>[{text: '最近7天', value: 7}, {text: '最近30天', value: 30}]</code></td>\n<td></td>\n</tr>\n<tr>\n<td>defaultSelectedPresetIndex</td>\n<td>默认选中的 preset 元素数组下标</td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>valueType</td>\n<td>设置 onChange 的返回值</td>\n<td><code>string</code></td>\n<td><code>''</code></td>\n<td><code>'date'</code>\n, \n<code>'number'</code>\n, \n<code>'string'</code></td>\n</tr>\n<tr>\n<td>format</td>\n<td>返回日期字符串格式</td>\n<td><code>string</code></td>\n<td><code>'YYYY-MM-DD'</code>\n 或 \n<code>'YYYY-MM-DD HH:mm:ss'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>chosenDays</td>\n<td>选择天数</td>\n<td><code>number</code>\n \n|\n \n<code>array</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>min</td>\n<td>可选日期的最小值</td>\n<td><code>string</code>\n \n|\n \n<code>Date</code></td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>max</td>\n<td>可选日期的最大值</td>\n<td><code>string</code>\n \n|\n \n<code>Date</code></td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义类名</td>\n<td><code>string</code></td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}}}]);