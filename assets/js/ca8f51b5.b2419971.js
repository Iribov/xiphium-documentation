"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1950],{3621:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=n(5893),r=n(1151);const o={title:"Xiphium 2024-W07 update",authors:["jim"]},s=void 0,a={permalink:"/xiphium-documentation/blog/2024/02/16/Xiphium-W07-Update",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-02-16-Xiphium-W07-Update/index.md",source:"@site/blog/2024-02-16-Xiphium-W07-Update/index.md",title:"Xiphium 2024-W07 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-02-16T00:00:00.000Z",formattedDate:"February 16, 2024",tags:[],readingTime:3.06,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W07 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2024-W08 update",permalink:"/xiphium-documentation/blog/2024/02/23/Xiphium-W07-Update"},nextItem:{title:"Xiphium 2024-W06 update",permalink:"/xiphium-documentation/blog/2024/02/09/Xiphium-W06-Update"}},l={authorsImageUrls:[void 0]},d=[{value:"Project2 Year",id:"project2-year",level:2},{value:"Analytical lab",id:"analytical-lab",level:2},{value:"Project2 code from Analysis to Invoice items",id:"project2-code-from-analysis-to-invoice-items",level:3},{value:"Analysis Order and SubOrder",id:"analysis-order-and-suborder",level:3},{value:"Analysis Genotyping",id:"analysis-genotyping",level:3},{value:"Reference Collection individual",id:"reference-collection-individual",level:3},{value:"Clone",id:"clone",level:2},{value:"Greenhouse Field",id:"greenhouse-field",level:2},{value:"TCPA SEE (Certification)",id:"tcpa-see-certification",level:2},{value:"Delivery items",id:"delivery-items",level:2}];function c(e){const i={admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,t.jsx)(i.h2,{id:"project2-year",children:"Project2 Year"}),"\n",(0,t.jsx)(i.p,{children:"Project2 Year now contains code to get the cost from the invoice items. This is done by searching Invoice_Items on their 'ProjectCode2 Debitor' field (and some other parameters of course). These costs are then divided into 3 categories:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Analytical (when creditor is company code 12)"}),"\n",(0,t.jsx)(i.li,{children:"Greenhouse (when creditor is company code 5)"}),"\n",(0,t.jsx)(i.li,{children:"Other"}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"Internal invoices for Analytical has been done for multiple years. However, internal invoicing for the Greenhouse is not a thing yet. The code is already implemented, but won't get any data until internal invoicing for Greenhouse is realized."})}),"\n",(0,t.jsx)(i.h2,{id:"analytical-lab",children:"Analytical lab"}),"\n",(0,t.jsx)(i.p,{children:"multiple changes are realized this week in regards to the 'Analysis' module."}),"\n",(0,t.jsx)(i.h3,{id:"project2-code-from-analysis-to-invoice-items",children:"Project2 code from Analysis to Invoice items"}),"\n",(0,t.jsx)(i.p,{children:"ProjectCode2 Debitor and creditor are now filled automatically when creating an invoice from an Analysis Order."}),"\n",(0,t.jsx)(i.p,{children:"The fields 'ProjectCode2 Creditor' and 'ProjectCode2 Debitor' from the Analysis Order are copied into the 'ProjectCode2 Creditor' and 'ProjectCode2 Debitor' fields of the Invoice Items."}),"\n",(0,t.jsx)(i.h3,{id:"analysis-order-and-suborder",children:"Analysis Order and SubOrder"}),"\n",(0,t.jsx)(i.p,{children:"Some fields are both entered in the Analysis Order, and Analysis Suborder. And because the different analysis suborders can contain different values for 1 field, and the analysis order typically can only hold 1 value; there's a mismatch."}),"\n",(0,t.jsx)(i.p,{children:"Therefore, for the following fields it is still possible to enter in the Analysis_Order upon creation, but as soon as suborders are created (with a value in the field), these values will overwrite the Analysis_Order value. When different values are entered in the different suborder, these values will be concatenated in the Analysis Order."}),"\n",(0,t.jsx)(i.p,{children:"This applies to fields:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Crop Code"}),"\n",(0,t.jsx)(i.li,{children:"Crops (Crop Name Scientific)"}),"\n",(0,t.jsx)(i.li,{children:"Type Objective"}),"\n",(0,t.jsx)(i.li,{children:"Type Material (Type tissue)"}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{title:"Example",type:"info",children:(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Example with Crop"}),(0,t.jsx)(i.p,{children:"If You create an Analysis Order, you can only enter 1 Crop.\r\nLet's say you use Brassica."}),(0,t.jsx)(i.p,{children:"But in reality, the client sends both Brassica and Iris. Instead of splitting this into 2 order, it's possible to create 2 suborders: 1 with crop 'Brassica', and 1 with crop 'Iris'."}),(0,t.jsx)(i.p,{children:"The problem, however, is when you look at the Analysis Order it only says 'Brassica'. This is the mismatch we solved with this update."}),(0,t.jsx)(i.p,{children:"Now, because we have 2 suborders ('Brassica' and 'Iris'), the analysis Orders is updated to say 'Brassica, Iris'. So now, when you look at the order, it mentions both crops. When you're searching for either 'Brassica' or 'Iris', the order always comes up."})]})}),"\n",(0,t.jsx)(i.h3,{id:"analysis-genotyping",children:"Analysis Genotyping"}),"\n",(0,t.jsx)(i.p,{children:"A new Excel file for importing has been created by the analytical lab. The import button is now updated and started implemented."}),"\n",(0,t.jsx)(i.h3,{id:"reference-collection-individual",children:"Reference Collection individual"}),"\n",(0,t.jsx)(i.p,{children:"A scanning system for tracking individual tubes of a 'Reference Collection' has been developed and exposed this week. Testing for bugs is still necessary and will start next week."}),"\n",(0,t.jsx)(i.h2,{id:"clone",children:"Clone"}),"\n",(0,t.jsx)(i.p,{children:"Modify Batch now takes the field Clo_CB_Clock into consideration. When a clone already has this 'blocked' property, the fields that track 'who' and 'when' blocked this record will not be overwritten."}),"\n",(0,t.jsx)(i.h2,{id:"greenhouse-field",children:"Greenhouse Field"}),"\n",(0,t.jsx)(i.p,{children:"Greenhouse Field now contains a field called 'GF_Analysis_Clean'.\r\nThis field copies the 'Clo_AnSam_Result_0_Clean' field from [Clone] to indicate whether the clone was tested 'Clean' by the analytical lab.\r\nThe field also changes color depending on the contents of that field (Green when clean, red when not clean, etc.)."}),"\n",(0,t.jsx)(i.h2,{id:"tcpa-see-certification",children:"TCPA SEE (Certification)"}),"\n",(0,t.jsx)(i.p,{children:"There are fields added to the form and filter regarding SEE (certification)."}),"\n",(0,t.jsx)(i.h2,{id:"delivery-items",children:"Delivery items"}),"\n",(0,t.jsx)(i.p,{children:"The article code field in Delivery Items is now searchable."})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>s});var t=n(7294);const r={},o=t.createContext(r);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);