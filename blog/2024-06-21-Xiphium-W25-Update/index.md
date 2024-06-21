---
title: Xiphium 2024-W25 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

:::note
This week had quite some changes. Most changes are made to forms, which will not be covered here. Only Project form and Project Method changes will be discussed here.
:::

## Experiments
New detail tab added to Experiment called 'Documents DiT'.

### Treatments
New detail logic added to Treatment detail (method ***ExT_SelectForDetail***). Page 4 and 5 search for related docuements. Page 6 searches for related Delivery_item and its documents.

### Scan Menu
The scan menu for experiment is broken up into separate forms. This makes handling the logic of each screen more digestible and readable. This did introduce some bugs that are (mostly) addressed and fixed.

Method ***Scanning_ClosePrinting*** is now also able to connect TC_Reg_Emp and Exp_Treatments based on their IDM relationship.

## Deliveries
Method ***DeN_CreateInvoice*** has the following line commented out:
`[Invoice_Items]InD_Description_D_Print_4:=[Purchase_Articles]PuArt_Group1`.

### Delivery Items
Method ***DiT_ExportDel_Cust_Feedb_2045*** has received some changes.
"Plants Received" is now "Plants Pending1" and is calculated using an excel formula. "Plants Accepted" is now calculated using a formula if the field equals 0. Probably to catch instances where it is 'forgotten' to be filled in.

## GreenHouse
Method ***GF_UpdateRecord*** now has an `UNLOAD RECORD([Order])` line added to not block any [Order] records.

## Order
Method ***Ord_ExportExcel_Flex*** now has an extra option to include 'week request'.

## Project2
Method ***Pro2_ExportExcel_Flex*** has been reworked to actually work.

## Analytical lab

### Reference Collection
Detail screen of reference collection now also searches related documents.

## TC Plan Group
Method ***TCPG_ExportExcel_Flex*** seems to be expanded with a new option (or options). The exact changes are hard to read from the code diff.

Method ***TCPG_UpdateRecord*** line 139 has been adjusted. The search for delivery items now excludes delivery items that are being delivered to comcode 001. This is done so that the field [TC_Plan_Group]TCPG_N_StartPlants_Delivered does not include plants sent to Iribov NL.

:::note
The adjusted query in question is the following:
```4D
$productionLoc:=[TC_Plan_Group]TCPG_ComCode_ProductionLoc

$dit:=ds.Delivery_Items.query("Dit_Pla_PlantCode = :1 and DiT_ComCode_Delivery_To # :2 and DiT_ComCode_Delivery_To # :3"; vplantcode; $productionLoc; "001")
```

The new addition of the third parameter is intended to exclude internal deliveries to be counted as 'delivered plants'. Note that internal deliveries from Ghana to Macedonia will still be counted as 'plants delivered'.
:::

## Web Stuff
Method ***000_TestRL*** has the following methods added to it: ***Doc_AddDocument***,
***Doc_AddDocumentWeb***, ***CronTask_StartDaemon*** and ***App_OnStartup***.

Method ***App_OnStartup*** has removed the method ***CronTask_StartDaemon*** when 4D is in local mode. This change has been done to only let cronstasks run if Xiphium is running on a server, and not while running locally (for testing/developing).

Method ***Web_LocationsUploadScanData*** has been adjusted. It seems like the method got some extra error handling needed for practical use.

### Documents
Method ***Doc_ConvertDocument*** has been added to convert .HEIC files to .JPG. This is because support for the .HEIC format is not widespread enough (yet).

Methods ***Doc_AddDocument*** and ***Doc_ReplaceDocument*** now automatically converts .HEIC files to .JPG using the new ***Doc_ConvertDocument*** method.

