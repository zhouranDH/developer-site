"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[4760],{10895:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(49873),r=n(59301),o=n(10161),d=n(59358),a=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],s=(n(58354),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return r.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return r.createElement(o.D,{children:e,remarkPlugins:[d.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return r.createElement(o.D,{children:e,remarkPlugins:[d.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?r.createElement(o.D,{children:e,remarkPlugins:[d.Z]}):r.createElement("div",null," - ")}}]);var c=function(e){var t=e.category,n=e.dataSource,o=("form"===t?[].concat(a,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return r.createElement(i.Z,{className:"attr-table",dataSource:o,pagination:!1,columns:s})}},84969:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(96178),r=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,o=t.style,d=t.url;return d?r.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:d,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);d.displayName="bg-iframe"},49713:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var i=n(47145),r=n(24736),o=(n(59301),n(99278)),d=n(84969),a=n(10895),s=["components"],c={title:"DateField \u65e5\u671f\u9009\u62e9",order:6},l="DateField \u65e5\u671f\u9009\u62e9",p={unversionedId:"components/form/dateField",id:"components/form/dateField",title:"DateField \u65e5\u671f\u9009\u62e9",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/dateField.mdx",sourceDirName:"components/form",slug:"/components/form/dateField",permalink:"/developer-site/docs/components/form/dateField",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/form/dateField.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646573209,formattedLastUpdatedAt:"2022/3/6",frontMatter:{title:"DateField \u65e5\u671f\u9009\u62e9",order:6},sidebar:"components",previous:{title:"MultiSelectField \u4e0b\u62c9\u591a\u9009",permalink:"/developer-site/docs/components/form/multiSelectField"},next:{title:"CascadeDateField \u65e5\u671f\u533a\u95f4",permalink:"/developer-site/docs/components/form/cascadeDateField"}},u={},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],m={toc:f};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datefield-\u65e5\u671f\u9009\u62e9"},"DateField \u65e5\u671f\u9009\u62e9"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6216\u9009\u62e9\u5177\u4f53\u65f6\u95f4\uff0c\u5f53\u7528\u6237\u9700\u8981\u8f93\u5165\u4e00\u4e2a\u65e5\u671f\uff0c\u53ef\u4ee5\u70b9\u51fb\u6807\u51c6\u8f93\u5165\u6846\uff0c\u5f39\u51fa\u65e5\u671f\u9762\u677f\u8fdb\u884c\u9009\u62e9\u3002")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(d.Z,{url:"https://www.aliwork.com/developer/date-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(a.Z,{category:"form",dataSource:[{code:"value",type:"number",default:"-",desc:"\u65e5\u671f\u9009\u62e9\u9ed8\u8ba4\u503c"},{code:"placeholder",type:"string",default:"'\u8bf7\u9009\u62e9'",desc:"\u5360\u4f4d\u63d0\u793a"},{code:"start",type:"number",default:"-",desc:"\u65e5\u671f\u5f00\u59cb\u65f6\u95f4\uff0c \u5f53**type**\u5c5e\u6027\u4e3aduration\u65f6\u751f\u6548"},{code:"end",type:"number",default:"-",desc:"\u65e5\u671f\u7ed3\u675f\u65f6\u95f4\uff0c\u5f53**type**\u5c5e\u6027\u4e3aduration\u65f6\u751f\u6548"},{code:"returnType",type:"'timestamp' | 'string' | 'moment' ",default:"'timestamp'",desc:"\u65e5\u671f\u8fd4\u56de\u7c7b\u578b"},{code:"type",type:"'none' | 'beforeToday' | 'afterToday'| 'duration'| 'custom'",default:"'none'",desc:"\u65f6\u95f4\u9650\u5236\u8303\u56f4"},{code:"disabledDate",type:"(current: number)=> boolean",default:"-",desc:"\u81ea\u5b9a\u4e49\u9650\u5236\uff0c\u5f53**type**\u5c5e\u6027\u4e3acustom\u65f6\u751f\u6548"},{code:"format",type:"'YYYY' | 'YYYY-MM' | 'YYYY-MM-DD'| 'YYYY-MM-DD HH:mm'| 'YYYY-MM-DD HH:mm:ss'",default:"'YYYY-MM-DD'",desc:"\u65e5\u671f\u683c\u5f0f"},{code:"hasClear",type:"boolean",default:"true",desc:"\u662f\u5426\u6709\u6e05\u9664\u6309\u94ae"},{code:"resetTime",type:"boolean",default:"false",desc:"\u662f\u5426\u6bcf\u6b21\u9009\u62e9\u65e5\u671f\u65f6\u91cd\u7f6e\u65f6\u95f4"},{code:"onChange",type:"({value: number})=> void",default:"-",desc:"\u7ec4\u4ef6\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6"},{code:"onOk",type:"({value: number})=> void",default:"-",desc:"\u70b9\u51fb\u786e\u8ba4\u65f6\u89e6\u53d1\u4e8b\u4ef6"},{code:"onVisibleChange",type:"(visible: boolean) => void",default:"-",desc:"\u5f39\u5c42\u663e\u793a\u6216\u9690\u85cf\u65f6\u89e6\u53d1\u4e8b\u4ef6"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);