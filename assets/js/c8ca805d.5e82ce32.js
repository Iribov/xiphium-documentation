"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8889],{7214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=n(5893),r=n(1151);const o={title:"Xiphium 2024-W39 update",authors:["jim"]},s=void 0,d={permalink:"/xiphium-documentation/blog/2024/10/03/Xiphium-W39-Update/Index",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-10-03-Xiphium-W39-Update/Index.md",source:"@site/blog/2024-10-03-Xiphium-W39-Update/Index.md",title:"Xiphium 2024-W39 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-10-03T00:00:00.000Z",formattedDate:"October 3, 2024",tags:[],readingTime:3.005,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W39 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2024-W40 update",permalink:"/xiphium-documentation/blog/2024/10/04/Xiphium-W40-Update/Index"},nextItem:{title:"Xiphium 2024-W37 update (1 year Git(Hub) aniversary)",permalink:"/xiphium-documentation/blog/2024/09/25/Xiphium-W37-Update/Index"}},a={authorsImageUrls:[void 0]},l=[{value:"Analytical Lab",id:"analytical-lab",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Plant Company Year",id:"plant-company-year",level:3},{value:"DeliveryNote",id:"deliverynote",level:2},{value:"Order",id:"order",level:2},{value:"Project2_Year",id:"project2_year",level:2},{value:"Documents",id:"documents",level:2},{value:"Protocol Component",id:"protocol-component",level:2}];function h(e){const t={admonition:"admonition",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"analytical-lab",children:"Analytical Lab"}),"\n",(0,i.jsx)(t.p,{children:"The Analytical lab has 2 new tables inserted into their workflow:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Analysis_Lysis"}),"\n",(0,i.jsx)(t.li,{children:"Analysis_Lysis_Plate"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Analysis_Lysis has been inserted between Analysis_Sample and Analysis_Isolation to facilitate the user to create seperate Lysis and Isolation plates (before, these were considered 'the same' plate).\nThis change was necessary since from the first design of the Analytical Lab automation, a 'lysis plate' and 'elution plate' were always identical, hence the previous 'isolation plate' was enough to cover them both. Since then, new techniques have been adopted making this assumption untrue, and a necessity for the extra 'lysis' tables was born."}),"\n",(0,i.jsx)(t.p,{children:"This change was first developed seperately in project mode, so the changes could be tracked. The tracked changes came to 360 files changed, of which 60 are project methods (in project mode, every object method is also a file. So deleting/adding objects with a method can result in many file changes).\nImplementing these changes was done manually, copy and pasted file by file. UI changed had to be done manually, object by object."}),"\n",(0,i.jsx)(t.p,{children:"After implementation, some bugs were reported. This was mostly due to copy/paste mistakes, and partially due to project mode differences and incomplete testing beforehand."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"It is not recommended to do big changes like this without using project mode in production. All the manual copy+pasting took many hours, and can be replaced by a single 'merge', resulting in many more hours available for testing."})}),"\n",(0,i.jsx)(t.p,{children:"All file changes regarding this major update will be ignored for the rest of this blog post."}),"\n",(0,i.jsx)(t.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,i.jsx)(t.p,{children:"New Dashboard page has been added showing several TPPs:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"TPP Rooting"}),"\n",(0,i.jsx)(t.li,{children:"TPP Delivered"}),"\n",(0,i.jsx)(t.li,{children:"TPP Planted"}),"\n",(0,i.jsx)(t.li,{children:"TPP Accepted/Invoiced"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"plant-company-year",children:"Plant Company Year"}),"\n",(0,i.jsxs)(t.p,{children:["Method ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"PlaCY_UpdateRecord"})})," has been updated to calculate more kinds of Transfer per Plant (TPP) to facilitate the dashboard."]}),"\n",(0,i.jsx)(t.p,{children:"The dashboard can show either a bar chart for the selected years, or a bubble chart showing the TPP of the last selected year but the total amount of plants of the selected years."}),"\n",(0,i.jsx)(t.h2,{id:"deliverynote",children:"DeliveryNote"}),"\n",(0,i.jsx)(t.p,{children:"Filter is made to filter records where Pending 1 or Pending 2 is not 0."}),"\n",(0,i.jsx)(t.h2,{id:"order",children:"Order"}),"\n",(0,i.jsxs)(t.p,{children:["Go to option added to 'Go to Prices' using method ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Ord_Goto_Prices"})})]}),"\n",(0,i.jsx)(t.h2,{id:"project2_year",children:"Project2_Year"}),"\n",(0,i.jsx)(t.p,{children:"Some fields have been renamed:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Old fieldname"}),(0,i.jsx)(t.th,{children:"New fieldname"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pro2Y_Am_Saldo_Budget_Cost"}),(0,i.jsx)(t.td,{children:"Pro2Y_Am_A_Saldo"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pro2Y_Am_C_Invoiced_TC"}),(0,i.jsx)(t.td,{children:"Pro2Y_Am_B_TC_Saldo"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pro2Y_Am_C_Invoiced_Ana"}),(0,i.jsx)(t.td,{children:"Pro2Y_Am_B_Ana_Saldo"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pro2Y_Am_C_Invoiced_GF"}),(0,i.jsx)(t.td,{children:"Pro2Y_Am_B_GF_Invoiced"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pro2Y_Am_C_Invoiced_Other"}),(0,i.jsx)(t.td,{children:"Pro2Y_Am_B_Other_Saldo"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pro2Y_Am_C_Invoiced_Total"}),(0,i.jsx)(t.td,{children:"Pro2Y_Am_B_Total_Invoiced"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pro2Y_Am_Saldo_Budget_Cost_MP"}),(0,i.jsx)(t.td,{children:"Pro2Y_Am_A_Saldo_MP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pro2Y_Am_B_Tot_Budget_Saldo"}),(0,i.jsx)(t.td,{children:"Pro2Y_Am_B_Tot_Saldo"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pro2Y_Am_C_Budget_Real"}),(0,i.jsx)(t.td,{children:"Pro2Y_Am_C_Real"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pro2Y_Am_C_Budget_Saldo"}),(0,i.jsx)(t.td,{children:"Pro2Y_Am_C_Saldo"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"And three new fields have been added:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Pro2Y_Rec_Pro2W"}),"\n",(0,i.jsx)(t.li,{children:"Pro2Y_Am_D_Invoiced"}),"\n",(0,i.jsx)(t.li,{children:"Pro2Y_Hour_Saldo"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"documents",children:"Documents"}),"\n",(0,i.jsxs)(t.p,{children:["Method ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Doc_CopyDocument"})})," has been adjusted to be able to suppress the alert when a document is not found."]}),"\n",(0,i.jsxs)(t.p,{children:["Method ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Exp_SyncExportDocuments"})})," has been adjusted to only try to export a document if it exists on the server. Newly added method ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"File_ExistsDocumentOnServer"})})," helps with this."]}),"\n",(0,i.jsxs)(t.p,{children:["Methods ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Doc_GetPreviewableItems"})})," and ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Doc_ShowListFormPreview"})})," have been adjusted to be better compatible with OneDrive files."]}),"\n",(0,i.jsxs)(t.p,{children:["Methods ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Exp_SyncExportExperiments"})})," and ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Exp_SyncImportExperiments"})})," now exports/imports both the Experiment and Treatment documents."]}),"\n",(0,i.jsx)(t.h2,{id:"protocol-component",children:"Protocol Component"}),"\n",(0,i.jsx)(t.p,{children:"Buttons 'vScan_Btn_Close3' and 'vScan_Btn_Close5' have been added to form [Prot_Component];'ProtComp_List'. The 2 buttons contain almost identical code for importing tab delimited text from the pasteboard only difference is that one of the buttons doesn't actually save the record, and is likely used as a test."})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var i=n(7294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);