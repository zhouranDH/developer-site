"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[6439],{10895:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(49873),i=n(59301),c=n(10161),s=n(59358),r=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],a=(n(58354),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return i.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return i.createElement(c.D,{children:e,remarkPlugins:[s.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return i.createElement(c.D,{children:e,remarkPlugins:[s.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?i.createElement(c.D,{children:e,remarkPlugins:[s.Z]}):i.createElement("div",null," - ")}}]);var d=function(e){var t=e.category,n=e.dataSource,c=("form"===t?[].concat(r,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return i.createElement(o.Z,{className:"attr-table",dataSource:c,pagination:!1,columns:a})}},84969:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(96178),i=n(59301),c=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new c,n.recevier.on("updateHeight",(function(e,t,o){n.iframe&&o===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,o=t.id,c=t.style,s=t.url;return s?i.createElement("div",{className:"bg-iframe "+n,id:o,style:Object.assign({height:400,width:"100%"},c),ref:function(t){e.container=t}},i.createElement("iframe",{src:s,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);s.displayName="bg-iframe"},96469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return f}});var o=n(47145),i=n(24736),c=(n(59301),n(99278)),s=n(84969),r=n(10895),a=["components"],d={title:"Dialog \u5bf9\u8bdd\u6846",order:7},l="Dialog \u5bf9\u8bdd\u6846",p={unversionedId:"components/basic/dialog",id:"components/basic/dialog",title:"Dialog \u5bf9\u8bdd\u6846",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/basic/dialog.mdx",sourceDirName:"components/basic",slug:"/components/basic/dialog",permalink:"/developer-site/docs/components/basic/dialog",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/basic/dialog.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646573209,formattedLastUpdatedAt:"2022/3/6",frontMatter:{title:"Dialog \u5bf9\u8bdd\u6846",order:7},sidebar:"components",previous:{title:"LinkBlock \u94fe\u63a5\u5757",permalink:"/developer-site/docs/components/basic/linkBlock"},next:{title:"Drawer \u62bd\u5c49",permalink:"/developer-site/docs/components/basic/drawer"}},u={},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2}],m={toc:f};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"dialog-\u5bf9\u8bdd\u6846"},"Dialog \u5bf9\u8bdd\u6846"),(0,c.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,c.kt)("p",null,"\u5bf9\u8bdd\u6846\u662f\u7528\u4e8e\u5728\u4e0d\u79bb\u5f00\u4e3b\u8def\u5f84\u7684\u60c5\u51b5\u4e0b\uff0c\u63d0\u4f9b\u7528\u6237\u5feb\u901f\u6267\u884c\u7b80\u5355\u7684\u64cd\u4f5c\u3001\u786e\u8ba4\u7528\u6237\u4fe1\u606f\u6216\u53cd\u9988\u63d0\u793a\u7684\u8f85\u52a9\u7a97\u53e3\u3002"),(0,c.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,c.kt)(s.Z,{url:"https://www.aliwork.com/developer/dialog-v2?isRenderNav=false",mdxType:"Iframe"}),"## \u7ec4\u4ef6\u5c5e\u6027",(0,c.kt)(r.Z,{dataSource:[{code:"title",type:"string",default:"'Dialog\u6807\u9898'",desc:"\u5bf9\u8bdd\u6846\u6807\u9898"},{code:"width",type:"number",default:"-",desc:"\u5bf9\u8bdd\u6846\u5bbd\u5ea6"},{code:"height",type:"number",default:"-",desc:"\u5bf9\u8bdd\u6846\u9ad8\u5ea6"},{code:"visible",type:"boolean",default:"false",desc:"\u5bf9\u8bdd\u6846\u662f\u5426\u663e\u793a"},{code:"hasMask",type:"boolean",default:"true",desc:"\u906e\u7f69\u662f\u5426\u663e\u793a"},{code:"closeable",type:"'esc' | 'mask'",default:"'esc'",desc:"\u5173\u95ed\u5bf9\u8bdd\u6846\u65b9\u5f0f\uff0cesc\uff1a\u70b9\u51fb ESC \u6309\u952e\u5173\u95ed\u3001mask\uff1a\u70b9\u51fb\u906e\u7f69\u5173\u95ed"},{code:"footer",type:"boolean",default:"true",desc:"\u5e95\u90e8\u6309\u94ae\u662f\u5426\u663e\u793a"},{code:"footerAlign",type:"'left' | 'center' | 'right'",default:"'right'",desc:"\u5bf9\u8bdd\u6846\u786e\u5b9a\u6309\u94ae\u548c\u53d6\u6d88\u6309\u94ae\u5bf9\u9f50\u65b9\u5f0f"},{code:"footerActions",type:"'cancel,ok' | 'cancel,ok' | 'ok' | 'cancel'",default:"'cancel,ok'",desc:"\u5bf9\u8bdd\u6846\u5e95\u90e8\u9ed8\u8ba4\u6309\u94ae\u6392\u5217\u65b9\u5f0f\uff0ccancel\u4ee3\u8868\u53d6\u6d88\u6309\u94ae\uff0cok\u4ee3\u8868\u786e\u5b9a\u6309\u94ae"},{code:"onOk",type:"() => void",default:"-",desc:"\u70b9\u51fb\u786e\u5b9a\u6309\u94ae\u65f6\u4e8b\u4ef6"},{code:"onCancel",type:"() => void",default:"-",desc:"\u70b9\u51fb\u53d6\u6d88\u6309\u94ae\u65f6\u4e8b\u4ef6"},{code:"onClose",type:"() => void",default:"-",desc:"\u5bf9\u8bdd\u6846\u5173\u95ed\u65f6\u4e8b\u4ef6"},{code:"afterClose",type:"() => void",default:"-",desc:"\u5bf9\u8bdd\u6846\u5173\u95ed\u540e\u4e8b\u4ef6"},{code:"afterOpen",type:"() => void",default:"-",desc:"\u5bf9\u8bdd\u6846\u6253\u5f00\u540e\u4e8b\u4ef6"},{code:"onOpen",type:"() => void",default:"-",desc:"\u5bf9\u8bdd\u6846\u6253\u5f00\u65f6\u4e8b\u4ef6"},{code:"autoFocus",type:"boolean",default:"true",desc:"\u81ea\u52a8\u805a\u7126\uff0cDialog\u6253\u5f00\u65f6\u662f\u5426\u81ea\u52a8\u805a\u7126\u5230\u5185\u90e8\u7684\u8868\u5355\u9879"},{code:"confirmStyle",type:"'primary' | 'warning' | 'ghostLight' | 'ghostDark'",default:"'primary'",desc:"\u786e\u5b9a\u6309\u94ae\u7c7b\u578b\uff0c\u53c2\u8003 **Button** \u7ec4\u4ef6\u7684[\u6587\u6863](/docs/components/basic/button#\u7ec4\u4ef6\u5c5e\u6027)"},{code:"cancelText",type:"string",default:"'\u53d6\u6d88'",desc:"\u53d6\u6d88\u6309\u94ae\u6587\u6848"},{code:"confirmText",type:"string",default:"'\u786e\u5b9a'",desc:"\u786e\u5b9a\u6309\u94ae\u5185\u6587\u6848"},{code:"confirmState",type:"'NORMAL' | 'DISABLED' | 'LOADING'",default:"'NORMAL'",desc:"\u786e\u5b9a\u6309\u94ae\u7684\u786e\u8ba4\u72b6\u6001"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);