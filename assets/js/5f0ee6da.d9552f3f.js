"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[7177],{94579:function(e,t,r){var n=r(97218),o=r(59301),i=(r(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return o.createElement(n.Z,{className:"attr-table",dataSource:e.dataSource,columns:i,pagination:!1})}},50199:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(44117),o=r(59301),i=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var r=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(r,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var r;return(r=e.call(this,t)||this).createRecevier=function(){r.destroyRecevier(),r.recevier=new i,r.recevier.on("updateHeight",(function(e,t,n){r.iframe&&n===r.iframe.contentWindow&&(r.container.style.height=(e.msg||0)+"px",r.props.onUpdateHeight&&r.props.onUpdateHeight(e.msg||"#"))}))},r.destroyRecevier=function(){r.recevier&&(r.recevier.destroy(),r.recevier=null)},r.container=null,r.iframe=null,r}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},r.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},r.componentWillUnmount=function(){this.destroyRecevier()},r.render=function(){var e=this,t=this.props,r=t.className,n=t.id,i=t.style,a=t.url;return a?o.createElement("div",{className:"bg-iframe "+r,id:n,style:Object.assign({height:400,width:"100%"},i),ref:function(t){e.container=t}},o.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):o.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(o.PureComponent);a.displayName="bg-iframe"},63374:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(21810),o=r(86919),i=(r(59301),r(99278)),a=r(50199),d=r(94579),s=["components"],c={title:"\u8bc4\u5206",order:13},l="\u8bc4\u5206",u={unversionedId:"components/form/rateField",id:"components/form/rateField",title:"\u8bc4\u5206",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/rateField.mdx",sourceDirName:"components/form",slug:"/components/form/rateField",permalink:"/developer-site/docs/components/form/rateField",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/rateField.mdx",tags:[],version:"current",frontMatter:{title:"\u8bc4\u5206",order:13},sidebar:"components",previous:{title:"\u4eba\u5458\u641c\u7d22\u6846",permalink:"/developer-site/docs/components/form/peopleSearch"},next:{title:"\u5bcc\u6587\u672c\u7f16\u8f91",permalink:"/developer-site/docs/components/form/editorField"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8bc4\u5206"},"\u8bc4\u5206"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u5e38\u7528\u4e8e\u7528\u6237\u53cd\u9988\u573a\u666f\uff1b")),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(a.Z,{url:"https://www.aliwork.com/developer/rate-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)(d.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:"\u8bc4\u5206",dafault:"",desc:""},{attr:"\u9ed8\u8ba4\u503c",code:"fieldData",type:"Object",demo:"{value: 3}",dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "top", "inset"'},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u6807\u9898\u5bf9\u9f50",code:"labelTextAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "right"'},{attr:"\u63d0\u793a\u6587\u5b57",code:"placeholder",type:"String",demo:'"\u8bf7\u9009\u62e9\u8bc4\u5206"',dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f",dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:'"small"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"small", "medium", "large"'},{attr:"\u8bc4\u5206\u603b\u6570",code:"count",type:"Number",demo:"5",dafault:"",desc:""},{attr:"\u534a\u661f\u8bc4\u5206",code:"allowHalf",type:"Boolean",demo:"false",dafault:"",desc:"\u53ef\u9009\u503c true/false"},{attr:"\u663e\u793a grade",code:"showGrade",type:"Boolean",demo:"false",dafault:"",desc:"\u53ef\u9009\u503c true/false"},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'"NORMAL"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}] ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bc4\u5206\u5728 5 \u5230 10 \u5206\u4e4b\u95f4", param: "function validateRule(value) { return value >= 5; }"}'},{attr:"\u7528\u6237\u70b9\u51fb\u8bc4\u5206\u65f6\u89e6\u53d1\u7684\u56de\u8c03",code:"onChange",type:"Function",demo:"function onChange({ value }) { console.log(value); } }",dafault:"",desc:""},{attr:"\u7528\u6237 hover \u8bc4\u5206\u65f6\u89e6\u53d1\u7684\u56de\u8c03",code:"onHoverChange",type:"Function",demo:" function onHoverChange(value) { console.log(value); } ",dafault:"",desc:""}],mdxType:"AttrTable"}))}m.isMDXComponent=!0}}]);