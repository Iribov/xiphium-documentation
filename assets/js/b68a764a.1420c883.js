"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7452],{8883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=t(5893),d=t(1151);const o={title:"Xiphium 2024-W47 update",authors:["jim"]},s=void 0,r={permalink:"/xiphium-documentation/blog/2024/11/22/Xiphium-W47-Update/Index",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-11-22-Xiphium-W47-Update/Index.md",source:"@site/blog/2024-11-22-Xiphium-W47-Update/Index.md",title:"Xiphium 2024-W47 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-11-22T00:00:00.000Z",formattedDate:"November 22, 2024",tags:[],readingTime:3.3,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W47 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2024-W48 update",permalink:"/xiphium-documentation/blog/2024/11/29/W48-Update/Index"},nextItem:{title:"Xiphium 2024-W46 update",permalink:"/xiphium-documentation/blog/2024/11/15/Xiphium-W46-Update/Index"}},h={authorsImageUrls:[void 0]},a=[{value:"Access",id:"access",level:2},{value:"Experiment",id:"experiment",level:3},{value:"Order",id:"order",level:2},{value:"Company",id:"company",level:2},{value:"Delivery",id:"delivery",level:2},{value:"Greenhouse",id:"greenhouse",level:2},{value:"Greenhouse-Field",id:"greenhouse-field",level:3},{value:"Greenhouse planning",id:"greenhouse-planning",level:3},{value:"Media",id:"media",level:2},{value:"Synchronization",id:"synchronization",level:2},{value:"Photos",id:"photos",level:2},{value:"Dynamic Dropdown with checkboxes",id:"dynamic-dropdown-with-checkboxes",level:2},{value:"Compiled",id:"compiled",level:2},{value:"Misc",id:"misc",level:2}];function l(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,i.jsx)(n.admonition,{title:"REMINDER",type:"tip",children:(0,i.jsxs)(n.p,{children:["When working on a method (new or existing), take some time to implement the ",(0,i.jsx)(n.code,{children:"#DECLARE"})," and ",(0,i.jsx)(n.code,{children:"Var"})," variable declarations."]})}),"\n",(0,i.jsx)(n.h2,{id:"access",children:"Access"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"AccGr_OverviewStats"})})," has been optimized to be able to be quit whenever is needed."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"AccTab_ShowOverview"})})," has been added. This method gathers overview information and shows a dialog showing this info."]}),"\n",(0,i.jsx)(n.h3,{id:"experiment",children:"Experiment"}),"\n",(0,i.jsx)(n.p,{children:"Access tab added for [Experiment] Input form named 'Text'."}),"\n",(0,i.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,i.jsx)(n.p,{children:"Field 'Protocol GH (New)' has been added to form [Order];\"Ord_List\" tab 'Greenhouse' with a searchable box."}),"\n",(0,i.jsx)(n.h2,{id:"company",children:"Company"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Com_UpdateRecord_Val"})}),' has been modified. Only 1 query has been modified so that all related purchase items are taken, instead of just purchase items with Type_In_Out="In".']}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"The code"}),(0,i.jsx)(n.p,{children:"Old query:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4D",children:'$pur:=ds.Purchase_Items.query("Puit_to_PuOrd.PuOrd_ComCode_Sup = :1 and Puit_to_PuOrd.PuOrd_Type_In_Out = :2"; [Company]Com_ComCode_Num; "In")\n'})}),(0,i.jsx)(n.p,{children:"New Query:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4D",children:'$pur:=ds.Purchase_Items.query("Puit_to_PuOrd.PuOrd_ComCode_Sup = :1 "; [Company]Com_ComCode_Num)\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"delivery",children:"Delivery"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DiT_Export_PackingListExpress"})})," has been added. The method is an excel export for the Packing list."]}),"\n",(0,i.jsx)(n.h2,{id:"greenhouse",children:"Greenhouse"}),"\n",(0,i.jsx)(n.h3,{id:"greenhouse-field",children:"Greenhouse-Field"}),"\n",(0,i.jsx)(n.p,{children:"Button is added to Greenhouse-Field with code that sets fields [GF_Date_Repotted] and [GF_Plants_Repotted] with the current date and the amount of plants present respectively. This amount and date indicate that the repotting is done and can be used for both invoicing and GH_Plan_Actions."}),"\n",(0,i.jsx)(n.h3,{id:"greenhouse-planning",children:"Greenhouse planning"}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_Apply_Modify_Parameters"})})," has been added as an abstraction for modifying GHPAs using the 'GHPA_Modify' dialog screen. This made it possible to use this screen on double click of a GH_Plan_Action."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_Get_ProtComp"})})," has been added as an abstraction, making it possible to use it in the 'Go to Protocol Component' button in GH_Plan_Action. Maybe it's easier to store the ID of the used protComp, but for now it's both fine. This method is implemented in the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_Update_Prot"})})," method, which contained this code before the abstraction."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_UpdateRecord_DuplicateData"})})," has been modified to be better readable (implement ",(0,i.jsx)(n.code,{children:"#DECLARE"})," and remove unnecessary local variables)."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_UpdateRecord_GF"})})," has been modified to get the date for the 'FP' (Flower Photo) action of TTT Orders from the Greenhouse-Field field 'Week Ready'."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_UpdateRecord_GHPA"})})," has been modified to get the day and night temperatures as seperate fields (instead of 1 text field). The text fields are still filled using these 2 seperate values. Also, the ",(0,i.jsx)(n.code,{children:"#DECLARE"})," and ",(0,i.jsx)(n.code,{children:"Var"})," syntax is implemented."]}),"\n",(0,i.jsx)(n.h2,{id:"media",children:"Media"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"MedPro_UpdateRecord"})})," has been modified to replace an SQL query with an ORDA query."]}),"\n",(0,i.jsx)(n.h2,{id:"synchronization",children:"Synchronization"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"TCPC_UpdateRecord"})})," has been modified to include the Company CountryCode"]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"TCPC_UpdateRecord"})})," has been modified to exclude TCPA records with status 'Delete'."]}),"\n",(0,i.jsx)(n.h2,{id:"photos",children:"Photos"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_PhotosSave"})}),' has been extended with a new category called "Deliver-item-ttt".']}),"\n",(0,i.jsx)(n.h2,{id:"dynamic-dropdown-with-checkboxes",children:"Dynamic Dropdown with checkboxes"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"generate_Form_CheckBoxes"})})," has been extended to include standard action buttons 'Select All', 'Deselect All' and 'Invert'. These buttons can be hidden if needed. These buttons use the new method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"generate_Form_Checkboxes_Method"})})," in order to fuction."]}),"\n",(0,i.jsx)(n.h2,{id:"compiled",children:"Compiled"}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"ALP_UpdateWells"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"AnOv_WellEventHandler"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"AnIsoPlate_UpdateWells"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"AnPla_UpdateWells"})}),",  had an ",(0,i.jsx)(n.code,{children:"EXECUTE FORMULA"})," statement with a local variable. This is apparently not supported in compiled mode. A process or interprocess variable must be used instead. For this specific implementation, a new method called ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"ObjectPath_To_Property"})})," was created to get the right property from the Form object."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Leading_zeros"})})," has been modified to be compatible with a compiled database (had to do with retyping a variant type local variable)."]}),"\n",(0,i.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Menu_ModifySelectionList"})})," has replaced its ",(0,i.jsx)(n.code,{children:"DISPLAY SELECTION($table->; *)"})," with ",(0,i.jsx)(n.code,{children:"MODIFY SELECTION($table->; Multiple selection; False; *)"}),". It seems like the code does mostly the same thing, but it might have better behavior like this. => Like this it opens always in the List lay-out and not like what is the normal behavior to open in Detail lay-out when only 1 record is selected as result of a goto from another table."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Menu_TC2E"})})," implements this modified ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Menu_ModifySelectionList"})})," method, using it instead of the (old?) ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Menu_ModifySelection"})})," mehod."]})]})}function c(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const d={},o=i.createContext(d);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);