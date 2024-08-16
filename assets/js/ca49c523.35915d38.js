"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1135],{2421:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=s(5893),t=s(1151);const a={sidebar_position:1},r=void 0,o={id:"Analysis/Structure",title:"Structure",description:"A new structure of dataflow is (being) developed for the analytical lab. The basic structure is depicted below:",source:"@site/docs/Analysis/Structure.md",sourceDirName:"Analysis",slug:"/Analysis/Structure",permalink:"/xiphium-documentation/docs/Analysis/Structure",draft:!1,unlisted:!1,editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/docs/Analysis/Structure.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Analytical Lab",permalink:"/xiphium-documentation/docs/category/analytical-lab"},next:{title:"Analysis Order",permalink:"/xiphium-documentation/docs/Analysis/Analysis_Order"}},l={},c=[];function d(e){const n={a:"a",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"A new structure of dataflow is (being) developed for the analytical lab. The basic structure is depicted below:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Analysis_Order_Simple_Structure",src:s(2179).Z+"",width:"268",height:"372"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_Order",children:"Analysis_Order"})}),": As seen in the structure, an 'Order' is the highest object in the structure. This is where information about the client, payment information and other relevant information for an Order is stored. Nothing can exist without an Order. An order ALWAYS contains a sub-Order."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_SubOrder",children:"Analysis_SubOrder"})}),":  A Sub-Order can be used to distinguish different elements of an Order (different crop(s), different tests etc). Amount of Sub-Order is unlimited, but a minimum of 1"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_Sample",children:"Analysis_Sample"})})," should always be part of a Sub-Order. Samples is the place where all analysis data of a sample is displayed"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_Isolation",children:"Analysis_Isolation"})})," is an 'instance' of a sample that is being/been isolated (Nuclei, DNA or RNA isolation). An Isolation can be put into an Isolation_Plate."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_Isolation_Plate",children:"Analysis_Isolation_Plate"})})," is used as a 'container' for multiple Isolations. Plate handling data is stored here (who, what, when etc.)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_DataPoint",children:"Analysis_DataPoint"})})," is the place where individual analysis data is gathered. All (important) details and results should be stored here. A DataPoint can be put in an Analysis_Plate."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_Plate",children:"Analysis_Plate"})})," is merely a container for DataPoints to be put in. Plate handling data is stored here (who, what, when etc.)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Details about practical work/protocols are stored in separate tables."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_Test",children:"Analysis_Test"})}),": Table which contains information about a '(pcr) test'. This can be seen as a protocol except the practical steps/instructions are missing. Is related to 'Pathogen' with a N",":N"," relation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Pathogen",children:"Pathogen"})}),": Table with pathogens which are all given a unique number. Information is mainly their names and type of pathogen. Is related to 'Analysis_Test' with a N",":N"," relation"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Analysis_Oligo",children:"Analysis_Oligo"})}),": Table where all oligo's (primers etc.) infomration is stored. This is mainly about het sequence, storage and which pathogen it detects. Oligo is related to pathogen with a N:1 relation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Analysis/Reference_Collection",children:"Reference_Collection"})}),": Table which contains a collection of reference materials. Often material that is used as a positive control in PCR testing (but can be used for more than that). Reference_Collection is related to Pathogen in a N:1 relation (This means that every Reference_Collection record can only be related to 1 pathogen)."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2179:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Analysis_Order_Simple_Structure-dbd59356909ca123ff22caff231455d2.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var i=s(7294);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);