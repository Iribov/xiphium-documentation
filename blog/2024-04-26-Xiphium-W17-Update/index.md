---
title: Xiphium 2024-W17 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->
:::note
Because of the many changes this week, I will only cover changes in methods. I will try to find significant changes object methods (i.e. 'buttons') but will probably miss some.
:::

## Constants
New methods have been added to (more) easily add Constants. Constants are a really nice way of providing a value that is consistent withing the runtime of a database, but is prone to change in different instances. The nice thing about constants is that they can be used in the code, and the value(s) do not live inside of the Data file. **Default_Company** is probably a great example of where a constant could be used.

The newly created methods make it easy to create constants in code, instead of creating the constant file(s) manually.
The added methods are:
- ***Constants_Add***
- ***Constants_AddGroup***
- ***Constants_ExportToFile***
- ***Constants_New***
- ***Constants_Setup***

***Constants_ExportToFile*** is added to the ***App_OnStartup*** method, so this method created the constant file(s) when the app is started.

:::tip
As a rule of thumb: Code should rarely use hard coded values. It should use constants instead. These constants should also be well documented to avoid duplication and/or confusion of where they are used and for what.
:::

## Project2
[Project2_Year] has a new input form called 'Greenhouse'

Method ***Pro2Y_UpdateRecord*** had several adjustments:
- Connect to a [Project2] through either an (entered) Project2 IDM, or an entered ProjectCode2_Long. When both are changed at same time, IDM takes the priority. 
- Calculate both the Cost and Turnover using its ProjectCode2_Long and Year to look for invoices.
- If Turnover is bigger than the current budget (budget A), Calculate Saldo (leftover budget) using the turnover instead of the budget.

### Project2 Year 'Duplicate' fields
[Project2_Year] contains a lot of fields that are also in table [Project2]. This duplication should be unnecessary because a [Project2_Year] is linked to [Project2]. These duplicated [Project2_Year] fields have replaced by the related [Project2] Fields in both the code and the Forms. The 'duplicate' [Project2_Year] fields are not deleted (yet!).

The only place where this might be a problem is in the Project2 Detail forms where you can use the radio button to summon other [Project2_Year] records that are not related to the opened [Project2]. Is this something we're supposed to support? And isn't that what the [Project2_Year] List form is for?

The changes fields are:
- ProjectCode1
- ProjectCode2
- ComCode_Prod
- ComName Prod
- ComCode Customer
- ComName Customer
- CropCode
- CropName
- WorkType

### Project2_Year & Invoices
Method ***Pro2Y_RadioB_InD*** has been added to filter Invoice_Items based on radio buttons in the Invoice tab of the Project2_Year detail form.

## Invoices
Method ***InV_UpdateRecord*** has had a lot of code changes. This is mostly replacing classic 4D queries with ORDA queries.

Method ***InD_UpdateRecord*** has been adjusted to look for a [Project2_Year] using the ProjectCode1 long Creditor and the invoice year. The method now also auto generates the ProjectCode2 Creditor according to the entered parameters in invoice.

:::note
The ProjectCode2 Creditor is only entered once. If any parameters are changed (comcode credtior, work type, crop, etc.) after running this code once, the projectcode2 long creditor will not change.
:::

### Analysis Lab invoices
There was a mistake made in the code that creates invoices form Analysis. The wrong project2 Field was filled with the projectcode2_long. Now, created invoices are able to be found as 'cost analysis' (if a correct projectcode2 is entered in the [Analysis_Order] before creating the invoice).

### Delivery Invoices
Method ***DeN_CreateInvoice_DiT*** has been modified to also copy the comcode Production to the invoice.

### Greenhouse-Field invoice
Method ***GF_CreateInvoice_WBP*** has been modified to also copy the comcode Production to the invoice.

## Equipment Maintenance
Method ***EqMa_UpdateRecord*** has its status logic improved.

## Experiment Scan Menu
Method ***ExT_AddObservationColumns*** has been edited to be able to display more than 1 Treatment listbox in the same form. It now used a generated UUID for the column and header object names to make sure they are unique.

## Greenhouse Field
Method ***GF_ExportExcelReportEstimateQC*** now also exports Medium codes of bundled Delivery_Items as well as the 'DiT_Q_Medium_Score' (if it's above 0).

## Deliveries
New input form 'Notes' is added.

Delivery_Items 'tools' button now has the 'Create Complaint' option added.

## TC_Reg_Emp
Buttons 'Goto Next TC_Reg' and 'Goto Prev TC_Reg' have been added. These buttons go to the next/previous 'cycle' of the TC_Reg_Emp record(s).

:::note
The list Form is getting a little full with 'Goto' buttons. Maybe a drop-down or a 'Tools' buttons will be useful here?
:::

## Web Stuff
Some refactoring has been going on: method ***Scanning_UploadDeliveries*** has been renamed to ***Web_Scanning_UploadDeliveries***. 

category "delivery-item-experiment" has been added tot be added to onedrive in the method ***Web_PhotosSave***