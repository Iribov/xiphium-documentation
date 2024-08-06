"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8593],{65:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(5893),t=r(1151);const i={title:"Xiphium 2024-W22 update",authors:["jim"]},d=void 0,o={permalink:"/xiphium-documentation/blog/2024/05/31/Xiphium-W22-Update",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-05-31-Xiphium-W22-Update/index.md",source:"@site/blog/2024-05-31-Xiphium-W22-Update/index.md",title:"Xiphium 2024-W22 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-05-31T00:00:00.000Z",formattedDate:"May 31, 2024",tags:[],readingTime:5.03,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W22 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2024-W23 update",permalink:"/xiphium-documentation/blog/2024/06/07/Xiphium-W23-Update"},nextItem:{title:"Xiphium 2024-W21 update",permalink:"/xiphium-documentation/blog/2024/05/24/Xiphium-W21-Update"}},a={authorsImageUrls:[void 0]},l=[{value:"Leading_zeros",id:"leading_zeros",level:2},{value:"Interprocess variables",id:"interprocess-variables",level:2},{value:"Experiment Scanning Menu",id:"experiment-scanning-menu",level:2},{value:"Access",id:"access",level:2},{value:"Analyis_Order Access",id:"analyis_order-access",level:3},{value:"Greenhouse-Field excel export",id:"greenhouse-field-excel-export",level:2},{value:"Order",id:"order",level:2},{value:"Order Check",id:"order-check",level:3},{value:"Excel Export",id:"excel-export",level:3},{value:"Update Record",id:"update-record",level:3},{value:"Project2",id:"project2",level:2},{value:"Project2_Year",id:"project2_year",level:2},{value:"Query and Order By editor",id:"query-and-order-by-editor",level:2},{value:"DeliveryNote",id:"deliverynote",level:2},{value:"Clone",id:"clone",level:2},{value:"Web stuff",id:"web-stuff",level:2},{value:"Unload Record",id:"unload-record",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,s.jsx)(n.h2,{id:"leading_zeros",children:"Leading_zeros"}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Leading_zeros"})})," is added for a better way to add a 0 before a number when needed. The method accepts both text and numbers."]}),"\n",(0,s.jsx)(n.p,{children:'The plan is to slowly replace all the String($var;"000") statements with this new method.'}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"example"}),(0,s.jsxs)(n.p,{children:["Let's say we have company code variable ",(0,s.jsx)(n.code,{children:"$comCode"}),' which is a number, and we need to convert it to a string. We know that company codes below 999 need a leading "0".']}),(0,s.jsxs)(n.p,{children:["When using the classic ",(0,s.jsx)(n.code,{children:'$comcodeText:=String($comCode;"000")'})," code, a number (or string) above above 999 would give an invalid value."]}),(0,s.jsx)(n.p,{children:"Therefore an 'if' statement was needed:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4D",children:'If($comCode<1000)\n\t$comCodeText:=String($comCode;"000")\nElse\n\t$comCodeText:=String($comCode)\nEnd If\n'})}),(0,s.jsx)(n.p,{children:"This could be reduced to one line using the Choose function, but that doesn't make it more readable (or performant):"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4D",children:'$comCodeText:=Choose($comCode<1000;String($comCode;"000");String($comCode))\n'})}),(0,s.jsxs)(n.p,{children:["Using the new ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Leading_zero"})})," method, no if statement is needed:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4D",children:"$comCodeText:=Leading_zeros($comCode;3)\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"interprocess-variables",children:"Interprocess variables"}),"\n",(0,s.jsx)(n.p,{children:"Interprocess variables are now depricated. 4D assures that there's no need to rush replacing interprocess variables, but it is worth noting."}),"\n",(0,s.jsx)(n.h2,{id:"experiment-scanning-menu",children:"Experiment Scanning Menu"}),"\n",(0,s.jsx)(n.p,{children:"The experiment scanning menu has received some updates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dynamic observation columns now work correctly"}),"\n",(0,s.jsx)(n.li,{children:"the 'notes' button now works without errors"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"access",children:"Access"}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"DB_LockFields"})})," has been adjusted to also accept pointers to pointer arrays. This makes it possible to create an array of fields that is the minimum everyone can access, and add some fields for certain conditions. This will help the consistency of access for complex cases."]}),"\n",(0,s.jsx)(n.h3,{id:"analyis_order-access",children:"Analyis_Order Access"}),"\n",(0,s.jsx)(n.p,{children:"The Access to analysis order according to the status of the order and access group of the user has been adjusted to use the new function to pass pointers to pointer arrays."}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Old vs new Code"}),(0,s.jsx)(n.p,{children:"old Code:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4D",children:'If ($ManagementAS=True:C214) | (Current user:C182="designer")\n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Reported"); ->[Analysis_Order:32]; ->[Analysis_Order:32]AnO_InvoiceNumber:19; ->[Analysis_Order:32]AnO_Status:34; ->[Analysis_Order:32]AnO_Date_Report:93; ->[Analysis_Order:32]AnO_Audit:56; ->[Analysis_Order:32]AnO_Invoice_Extern:68; ->[Analysis_Order:32]AnO_Remarks_Invoice:72; ->[Analysis_Order:32]AnO_Checked:87; ->[Analysis_Order:32]AnO_Article2_Quantity:82; ->[Analysis_Order:32]AnO_Article3_Quantity:83; ->[Analysis_Order:32]AnO_Article4_Quantity:84; ->[Analysis_Order:32]AnO_Article4:76; ->[Analysis_Order:32]AnO_Article4_Description:80; ->[Analysis_Order:32]AnO_Date_Invoice:8; ->[Analysis_Order:32]AnO_ComCode_Cost:54; ->[Analysis_Order:32]AnO_ComName_Cost:55; ->[Analysis_Order:32]AnO_Amount_DataPoints:60)\n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Invoiced"); ->[Analysis_Order:32]; ->[Analysis_Order:32]AnO_InvoiceNumber:19; ->[Analysis_Order:32]AnO_Audit:56; ->[Analysis_Order:32]AnO_Invoice_Extern:68; ->[Analysis_Order:32]AnO_Remarks_Invoice:72; ->[Analysis_Order:32]AnO_Article2_Quantity:82; ->[Analysis_Order:32]AnO_Article3_Quantity:83)\n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Finished"); ->[Analysis_Order:32]; ->[Analysis_Order:32]AnO_InvoiceNumber:19; ->[Analysis_Order:32]AnO_Audit:56; ->[Analysis_Order:32]AnO_Invoice_Extern:68; ->[Analysis_Order:32]AnO_Remarks_Invoice:72)\n\t\tElse \n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Analysed"); ->[Analysis_Order:32]; ->[Analysis_Order:32]AnO_InvoiceNumber:19; ->[Analysis_Order:32]AnO_ComCode_Cost:54; ->[Analysis_Order:32]AnO_ComName_Cost:55; ->[Analysis_Order:32]AnO_Remarks_Invoice:72; ->[Analysis_Order:32]AnO_Audit:56; ->[Analysis_Order:32]AnO_Invoice_Extern:68; ->[Analysis_Order:32]AnO_Amount_DataPoints:60)\n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Reported"); ->[Analysis_Order:32]; ->[Analysis_Order:32]AnO_InvoiceNumber:19; ->[Analysis_Order:32]AnO_Date_Invoice:8; ->[Analysis_Order:32]AnO_Status:34; ->[Analysis_Order:32]AnO_ComCode_Cost:54; ->[Analysis_Order:32]AnO_ComName_Cost:55; ->[Analysis_Order:32]AnO_Remarks_Invoice:72; ->[Analysis_Order:32]AnO_Audit:56; ->[Analysis_Order:32]AnO_Invoice_Extern:68; ->[Analysis_Order:32]AnO_Article4_Quantity:84; ->[Analysis_Order:32]AnO_Article4:76; ->[Analysis_Order:32]AnO_Article4_Description:80; ->[Analysis_Order:32]AnO_Amount_DataPoints:60)\n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Invoiced"); ->[Analysis_Order:32]; ->[Analysis_Order:32]AnO_InvoiceNumber:19; ->[Analysis_Order:32]AnO_Audit:56; ->[Analysis_Order:32]AnO_Invoice_Extern:68; ->[Analysis_Order:32]AnO_Remarks_Invoice:72)\n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Finished"); ->[Analysis_Order:32]; ->[Analysis_Order:32]AnO_InvoiceNumber:19; ->[Analysis_Order:32]AnO_Audit:56; ->[Analysis_Order:32]AnO_Invoice_Extern:68; ->[Analysis_Order:32]AnO_Remarks_Invoice:72)\n\t\tEnd if \n'})}),(0,s.jsx)(n.p,{children:"new code:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4D",children:'ARRAY POINTER:C280($base; 0)\n\t\tAPPEND TO ARRAY:C911($base; ->[Analysis_Order:32]AnO_InvoiceNumber:19)\n\t\tAPPEND TO ARRAY:C911($base; ->[Analysis_Order:32]AnO_Audit:56)\n\t\tAPPEND TO ARRAY:C911($base; ->[Analysis_Order:32]AnO_Invoice_Extern:68)\n\t\tAPPEND TO ARRAY:C911($base; ->[Analysis_Order:32]AnO_Remarks_Invoice:72)\n\t\t\n\t\tARRAY POINTER:C280($reported; 0)\n\t\tCOPY ARRAY:C226($base; $reported)\n\t\tAPPEND TO ARRAY:C911($reported; ->[Analysis_Order:32]AnO_Status:34)\n\t\tAPPEND TO ARRAY:C911($reported; ->[Analysis_Order:32]AnO_Article4:76)\n\t\tAPPEND TO ARRAY:C911($reported; ->[Analysis_Order:32]AnO_Article4_Quantity:84)\n\t\tAPPEND TO ARRAY:C911($reported; ->[Analysis_Order:32]AnO_Article4_Description:80)\n\t\tAPPEND TO ARRAY:C911($reported; ->[Analysis_Order:32]AnO_Date_Invoice:8)\n\t\tAPPEND TO ARRAY:C911($reported; ->[Analysis_Order:32]AnO_ComCode_Cost:54)\n\t\tAPPEND TO ARRAY:C911($reported; ->[Analysis_Order:32]AnO_ComName_Cost:55)\n\t\tAPPEND TO ARRAY:C911($reported; ->[Analysis_Order:32]AnO_Amount_DataPoints:60)\n\t\t\n\t\tIf ($ManagementAS=True:C214) | (Current user:C182="designer")\n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Reported"); ->[Analysis_Order:32]; ->$reported; ->[Analysis_Order:32]AnO_Date_Report:93; ->[Analysis_Order:32]AnO_Checked:87; ->[Analysis_Order:32]AnO_Article2_Quantity:82; ->[Analysis_Order:32]AnO_Article3_Quantity:83)\n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Invoiced"); ->[Analysis_Order:32]; ->$base; ->[Analysis_Order:32]AnO_Article2_Quantity:82; ->[Analysis_Order:32]AnO_Article3_Quantity:83)\n\t\t\t\n\t\tElse \n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Analysed"); ->[Analysis_Order:32]; ->$base; ->[Analysis_Order:32]AnO_ComCode_Cost:54; ->[Analysis_Order:32]AnO_ComName_Cost:55; ->[Analysis_Order:32]AnO_Amount_DataPoints:60)\n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Reported"); ->[Analysis_Order:32]; ->$reported)\n\t\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Invoiced"); ->[Analysis_Order:32]; ->$base)\n\t\tEnd if \n\t\tDB_LockFields((Old:C35([Analysis_Order:32]AnO_Status:34)="Finished"); ->[Analysis_Order:32]; ->$base)\n'})}),(0,s.jsx)(n.admonition,{title:"style choice",type:"note",children:(0,s.jsxs)(n.p,{children:["In the code above I chose to copy array ",(0,s.jsx)(n.code,{children:"$base"})," into array ",(0,s.jsx)(n.code,{children:"$reported"}),". it is also possible to not do this, and just pass both arrays to the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"DB_LockFields"})})," method: ",(0,s.jsx)(n.code,{children:"DB_LockFields(->$base;->$reported)"}),". This is a stylistic choice we should come to agreement to."]})})]}),"\n",(0,s.jsx)(n.h2,{id:"greenhouse-field-excel-export",children:"Greenhouse-Field excel export"}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"GF_ExportExcelReportEstimateQC"})})," now exports 3 more columns named:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Reason not planted machine"}),"\n",(0,s.jsx)(n.li,{children:"Reason not sorted machine"}),"\n",(0,s.jsx)(n.li,{children:"Remarks sorting"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,s.jsx)(n.h3,{id:"order-check",children:"Order Check"}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ord_Check"})})," has a single change on line 672."]}),"\n",(0,s.jsx)(n.p,{children:"going from:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4D",children:'$order1:=$order0.query("Ord_EmpName_Planner = :1 and Ord_ComCode_Prod <= :2"; ""; 5)\n'})}),"\n",(0,s.jsx)(n.p,{children:"to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4D",children:'$order1:=$order0.query("Ord_EmpName_Planner = :1 and Ord_ComCode_Prod <= :2"; ""; 4)\n'})}),"\n",(0,s.jsx)(n.p,{children:"The significance of this change is unclear to me from just reading this code change."}),"\n",(0,s.jsx)(n.h3,{id:"excel-export",children:"Excel Export"}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ord_ExportExcel"})})," now has an extra option when pressing the 'Control' key while executing the method when default_company=1. This will result in executing the new method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ord_PrintDeliverySheetStock"})})," instead of method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ord_PrintDeliverySheet"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ord_PrintDeliverySheetStock"})})," uses very concise classic 4D commands to create an export. It seems to only export the fields:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ord_N_Plant"}),"\n",(0,s.jsx)(n.li,{children:"Ord_N_Plant_Dell"}),"\n",(0,s.jsx)(n.li,{children:"Ord_N_Plant_Prog"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"But I'm not familiar with the commands used, so it might do more."}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Ord_PrintDeliverySheetStock"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4D",children:'/ (PM) Ord_PrintDeliverySheet\n// Export the Scorelist TCPA items to a Excel document\n\nORDER BY:C49([Order:12]; [Order:12]Ord_ComCode_Customer:23; [Order:12]Ord_CropCode:85; [Order:12]Ord_PlantCode:1)\n\nIf (Records in selection:C76([Order:12])>0)\n\n\tReport_PrintDate:=Current date:C33(*)\n\tReport_PrintTime:=Current time:C178(*)\n\n\t// Perform a break on customer and crop code\n\tBREAK LEVEL:C302(2; 1)\n\t// Accumulate these values in order to get subtotals\n\tACCUMULATE:C303([Order:12]Ord_N_Plant:55; [Order:12]Ord_N_Plant_Del:59; [Order:12]Ord_N_Plant_Prog:58)\n\n\tFORM SET OUTPUT:C54([Order:12]; "Ord_PrintDeliverySheetStock")\n\t_O_PAGE SETUP:C299([Order:12]; "Ord_PrintDeliverySheetStock")\n\tPRINT SELECTION:C60([Order:12])\n\tFORM SET OUTPUT:C54([Order:12]; "Ord_List")\n\nEnd if \n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"update-record",children:"Update Record"}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ord_UpdateRecord_Validate"})})," now searches related delivery items with type 'out' and stores the amount of records in field [Order]Ord_Rec_DiT_Out:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4D",children:'$diT:=ds.Delivery_Items.query("DiT_IDM_Ord = :1"; [Order]Ord_IDM_OrderNumber)\n[Order]Ord_Rec_DiT:192:=$diT.length\n\n$diT:=$diT.query("deliveryNote.DeN_Type_InOut = :1"; "Out")\n[Order]Ord_Rec_DiT_Out:=$diT.length\n'})}),"\n",(0,s.jsx)(n.h2,{id:"project2",children:"Project2"}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Pro2_RadioB_Con"})})," now supports the 'Quotation' and 'Report' checkmarks. This is used to filter Contact records in the detail screen."]}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Pro2_SelectForDetail"})})," now executes the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Doc_FindDocuments"})})," method for searching related documents when ",(0,s.jsx)(n.code,{children:"$page=14"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"project2_year",children:"Project2_Year"}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Pro2Y_UpdateRecord"})})," has had 2 changes:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Properly add the '70%' for hours (or different percentage entered in the connected project2)."}),"\n",(0,s.jsx)(n.li,{children:"Optimize [Order] ORDA query for better performance."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"query-and-order-by-editor",children:"Query and Order By editor"}),"\n",(0,s.jsxs)(n.p,{children:["Methods ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"orderByEditor"})})," and ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"queryEditor"})})," have been added to open the order by and query editor from any table form. These options are also added the the 'Edit' menu. We probably need to add some protection to these options if we don't want everyone to be able to use them.\n",(0,s.jsx)(n.img,{src:r(183).Z+"",width:"348",height:"372"})]}),"\n",(0,s.jsx)(n.h2,{id:"deliverynote",children:"DeliveryNote"}),"\n",(0,s.jsx)(n.p,{children:"The trigger in delivery not has been adjusted. When a deliveryNote is adjusted from any status to status 'shipped', an email is sent."}),"\n",(0,s.jsx)(n.h2,{id:"clone",children:"Clone"}),"\n",(0,s.jsx)(n.p,{children:"A new button is added that searches for the origin clones of a Clone selection."}),"\n",(0,s.jsx)(n.h2,{id:"web-stuff",children:"Web stuff"}),"\n",(0,s.jsxs)(n.p,{children:["Method ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Web_DeliveriesRefresh"})})," has a new line: ",(0,s.jsx)(n.code,{children:"$item.barcode:=[TC_Reg_Emp]TC2E_Barcode"})," to return the barcode form the found record."]}),"\n",(0,s.jsx)(n.h2,{id:"unload-record",children:"Unload Record"}),"\n",(0,s.jsx)(n.p,{children:"Several methods have a 'unload record' added:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"DiT_Goto_DeN"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Settings_GetDefaultCompany"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Settings_GetDefaultCompany_Num"})}),"\nThis is probably added to prevent issues with blocking records or something."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},183:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/menu-e9478268635002651f9125fe07ee5ab8.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>d});var s=r(7294);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);