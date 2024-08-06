"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1916],{4150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=r(5893),i=r(1151);const o={},s="Project2 Year",d={id:"Projects/Project2Year",title:"Project2 Year",description:"A Project2_Year record is always related to a Project2 record. A Project2?Year tracks the data of a project per year. The main data it tracks are:",source:"@site/docs/Projects/Project2Year.md",sourceDirName:"Projects",slug:"/Projects/Project2Year",permalink:"/xiphium-documentation/docs/Projects/Project2Year",draft:!1,unlisted:!1,editUrl:"https://github.com/Iribov/xiphium-documentation/edit/main/docs/Projects/Project2Year.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project2",permalink:"/xiphium-documentation/docs/Projects/Project2"},next:{title:"Project Group",permalink:"/xiphium-documentation/docs/Projects/ProjectGroup"}},c={},l=[{value:"Budget",id:"budget",level:2},{value:"1. Budget A",id:"1-budget-a",level:3},{value:"Budget Intern",id:"budget-intern",level:4},{value:"Budget Extern",id:"budget-extern",level:4},{value:"Budget Order",id:"budget-order",level:4},{value:"2. Budget B",id:"2-budget-b",level:3},{value:"Budget Hours",id:"budget-hours",level:4},{value:"Hours",id:"hours",level:2},{value:"Cost",id:"cost",level:2},{value:"Hour Cost",id:"hour-cost",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"project2-year",children:"Project2 Year"}),"\n",(0,n.jsxs)(t.p,{children:["A Project2_Year record is always related to a ",(0,n.jsx)(t.a,{href:"/xiphium-documentation/docs/Projects/Project2",children:"Project2"})," record. A Project2?Year tracks the data of a project per year. The main data it tracks are:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Budget"}),"\n",(0,n.jsx)(t.li,{children:"Hours"}),"\n",(0,n.jsx)(t.li,{children:"Cost"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"budget",children:"Budget"}),"\n",(0,n.jsx)(t.p,{children:"A budget can be set for a Project2_Year. Besides being insightful, it does not have a function (yet). The budget is split into 2 major components:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Budget A"}),"\n",(0,n.jsx)(t.li,{children:"Budget B"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"1-budget-a",children:"1. Budget A"}),"\n",(0,n.jsx)(t.p,{children:"'Budget A' is comprised of 2 budgets:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Budget Extern"}),"\n",(0,n.jsx)(t.li,{children:"Budget Intern"}),"\n",(0,n.jsx)(t.li,{children:"Budget Order"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"budget-intern",children:"Budget Intern"}),"\n",(0,n.jsx)(t.p,{children:"Budget Intern is the budget that is available for this project from our company."}),"\n",(0,n.jsx)(t.h4,{id:"budget-extern",children:"Budget Extern"}),"\n",(0,n.jsx)(t.p,{children:"Budget Extern is the budget that is available from the client (or other organisation)"}),"\n",(0,n.jsx)(t.h4,{id:"budget-order",children:"Budget Order"}),"\n",(0,n.jsx)(t.p,{children:"Budget Order searches for Orders of this Project2 and Year, and sums the cost (calculation) from those Orders."}),"\n",(0,n.jsx)(t.h3,{id:"2-budget-b",children:"2. Budget B"}),"\n",(0,n.jsx)(t.p,{children:"'Budget B' is supposed to be contrived of Budget A. The difference is that Budget B divides Budget A into 4 different categories (i.e. Departments)."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Tissue Culture"}),"\n",(0,n.jsx)(t.li,{children:"Greenhouse"}),"\n",(0,n.jsx)(t.li,{children:"Analytical Lab"}),"\n",(0,n.jsx)(t.li,{children:"Other"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This will give better insight on how much every department can spend on a Project2, to keep the whole Project2 within Budget."}),"\n",(0,n.jsx)(t.h4,{id:"budget-hours",children:"Budget Hours"}),"\n",(0,n.jsxs)(t.p,{children:["'Budget Hours' is a special budget only meant to be used for Hours. Budget Hours is calculated in Euro's by the following simple calculation ",(0,n.jsx)(t.code,{children:"Budget A - Budget B"}),". 'Budget Hours' is converted to Hours using the 'HourTariff' (or 'Hourly Rate') and a percentage, resulting in the following calculation ",(0,n.jsx)(t.code,{children:"Budget Hours/HourTariff*percentage"}),". Budget Hours are not department specific."]}),"\n",(0,n.jsx)(t.h2,{id:"hours",children:"Hours"}),"\n",(0,n.jsxs)(t.p,{children:["Hours From ",(0,n.jsx)(t.a,{href:"/xiphium-documentation/docs/Projects/HourRegistration",children:"HourRegistration"})," are summed up and shown. Only hours with the same ProjectCode2 in the 'ProjectCode Used' field in HourRegistration are summed up and shown."]}),"\n",(0,n.jsx)(t.h2,{id:"cost",children:"Cost"}),"\n",(0,n.jsxs)(t.p,{children:["The cost (or 'Budget spent') is the amount of money that is internally invoiced with the same ProjectCode2 in the 'ProjectCode2 Debitor' field in ",(0,n.jsx)(t.a,{href:"/xiphium-documentation/docs/Financial/Invoice_Items",children:"Invoice Items"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Cost is split into (mostly) the same categories as Budget:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Tissue Culture"}),"\n",(0,n.jsx)(t.li,{children:"Greenhouse"}),"\n",(0,n.jsx)(t.li,{children:"Analytical Lab"}),"\n",(0,n.jsx)(t.li,{children:"Other"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"hour-cost",children:"Hour Cost"}),"\n",(0,n.jsxs)(t.p,{children:["Hours spent on a project can be converted back to cost (in euro's). This is done by the following formula: ",(0,n.jsx)(t.code,{children:"Hours Realized*HourTariff/percentage"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["As of writing this documentation, it is not possible to get the cost from Tissue Culture or Greenhouse from the ",(0,n.jsx)(t.a,{href:"/xiphium-documentation/docs/Financial/Invoice_Items",children:"Invoice Items"}),"."]})})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>s});var n=r(7294);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);