"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2400],{1303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(5893),o=t(1151);const r={title:"Xiphium 2024-W41 update",authors:["jim"]},d=void 0,s={permalink:"/xiphium-documentation/blog/2024/10/11/Xiphium-W41-Update/Index",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-10-11-Xiphium-W41-Update/Index.md",source:"@site/blog/2024-10-11-Xiphium-W41-Update/Index.md",title:"Xiphium 2024-W41 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-10-11T00:00:00.000Z",formattedDate:"October 11, 2024",tags:[],readingTime:1.53,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W41 update",authors:["jim"]},unlisted:!1,nextItem:{title:"Xiphium 2024-W40 update",permalink:"/xiphium-documentation/blog/2024/10/04/Xiphium-W40-Update/Index"}},a={authorsImageUrls:[void 0]},c=[{value:"Experiment Scan Menu",id:"experiment-scan-menu",level:2},{value:"Project2",id:"project2",level:2},{value:"Project2 Year",id:"project2-year",level:3},{value:"Analytical Lab",id:"analytical-lab",level:2},{value:"Invoice",id:"invoice",level:2},{value:"Order",id:"order",level:2},{value:"Protocol Component",id:"protocol-component",level:2},{value:"TCPA",id:"tcpa",level:2},{value:"Document",id:"document",level:2},{value:"Misc",id:"misc",level:2},{value:"Web stuff",id:"web-stuff",level:2}];function h(e){const n={admonition:"admonition",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"experiment-scan-menu",children:"Experiment Scan Menu"}),"\n",(0,i.jsx)(n.p,{children:"Bugfixes done on the experiment scan menu."}),"\n",(0,i.jsx)(n.p,{children:"Still a bug with the new photo app where a photo can be linked to a treatment by scanning the barcode of a box. The 'new way' of connecting [TC_Reg_Emp] and [Exp_Treatment] is not implemented there (yet)."}),"\n",(0,i.jsx)(n.h2,{id:"project2",children:"Project2"}),"\n",(0,i.jsx)(n.p,{children:'2 new detail forms have been added called "Hour MP" and "Real MP". These tabs are Project2 Year forms.'}),"\n",(0,i.jsx)(n.h3,{id:"project2-year",children:"Project2 Year"}),"\n",(0,i.jsxs)(n.p,{children:["Several changes have been made to Project2 Year. One of the changes is method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Pro2Y_UpdateRecord"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"analytical-lab",children:"Analytical Lab"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"AnIsoPlate_Excel_Export_PCR2"})})," has been modified to adjust to the new [Analysis_Lysis_Plate] and [Plate_Activty] table."]}),"\n",(0,i.jsx)(n.h2,{id:"invoice",children:"Invoice"}),"\n",(0,i.jsx)(n.p,{children:'Field [Invoice]Inv_Reason_Credit is now unlocked when the status of the invoice is "Send" and/or "Paid".'}),"\n",(0,i.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,i.jsx)(n.p,{children:"Field [Order]Ord_Invoice has been added to the Order filter."}),"\n",(0,i.jsx)(n.h2,{id:"protocol-component",children:"Protocol Component"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"ProtComp_ControlAccess"})})," has been added. This method makes it so that you can only edit Protocol Components from the current location (the location Xiphium is running)"]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"ProtComp_DuplicateToLocation"})})," has been modified. The progressbar code is now commented out"]}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"ProtComp_SyncExportProtComp"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"ProtComp_SyncImportDocuments"})})," have been modified. It seems like it now better accommodates the synchronization of documents related to the Protocol Component."]}),"\n",(0,i.jsx)(n.h2,{id:"tcpa",children:"TCPA"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"TCPA_SyncImportTCPlanActions"})})," has been modified to no overwrite the connected order (Order IDM) with nothing, if there was an Order IDM present in the destination TCPA."]}),"\n",(0,i.jsx)(n.h2,{id:"document",children:"Document"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Doc_AddDocument"})})," now implements the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Doc_Updaterecord"})})," method."]}),"\n",(0,i.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Scanning_PrintTrayLabelsLilium"})})," has been added. This method prints tray labels with a specific format for Lilium."]}),"\n",(0,i.jsx)(n.h2,{id:"web-stuff",children:"Web stuff"}),"\n",(0,i.jsx)(n.p,{children:"The 'Media' app (for Medium from the TC kitchen?) has been added to Xiphium."})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>d});var i=t(7294);const o={},r=i.createContext(o);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);