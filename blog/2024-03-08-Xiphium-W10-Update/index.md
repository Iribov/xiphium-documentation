---
title: Xiphium 2024-W10 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Cost calculation
The 'General_CostCalculation' form has received some extra fields. It seems like the fields are there for extra parameters, but it's hard to interpret a form change just from code.

Method ***CosCal_Calc*** has received changes to a few calculations in regards to 'space' calculations? The intentions of these changes are unclear form just reading the code, but the changes seem significant.

Method ***CosCal_GetParameters_B4*** has some changes in calculating process variables that are used in ***CosCal_Calc***. It seems like the changes in ***CosCal_Calc*** are done to accommodate the changes done in ***CosCal_GetParameters_B4***. It is unclear if the changes in code result in practical changes, but it does seem to indicate so.

## Greenhouse app
Method ***Web_PhotosGetSubjectInfo*** has added the Greenhouse Field 'barcode' to an object, indicating that the information sent from/to the app now includes this barcode.

## Delivery Items 
### Account Manager Name
A button is added that updates the account manager responsible and creates an excel with missing Company-Crop combinations. If no Company-Crop record is found, the name is taken from Company, and the Company-Crop combination is exported to Excel.

### Incident registration
A boolean Field has been added to register if a delivery item is an 'Incident'. An incident is not an issue yet, but it is also not well defined.

## Analytical Lab

### Reference Collection Individual
The reference Collection individual label has been improved. Unfortunately, the wish of printing a different label, depending on which tab has been selected in Reference Collection, does not seem possible.

### Locked fields
In the analytical part, certain fields become locked based on the status. The field 'Remarks_Invoice' is added to these locked fields.

## Fin_Liq_Month
Several small changes have been done in different places for the [Fin_Liq_Month] table. Indicating it is being prepared for usage.

## Greenhouse Field Quality Report Excel Export
Small changes have been made to the method ***GF_ExportExcelReportQuality***, optimizing the report for users.

