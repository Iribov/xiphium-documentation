"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5727],{5880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(5893),s=t(1151);const r={title:"Xiphium 2024-W51 update",authors:["jim"]},o=void 0,d={permalink:"/xiphium-documentation/blog/2024/12/19/Xiphium-W51-Update/Index",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-12-19-Xiphium-W51-Update/Index.md",source:"@site/blog/2024-12-19-Xiphium-W51-Update/Index.md",title:"Xiphium 2024-W51 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-12-19T00:00:00.000Z",formattedDate:"December 19, 2024",tags:[],readingTime:3.09,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W51 update",authors:["jim"]},unlisted:!1,nextItem:{title:"Xiphium 2024-W50 update",permalink:"/xiphium-documentation/blog/2024/12/13/Xiphium-W50-Update/Index"}},a={authorsImageUrls:[void 0]},l=[{value:"Project Mode conversion",id:"project-mode-conversion",level:2},{value:"Invoices",id:"invoices",level:2},{value:"Analysis Pathogen Cost Caclulation",id:"analysis-pathogen-cost-caclulation",level:2},{value:"Delivery Note",id:"delivery-note",level:2},{value:"Experiment",id:"experiment",level:2},{value:"Financial Ledgers",id:"financial-ledgers",level:2},{value:"Greenhouse",id:"greenhouse",level:2},{value:"GHPA",id:"ghpa",level:3},{value:"Order",id:"order",level:2},{value:"Web stuff",id:"web-stuff",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,i.jsx)(n.h2,{id:"project-mode-conversion",children:"Project Mode conversion"}),"\n",(0,i.jsx)(n.p,{children:"Highlight buttons are not supported in project mode. They are automatically converted to invisible buttons. Some buttons gain the 'on mouse enter' form event as a side effect."}),"\n",(0,i.jsx)(n.h2,{id:"invoices",children:"Invoices"}),"\n",(0,i.jsxs)(n.p,{children:["A new tab called 'Documents' is added to the access method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Access_SetupCompanyMenu"})}),". There are already 2 other with this name...\nA page 10 is added to the method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Inv_SelectForDetail"})})," with what seems to be a document tab."]}),"\n",(0,i.jsx)(n.h2,{id:"analysis-pathogen-cost-caclulation",children:"Analysis Pathogen Cost Caclulation"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"An_Calc_Pathogen_Cost"})})," has been added. This method can calculate the expected cost of pathogen analysis done by the analytical lab based on several parameters."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Clo_Analysis_Cost_Calculation"})})," has been renamed to ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Cro_Analysis_Pathogen_Cost_Calc"})}),". This method now takes a Crop entity to search for related Analysis_Groups and can calculate the analysis cost using the new ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"An_Calc_Pathogen_Cost"})})," method."]}),"\n",(0,i.jsx)(n.h2,{id:"delivery-note",children:"Delivery Note"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DeN_GetNextDeliveryNoteNrPurcha"})})," has been modified. The SQL query has been altered so that comcode master is now ignored."]}),"\n",(0,i.jsx)(n.h2,{id:"experiment",children:"Experiment"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Exp_ExportToLocation"})})," has been added. This method uses the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Exp_SyncExportExperiments"})})," to export experiments to another location of Xiphium."]}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Exp_SyncExportDocuments"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Exp_SyncExportExpTreatments"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Exp_SyncExportExperiments"})})," have been modified to facilitate the ability to manually synchronize experiments."]}),"\n",(0,i.jsx)(n.h2,{id:"financial-ledgers",children:"Financial Ledgers"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"FinLeM_UpdateRecord"})})," has been modified. The method now has an extra if statement that checks if 'type1' contains a 'C' before applyying the amount realized to the forecast:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4D",children:'If ([FinLed_Month]FinLeM_Status="Prognosis")\n\t[FinLed_Month]FinLeM_Amount_Open_SC:=[FinLed_Month]FinLeM_Amount_ForeCast2_SC-[FinLed_Month]FinLeM_Amount_Realized_SC\n// highlight-next-line\n\tIf ([FinLed_Total]FinLeT_Type1#("@"+"C"+"@"))\n\t\tIf ([FinLed_Month]FinLeM_Amount_Realized_SC>[FinLed_Month]FinLeM_Amount_ForeCast2_SC)\n\t\t\t[FinLed_Month]FinLeM_Amount_ForeCast2_SC:=[FinLed_Month]FinLeM_Amount_Realized_SC\n\t\tEnd if \n// highlight-next-line\n\tEnd if \nEnd if \n'})}),"\n",(0,i.jsx)(n.h2,{id:"greenhouse",children:"Greenhouse"}),"\n",(0,i.jsx)(n.h3,{id:"ghpa",children:"GHPA"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_Excel_Export"})})," has been modified. This square meters export method had some overlooked bugs that made it behave weirdly. The export works more stable now, but the results have not yet been verified."]}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_Forwards_Calculation"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_Forwards_Calc_Recursion"})})," have been modified. After some discussion, the way of doing the forwards calculation is revised. This is not yet implemented in the code."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_UpdateRecord_GF"})})," has bee extended with code fill the 'moving' actions from the [GF_Locations_History] table. This code first looks for a matching week, if no actions are found, the search is widened by 1 week on each side (total of 3 weeks). Then the highest date is used as 'date realized' and the 'plants planned' become the 'plants realized' (since the amount of plants moves is not kept in the [GF_Locations_History] or [Greenhouse_Field] tables)."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Ord_Create_and_Update_GHPA"})})," has been fixed of 2 issues."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"a single if statement prevented already created floating actions to behave as a floating action."}),"\n",(0,i.jsx)(n.li,{children:"The check whether changes made to a GHPA were actual changes in values was wrong. It always saved the GHPA (even if not needed!), thus wasting time. This check is now corrected."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Ord_ArchiveBatch"})})," has been extended with the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4D",children:"If (vOrd_DaysH1Set0#0)\n\t[Order]Ord_Cycle_H1_Manual:=0\n\t$week2:=[Order]Ord_Week4\n\t$date2:=DateTime_WeekNrToDate(Num:C11(Substring($week2; 6; 2)); Num:C11(Substring($week2; 1; 4)))\n\t[Order]Ord_Date_Planned:=$date2\n\t[Order]Ord_Date_Stage3:=[Order]Ord_Date_Planned+[Order]Ord_Cycle_H1_Manual\n\t$date1:=[Order]Ord_Date_Stage3\n\t[Order]Ord_Week_Stage3:=DateTime_GetYearWeekNr($date1)\n\t[Order]Ord_Date_Modified3:=Current date\n\t[Order]Ord_EmpName_Modified7:=Current user\nEnd if \n"})}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Ord_UpdateRecord"})})," has been modified. The method now ingores puts the 'H1 season days' to 0 when the new GHPA protocol is used (season days are planned to be embedded into this new protocol)."]}),"\n",(0,i.jsx)(n.h2,{id:"web-stuff",children:"Web stuff"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_TCStockCheckGetStock"})})," has been modified.\nSmall modifications in the reply:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'plantName is now CropName1 +" "+ PlantName isntead of just PlantName'}),"\n",(0,i.jsx)(n.li,{children:"current weeks is now rounded down instead of up."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The reply now also contains additional information from related planning action(s):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"TCPA id"}),"\n",(0,i.jsx)(n.li,{children:"TCPA status"}),"\n",(0,i.jsx)(n.li,{children:"TCPA week real"}),"\n",(0,i.jsx)(n.li,{children:"TCPA activity"}),"\n",(0,i.jsx)(n.li,{children:"TCPA N Plants Real"}),"\n",(0,i.jsx)(n.li,{children:"TCPA N Plants Produced"}),"\n",(0,i.jsx)(n.li,{children:"TCPA N Plants Present"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This extra information will certainly enrich the app."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);