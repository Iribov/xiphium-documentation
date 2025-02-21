"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[298],{940:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(5893),s=t(1151);const r={title:"Xiphium 2025-W07 update",authors:["jim"]},d=void 0,o={permalink:"/xiphium-documentation/blog/2025/02/14/Xiphium-W07-Update/Index",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2025-02-14-Xiphium-W07-Update/Index.md",source:"@site/blog/2025-02-14-Xiphium-W07-Update/Index.md",title:"Xiphium 2025-W07 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2025-02-14T00:00:00.000Z",formattedDate:"February 14, 2025",tags:[],readingTime:1.86,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2025-W07 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2025-W08 update",permalink:"/xiphium-documentation/blog/2025/02/21/Xiphium-W08-Update/Index"},nextItem:{title:"Xiphium 2025-W06 update",permalink:"/xiphium-documentation/blog/2025/02/07/Xiphium-W06-Update/Index"}},a={authorsImageUrls:[void 0]},l=[{value:"Financial",id:"financial",level:2},{value:"Investments",id:"investments",level:3},{value:"Deliveries",id:"deliveries",level:2},{value:"Greenhouse_Field",id:"greenhouse_field",level:2},{value:"GHPA",id:"ghpa",level:2},{value:"Analysis Order",id:"analysis-order",level:2},{value:"Apps",id:"apps",level:2},{value:"Misc",id:"misc",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,i.jsx)(n.h2,{id:"financial",children:"Financial"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Access_SetupFinancialMenu"})})," has 3 new output form and 3 new input form tabs added to it."]}),"\n",(0,i.jsx)(n.h3,{id:"investments",children:"Investments"}),"\n",(0,i.jsx)(n.p,{children:"Work has been done on the financial investment table(s). This is mostly front-end/visual work and less logic work."}),"\n",(0,i.jsx)(n.h2,{id:"deliveries",children:"Deliveries"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DiT_Export_For_Transp_Invoice"})}),"  has 6 columns added to it called:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Plantcode"}),"\n",(0,i.jsx)(n.li,{children:"Plantname"}),"\n",(0,i.jsx)(n.li,{children:"/# containers"}),"\n",(0,i.jsx)(n.li,{children:"Amount"}),"\n",(0,i.jsx)(n.li,{children:"Price"}),"\n",(0,i.jsx)(n.li,{children:"Total Price"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DiT_Export_PackingListExpress"})})," has a bold format added for the net weight, dimensions and the box."]}),"\n",(0,i.jsx)(n.h2,{id:"greenhouse_field",children:"Greenhouse_Field"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GF_ExportExcelReportEstimateQC"})}),' has the new column "Type start material" added to it.']}),"\n",(0,i.jsx)(n.h2,{id:"ghpa",children:"GHPA"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_Automatic_Planning_Calc"})})," has been adjusted to only fire the forwards calculation when the when the stage3 delivery week is fixed or there are plants present in the greenhouse."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_Backwards_Calculation"})})," is simplified for readability. The function should be (more or less) identical."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_UpdateRecord_GF"})})," has been adjusted to use the temperature of the spaces history. Spaces history can now be used to plan thye temperature of a space."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_ColorField"})}),"  has been modified. The method is supposed to compare Start Week, end Week, Fust and temperature and make the field red when there is a change. However, because these comparisons are done with data from other tables, some are too slow to actually work. I might need to pull data into the GHPA table with the 'updaterecord' method to do a faster comparison. This does mean, however, that the comparison will always be out of date..."]}),"\n",(0,i.jsx)(n.h2,{id:"analysis-order",children:"Analysis Order"}),"\n",(0,i.jsx)(n.p,{children:"Bug in auto layout (automatic plate creation) resolved."}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"AnSam_Import_Ploidy_Request"})})," has been adjusted to check for empty rows in the excel."]}),"\n",(0,i.jsx)(n.h2,{id:"apps",children:"Apps"}),"\n",(0,i.jsxs)(n.p,{children:["Constant ",(0,i.jsx)(n.code,{children:"Xiphium Media Storage App ID"})," is added to method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Constants_Setup"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_MediaStorageController"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_MediaStorageGetDetails"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_MediaStorageGetMedia"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_MediaStorageGetUser"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_MediaStorageSaveDetails"})})," have been added for the MediaStorage app."]}),"\n",(0,i.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Constants_Add"})})," has it's syntax error in the ",(0,i.jsx)(n.code,{children:"#DECLARE"})," fixed. And for some reason the ",(0,i.jsx)(n.code,{children:"If (Count parameters<4)"})," replaced by ",(0,i.jsx)(n.code,{children:'If ($type="")'})]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Mail_NewMessage"})})," is modified to set property 'content' to 'html content'."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Ord_DeliveryAnnouncementMail"})})," now sends to ",(0,i.jsx)(n.a,{href:"mailto:rob.laveaux@pluggers.nl",children:"rob.laveaux@pluggers.nl"})," instead of ",(0,i.jsx)(n.a,{href:"mailto:info@pluggers.nl",children:"info@pluggers.nl"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>d});var i=t(7294);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);