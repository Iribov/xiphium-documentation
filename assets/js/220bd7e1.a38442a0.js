"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7623],{7303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=t(5893),s=t(1151);const o={title:"Xiphium 2024-W23 update",authors:["jim"]},r=void 0,l={permalink:"/xiphium-documentation/blog/2024/06/07/Xiphium-W23-Update",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-06-07-Xiphium-W23-Update/index.md",source:"@site/blog/2024-06-07-Xiphium-W23-Update/index.md",title:"Xiphium 2024-W23 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-06-07T00:00:00.000Z",formattedDate:"June 7, 2024",tags:[],readingTime:3.475,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W23 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2024-W24 update",permalink:"/xiphium-documentation/blog/2024/06/14/Xiphium-W24-Update"},nextItem:{title:"Xiphium 2024-W22 update",permalink:"/xiphium-documentation/blog/2024/05/31/Xiphium-W22-Update"}},d={authorsImageUrls:[void 0]},a=[{value:"Query Optimization",id:"query-optimization",level:2},{value:"Delivery Note",id:"delivery-note",level:2},{value:"Documents",id:"documents",level:2},{value:"Experiment",id:"experiment",level:2},{value:"Treatment",id:"treatment",level:3},{value:"Fincancial",id:"fincancial",level:2},{value:"TCPA",id:"tcpa",level:2},{value:"Web stuff",id:"web-stuff",level:2},{value:"Clone",id:"clone",level:2},{value:"Catalog changes",id:"catalog-changes",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,i.jsx)(n.h2,{id:"query-optimization",children:"Query Optimization"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"AnIsoPlate_CreateRecord_PCR"})})," has had a query optimization where the '.orderBy()' function has been incorperated into the query call. This optimizes performance since now, the query call returns the entitySelection already ordered, instead of needing to do an additional server request with the .orderBy function."]}),"\n",(0,i.jsx)(n.p,{children:"Reducing the network calls from 2 to 1 makes this query about 2x as fast. Queries and data communications between server and client are often the slowest parts of our code. Optizing these parts will make the methods run faster. This is even more true when connecting to Xiphium via VPN!"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("summary",{children:"Code change"}),"\r\nold code (2 server requests):"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4D",children:'$selection:=ds:C1482.Analysis_Isolation_Plate.query("AnIsoPlate_PlateName = :1"; $year+"-@")\r\n$selection:=$selection.orderBy("AnIsoPlate_PlateName")\n'})}),(0,i.jsx)(n.p,{children:"new code (1 server request):"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4D",children:'$selection:=ds:C1482.Analysis_Isolation_Plate.query("AnIsoPlate_PlateName = :1 order by AnIsoPlate_PlateName asc"; $year+"-@")\n'})}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Combining the 'query' and 'Order By' into a single network request is NOT possible using classic 4D code."})})]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"AnIso_SelectForDetail"})})," has been optimized to directly query using ORDA, instead of doing a classic Query and converting it to ORDA using 'Create Entity Selection' (however, the 'Create Entity Selection' line still needs to be removed)."]}),"\n",(0,i.jsx)(n.h2,{id:"delivery-note",children:"Delivery Note"}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DeN_Create_PDF_AN_GF"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DeN_Create_PDF_DN_GF"})})," have been added. The methods create some kind of report of the Delivery Note"]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DeN_Detail_ListboxHandler"})}),' is added. The method handles the custom events "On Filter" and "On Tools Button".']}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DeN_ExportExcel_Pending"})})," has been added. This method exports DeliveryNote fields of the current selection."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DeN_Print_Address_Label"})})," has been added. This method print the Address Label using the \"DeN_Print_AddressLabel12\" tableform and functions 'FORM SET OUTPUT' and 'PRINT RECORD'."]}),"\n",(0,i.jsx)(n.h2,{id:"documents",children:"Documents"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Doc_ShowDetailFormPreview"})})," has been added. This method can show a preview of documents in a seperate window."]}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"File_CanPreviewInWebArea"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"File_GetMimeType"})}),' have been extended with the "heic" extension. This means that files with this extension can now be previewed using method ',(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Doc_ShowDetailFormPreview"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Form \"Doc_ListFormPreview2\" has new buttons 'DocumentIcon' and 'DownloadButton'."}),"\n",(0,i.jsx)(n.h2,{id:"experiment",children:"Experiment"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Exp_UpdateRecord"})})," now searches for documents related to its treatments and saves the amount found in field 'Exp_Rec_Doc_ExT'."]}),"\n",(0,i.jsx)(n.h3,{id:"treatment",children:"Treatment"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"ExT_UpdateRecord"})})," has been adjusted so that Obervation Percentage fields are now calculated using the 'ExT_N1_Explants' field instead of the 'ExT_N2_Plant_Analysed'."]}),"\n",(0,i.jsx)(n.h2,{id:"fincancial",children:"Fincancial"}),"\n",(0,i.jsx)(n.p,{children:"Some work has been done on the financial tables. It's too much effort to write down all the changes, but changes have been made to methods:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"FinCM_Sum"}),"\n",(0,i.jsx)(n.li,{children:"FinCM_UpdateRecord"}),"\n",(0,i.jsx)(n.li,{children:"FinT_CCM_UpdateRecord"}),"\n",(0,i.jsx)(n.li,{children:"FinT_CCT_UpdateRecord"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tcpa",children:"TCPA"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"TCPA_SyncExportDelitemsResults"})})," has field 'DiT_N_17_Del_NoInfo' added to its massive oneline QUERY BY FORMULA. This line finds all records with any amount of plants in any of the given fields, and/or if it has any text in field 'DiT_Q_Remarks'."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"TCPA_SyncExportTCPlanGroups"})})," has been changed to export the last 2 weeks instead of the last 5 days."]}),"\n",(0,i.jsx)(n.h2,{id:"web-stuff",children:"Web stuff"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"WebApp_Startup"})})," has 2 'locations' API endpoints modified to use method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsController"})})," instead of ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_TCLocationsController"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsController"})})," has been added. This method is used in API in both the 'tc-locations' and the newer 'locations' endpoints."]}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsControllerNew"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsGetAllLocations"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsGetJar"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsSaveJar"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsGetLocation"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsRefreshScanData"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsSaveScanData"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsUploadScanData"})})," have been added. These methods probably add a lot of functionality to the locations app."]}),"\n",(0,i.jsx)(n.h2,{id:"clone",children:"Clone"}),"\n",(0,i.jsx)(n.p,{children:"The 'Create Record' buttons that call the \"Clo_Create_Record_Screen\" Form now also auto fill the plantcode when no Clone is selected, but a Plant_Code record is in the current selection. This should make it easier to create new clones without typos in the Plant Code. Not all subforms have a 'create record' button, but they all do have an 'add record' button."}),"\n",(0,i.jsx)(n.h2,{id:"catalog-changes",children:"Catalog changes"}),"\n",(0,i.jsx)(n.p,{children:"Catalog changes indicate changes in the database structure. These could be:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Field changes (additions, renaming, removal)"}),"\n",(0,i.jsx)(n.li,{children:"Index changes"}),"\n",(0,i.jsx)(n.li,{children:"Table changes"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Table [Fin_Com_Month] has a lot of changes in its fields. Fields "FinCM_E01_MC" to "FinCM_E27_MC" have been retyped from Alpha to Real.'}),"\n",(0,i.jsx)(n.p,{children:"Table [FinTur_ComCrop_Tot] has 'Field_52' renamed to 'FinTurCCT_ComCode_Prod_MC'"}),"\n",(0,i.jsx)(n.p,{children:"Several new indexes have been added:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[TC_Registration]TC2_GroupCode_From"}),"\n",(0,i.jsx)(n.li,{children:"[TC_Registration]TC2_TableFrom"}),"\n",(0,i.jsx)(n.li,{children:"[Mutations_Employee]MuEm_TC2_TableFrom"}),"\n",(0,i.jsx)(n.li,{children:"[Mutations_Employee]MuEm_Start_N_Plants"}),"\n",(0,i.jsx)(n.li,{children:"[Mutations_Employee]MuEm_ID_TC2_To"}),"\n",(0,i.jsx)(n.li,{children:"[Greenhouse_Field]GF_GroupFrom"}),"\n",(0,i.jsx)(n.li,{children:"[Greenhouse_Field]GF_TableFrom"}),"\n",(0,i.jsx)(n.li,{children:"[GF_Reservations]GFRes_N_Trays"}),"\n",(0,i.jsx)(n.li,{children:"[Delivery_Boxes]DeBo_DeliveryNote"}),"\n",(0,i.jsx)(n.li,{children:"[Delivery_Items]DiT_N_Plant"}),"\n",(0,i.jsx)(n.li,{children:"[Delivery_Items]DiT_Location_Temp_GF_Delivery"}),"\n",(0,i.jsx)(n.li,{children:"[Invoice_Items]InD_Description_D01_GCFrom"}),"\n",(0,i.jsx)(n.li,{children:"[Order]Ord_N_Plant_Open"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);