"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[2667],{10895:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(49873),r=n(59301),o=n(10161),s=n(59358),a=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],c=(n(58354),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return r.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return r.createElement(o.D,{children:e,remarkPlugins:[s.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return r.createElement(o.D,{children:e,remarkPlugins:[s.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?r.createElement(o.D,{children:e,remarkPlugins:[s.Z]}):r.createElement("div",null," - ")}}]);var d=function(e){var t=e.category,n=e.dataSource,o=("form"===t?[].concat(a,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return r.createElement(i.Z,{className:"attr-table",dataSource:o,pagination:!1,columns:c})}},84969:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(96178),r=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,o=t.style,s=t.url;return s?r.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:s,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);s.displayName="bg-iframe"},4458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return f}});var i=n(47145),r=n(24736),o=(n(59301),n(99278)),s=n(84969),a=n(10895),c=["components"],d={title:"Image \u56fe\u7247",order:4},l="Image \u56fe\u7247",p={unversionedId:"components/basic/image",id:"components/basic/image",title:"Image \u56fe\u7247",description:"\u7528\u4e8e\u5c55\u793a\u56fe\u7247\u8d44\u6e90\u3002",source:"@site/docs/components/basic/image.mdx",sourceDirName:"components/basic",slug:"/components/basic/image",permalink:"/developer-site/docs/components/basic/image",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/basic/image.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646578019,formattedLastUpdatedAt:"2022/3/6",frontMatter:{title:"Image \u56fe\u7247",order:4},sidebar:"components",previous:{title:"Text \u6587\u672c",permalink:"/developer-site/docs/components/basic/text"},next:{title:"Link \u94fe\u63a5",permalink:"/developer-site/docs/components/basic/link"}},u={},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],m={toc:f};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"image-\u56fe\u7247"},"Image \u56fe\u7247"),(0,o.kt)("p",null,"\u7528\u4e8e\u5c55\u793a\u56fe\u7247\u8d44\u6e90\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"-\u9875\u9762\u91cc\u5355\u4e2a\u56fe\u7247\u7684\u5c55\u793a\u3002"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(s.Z,{url:"https://www.aliwork.com/developer/image-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(a.Z,{dataSource:[{code:"src",type:"string",default:"-",desc:"\u56fe\u7247\u5730\u5740URL"},{code:"width",type:"number",default:"350",desc:"\u56fe\u7247\u5bbd\u5ea6"},{code:"autuWidth",type:"boolean",default:"false",desc:"\u5bbd\u5ea6\u81ea\u9002\u5e94"},{code:"height",type:"number",default:"200",desc:"\u56fe\u7247\u9ad8\u5ea6"},{code:"autuHeight",type:"boolean",default:"false",desc:"\u9ad8\u5ea6\u81ea\u9002\u5e94"},{code:"fit",type:"'cover' | 'contain' | 'fill'",default:"'cover'",desc:"\u56fe\u7247\u5c55\u793a\u65b9\u5f0f\uff0ccover\uff1a\u6309\u56fe\u7247\u5c3a\u5bf8\u8fdb\u884c\u88c1\u526a\u3001contain\uff1a\u6309\u56fe\u7247\u5c3a\u5bf8\u8fdb\u884c\u7559\u767d\u3001fill\uff1a\u6309\u56fe\u7247\u5c3a\u5bf8\u8fdb\u884c\u62c9\u4f38"},{code:"round",type:"'16' | '8' | '4' | '0' | '\u81ea\u5b9a\u4e49'",default:" '0' ",desc:"\u56fe\u7247\u5706\u89d2\uff0c\u5355\u4f4dpx"},{code:"roundRadius",type:"number",default:"0",desc:"\u81ea\u5b9a\u4e49\u56fe\u7247\u5706\u89d2\u5927\u5c0f\uff0c\u5f53 **round** \u5c5e\u6027\u8bbe\u7f6e\u4e3a'\u81ea\u5b9a\u4e49'\u65f6\u751f\u6548"},{code:"title",type:"string",default:"-",desc:"\u56fe\u7247\u6807\u9898\uff0c\u7528\u4e8e\u8bbe\u7f6ehtml \u539f\u751f title\u5c5e\u6027\uff0c\u5728\u7528\u6237\u9f20\u6807hover\u65f6\u663e\u793a"},{code:"alt",type:"string",default:"'Image 404'",desc:"\u56fe\u7247\u672a\u52a0\u8f7d\u65f6\u7684\u5360\u4f4d\u6587\u5b57"},{code:"preview",type:"boolean",default:"false",desc:"\u662f\u5426\u5f00\u542f\u56fe\u7247\u9884\u89c8"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);