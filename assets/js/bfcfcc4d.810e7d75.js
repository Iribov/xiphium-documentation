"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7829],{7036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(5893),r=n(1151);const o={title:"Xiphium 2024-W08 update",authors:["jim"]},s=void 0,a={permalink:"/xiphium-documentation/blog/2024/02/23/Xiphium-W07-Update",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-02-23-Xiphium-W07-Update/index.md",source:"@site/blog/2024-02-23-Xiphium-W07-Update/index.md",title:"Xiphium 2024-W08 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-02-23T00:00:00.000Z",formattedDate:"February 23, 2024",tags:[],readingTime:1.765,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W08 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2024-W09 update",permalink:"/xiphium-documentation/blog/2024/03/01/Xiphium-W09-Update"},nextItem:{title:"Xiphium 2024-W07 update",permalink:"/xiphium-documentation/blog/2024/02/16/Xiphium-W07-Update"}},d={authorsImageUrls:[void 0]},c=[{value:"Invoice",id:"invoice",level:2},{value:"Delivery Items",id:"delivery-items",level:2},{value:"Greenhouse Planning Actions",id:"greenhouse-planning-actions",level:2},{value:"TC Planning Cycles",id:"tc-planning-cycles",level:2},{value:"Crop",id:"crop",level:2}];function l(e){const t={admonition:"admonition",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,i.jsx)(t.h2,{id:"invoice",children:"Invoice"}),"\n",(0,i.jsx)(t.p,{children:"Invoice has received 3 extra fields to track who and when the record was last modified, And who created the record (date of creation was already tracked).\r\nMost (if not all) methods creating invoices have also received these 3 extra fields."}),"\n",(0,i.jsx)(t.h2,{id:"delivery-items",children:"Delivery Items"}),"\n",(0,i.jsxs)(t.p,{children:["Excel Export method ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Dit_ExportPercRootsvsAccept"})})," has been added. The name of the method suggests it export Delivery Items and compares the 'Percentage rooting' with the 'Percentage accepted'. This method used to be an object method (code directly written in a button), but has been moved to this newly created method."]}),"\n",(0,i.jsx)(t.p,{children:"The dialog popup for exporting to Excel has been extended."}),"\n",(0,i.jsx)(t.p,{children:"The 'CrossCode' is now copied from Greenhouse Field over to Delivery Items. This should help Breeding with keeping track of their crosses that are not (yet) 'declared' as PlantCodes."}),"\n",(0,i.jsx)(t.h2,{id:"greenhouse-planning-actions",children:"Greenhouse Planning Actions"}),"\n",(0,i.jsxs)(t.p,{children:["Method ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"GHPA_Excel_Export"})})," has been added. The method exports the square meters planned per week. This is done in 2 tabs (2 different views)."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Per Crop"}),"\n",(0,i.jsx)(t.li,{children:"Per Temperature\r\nThe Excel Export is still very bare-bones and feedback has already been given for improvements."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"tc-planning-cycles",children:"TC Planning Cycles"}),"\n",(0,i.jsxs)(t.p,{children:["Methods ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"CPA_SyncExportTCPlanCycles"})})," and ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"TCPA_SyncImportTCPlanACycles"})})," have been added, implying the beginning of (testing?) the Synchronization of Planning Cycles between locations. It is not clear if these methods are in use yet."]}),"\n",(0,i.jsx)(t.h2,{id:"crop",children:"Crop"}),"\n",(0,i.jsx)(t.p,{children:"A 'Create Record' Button has been added to the Crop List. The 'Add Record' button is still available for now, but should be removed over time.\r\nPeople quite often add a blank record, and don't modify it. This makes it confusing to other users who want to add a Crop, because they get a duplicate key error."}),"\n",(0,i.jsx)(t.p,{children:"The create record button gives a popup, and a record can only be created if a non-existing corp code is entered, preventing the duplicate key error."}),"\n",(0,i.jsx)(t.p,{children:"Preventing duplicate keys is important in both Xiphium, and reporting tools that use Xiphium data."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(7294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);