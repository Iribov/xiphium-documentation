"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8390],{9176:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var i=n(5893),a=n(1151);const s={sidebar_position:2},o="Analysis Suborder",t={id:"Analysis/Analysis_SubOrder",title:"Analysis Suborder",description:"AnalysisSuborder is used as a grouping of\xa0AnalysisSamples, and a more detailed explanation of an AnalysisOrder.",source:"@site/docs/Analysis/Analysis_SubOrder.md",sourceDirName:"Analysis",slug:"/Analysis/Analysis_SubOrder",permalink:"/xiphium-documentation/docs/Analysis/Analysis_SubOrder",draft:!1,unlisted:!1,editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/docs/Analysis/Analysis_SubOrder.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Analysis Order",permalink:"/xiphium-documentation/docs/Analysis/Analysis_Order"},next:{title:"Analysis Sample",permalink:"/xiphium-documentation/docs/Analysis/Analysis_Sample"}},l={},d=[{value:"Core information",id:"core-information",level:3},{value:"Why Suborders?",id:"why-suborders",level:2},{value:"1. Grouping of Analysis_Samples",id:"1-grouping-of-analysis_samples",level:3},{value:"Giving more detail than an analysis Order",id:"giving-more-detail-than-an-analysis-order",level:3},{value:"Analysis_Suborder creation",id:"analysis_suborder-creation",level:2},{value:"1. Manual creation",id:"1-manual-creation",level:3},{value:"Suborder/batch import",id:"suborderbatch-import",level:3},{value:"Automatic creation from sample import",id:"automatic-creation-from-sample-import",level:3},{value:"Analysis_Sample Creation",id:"analysis_sample-creation",level:2},{value:"from suborder",id:"from-suborder",level:3},{value:"from Excel import",id:"from-excel-import",level:3}];function c(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"analysis-suborder",children:"Analysis Suborder"}),"\n",(0,i.jsxs)(r.p,{children:["Analysis_Suborder is used as a grouping of\xa0",(0,i.jsx)(r.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_Sample",children:"Analysis_Samples"}),", and a more detailed explanation of an ",(0,i.jsx)(r.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_Order",children:"Analysis_Order"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"core-information",children:"Core information"}),"\n",(0,i.jsx)(r.p,{children:"The core information of an Analysis_SubOrder are:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Crop"}),"\n",(0,i.jsx)(r.li,{children:"Type Objective"}),"\n",(0,i.jsx)(r.li,{children:"Pathogens to test (if objective is pathogen test)"}),"\n",(0,i.jsx)(r.li,{children:"Markers to test (if objective is genotyping)"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Analysis_Suborders should be added according to their core information. Although allowed, duplicate suborders should not exists within most Analysis_Orders. The exception is if Analysis_Suborder is used for 'batches' (arbitrary grouping of samples from a client)."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"why-suborders",children:"Why Suborders?"}),"\n",(0,i.jsx)(r.p,{children:"Suborders are used for 2 main reasons:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Grouping of Analysis_Samples"}),"\n",(0,i.jsx)(r.li,{children:"Giving more detail than an analysis Order"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"1-grouping-of-analysis_samples",children:"1. Grouping of Analysis_Samples"}),"\n",(0,i.jsx)(r.p,{children:"When using groupings of analysis_samples, it is easier to modify parameters that are the same for the whole group."}),"\n",(0,i.jsxs)(r.p,{children:["For instance: 'Pathogens to Test' used to be a field that had to be filled in every Analysis_Sample. Sure, we had a button that could change a selection all at once but ",(0,i.jsx)(r.strong,{children:"you"})," had to make sure to select the proper samples. Now, it's a lot easier as you only have to change the 'pathogens to test' field in the suborder, and all related samples are automatically updated!"]}),"\n",(0,i.jsx)(r.p,{children:"Furthermore, it will be the place where an aggregation of data can be shown for that specific group/batch."}),"\n",(0,i.jsx)(r.h3,{id:"giving-more-detail-than-an-analysis-order",children:"Giving more detail than an analysis Order"}),"\n",(0,i.jsx)(r.p,{children:"The analytical lab often gets orders from a client with different crops. In Analysis_Order it is only possible to set 1 Crop Code for the order. This would mean that the analytical lab would either:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Create an Analysis_Order for every crop sent"}),"\n",(0,i.jsx)(r.li,{children:"Create 1 order without specifying a crop code\r\nBoth options are not ideal, and therefore we will use the Analysis_Suborder for this information."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"The example used here is for Crop, but all other 'Core information' are fields that are (or used to be) specified in the Analysis_Order, but create problems for the analytical lab and should therofre be moved to Analysis_Suborder."}),"\n",(0,i.jsxs)(r.admonition,{type:"info",children:[(0,i.jsx)(r.p,{children:"Although suborders are not that useful for most small and/or internal orders, they help the analytical lab a lot with bigger and/or external orders."}),(0,i.jsx)(r.p,{children:"And because we want to make 1 clear and streamlined process, everyone will have to get used to using suborders."})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"analysis_suborder-creation",children:"Analysis_Suborder creation"}),"\n",(0,i.jsx)(r.p,{children:"Suborders can be created in 3 ways:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Manual creation"}),"\n",(0,i.jsx)(r.li,{children:"Suborder/batch import"}),"\n",(0,i.jsx)(r.li,{children:"Automatic creation from sample import"}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"1-manual-creation",children:"1. Manual creation"}),"\n",(0,i.jsx)(r.p,{children:"By using the 'Create suborder' button in Analysis_Order detail, a suborder can be created. You can manually enter the core information. Manual creation can be used if the client does not deliver a proper import form."}),"\n",(0,i.jsx)(r.h3,{id:"suborderbatch-import",children:"Suborder/batch import"}),"\n",(0,i.jsx)(r.p,{children:"Some clients deliver arbitrary sample grouping ('batches') that have to be respected. This happens mostly with FCM aneuploidy of seeds and PCR-Marker genotyping. There are special import files that can be used to automatically create suborders"}),"\n",(0,i.jsx)(r.h3,{id:"automatic-creation-from-sample-import",children:"Automatic creation from sample import"}),"\n",(0,i.jsxs)(r.p,{children:["When using a Sample import file or importing samples from the ",(0,i.jsx)(r.a,{href:"/xiphium-documentation/docs/Plants/Clones",children:"Clones"})," table, Suborders are automatically created according to the given core information of the samples."]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"analysis_sample-creation",children:"Analysis_Sample Creation"}),"\n",(0,i.jsx)(r.p,{children:"Samples can be created from either the Analysis_Suborder, or an excel import."}),"\n",(0,i.jsx)(r.h3,{id:"from-suborder",children:"from suborder"}),"\n",(0,i.jsx)(r.p,{children:"When samples are created from a suborder, the samples automatically inherit the core information of the suborder."}),"\n",(0,i.jsx)(r.h3,{id:"from-excel-import",children:"from Excel import"}),"\n",(0,i.jsxs)(r.p,{children:["When doing an ",(0,i.jsx)(r.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_Sample",children:"Analysis_Sample"})," import from excel, samples are linked to a suborder according to mathcing core information (or a suborder is added with this core information)."]})]})}function h(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>o});var i=n(7294);const a={},s=i.createContext(a);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);