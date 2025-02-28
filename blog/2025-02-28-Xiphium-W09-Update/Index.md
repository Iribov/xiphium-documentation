---
title: Xiphium 2025-W09 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Delivery
Object methods ***Scan_Dialog_EnterDelivery/Scan_BtnStartDelivery***, ***Scan_Dialog_EnterDelivery/vScan_ScanLine***, ***Scan_Dialog_EnterDelivery/method***, ***Scan_Dialog_EnterInfected/ScanLineField*** and ***Scan_Dialog_EnterInfected/method*** are adjusted so that the totals are updated on every action.

## Order
Method ***Ord_ExportScoreList*** has line 166 commented out:
```4D
//xlSheetSetPrintArea($sheet; 1; 1; $row; 20)
```

Method ***Ord_ExportScoreListQCBT*** has been extended with what seems like a calculation for related TCPA plants_present and Week Real.


## Analytical Lab
### Analysis Plate Verview
A syntax errors are fixed in ***AnPla_UpdateWells*** and ***AnPlate_Overview_UpdateData***.

Method ***AnPlate_CreatePlateName*** is adjusted to the newly proposed naming convention.

## Greenhouse
Conditional formatting for greenhouse has been modified to only show The relative Order information when it's different from the GHPA. Also, the search functionality is modified to meet user's expectation.

## Medium
The Clear and Filter method for Media have been extended.

## Spaces
The spaces, spaces_Detail and spaces_history are being filled with greenhouse data. One reqeust was to add an option to the ***SpaD_DialogModifyBatch*** method to be able to modify the 'amount of shelves' for multiple records at a time.

## Stock
Method ***TCPG_Stock_Calculation*** has been added. This method can calculate the stock of a selection of TCPGs at a given date using the TC_Reg_Emp and Mutations_Employee records (so this method only gives the stock of the current production location).

## Misc
Listpicker method ***ListPicker_AddColumn_ORDA*** had a syntax error for anything that was not a direct table property (field or relationship name).

## Web
Method ***Web_Scanning_UploadDeliveries*** seems to be extended with the functionality of creating new Mutations_Employee to keep the stock up to date.