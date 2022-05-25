"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[3737],{10895:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(49873),i=n(59301),a=n(10161),r=n(59358),d=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],l=(n(58354),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return i.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return i.createElement(a.D,{children:e,remarkPlugins:[r.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return i.createElement(a.D,{children:e,remarkPlugins:[r.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?i.createElement(a.D,{children:e,remarkPlugins:[r.Z]}):i.createElement("div",null," - ")}}]);var s=function(e){var t=e.category,n=e.dataSource,a=("form"===t?[].concat(d,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return i.createElement(o.Z,{className:"attr-table",dataSource:a,pagination:!1,columns:l})}},84969:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(96178),i=n(59301),a=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),r=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new a,n.recevier.on("updateHeight",(function(e,t,o){n.iframe&&o===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,o=t.id,a=t.style,r=t.url;return r?i.createElement("div",{className:"bg-iframe "+n,id:o,style:Object.assign({height:400,width:"100%"},a),ref:function(t){e.container=t}},i.createElement("iframe",{src:r,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);r.displayName="bg-iframe"},5271:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var o=n(47145),i=n(24736),a=(n(59301),n(99278)),r=n(84969),d=n(10895),l=["components"],s={title:"Balloon \u6c14\u6ce1\u63d0\u793a",order:7},c="Balloon \u6c14\u6ce1\u63d0\u793a",p={unversionedId:"components/advanced/balloon",id:"components/advanced/balloon",title:"Balloon \u6c14\u6ce1\u63d0\u793a",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/advanced/balloon.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/balloon",permalink:"/developer-site/docs/components/advanced/balloon",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/advanced/balloon.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646573209,formattedLastUpdatedAt:"2022/3/6",frontMatter:{title:"Balloon \u6c14\u6ce1\u63d0\u793a",order:7},sidebar:"components",previous:{title:"Slider \u8f6e\u64ad\u56fe",permalink:"/developer-site/docs/components/advanced/slider"},next:{title:"Filter2 \u67e5\u8be2",permalink:"/developer-site/docs/components/advanced/filter"}},u={},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],m={toc:f};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"balloon-\u6c14\u6ce1\u63d0\u793a"},"Balloon \u6c14\u6ce1\u63d0\u793a"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u7528\u6237\u4e0e\u88ab\u8bf4\u660e\u5bf9\u8c61\uff08\u6587\u5b57\uff0c\u56fe\u7247\uff0c\u8f93\u5165\u6846\u7b49\uff09\u53d1\u751f\u4ea4\u4e92\u884c\u4e3a\u7684 action \u5f00\u59cb\u65f6, \u5373\u523b\u8ddf\u968f\u52a8\u4f5c\u51fa\u73b0\u4e00\u79cd\u8f85\u52a9\u6216\u5e2e\u52a9\u7684\u63d0\u793a\u4fe1\u606f\u3002")),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,a.kt)(r.Z,{url:"https://www.aliwork.com/developer/balloon-v2?isRenderNav=false",mdxType:"Iframe"}),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,a.kt)(d.Z,{dataSource:[{code:"TYPE",type:" 'balloon' | 'tooltip' ",default:"'balloon'",desc:"\u8bbe\u7f6e\u6c14\u6ce1\u7c7b\u578b\uff0c\u5f53\u6c14\u6ce1\u7c7b\u578b\u9009\u62e9\u4e3a **tooltip** \u65f6\u76f4\u63a5\u5c55\u793a\u6587\u5b57"},{code:"type",type:" 'normal' | 'primary' ",default:"'normal'",desc:"\u6c14\u6ce1\u7684\u6837\u5f0f\u7c7b\u578b"},{code:"content",type:"string",default:"'\u63d0\u793a\u5185\u5bb9'",desc:"\u6c14\u6ce1\u7ec4\u4ef6\u663e\u793a\u5185\u5bb9"},{code:"triggerType",type:"'hover' | 'click' | 'focus'",default:"'click'",desc:"\u7528\u4e8e\u63a7\u5236\u6c14\u6ce1\u7ec4\u4ef6\u7684\u89e6\u53d1\u6761\u4ef6"},{code:"closable",type:"boolean",default:"true",desc:"\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae"},{code:"defaultVisible",type:"boolean",default:"false",desc:"\u7ec4\u4ef6\u521d\u59cb\u5316\u65f6\u662f\u5426\u4e3a\u663e\u793a\u72b6\u6001"},{code:"delay",type:"number",default:"0",desc:"\u65f6\u6c14\u6ce1\u663e\u793a\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u4ec5\u89e6\u53d1\u884c\u4e3a\u4e3ahover\u65f6\u751f\u6548\uff0c\u5355\u4f4d\u4e3ams"},{code:"align",type:"'t' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br' | 'lt' | 'lb' | 'rt' | 'rb'",default:"'b'",desc:"\u6c14\u6ce1\u5f39\u51fa\u5c42\u7684\u663e\u793a\u4f4d\u7f6e"},{code:"display",type:" 'inline-block' | 'block' ",default:"'inline-block'",desc:"\u7528\u4e8e\u914d\u7f6e\u89e6\u53d1\u5143\u7d20\u6240\u5360\u7a7a\u95f4"},{code:"overlayMaxWidth",type:"string",default:"'300px'",desc:"\u7528\u4e8e\u63a7\u5236\u6d6e\u5c42\u6700\u5927\u5bbd\u5ea6\uff0c**'initial'**\u8868\u793a\u4e0d\u9650\u5236\u5bbd\u5ea6"},{code:"balloonOverlayVisible",type:"boolean",default:"true",desc:"\u8bbe\u8ba1\u5668\u4e2d\u662f\u5426\u663e\u793a\u5f39\u5c42\uff0c\u8be5\u914d\u7f6e\u9879\u53ea\u5728\u8bbe\u8ba1\u5668\u4e2d\u6709\u6548"},{code:"onClose",type:"() => void",default:"-",desc:"Balloon \u6d6e\u5c42\u5173\u95ed\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"afterClose",type:"() => void",default:"-",desc:"Balloon \u6d6e\u5c42\u5173\u95ed\u540e\u89e6\u53d1\u7684\u4e8b\u4ef6, \u5982\u679c\u6709\u52a8\u753b\uff0c\u5219\u5728\u52a8\u753b\u7ed3\u675f\u540e\u89e6\u53d1"},{code:"onVisibleChange",type:"(visible: boolean) => void",default:"-",desc:"Balloon \u6d6e\u5c42\u5173\u95ed\u540e\u89e6\u53d1\u7684\u4e8b\u4ef6, \u5982\u679c\u6709\u52a8\u753b\uff0c\u5219\u5728\u52a8\u753b\u7ed3\u675f\u540e\u89e6\u53d1"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);