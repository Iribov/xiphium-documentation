"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6720],{8412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(5893),o=t(1151);const r={sidebar_position:1},s="Structure",l={id:"Greenhouse/Greenhouse_Planning/Introduction",title:"Introduction",description:"Greenhouse planning is a newly developed (and still in developing) module that takes inspiration from the Tissue Culture planning module, but modified and applied to the Greenhouse.",source:"@site/docs/Greenhouse/Greenhouse_Planning/Introduction.md",sourceDirName:"Greenhouse/Greenhouse_Planning",slug:"/Greenhouse/Greenhouse_Planning/Introduction",permalink:"/xiphium-documentation/docs/Greenhouse/Greenhouse_Planning/Introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/docs/Greenhouse/Greenhouse_Planning/Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Greenhouse Planning",permalink:"/xiphium-documentation/docs/category/greenhouse-planning"},next:{title:"Automatic Planning (in theory)",permalink:"/xiphium-documentation/docs/Greenhouse/Greenhouse_Planning/Automatic_Planning"}},a={},c=[{value:"1. Order",id:"1-order",level:2},{value:"2. Protocol(1)",id:"2-protocol1",level:2},{value:"3. Protocol_Lines",id:"3-protocol_lines",level:2},{value:"4. Protocol_Component",id:"4-protocol_component",level:2},{value:"5. Planning actions",id:"5-planning-actions",level:2},{value:"Space Calculation",id:"space-calculation",level:3},{value:"Hours planned",id:"hours-planned",level:3}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Greenhouse planning is a newly developed (and still in developing) module that takes inspiration from the ",(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Tissue_Culture/Tissue%20Culture%20planning",children:"Tissue Culture planning"})," module, but modified and applied to the Greenhouse."]}),"\n",(0,i.jsxs)(n.p,{children:["The basic is that a planning can be automatically generated from the ",(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Tissue_Culture/Order",children:"Order"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Automatic generation of the greenhouse planning is a general one, and should still be checked and modified if neccessary."})}),"\n",(0,i.jsx)(n.h1,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(n.p,{children:"The full structure of this greenhouse planning (sub)module is made up from the following tables:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Tissue_Culture/Order",children:"Order"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Greenhouse/Greenhouse_Planning/Protocol1",children:"Protocol1"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Greenhouse/Greenhouse_Planning/Prot_Lines",children:"Prot_Lines"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Greenhouse/Greenhouse_Planning/GHPA",children:"Greenhouse Planning Actions (GHPA)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Tissue_Culture/Prot_Component",children:"Protocol Component (Prot_Component)"})}),"\n",(0,i.jsx)(n.li,{children:"Spaces?"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The idea is that spaces will be more integrated in the Greenhouse planning so that a spacial planning can be used."})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-order",children:"1. Order"}),"\n",(0,i.jsxs)(n.p,{children:["Everything starts with an ",(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Tissue_Culture/Order",children:"Order"}),". If \u2018Location Delivery 1\u2019 is a company that has the \u2018Is Greenhouse\u2019 checkmark in the [Company] table, a greenhouse Protocol can be searched with the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Ord_Update_GH_Protocol"})})," Method and is (currently) under the buttons \u2018Update GHPA\u2019 and \u2018Update GH Protocol\u2019 as shown in figure:\n",(0,i.jsx)(n.img,{src:t(6587).Z+"",width:"647",height:"350"})]}),"\n",(0,i.jsx)(n.p,{children:"The [Order] automatically finds a \u2018GH Protocol\u2019 (Greenhouse Protocol) based on the following parameters:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Order"}),(0,i.jsx)(n.th,{children:"Protocol1"}),(0,i.jsx)(n.th,{children:"Remark"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Location Code 1"}),(0,i.jsx)(n.td,{children:"Company Code"}),(0,i.jsx)(n.td,{children:"Exact match necessary"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Crop Code"}),(0,i.jsx)(n.td,{children:"Crop Code"}),(0,i.jsx)(n.td,{children:"Exact match is prioritized, otherwise a Protocol With CropCode '0' will suffice"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type Start Material"}),(0,i.jsx)(n.td,{children:"Type Start Material"}),(0,i.jsx)(n.td,{children:"Exact match necessary"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Order Type 3"}),(0,i.jsx)(n.td,{children:"Order Type 3"}),(0,i.jsx)(n.td,{children:"Exact match necessary"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Order Type 5"}),(0,i.jsx)(n.td,{children:"Order Type 5"}),(0,i.jsx)(n.td,{children:"Exact match necessary"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"A new version of a protocol1 is given priority over the old protocol1 record."})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The above only describes the ",(0,i.jsx)(n.strong,{children:"automatic"})," picking of a Protocol1 for an Order. You can always manually assign a Protocol1 to an Order too."]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The column 'Priority' was conceived to give extra control over which protocol will be given priority when similar parameters are present. However, at this time there is no added benefit to using this column."})}),"\n",(0,i.jsx)(n.p,{children:"The found GH Protocol is (currently) shown in the [Order] when opening it and navigating to the\xa0 \u2018GreenhouseField\u2019 tab, as shown in the figure below."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6587).Z+"",width:"647",height:"350"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"[Order] contains information about:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"What"}),": PlantCode, Purpose"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Amount"}),": Amount of Plants"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"2-protocol1",children:"2. Protocol(1)"}),"\n",(0,i.jsx)(n.p,{children:"After an [Order] is connected to a Protocol (by having a protocol code in the \u2018GH ProtocolCode Used\u2019 field in [Order]), the connection to [Protocol_Lines] can be used to Create planning actions."}),"\n",(0,i.jsxs)(n.p,{children:["A protocol, in this setting, is a \u2018global\u2019 instruction on what to do with a plant. A protocol is comprised of multiple steps (a.k.a. ",(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Greenhouse/Greenhouse_Planning/Prot_Lines",children:"Protocol Lines"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Protocol contains information about:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"What steps (Activities/Activity groups) are needed."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-protocol_lines",children:"3. Protocol_Lines"}),"\n",(0,i.jsx)(n.p,{children:"[Protocol_Lines] are the individual steps of a protocol. [Protocol_Lines] contain an activity group, and can contain an activity. This activity (group) is used to connect to [Protocol_Component], which contains all the details/parameters of a step."}),"\n",(0,i.jsx)(n.p,{children:"[Protocol_Lines] contain the information of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"What: Activity (Group)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4-protocol_component",children:"4. Protocol_Component"}),"\n",(0,i.jsx)(n.p,{children:"A protocol component is used to set parameters of a certain activity. These parameters are used to calculate and fill several aspects of the planning."}),"\n",(0,i.jsx)(n.p,{children:"A Protocol Component is searched with the following parameters (of a planning action):"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"GHPA"}),(0,i.jsx)(n.th,{children:"Protocol Component"}),(0,i.jsx)(n.th,{children:"Remark"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Location Code 1"}),(0,i.jsx)(n.td,{children:"Company Code"}),(0,i.jsx)(n.td,{children:"Exact match necessary"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Crop Code"}),(0,i.jsx)(n.td,{children:"Crop Code"}),(0,i.jsx)(n.td,{children:"Exact match necessary"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Activity"}),(0,i.jsx)(n.td,{children:"Activity"}),(0,i.jsx)(n.td,{children:"Exact match is prioritized or Empty"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Activity Group"}),(0,i.jsx)(n.td,{children:"Activity Group"}),(0,i.jsx)(n.td,{children:"Exact match necessary"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Order Type 5"}),(0,i.jsx)(n.td,{children:"Order Type 5"}),(0,i.jsx)(n.td,{children:"Exact match necessary"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"The found Protocol Components are then ordered by protocol Code (low to high) and version number (high to low). The first Protocol Component in this selection is picked."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Protocol Components hold information about:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["What:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(Activity)"}),"\n",(0,i.jsx)(n.li,{children:"Multiplication Factor (MF)"}),"\n",(0,i.jsx)(n.li,{children:"Temperature"}),"\n",(0,i.jsx)(n.li,{children:"Plants/Trays per Hour"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5-planning-actions",children:"5. Planning actions"}),"\n",(0,i.jsxs)(n.p,{children:["Everything explained above comes together in a ",(0,i.jsx)(n.a,{href:"/xiphium-documentation/docs/Greenhouse/Greenhouse_Planning/GHPA",children:"planning action"})," ."]}),"\n",(0,i.jsx)(n.p,{children:"A planning action contains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"When"}),": Year-Week"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"What"}),": PlantCode, Activity, Other parameters"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Amount"}),": Amount of plants"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Where"}),": [Future Feature] Location of plant(s)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"space-calculation",children:"Space Calculation"}),"\n",(0,i.jsx)(n.p,{children:"Calculating the amount of space should be a simple calculation:\nsquare meters = (Amount of plants / Plant per tray) * square meters per tray."}),"\n",(0,i.jsx)(n.p,{children:"However, in the choice list \u2018Fust Greenhouse\u2019 only the \u2018Plants per Unit\u2019 and \u2018Plants per m2\u2019 are entered. So we have to calculate the \u2018m2 per tray\u2019 by dividing the \u2018Plants per Unit\u2019 by \u2018Plants per m2\u2019:"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This part is not finished (yet)"})}),"\n",(0,i.jsx)(n.h3,{id:"hours-planned",children:"Hours planned"}),"\n",(0,i.jsx)(n.p,{children:"The planned hours are an easy calculation. The \u2018Units per Hour\u2019 (UPH) from the planning actions is used and divided by the planned amount of plants to get the planned hours. The UPH can be manually overwritten in the planning action if desired."}),"\n",(0,i.jsx)(n.p,{children:"Hours Planned = ((Units per Hour * Plants per Unit)/ Amount of plants)"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6587:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Order_screenshot-c7efba0722e6b30531a36cc99b4bfd60.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);