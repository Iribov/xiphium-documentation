"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6626],{7647:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=i(5893),r=i(1151);const o={title:"Xiphium 2024-W18 update",authors:["jim"]},d=void 0,s={permalink:"/xiphium-documentation/blog/2024/05/03/Xiphium-W18-Update",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-05-03-Xiphium-W18-Update/index.md",source:"@site/blog/2024-05-03-Xiphium-W18-Update/index.md",title:"Xiphium 2024-W18 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-05-03T00:00:00.000Z",formattedDate:"May 3, 2024",tags:[],readingTime:3.7,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W18 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2024-W20 update",permalink:"/xiphium-documentation/blog/2024/05/21/Xiphium-W20-Update"},nextItem:{title:"Xiphium 2024-W17 update",permalink:"/xiphium-documentation/blog/2024/04/26/Xiphium-W17-Update"}},a={authorsImageUrls:[void 0]},l=[{value:"Crop Year",id:"crop-year",level:2},{value:"Deliveries",id:"deliveries",level:2},{value:"UpdateRecord",id:"updaterecord",level:3},{value:"Go to button",id:"go-to-button",level:3},{value:"Financial",id:"financial",level:2},{value:"FinLiM_UpdateRecord",id:"finlim_updaterecord",level:3},{value:"Status query",id:"status-query",level:3},{value:"Plant Price",id:"plant-price",level:2},{value:"Project2 Year",id:"project2-year",level:2},{value:"Web Stuff",id:"web-stuff",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Clone Link synchronisation",id:"clone-link-synchronisation",level:3},{value:"Licencing expiration",id:"licencing-expiration",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Because of the many changes this week, I will only cover changes in methods. I will try to find significant changes object methods (i.e. 'buttons') but will probably miss some."})}),"\n",(0,t.jsx)(n.h2,{id:"crop-year",children:"Crop Year"}),"\n",(0,t.jsxs)(n.p,{children:["Method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"CroYe_UpdateRecord"})})," now also calculates the 'CroYe_Plant_Forecast0' and 'CroYe_Plant_Open_FC0'"]}),"\n",(0,t.jsx)(n.h2,{id:"deliveries",children:"Deliveries"}),"\n",(0,t.jsx)(n.h3,{id:"updaterecord",children:"UpdateRecord"}),"\n",(0,t.jsxs)(n.p,{children:["Method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"DiT_UpdateRecord"})})," now also calculates the amount of related Actions related to it. This should only be able to 0 or 1 given the (intended) 1:1 relationship. This number can help with finding delivery items that have actions related to them."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Optimization strategies"}),(0,t.jsx)(n.p,{children:"While the above method is a perfectly valid, there is an alternative method that can be considered:"}),(0,t.jsxs)(n.p,{children:["Instead of doing a query to [Actions] for ",(0,t.jsx)(n.strong,{children:"every"})," Delivery_Item ",(0,t.jsx)(n.strong,{children:"every time"})," the record is updated, the query could also be done only when looking for Delivery_Items with an [Action]. Sure, the search would become slower, but all of the updates would become quicker."]}),(0,t.jsx)(n.p,{children:"So depending on the amount of times we expect users to search any Delivery_Items with a related [Action], we can consciously choose one of the 2 methods for optimal performance for our use case."})]}),"\n",(0,t.jsx)(n.h3,{id:"go-to-button",children:"Go to button"}),"\n",(0,t.jsxs)(n.p,{children:["Method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"DiT_Goto_ACE"})})," has been added to go from Delivery_Items to an Action."]}),"\n",(0,t.jsx)(n.h2,{id:"financial",children:"Financial"}),"\n",(0,t.jsx)(n.p,{children:"Several Field Name changes have been done in several Financial tables."}),"\n",(0,t.jsx)(n.h3,{id:"finlim_updaterecord",children:"FinLiM_UpdateRecord"}),"\n",(0,t.jsxs)(n.p,{children:["Method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"FinLiM_UpdateRecord"})})," seems to have many code changes because of these name changes. However, some significant code changes are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When querying for invoices, ",(0,t.jsx)(n.code,{children:"Inv_ComCode_Deb_MC # 1"})," is added"]}),"\n"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Queries and placeholders"}),(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"Placeholders in queries are a great way to use variables inside of your query safely. However, when using hard coded values, it's more readable if they're put in the query directly."}),(0,t.jsx)(n.p,{children:"The current"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$invoice1:=$invoice.query("Inv_Date_Invoice >= :1 and Inv_Date_Invoice <= :2 and Inv_ComCode_Deb_MC # :3"; $date_LastYear; Current date; 1)\n'})}),(0,t.jsx)(n.p,{children:"is less clear than:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$invoice1:=$invoice.query("Inv_Date_Invoice >= :1 and Inv_Date_Invoice <= :2 and Inv_ComCode_Deb_MC # 1"; $date_LastYear; Current date)\n'})})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["There seems to be duplicated code in method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"FinLiM_UpdateRecord"})})," from line 248 to line 260. Since these lines contain a query (that is now duplicated), it has a significant impact in the performance of this method."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a new code block is added for records that have the status 'Realized'. In this block the fields FinLiM_L_TO_Plan, FinLIM_L_TO_12M_Plan, FinLiM_L_TO_Plan_MC and FinLiM_L_TO_12M_Plan_MC are filled using [FinTurCom_Month] data."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"status-query",children:"Status query"}),"\n",(0,t.jsxs)(n.p,{children:["Method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"FinT_CCM_UpdateRecord"})})," has been modified. An [Order] query now excludes an extra [Order] status 'GreenHouse'."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"not(collection in query)"}),(0,t.jsx)(n.p,{children:"instead of repeating the same property/field 3 times, it can be more readable to use the property/field once, and compare it to a collection."}),(0,t.jsx)(n.p,{children:"so instead of the current:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$orderSel:=$orderSel.query("Ord_CropCode = :1 and Ord_Month_S3 = :2 and Ord_OrderType2 = :3 and Ord_Status # :4 and Ord_Status # :5 and Ord_Status # :6"; $CropCode_Text; [FinTur_ComCrop_Month]FinTurCCM_Month; "Del@"; "Can@"; "Fin@"; "Green@")\n'})}),(0,t.jsx)(n.p,{children:"We could do:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$orderSel:=$orderSel.query("Ord_CropCode = :1 and Ord_Month_S3 = :2 and Ord_OrderType2 = :3 and not(Ord_Status in :4); $CropCode_Text; [FinTur_ComCrop_Month]FinTurCCM_Month;new collection("Del@"; "Can@"; "Fin@"; "Green@"))\n'})}),(0,t.jsx)(n.p,{children:"It's a good idea to check if wildcards are still respected. Maybe performance will be better too!"})]}),"\n",(0,t.jsxs)(n.p,{children:["The same method can be applied to method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"FinT_CCY_UpdateRecord"})})," line 125."]}),"\n",(0,t.jsx)(n.h2,{id:"plant-price",children:"Plant Price"}),"\n",(0,t.jsxs)(n.p,{children:["Method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"PlaPri_UpdateRecord"})})," has been adjusted to keep track of by who and when the record was created and modified."]}),"\n",(0,t.jsx)(n.h2,{id:"project2-year",children:"Project2 Year"}),"\n",(0,t.jsxs)(n.p,{children:["Method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Pro2Y_UpdateRecord"})})," has been adjusted. The order query now ignores the ComCode_Prod. This means that all orders of the same WorkType, Customer and Crop as the Project2_Year will be used for the budget (except cancelled Orders ofcourse)."]}),"\n",(0,t.jsx)(n.p,{children:"The 'TC budget' is now automatically filled using the orders. This makes it impossible to manually adjust the amount."}),"\n",(0,t.jsx)(n.h2,{id:"web-stuff",children:"Web Stuff"}),"\n",(0,t.jsxs)(n.p,{children:["Method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"000_TestRL"})})," had a massive cleanup, leaving only 3 of the 1214 lines intact."]}),"\n",(0,t.jsxs)(n.p,{children:["Method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Web_DeliveriesController"})})," has been adjusted in response to ",(0,t.jsx)(n.a,{href:"https://github.com/Iribov/Xiphium/issues/204",children:"ticket #204"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Method ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Web_DeliveriesGetItem"})})," has been added."]}),"\n",(0,t.jsxs)(n.p,{children:["Methods ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Web_GreenhouseLoad"})})," and ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Web_GreenhouseSave"})})," have been adjusted to also fill the 'DiT_Q_Medium_Score' field on the Delivery_Item."]}),"\n",(0,t.jsx)(n.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,t.jsx)(n.h3,{id:"clone-link-synchronisation",children:"Clone Link synchronisation"}),"\n",(0,t.jsxs)(n.p,{children:["Methods ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"TCPA_SyncExportCloneLink"})})," and ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"TCPA_SyncImportCloneLink"})})," have been added to facilitate the synchronization of the [Clone_Link] records."]}),"\n",(0,t.jsx)(n.h3,{id:"licencing-expiration",children:"Licencing expiration"}),"\n",(0,t.jsxs)(n.p,{children:["Methods ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"A_StartupParameters"})})," and ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"A_StartupParameters_new"})})," have had their dates adjusted. This method is meant as a lock for an expired Xiphium license."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>d});var t=i(7294);const r={},o=t.createContext(r);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);