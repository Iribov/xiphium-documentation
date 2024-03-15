# Project2 Year
A Project2_Year record is always related to a [Project2](Project2.md) record. A Project2?Year tracks the data of a project per year. The main data it tracks are:
- Budget
- Hours
- Cost

## Budget
A budget can be set for a Project2_Year. Besides being insightful, it does not have a function (yet). The budget is split into 2 major components:
1. Budget A
2. Budget B

> There is also a 'Budget Order'. This field searches for Orders of this Project2 and Year, and sums the cost (calculation) from those Orders. This is not considered actual budget, but can be used as an indication of what the budget might be.

### 1. Budget A
'Budget A' is comprised of 2 budgets:
1. Budget Extern
2. Budget Intern
#### Budget Intern
Budget Intern is the budget that is available for this project from our company.
#### Budget Extern
Budget Extern is the budget that is available from the client (or other organisation)

### 2. Budget B
'Budget B' is supposed to be contrived of Budget A. The difference is that Budget B divides Budget A into 4 different categories (i.e. Departments) and an 'Budget Hours' (more on that later).
- Tissue Culture
- Greenhouse
- Analytical Lab
- Other
- Budget Hours
This will give better insight on how much every department can spend on a Project2, to keep the whole Project2 within Budget.

#### Budget Hours
'Budget Hours' is a special budget only meant to be used for Hours. Budget Hours is entered in Euro's, and by the help of the 'Hourly Rate' converted to Hours. This is meant to be an indication on how many hours you can spend on a project. Budget Hours are not department specific.

## Hours
Hours From [HourRegistration](HourRegistration.md) are summed up and shown. Only hours with the same ProjectCode2 in the 'ProjectCode Used' field in HourRegistration are summed up and shown.

## Cost
The cost (or 'Budget spent') is the amount of money that is internally invoiced with the same ProjectCode2 in the 'ProjectCode2 Debitor' field in [Invoice Items](../Financial/Invoice_Items.md). 

Cost is split into (mostly) the same categories as Budget:
- Tissue Culture
- Greenhouse
- Analytical Lab
- Other

:::note
As of writing this documentation, it is not possible to get the cost from Tissue Culture or Greenhouse from the [Invoice Items](../Financial/Invoice_Items.md).

:::info
The cost structure is still in discussion as of writing this document, but I suspect that the 'Hours Cost' will be added to compare to the Budget Hours.
:::
:::