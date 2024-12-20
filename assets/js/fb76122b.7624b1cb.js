"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6993],{2047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=t(5893),s=t(1151);const o={title:"Xiphium 2024-W50 update",authors:["jim"]},r=void 0,d={permalink:"/xiphium-documentation/blog/2024/12/13/Xiphium-W50-Update/Index",editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/blog/2024-12-13-Xiphium-W50-Update/Index.md",source:"@site/blog/2024-12-13-Xiphium-W50-Update/Index.md",title:"Xiphium 2024-W50 update",description:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).",date:"2024-12-13T00:00:00.000Z",formattedDate:"December 13, 2024",tags:[],readingTime:2.525,hasTruncateMarker:!0,authors:[{name:"Jim Kerver",title:"4D Developer @Iribov",url:"https://github.com/Jim-Kerver",imageURL:"https://github.com/Jim-Kerver.png",key:"jim"}],frontMatter:{title:"Xiphium 2024-W50 update",authors:["jim"]},unlisted:!1,prevItem:{title:"Xiphium 2024-W51 update",permalink:"/xiphium-documentation/blog/2024/12/19/Xiphium-W51-Update/Index"},nextItem:{title:"Xiphium 2024-W49 update",permalink:"/xiphium-documentation/blog/2024/12/06/Xiphium-W49-Update/Index"}},h={authorsImageUrls:[void 0]},a=[{value:"Medium",id:"medium",level:2},{value:"Analysis Cost",id:"analysis-cost",level:2},{value:"Greenhouse Planning",id:"greenhouse-planning",level:2},{value:"Math",id:"math",level:2},{value:"Order",id:"order",level:2},{value:"Catalog changes",id:"catalog-changes",level:2},{value:"Choice List",id:"choice-list",level:2},{value:"Web Stuff",id:"web-stuff",level:2}];function l(e){const n={admonition:"admonition",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub)."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors."})}),"\n",(0,i.jsx)(n.admonition,{title:"reminder",type:"tip",children:(0,i.jsxs)(n.p,{children:["Don't forger to replace ",(0,i.jsx)(n.strong,{children:"$0"}),", ",(0,i.jsx)(n.strong,{children:"$1"})," etc. with the new ",(0,i.jsx)(n.strong,{children:"#DECLARE"})," syntax. And replace ",(0,i.jsx)(n.strong,{children:"C_"})," with ",(0,i.jsx)(n.strong,{children:"Var"})]})}),"\n",(0,i.jsx)(n.h2,{id:"medium",children:"Medium"}),"\n",(0,i.jsx)(n.p,{children:"Some small work done on the Medium table and form."}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"MedPro_UpdateRecord"})})," has been adjusted. A classic query is replaced by an ORDA query."]}),"\n",(0,i.jsx)(n.h2,{id:"analysis-cost",children:"Analysis Cost"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Clo_Analysis_Cost_Calculation"})})," has been added. This method accepts a clone entity, an optional amount of samples and an optional boolean to include the Order cost or not. After discussion with Analytical Lab we might want to split up the method into 2 core parts:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"A method that calculates the analysis cost based on amount of samples, amount of pathogens and the type of pathogens."}),"\n",(0,i.jsx)(n.li,{children:"A method that accepts a Crop, PlantCode and/or Clone and searches for a relate Analysis Group. This method can use method 1 to calculate cost."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"greenhouse-planning",children:"Greenhouse Planning"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_Delete_Actions"})})," has been adjusted to only remove deleted actions from the listbox and listbox selection of the selection is defined (gave errors in other places)."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_Excel_Export"})})," has been adjusted to correctly export square meter information of actions that started before the selected year, but are still in the greenhouse in the selected year (only if the GHPA record of this previous year is in the current selection!)."]}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GHPA_UpdateRecord_GF"})})," has been updated. The method now gets information from Greenhouse-Field related to repotting."]}),"\n",(0,i.jsx)(n.h2,{id:"math",children:"Math"}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Math_Ceil"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Math_Floor"})})," have been added. The methods seem to do functionally the same as the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"RoundUp"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"RoundDown"})})," methods. After quick testing, the 'Round' method are usually slightly faster, but they are both so fast it doesn't have significant impact on run time. These new methods should be removed and references should be replaced with the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"RoundUp"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"RoundDown"})})," methods."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"#DECLARE"})," and ",(0,i.jsx)(n.strong,{children:"Var"})," syntax was not used for these new methods. This makes me very upset :'("]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If your're rounding up -12.4 what should you get? the definition of Math Ceiling (as well as the method) says it should -12. If rounding up means rounding away from 0, it should be -13 (as reflected in method RoundUp). Should these methods both exist? What shall we do?"})}),"\n",(0,i.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Ord_Calc_GHPA_Days"})})," has been activated in the method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Ord_UpdateRecord"})}),". This was done by request of Richard. The new way of calculating days in the greenhouse is (often) more accurate in non-production Orders."]}),"\n",(0,i.jsx)(n.h2,{id:"catalog-changes",children:"Catalog changes"}),"\n",(0,i.jsx)(n.p,{children:"Field MesSto_Box_Used has been renamed to MedSto_Box_Used."}),"\n",(0,i.jsx)(n.p,{children:"Table [Exp_Treatment_Summary] has been added along with 11 'empty' fields."}),"\n",(0,i.jsx)(n.h2,{id:"choice-list",children:"Choice List"}),"\n",(0,i.jsx)(n.p,{children:"5 soil types have been removed from the Choicelist:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"JK OPT22"}),"\n",(0,i.jsx)(n.li,{children:"KNA 055 FN PH 5,1 T104"}),"\n",(0,i.jsx)(n.li,{children:"KNA 058 FN TQPD60"}),"\n",(0,i.jsx)(n.li,{children:"KNA 070 Tray28 + VEE007"}),"\n",(0,i.jsx)(n.li,{children:"KNA Bollengrond"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"web-stuff",children:"Web Stuff"}),"\n",(0,i.jsxs)(n.p,{children:["Method ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_LocationsControllerOld"})})," has been removed."]}),"\n",(0,i.jsxs)(n.p,{children:["Methods ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_TCStockCheckController"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_TCStockCheckGetStock"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Web_TCStockCheckGetUser"})})," have been added."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);