---
title: Xiphium 2024-W35 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

---

## Access
Methods ***Access_ChangeCurrentUser*** has been modified to now also set the user alias.
We shouldn't need for this user alias because we set 4D's user in the same method, so the functionality of this addition is questionable but probably has a reason.

Method ***Tab_SetDelegate*** has been modified for better tab control. 

Method ***Tab_SetDelegateListForm*** has been added. It seems like this was needed to seperate tabs in a List form, and tabs in Detail forms.

## Cost Calculation
Method ***CosCal_Calc_B2*** has been modified to round off the cost to 2 decimal places.

## CronTask
Method ***CronTask_ExportExcel*** has been added. The method

## Documents
Method ***Doc_ShowListFormPreview*** has been refactored to not use the automatically created 'UserSet' for using highlighted records, but instead uses the command 'GET HIGHLIGHTED RECORDS' to create a set.

Delivery Items detail form 'Dit_Detail' had a manual tab control (hard coded) that now seems to be replaced with a more general method.

Delivery Items detail form 'DiT_List_Subform_DeN_Quality' now (only?) shows the document preview when the control button is being pressed while changing the selection.

## Financial
Method ***FinLeC_SelectForDetail*** has been modified to find Ledgers (FinLed_Total) and Purchase_Articles based on Ledger Code.

### New Fields
3 'empty' fields in FinLed_Codes have been renamed to:
FinLeC_Amount_01-12
FinLeC_Amount_12-24
FinLeC_Amount_25-36

9 extra fields have been added, of which 3 are left 'empty':
1. FinLeC_Am_Pur_01_12
2. FinLeC_Am_Pur_13_24
3. FinLeC_Am_Pur_25_36
4. FinLeC_Am_Saldo_01_12
5. FinLeC_Am_Saldo_13_24
6. FinLeC_Am_Saldo_25_36

3 'empty' fields in FinLeG_Codes have been renamed to:
1. FinLGC_Am_01_12
2. FinLGC_Am_13_24
3. FinLGC_Am_25_36

## Plant
Method ***Pla_Create_NewRecord*** has been modified. The method now searches for a 'Cultivar Group' Code and Name via the CropCode and cultivar code origin. The method assumes the CropCode and Cultivar Code combination is unique.

Method ***TCPG_ExportExcel_Flex*** has been modified. The change is hard to see due to the way the diff is presented. It was probably a small change, but Git thinks it was a big change.

## Web Stuff
Method ***000_TestRL*** has some new methods added:
1. ***Constants_Setup***
2. ***WebApp_Startup***
3. ***Web_PurchStockController***
4. ***Tab_GotoPage***
5. ***Tab_SetDelegate***

Method ***Web_LocSettingsSaveLocation*** has been modified to do a special query if the defaultCompany (i.e. location where Xiphium is running) is '003' or '004'. In these locations, if the given $id is not found in the [Spaces_Detail]SpaD_ID field, the search will try to find records using the [Spaces_Detail]SpaD_BarCode field.

Method ***WebApp_Startup*** now includes an extra line intended for the Purchase Stock app.

### Purchase Stock App
It seems like the Purchase Stock App is being integrated into Xiphium. The following methods have been added to facilitate the app:
1. ***Web_PurchStockController***
2. ***Web_PurchStockGetStock***
3. ***Web_PurchStockGetUser***
4. ***Web_PurchStockUpdateStock***

### Constants
A new constant has been added called: 'Xiphium Purchase Stock App ID'.