"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[1335],{94579:function(e,t,r){var n=r(97218),i=r(59301),o=(r(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return i.createElement(n.Z,{className:"attr-table",dataSource:e.dataSource,columns:o,pagination:!1})}},50199:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(44117),i=r(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var r=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(r,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var r;return(r=e.call(this,t)||this).createRecevier=function(){r.destroyRecevier(),r.recevier=new o,r.recevier.on("updateHeight",(function(e,t,n){r.iframe&&n===r.iframe.contentWindow&&(r.container.style.height=(e.msg||0)+"px",r.props.onUpdateHeight&&r.props.onUpdateHeight(e.msg||"#"))}))},r.destroyRecevier=function(){r.recevier&&(r.recevier.destroy(),r.recevier=null)},r.container=null,r.iframe=null,r}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},r.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},r.componentWillUnmount=function(){this.destroyRecevier()},r.render=function(){var e=this,t=this.props,r=t.className,n=t.id,o=t.style,a=t.url;return a?i.createElement("div",{className:"bg-iframe "+r,id:n,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},i.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);a.displayName="bg-iframe"},13971:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(21810),i=r(86919),o=(r(59301),r(99278)),a=r(50199),d=r(94579),s=["components"],c={title:"\u6570\u5b57\u8f93\u5165\u6846",order:1},l="\u6570\u5b57\u8f93\u5165\u6846",u={unversionedId:"components/form/number",id:"components/form/number",title:"\u6570\u5b57\u8f93\u5165\u6846",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/number.mdx",sourceDirName:"components/form",slug:"/components/form/number",permalink:"/developer-site/docs/components/form/number",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/number.mdx",tags:[],version:"current",frontMatter:{title:"\u6570\u5b57\u8f93\u5165\u6846",order:1},sidebar:"components",previous:{title:"\u89c6\u9891\u64ad\u653e",permalink:"/developer-site/docs/components/basic/video"},next:{title:"\u5355\u9009",permalink:"/developer-site/docs/components/form/radio"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6570\u5b57\u8f93\u5165\u6846"},"\u6570\u5b57\u8f93\u5165\u6846"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6570\u5b57\u9009\u62e9\u5668\uff0c\u5e76\u5bf9\u8f93\u5165\u7684\u6570\u636e\u505a\u6b63\u786e\u6027\u68c0\u67e5\u3001\u81ea\u52a8\u8ba2\u6b63\uff1b")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(a.Z,{url:"https://www.aliwork.com/developer/number-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(d.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:'"\u6807\u9898"',dafault:"",desc:""},{attr:"\u503c",code:"value",type:"Number",demo:"1505894659813",dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "top"'},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u6807\u9898\u5bf9\u9f50",code:"labelTextAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "right"'},{attr:"\u5360\u4f4d\u63d0\u793a",code:"placeholder",type:"String",demo:'"\u8bf7\u9009\u62e9\u65e5\u671f"',dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:'"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f"',dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:'"small"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"small", "medium", "large"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'"NORMAL"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u7c7b\u578b",code:"extra",type:"String",demo:'"normal"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"normal", "inline" '},{attr:"\u6b65\u6570",code:"step",type:"Number",demo:"1",dafault:"",desc:""},{attr:"\u5c0f\u6570\u4f4d\u6570",code:"precision",type:"Number",demo:"0 ",dafault:"",desc:""},{attr:"\u53ef\u4ee5\u8f93\u5165",code:"editable",type:"Boolean",demo:"true",dafault:"",desc:"\u53ef\u9009\u503c\uff1atrue, false"},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}] ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u4eca\u65e5\u4e4b\u524d\u7684\u65e5\u671f", param: "function validateRule(value) { return value <= new Date().getTime(); }"}'},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:"function(value){ console.log(value); }",dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);