"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4959],{6283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=t(5893),r=t(1151);const o={title:"Xiphium 2024-W25 update",authors:["jim"]},s=void 0,d={permalink:"/xiphium-documentation/blog/2024/06/21/Xiphium-W25-Update",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-06-21-Xiphium-W25-Update/index.md",source:"@site/blog/2024-06-21-Xiphium-W25-Update/index.md",title:"Xiphium 2024-W25 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-06-21T00:00:00.000Z",formattedDate:"June 21, 2024",tags:[],readingTime:2.58,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W25 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2024-W26 update",permalink:"/xiphium-documentation/blog/2024/06/28/Xiphium-W26-Update"},nextItem:{title:"Xiphium 2024-W24 update",permalink:"/xiphium-documentation/blog/2024/06/14/Xiphium-W24-Update"}},l={authorsImageUrls:[void 0]},a=[{value:"Experiments",id:"experiments",level:2},{value:"Treatments",id:"treatments",level:3},{value:"Scan Menu",id:"scan-menu",level:3},{value:"Deliveries",id:"deliveries",level:2},{value:"Delivery Items",id:"delivery-items",level:3},{value:"GreenHouse",id:"greenhouse",level:2},{value:"Order",id:"order",level:2},{value:"Project2",id:"project2",level:2},{value:"Analytical lab",id:"analytical-lab",level:2},{value:"Reference Collection",id:"reference-collection",level:3},{value:"TC Plan Group",id:"tc-plan-group",level:2},{value:"Web Stuff",id:"web-stuff",level:2},{value:"Documents",id:"documents",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This week had quite some changes. Most changes are made to forms, which will not be covered here. Only Project form and Project Method changes will be discussed here."})}),"\n",(0,i.jsx)(n.h2,{id:"experiments",children:"Experiments"}),"\n",(0,i.jsx)(n.p,{children:"New detail tab added to Experiment called 'Documents DiT'."}),"\n",(0,i.jsx)(n.h3,{id:"treatments",children:"Treatments"}),"\n",(0,i.jsxs)(n.p,{children:["New detail logic added to Treatment detail (method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"ExT_SelectForDetail"})}),"). Page 4 and 5 search for related docuements. Page 6 searches for related Delivery_item and its documents."]}),"\n",(0,i.jsx)(n.h3,{id:"scan-menu",children:"Scan Menu"}),"\n",(0,i.jsx)(n.p,{children:"The scan menu for experiment is broken up into separate forms. This makes handling the logic of each screen more digestible and readable. This did introduce some bugs that are (mostly) addressed and fixed."}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Scanning_ClosePrinting"})})," is now also able to connect TC_Reg_Emp and Exp_Treatments based on their IDM relationship."]}),"\n",(0,i.jsx)(n.h2,{id:"deliveries",children:"Deliveries"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DeN_CreateInvoice"})})," has the following line commented out:\n",(0,i.jsx)(n.code,{children:"[Invoice_Items]InD_Description_D_Print_4:=[Purchase_Articles]PuArt_Group1"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"delivery-items",children:"Delivery Items"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DiT_ExportDel_Cust_Feedb_2045"})}),' has received some changes.\n"Plants Received" is now "Plants Pending1" and is calculated using an excel formula. "Plants Accepted" is now calculated using a formula if the field equals 0. Probably to catch instances where it is \'forgotten\' to be filled in.']}),"\n",(0,i.jsx)(n.h2,{id:"greenhouse",children:"GreenHouse"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GF_UpdateRecord"})})," now has an ",(0,i.jsx)(n.code,{children:"UNLOAD RECORD([Order])"})," line added to not block any [Order] records."]}),"\n",(0,i.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Ord_ExportExcel_Flex"})})," now has an extra option to include 'week request'."]}),"\n",(0,i.jsx)(n.h2,{id:"project2",children:"Project2"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Pro2_ExportExcel_Flex"})})," has been reworked to actually work."]}),"\n",(0,i.jsx)(n.h2,{id:"analytical-lab",children:"Analytical lab"}),"\n",(0,i.jsx)(n.h3,{id:"reference-collection",children:"Reference Collection"}),"\n",(0,i.jsx)(n.p,{children:"Detail screen of reference collection now also searches related documents."}),"\n",(0,i.jsx)(n.h2,{id:"tc-plan-group",children:"TC Plan Group"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"TCPG_ExportExcel_Flex"})})," seems to be expanded with a new option (or options). The exact changes are hard to read from the code diff."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"TCPG_UpdateRecord"})})," line 139 has been adjusted. The search for delivery items now excludes delivery items that are being delivered to comcode 001. This is done so that the field [TC_Plan_Group]TCPG_N_StartPlants_Delivered does not include plants sent to Iribov NL."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"The adjusted query in question is the following:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4D",children:'$productionLoc:=[TC_Plan_Group]TCPG_ComCode_ProductionLoc\n\n$dit:=ds.Delivery_Items.query("Dit_Pla_PlantCode = :1 and DiT_ComCode_Delivery_To # :2 and DiT_ComCode_Delivery_To # :3"; vplantcode; $productionLoc; "001")\n'})}),(0,i.jsx)(n.p,{children:"The new addition of the third parameter is intended to exclude internal deliveries to be counted as 'delivered plants'. Note that internal deliveries from Ghana to Macedonia will still be counted as 'plants delivered'."})]}),"\n",(0,i.jsx)(n.h2,{id:"web-stuff",children:"Web Stuff"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"000_TestRL"})})," has the following methods added to it: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Doc_AddDocument"})}),",\n",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Doc_AddDocumentWeb"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"CronTask_StartDaemon"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"App_OnStartup"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"App_OnStartup"})})," has removed the method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"CronTask_StartDaemon"})})," when 4D is in local mode. This change has been done to only let cronstasks run if Xiphium is running on a server, and not while running locally (for testing/developing)."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsUploadScanData"})})," has been adjusted. It seems like the method got some extra error handling needed for practical use."]}),"\n",(0,i.jsx)(n.h3,{id:"documents",children:"Documents"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Doc_ConvertDocument"})})," has been added to convert .HEIC files to .JPG. This is because support for the .HEIC format is not widespread enough (yet)."]}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Doc_AddDocument"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Doc_ReplaceDocument"})})," now automatically converts .HEIC files to .JPG using the new ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Doc_ConvertDocument"})})," method."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(7294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);