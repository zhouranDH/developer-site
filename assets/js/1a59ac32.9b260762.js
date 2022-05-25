"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[1742],{10895:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(49873),s=n(59301),i=n(10161),o=n(59358),a=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],d=(n(58354),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return s.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return s.createElement(i.D,{children:e,remarkPlugins:[o.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return s.createElement(i.D,{children:e,remarkPlugins:[o.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?s.createElement(i.D,{children:e,remarkPlugins:[o.Z]}):s.createElement("div",null," - ")}}]);var c=function(e){var t=e.category,n=e.dataSource,i=("form"===t?[].concat(a,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return s.createElement(r.Z,{className:"attr-table",dataSource:i,pagination:!1,columns:d})}},84969:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(96178),s=n(59301),i=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new i,n.recevier.on("updateHeight",(function(e,t,r){n.iframe&&r===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,r=t.id,i=t.style,o=t.url;return o?s.createElement("div",{className:"bg-iframe "+n,id:r,style:Object.assign({height:400,width:"100%"},i),ref:function(t){e.container=t}},s.createElement("iframe",{src:o,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):s.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(s.PureComponent);o.displayName="bg-iframe"},71655:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(47145),s=n(24736),i=(n(59301),n(99278)),o=n(84969),a=n(10895),d=["components"],c={title:"Progress \u8fdb\u5ea6\u6761",order:13},l="Progress \u8fdb\u5ea6\u6761",p={unversionedId:"components/advanced/progress",id:"components/advanced/progress",title:"Progress \u8fdb\u5ea6\u6761",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/advanced/progress.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/progress",permalink:"/developer-site/docs/components/advanced/progress",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/advanced/progress.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646573209,formattedLastUpdatedAt:"2022/3/6",frontMatter:{title:"Progress \u8fdb\u5ea6\u6761",order:13},sidebar:"components",previous:{title:"Search \u641c\u7d22",permalink:"/developer-site/docs/components/advanced/search"},next:{title:"Timeline \u65f6\u95f4\u8f74",permalink:"/developer-site/docs/components/advanced/timeLine"}},u={},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],m={toc:f};function h(e){var t=e.components,n=(0,s.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"progress-\u8fdb\u5ea6\u6761"},"Progress \u8fdb\u5ea6\u6761"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("p",null,"\u5728\u64cd\u4f5c\u9700\u8981\u8f83\u957f\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\u65f6\uff0c\u4e3a\u7528\u6237\u663e\u793a\u8be5\u64cd\u4f5c\u7684\u5f53\u524d\u8fdb\u5ea6\u548c\u72b6\u6001\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u9700\u8981\u8017\u8d39\u4e00\u5b9a\u7684\u5ba2\u6237\u7aef\u7b49\u5f85\u65f6\u95f4\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u9700\u8981\u5c55\u793a\u4e00\u4e2a\u5b8c\u6210\u8fdb\u5ea6\u7684\u767e\u5206\u6bd4\u3002")),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(o.Z,{url:"https://www.aliwork.com/developer/progress-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)(a.Z,{dataSource:[{code:"size",type:"'small' | 'medium' | 'large'",default:"'medium'",desc:"\u5c3a\u5bf8"},{code:"shape",type:"'circle' | 'line'",default:"'line'",desc:"\u8fdb\u5ea6\u6761\u5f62\u6001"},{code:"percent",type:"number",default:"0",desc:"\u8bbe\u7f6e\u767e\u5206\u6bd4"},{code:"state",type:"'normal' | 'success' | 'error'",default:"'normal'",desc:"\u5f53\u524d\u72b6\u6001"},{code:"hasBorder",type:"boolean",default:"false",desc:"\u662f\u5426\u663e\u793a\u8fb9\u6846"},{code:"progressive",type:"boolean",default:"false",desc:"\u8bbe\u7f6e\u8272\u5f69\u9636\u6bb5\u53d8\u5316\u6a21\u5f0f"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);