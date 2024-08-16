"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6702],{918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(5893),i=n(1151);const r={title:"Xiphium 2024-W33 update",authors:["jim"]},s=void 0,a={permalink:"/xiphium-documentation/blog/2024/08/16/Xiphium-W33-Update/Index",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-08-16-Xiphium-W33-Update/Index.md",source:"@site/blog/2024-08-16-Xiphium-W33-Update/Index.md",title:"Xiphium 2024-W33 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-08-16T00:00:00.000Z",formattedDate:"August 16, 2024",tags:[],readingTime:1.9,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W33 update",authors:["jim"]},unlisted:!1,nextItem:{title:"Xiphium 2024-W32 update",permalink:"/xiphium-documentation/blog/2024/08/09/Xiphium-W32-Update/Index"}},d={authorsImageUrls:[void 0]},l=[{value:"Company",id:"company",level:2},{value:"Employee Job",id:"employee-job",level:2},{value:"Order",id:"order",level:2},{value:"PlantC_Year &amp; PlantTotal",id:"plantc_year--planttotal",level:2},{value:"Web Stuff",id:"web-stuff",level:2},{value:"Misc",id:"misc",level:2},{value:"Meme of the week",id:"meme-of-the-week",level:2}];function c(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"company",children:"Company"}),"\n",(0,o.jsxs)(t.p,{children:["Method ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Com_UpdateRecord_Val"})})," now does a query to [Com_History] to check if there is only 1 [Com_History] history record with status 'current' and identical 'ComCode_Prod'"]}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Com_UpdateRecord_Val Code addition"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4D",children:'C_OBJECT($comHist)\n$comHist:=ds.Com_History.query("ComH_ComCode = :1 and ComH_Status = :2"; [Company]Com_ComCode_Num; "Curr@")\nIf ($comHist.length=1)\n\t$comHist:=$comHist.first()\n\t[Company]Com_ComCode_Prod:=$comHist.ComH_ComCode_Prod\nElse \n\t[Company]Com_ComCode_Prod:=0\nEnd if \n'})})]}),"\n",(0,o.jsx)(t.h2,{id:"employee-job",children:"Employee Job"}),"\n",(0,o.jsxs)(t.p,{children:["Method ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"EmJo_Excel_Export"})})," has a new colums called \"MF\", which exports the multiplication factor, calculated as 'totalTransfers'/totalScanned'."]}),"\n",(0,o.jsx)(t.h2,{id:"order",children:"Order"}),"\n",(0,o.jsxs)(t.p,{children:["Method ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Ord_ExportExcel_Flex"})})," Now has an extra (optional) column: 'Clones in T4 TCPA'. This option lists all the clones in the related T4 TCPAs"]}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Code proposition"}),(0,o.jsx)(t.p,{children:"The added code can be greatly simplified from:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4D",children:'$TCPA:=ds.TC_Plan_Action.query("TCPA_IDM_Ord = :1 and TCPA_Activity_Group = :2 and TCPA_Status # :3"; [Order]Ord_IDM_OrderNumber; "T4"; "Delete")\nIf ($TCPA.length<=1)\n\t$TCPAClones:=$TCPA.max("TCPA_Clone_Clones_Used")\n\txlSheetSetCellText($sheet; $row; vColumn83; $TCPAClones)\nElse \n\tC_COLLECTION($col)\n\t$col:=New collection\n\tFor each ($TCPAitem; $TCPA)\n\t\t$col:=$col.concat(Split string($TCPAitem.TCPA_Clone_Clones_Used; " | "))\n\tEnd for each \n\t$col:=$col.distinct()\n\t$TCPAClones:=$col.join(" | ")\n\txlSheetSetCellText($sheet; $row; vColumn83; $TCPAClones)\nEnd if \n'})}),(0,o.jsx)(t.p,{children:"to"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4D",children:'$TCPA:=ds.TC_Plan_Action.query("TCPA_IDM_Ord = :1 and TCPA_Activity_Group = \'T4\' and TCPA_Status # \'Delete\'"; [Order]Ord_IDM_OrderNumber)\n$col:=$TCPA.distinct("TCPA_Clone_Clones_Used")\n//do an extra join and split to account for records with multiple clones\n$string:=$col.join(" | ")\n$TCPAClones:=Split string($string; " | ").distinct()\nxlSheetSetCellText($sheet; $row; vColumn83; $TCPAClones)\n'})}),(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"Above is optimized for readability and not (neccessarily) for performance."})}),(0,o.jsx)(t.p,{children:"The query is simplified by putting hard coded values in the query string itself, instead of using parameters. The If Else statement is not necessary (it would slightly improve performance, sacrificing some readability)."})]}),"\n",(0,o.jsx)(t.h2,{id:"plantc_year--planttotal",children:"PlantC_Year & PlantTotal"}),"\n",(0,o.jsx)(t.p,{children:"Both [PlantC_Year] and [PlantTotal] have been worked on, adding some methods and form changes for user functionality."}),"\n",(0,o.jsx)(t.h2,{id:"web-stuff",children:"Web Stuff"}),"\n",(0,o.jsx)(t.p,{children:"Many changes are done with methods starting with 'Web'. Most of them are refactorings (renaming of variables), some methods are added and there are some functional changes as well. All changes are too many to list here."}),"\n",(0,o.jsx)(t.h2,{id:"misc",children:"Misc"}),"\n",(0,o.jsxs)(t.p,{children:["Utility methods ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"String_URLDecode"})})," and ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"String_URLEncode"})})," have been added. These methods encode/decode a string."]}),"\n",(0,o.jsx)(t.h2,{id:"meme-of-the-week",children:"Meme of the week"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(2886).Z+"",width:"600",height:"530"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Meme of the week is NOT a recurrent theme and is only instantiated whenever I feel like it."})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},2886:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/technical-debt-1-600x530-8e84c6a82ce23bc670a22a43dc2d4601.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);