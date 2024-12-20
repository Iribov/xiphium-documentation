"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7403],{1673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=t(5893),s=t(1151);const l={title:"Xiphium 2024-W29 update",authors:["jim"]},a=void 0,r={permalink:"/xiphium-documentation/blog/2024/07/22/Xiphium-W29-Update/Index",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-07-22-Xiphium-W29-Update/Index.md",source:"@site/blog/2024-07-22-Xiphium-W29-Update/Index.md",title:"Xiphium 2024-W29 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-07-22T00:00:00.000Z",formattedDate:"July 22, 2024",tags:[],readingTime:2.675,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W29 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2024-W30 update",permalink:"/xiphium-documentation/blog/2024/07/28/Xiphium-W30-Update/Index"},nextItem:{title:"Xiphium 2024-W28 update",permalink:"/xiphium-documentation/blog/2024/07/12/Xiphium-W28-Update"}},o={authorsImageUrls:[void 0]},d=[{value:"Breeder Rights",id:"breeder-rights",level:2},{value:"Deliveries",id:"deliveries",level:2},{value:"Greenhouse",id:"greenhouse",level:2},{value:"Order",id:"order",level:2},{value:"TCPG",id:"tcpg",level:2},{value:"TCPC",id:"tcpc",level:2},{value:"Plant Prices",id:"plant-prices",level:2},{value:"Clone",id:"clone",level:2},{value:"Web stuff",id:"web-stuff",level:2},{value:"New Maintenance app",id:"new-maintenance-app",level:3}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,i.jsx)(n.h2,{id:"breeder-rights",children:"Breeder Rights"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"BreRig_ColorField"})})," has been added to color the status field."]}),"\n",(0,i.jsx)(n.h2,{id:"deliveries",children:"Deliveries"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Access_SetupDeliveriesMenu"})}),' has tab "Box Packing" added to DeliveryNote (detail?).']}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DeN_Print_BoxLabel_DiTBoPa"})}),' has been added. The method uses the Form [DeliveryNote:7]; "DeN_Print_BoxLabel_DiTBoPa" to print labels.']}),"\n",(0,i.jsx)(n.p,{children:"A button has been added that seems to Create [Delivery_Items_BoxPacking] records for tge highlighted [Delivery_Items]."}),"\n",(0,i.jsx)(n.h2,{id:"greenhouse",children:"Greenhouse"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GF_ExportExcelReportEstimateQC"})})," now has 6 extra columns in its export named:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"First day prod TC"}),"\n",(0,i.jsx)(n.li,{children:"Last day prod TC"}),"\n",(0,i.jsx)(n.li,{children:"First week prod TC"}),"\n",(0,i.jsx)(n.li,{children:"Last week prod TC"}),"\n",(0,i.jsx)(n.li,{children:"First day planting GF"}),"\n",(0,i.jsx)(n.li,{children:"Last day planting GF"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Button "ExT_Btn_Label2" on form [GreenhouseField];"GF_List" has been adjusted. It seems to include more data in an IF statement, as well as a helpful alert text when something \'special\' has occurred.'}),"\n",(0,i.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Ord_ExportScoreListQCBT"})})," now has an extra column that calculates a week from TCPA and takes the transport temperature from [Crop]."]}),"\n",(0,i.jsx)(n.h2,{id:"tcpg",children:"TCPG"}),"\n",(0,i.jsx)(n.p,{children:'Button "TCPG_Btn_ModifyBatch1" has been added to Form [Prices];"PlaPri_List". The buttons seems to be copied from a TCPG excel export and seems to be partially modified.'}),"\n",(0,i.jsx)(n.h2,{id:"tcpc",children:"TCPC"}),"\n",(0,i.jsx)(n.p,{children:'Button "Button12" has been added to the Form [TC_Plan_Cycle];"TCPC_List". The button seems to be updating the Cycles, but it also seems that the code is still in development.'}),"\n",(0,i.jsx)(n.h2,{id:"plant-prices",children:"Plant Prices"}),"\n",(0,i.jsx)(n.p,{children:'Button "vScan_BTN_Close5" has been added to the Form [Prices];"PlaPri_List". The button seems to be copied from a TC2E Excel import button and has not been properly adjusted yet.'}),"\n",(0,i.jsx)(n.h2,{id:"clone",children:"Clone"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Clo_UpdateRecord_Ana"})})," is now compatible with having a single clone that has multiple analysis_samples with an identical display code."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Code style proposal"}),(0,i.jsx)(n.p,{children:"The code of the enhanced part is now as follows:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4D",children:'QUERY:C277([Analysis_Sample]; [Analysis_Sample:5]AnSam_PlantCloneCode=[Clone]Clo_PlantCloneCode)\nQUERY SELECTION([Analysis_Sample]; [Analysis_Sample]AnSam_DisplayCode="2")\nIf (Records in selection([Analysis_Sample])=1)\n\t[Clone]Clo_AnSam_Result_2:=[Analysis_Sample]AnSam_Result_1+" "+[Analysis_Sample]AnSam_Result_2\n\t[Clone]Clo_AnaOrder2:=[Analysis_Sample]AnSam_OrderCode\nElse \n\tQUERY SELECTION([Analysis_Sample]; [Analysis_Sample]AnSam_Result_1#"")\n\tIf (Records in selection([Analysis_Sample])>=1)\n\t\tORDER BY([Analysis_Sample]; [Analysis_Sample]AnSam_OrderCode; <)\n\t\tFIRST RECORD([Analysis_Sample])\n\t\t[Clone]Clo_AnSam_Result_2:=[Analysis_Sample]AnSam_Result_1+" "+[Analysis_Sample]AnSam_Result_2\n\t\t[Clone]Clo_AnaOrder2:=[Analysis_Sample]AnSam_OrderCode\n\tEnd if \nEnd if \n'})}),(0,i.jsx)(n.p,{children:"There is an IF statement for when there is only 1 record found, and a longer ELSE statement if this is not the case."}),(0,i.jsx)(n.p,{children:"It seems like the code can be simplified and the whole IF ELSE statement can be removed, so the code that is currently under the ELSE statement is always executed. This might technically slow down code execution in most cases, but it increases readability of the code:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'QUERY([Analysis_Sample]; [Analysis_Sample]AnSam_PlantCloneCode=[Clone]Clo_PlantCloneCode;*)\nQUERY([Analysis_Sample];&;[Analysis_Sample]AnSam_DisplayCode="2";*)\nQUERY([Analysis_Sample];&;[Analysis_Sample]AnSam_Result_1#"")\n\nIf (Records in selection([Analysis_Sample])>=1)\n\tORDER BY([Analysis_Sample]; [Analysis_Sample]AnSam_OrderCode; <)\n\tFIRST RECORD([Analysis_Sample])\n\t[Clone]Clo_AnSam_Result_2:=[Analysis_Sample]AnSam_Result_1+" "+[Analysis_Sample]AnSam_Result_2\n\t[Clone]Clo_AnaOrder2:=[Analysis_Sample]AnSam_OrderCode\nElse\n\t[Clone]Clo_AnSam_Result_2:=""\n\t[Clone]Clo_AnaOrder2:=""\nEnd if \n'})}),(0,i.jsx)(n.p,{children:'In hindsight we do need the IF ELSE statement to set an empty string for Clo_AnSam_Result_2, but that\'s only because of the string concatenation that is happening otherwise (if no records are found, it would result in an " " instead of "")'})]}),"\n",(0,i.jsx)(n.h2,{id:"web-stuff",children:"Web stuff"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"WebDocumentsSendFile"})})," has been created to abstract logic from ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_DocumentsController"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"new-maintenance-app",children:"New Maintenance app"}),"\n",(0,i.jsxs)(n.p,{children:["A new constant has been added to the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Constants_Setup"})}),' method. The constant i named "Xiphium Maintenance App ID".']}),"\n",(0,i.jsx)(n.p,{children:"Methods have been added for the maintenance app:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_MaintenanceController"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_MaintenanceGetEquipment"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_MaintenanceGetUser"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_MaintenanceSaveMaintenance"})})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);