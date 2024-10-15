# Project2 Year
A Project2_Year record is always related to a [Project2](Project2.md) record. A Project2?Year tracks the data of a project per year. The main data it tracks are:
- Budget
- Hours
- Cost

## Budget
A budget can be set for a Project2_Year. Besides being insightful, it does not have a function (yet). The budget is split into 2 major components:
1. Budget A
2. Budget B

### 1. Budget A
'Budget A' is comprised of 2 budgets:
1. Budget Extern
2. Budget Intern
3. Budget Order
#### Budget Intern
Budget Intern is the budget that is available for this project from our company.
#### Budget Extern
Budget Extern is the budget that is available from the client (or other organisation)
#### Budget Order
Budget Order searches for Orders of this Project2 and Year, and sums the cost (calculation) from those Orders.

### 2. Budget B
'Budget B' is supposed to be contrived of Budget A. The difference is that Budget B divides Budget A into 4 different categories (i.e. Departments).
- Tissue Culture
- Greenhouse
- Analytical Lab
- Other

This will give better insight on how much every department can spend on a Project2, to keep the whole Project2 within Budget.

#### Budget Hours
'Budget Hours' is a special budget only meant to be used for Hours. Budget Hours is calculated in Euro's by the following simple calculation `Budget A - Budget B`. 'Budget Hours' is converted to Hours using the 'HourTariff' (or 'Hourly Rate') and a percentage, resulting in the following calculation `Budget Hours/HourTariff*percentage`. Budget Hours are not department specific.

## Hours
Hours From [HourRegistration](HourRegistration.md) are summed up and shown. Only hours with the same ProjectCode2 in the 'ProjectCode Used' field in HourRegistration are summed up and shown.

## Cost
The cost (or 'Budget spent') is the amount of money that is internally invoiced with the same ProjectCode2 in the 'ProjectCode2 Debitor' field in [Invoice Items](../Financial/Invoice_Items.md). 

Cost is split into (mostly) the same categories as Budget:
- Tissue Culture
- Greenhouse
- Analytical Lab
- Other

### Hour Cost
Hours spent on a project can be converted back to cost (in euro's). This is done by the following formula: `Hours Realized*HourTariff/percentage`.

:::note
As of writing this documentation, it is not possible to get the cost from Tissue Culture or Greenhouse from the [Invoice Items](../Financial/Invoice_Items.md).
:::

---
## Changes
:::note Changes Eloy
Eloy has been making changes to Project2 Year. Here I will try to explain the changes made to the code.
:::

### Forecast
The hour forecast calculations have been modified. I don't think anyone has used it yet so any changes might have been an improvement.

### Budget C
Budget C (**Pro2Y_Am_C_Budget**) is now calculated as: `Pro2Y_Am_A_Budget_Tot_Prev-Pro2Y_Am_B_Tot_Budget` or in other words; Budget C is now calculated as `Budget A + Leftover Budget A from last year - Budget B`.
This used to be the calculation for Budget B Hours...

Budget C Saldo (**Pro2Y_Am_C_Saldo**) is now calculated as:  ,`Pro2Y_Am_C_Budget-Pro2Y_Am_C_Real`, which doesn't make much sense. What is realized rest budget (**Pro2Y_Am_C_Real**)?
:::danger
Field **Pro2Y_Am_C_Saldo** is calculated twice, so the first calculation of `Pro2Y_Am_C_Saldo:=Pro2Y_Am_A_Budget_Tot_Prev-Pro2Y_Am_B_Tot_Budget` (which is an identical calculation of Budget C (Pro2Y_Am_C_Budget)) is overwritten by the actual calculation .
:::

:::note clarification
I had some cunfusion about budget C and its saldo, so here is to clarify:
- Budget C is the rest budget (difference between Budget A and Budget B)
- Budget C Saldo, is the amount of 
:::

**Pro2Y_Am_C_Real** is calculated as `Pro2Y_Hour_Calc_Used*Pro2Y_HourTarif` or simply put, the cost of all hours spent on the project (with 70% rule applied).
:::tip
What is the meaning of Budget C, if we use all the cost of the hours made, with an additional percentage, and subtract this from the difference of Budget A and Budget B? It does not seem like a 'rest' budget anymore.
:::

**Pro2Y_Am_C_Real_Total** is calculated by `Pro2Y_Am_B_Tot_Real+Pro2Y_Am_C_Real` in other words: all cost from invoices plus the cost of all hours spent on this project.
:::danger
This could mean that hours that are invoiced, are counted double.
:::

### Hour Calculation
**Pro2Y_Hour_Budget** is now calculated as: `Pro2Y_Am_C_Budget/Pro2Y_HourTarif` instead of the old `Pro2Y_Perc_Budget_Hours*Pro2Y_Am_C_Budget_Rest/100`.
That means the new way of calculating these hours does not take the '70%' rule into account and is just converting the rest budget into hours (so this field is now representing hours, instead of money).

#### Realized Hours
**Pro2Y_Hour_Calc** are the hours spent on the project. The calculation has remained the same, only a few adjustments to the field names have been made.
`Pro2Y_Hour_Real_Direct/(Pro2Y_Hour_Perc_Direct/100)` 

| Old Name | New Name | Meaning | 
| - | - | - |
| Pro2Y_Hour_Perc_Direct | Pro2Y_Perc_Hour_Direct_Plan | 70% (or other percentage) used to apply to hours |
| Pro2Y_Hour_Calc | Pro2Y_Hour_Calc_1 | calculate the hours spent on the project with the 70% (or other percentage) rule applied |

So, only direct hours with the 70% (or other percentage) rule applied. This field is now renamed to **Pro2Y_Hour_Calc_1**.

**Pro2Y_Hour_Calc_2** has been added and is calculated as follows: `Pro2Y_Hour_Real_Total/(Pro2Y_Perc_Hour_Total_Plan/100)`. In other words: all hours (direct+indirect) and the 70% rule applied.

**Pro2Y_Hour_Calc_Used** has been added. This new field copies the value of **Pro2Y_Hour_Calc_1** or **Pro2Y_Hour_Calc_2**, whichever is highest. Which is weird, because **Pro2Y_Hour_Calc_2** is always the same or higher as **Pro2Y_Hour_Calc_1**, depending on if there are indirect hours made or not...