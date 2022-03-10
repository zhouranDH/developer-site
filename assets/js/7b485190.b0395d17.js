"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[9414],{59604:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(2307),d=n(67294),o=n(30256),r=n(17178),s=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],a=(n(5743),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return d.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return d.createElement(o.D,{children:e,remarkPlugins:[r.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return d.createElement(o.D,{children:e,remarkPlugins:[r.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?d.createElement(o.D,{children:e,remarkPlugins:[r.Z]}):d.createElement("div",null," - ")}}]);var c=function(e){var t=e.category,n=e.dataSource,o=("form"===t?[].concat(s,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return d.createElement(i.Z,{className:"attr-table",dataSource:o,pagination:!1,columns:a})}},9652:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(94578),d=n(67294),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),r=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,o=t.style,r=t.url;return r?d.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},d.createElement("iframe",{src:r,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):d.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(d.PureComponent);r.displayName="bg-iframe"},62293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var i=n(87462),d=n(63366),o=(n(67294),n(3905)),r=n(9652),s=n(59604),a=["components"],c={title:"Slider \u8f6e\u64ad\u56fe",order:6},l="Slider \u8f6e\u64ad\u56fe",u={unversionedId:"components/advanced/slider",id:"components/advanced/slider",title:"Slider \u8f6e\u64ad\u56fe",description:"\u8f6e\u64ad\u7ec4\u4ef6\uff0c\u5c31\u662f\u4ee5\u5e7b\u706f\u7247\u7684\u65b9\u5f0f\uff0c\u5728\u9875\u9762\u4e2d\u6a2a\u5411\u5c55\u793a\u8bf8\u591a\u5185\u5bb9\u7684\u7ec4\u4ef6\u3002",source:"@site/docs/components/advanced/slider.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/slider",permalink:"/developer-site/docs/components/advanced/slider",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/advanced/slider.mdx",tags:[],version:"current",frontMatter:{title:"Slider \u8f6e\u64ad\u56fe",order:6},sidebar:"components",previous:{title:"TablePc \u8868\u683c",permalink:"/developer-site/docs/components/advanced/table"},next:{title:"Balloon \u6c14\u6ce1\u63d0\u793a",permalink:"/developer-site/docs/components/advanced/balloon"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],f={toc:p};function m(e){var t=e.components,n=(0,d.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slider-\u8f6e\u64ad\u56fe"},"Slider \u8f6e\u64ad\u56fe"),(0,o.kt)("p",null,"\u8f6e\u64ad\u7ec4\u4ef6\uff0c\u5c31\u662f\u4ee5\u5e7b\u706f\u7247\u7684\u65b9\u5f0f\uff0c\u5728\u9875\u9762\u4e2d\u6a2a\u5411\u5c55\u793a\u8bf8\u591a\u5185\u5bb9\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f6e\u64ad\u5185\u5bb9\u76f8\u4e92\u72ec\u7acb\uff0c\u524d\u540e\u5728\u5185\u5bb9\u4ee5\u53ca\u6570\u636e\u4e0a\u90fd\u4e0d\u5b58\u5728\u903b\u8f91\u5173\u7cfb\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5355\u56fe\u8f6e\u64ad\uff1a\u8be5\u6837\u5f0f\u901a\u5e38\u7528\u4e8e\u627f\u8f7d\u8fd0\u8425 banner\uff0c\u662f\u4e00\u4e2a\u4f4d\u7f6e\u76f8\u5bf9\u56fa\u5b9a\u7684\u6a21\u5757\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u56fe\u8f6e\u64ad\uff1a\u5355\u5143\u4fe1\u606f\u6d4f\u89c8\u3002")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(r.Z,{url:"https://www.aliwork.com/developer/slider-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(s.Z,{dataSource:[{code:"isDiy",type:"boolean",default:"false",desc:"\u7528\u4e8e\u5f00\u542f\u81ea\u5b9a\u4e49\u6a21\u5f0f"},{code:"diyContents",type:"any[]",default:"[]",desc:"\u7528\u4e8e\u8f93\u5165\u81ea\u5b9a\u4e49\u6a21\u5f0f\u6570\u636e\uff0c\u4ec5**isDiy**\u8bbe\u7f6e\u4e3atrue\u65f6\u751f\u6548"},{code:"diyContentsRender",type:"(item: any, index: number) => ReactNode",default:"",desc:"\u7528\u4e8e\u6e32\u67d3\u81ea\u5b9a\u4e49\u6a21\u5f0f\u6e32\u67d3\u51fd\u6570\uff0c\u4ec5**isDiy**\u8bbe\u7f6e\u4e3atrue\u65f6\u751f\u6548"},{code:"images",type:"[SliderDataSource[]](/docs/components/interface#sliderdatasource)",default:"[]",desc:"\u7528\u4e8e\u914d\u7f6e\u8f6e\u64ad\u9879"},{code:"type",type:"'single' | 'multi'",default:"'single'",desc:"\u7528\u4e8e\u914d\u7f6e\u8f6e\u64ad\u65b9\u5f0f\uff0csingle\uff1a\u5355\u9879\u8f6e\u64ad\u3001multi\uff1a\u591a\u9879\u8f6e\u64ad"},{code:"slideImageWidth",type:"string",default:"'100%'",desc:"\u7528\u4e8e\u8bbe\u7f6e\u8f6e\u64ad\u9879\u5bbd\u5ea6"},{code:"slideImageHeightAuto",type:"boolean",default:"false",desc:"\u5f00\u542f\u8f6e\u64ad\u9879\u9ad8\u5ea6\u81ea\u9002\u5e94\uff08\u56fe\u7247\u65f6\u4f1a\u4fdd\u6301\u957f\u5bbd\u6bd4\uff09"},{code:"slideImageHeight",type:"string",default:"'300px'",desc:"\u8f6e\u64ad\u56fe\u9ad8\u5ea6,\u5355\u4f4d\u4e3apx\u6216\u8bbe\u7f6e%"},{code:"margin",type:"number",default:"10",desc:"\u7528\u4e8e\u63a7\u5236\u8f6e\u64ad\u9879\u95f4\u8ddd"},{code:"slidesToShow",type:"number",default:"2",desc:"\u7528\u4e8e\u63a7\u5236\u540c\u65f6\u5c55\u793a\u7684\u8f6e\u64ad\u9879\u6570\u91cf\uff0c\u5f53**type** \u5c5e\u6027\u4e3amulti\u65f6\u751f\u6548"},{code:"slidesToScroll",type:"number",default:"1",desc:"\u7528\u4e8e\u63a7\u5236\u540c\u65f6\u6ed1\u52a8\u7684\u8f6e\u64ad\u9879\u6570\u91cf"},{code:"centerMode",type:"boolean",default:"false",desc:"\u662f\u5426\u5f00\u542f\u5c45\u4e2d\u6a21\u5f0f"},{code:"focusOnSelect",type:"boolean",default:"false",desc:"\u7528\u4e8e\u591a\u56fe\u8f6e\u64ad\u65f6\uff0c\u70b9\u51fb\u9009\u4e2d\u540e\u81ea\u52a8\u5c45\u4e2d"},{code:"slideDirection",type:" 'hoz' | 'ver' ",default:"'hoz'",desc:"\u7528\u4e8e\u63a7\u5236\u8f6e\u64ad\u65b9\u5411"},{code:"speed",type:"number",default:"500",desc:"\u8f6e\u64ad\u901f\u5ea6\uff0c\u5355\u4f4d: ms"},{code:"lazyLoad",type:"boolean",default:"false",desc:"\u662f\u5426\u5f00\u542f\u61d2\u52a0\u8f7d\u6a21\u5f0f"},{code:"animation",type:" 'slide' | 'fade' ",default:"'slide'",desc:"\u7528\u4e8e\u9009\u62e9\u8f6e\u64ad\u9879\u52a8\u6548\u7c7b\u578b\uff0cslide\uff1a\u5de6\u53f3\u6ed1\u52a8\u3001fade\uff1a\u6e10\u53d8"},{code:"arrows",type:"boolean",default:"true",desc:"\u662f\u5426\u5f00\u542f\u8f6e\u64ad\u9879\u7bad\u5934"},{code:"arrowSize",type:" 'medium' | 'large' ",default:"'medium'",desc:"\u7528\u4e8e\u63a7\u5236\u7bad\u5934\u5927\u5c0f"},{code:"arrowPosition",type:" 'inner' | 'outer' ",default:"'inner'",desc:"\u7528\u4e8e\u63a7\u5236\u7bad\u5934\u4f4d\u7f6e"},{code:"arrowDirection ",type:"'hoz' |'ver' ",default:"'hoz'",desc:"\u63a7\u5236\u7bad\u5934\u5c55\u793a\u65b9\u5411"},{code:"autoplay",type:"boolean",default:"false",desc:"\u7528\u4e8e\u9009\u62e9\u662f\u5426\u81ea\u52a8\u64ad\u653e\u8f6e\u64ad\u9879"},{code:"autoplaySpeed",type:"number",default:"3000",desc:"\u8f6e\u64ad\u9879\u81ea\u52a8\u64ad\u653e\u901f\u5ea6\uff0c\u5355\u4f4d\uff1ams"},{code:"dots",type:"boolean",default:"true",desc:"\u662f\u5426\u5f00\u542f\u5bfc\u822a\u951a\u70b9"},{code:"dotsDirection",type:" 'hoz' | 'ver' ",default:"'hoz'",desc:"\u5bfc\u822a\u951a\u70b9\u663e\u793a\u4f4d\u7f6e"},{code:"triggerType",type:" 'click' | 'hover' ",default:"'click'",desc:"\u951a\u70b9\u5bfc\u822a\u89e6\u53d1\u65b9\u5f0f"}],mdxType:"AttrTable"}))}m.isMDXComponent=!0}}]);