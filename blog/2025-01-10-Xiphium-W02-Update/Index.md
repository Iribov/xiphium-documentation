---
title: Xiphium 2025-W02 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors. This weeks commit is so convoluted, many details will be missed.
:::

<!--truncate-->

:::info
This weeks commit contains a lot of deletions from last week because of the 2 table name changes, and I forgot to delete the project folder before conversion last week. These name change deletions will be ignored in this weeks blog.

Many methods are also adjusted to adhere to the new table naming. Most notably methods using ORDA, the local variables still used the old naming scheme and most are now replaced.
:::

## Login
A CapsLock warning is implemented in the login screen.

## Plant
Method Project/Sources/Methods/Pla_Colorfield_List.4dm has been modified to not color the 'Date In' anymore.
### Plant Menu
Method Project/Sources/Methods/Access_SetupPlantsMenu.4dm has been modified. 2 new input forms have been added called 'Period2' & 'Admin'. 3 existing Output forms have been renamed:
1. Protocol4 -> Protocol Stock
2. \- -> Check
3. Admin -> Period1


## Tax Group
Methods Project/Sources/Methods/DeN_CreateInvoice_DiT.4dm, Method Project/Sources/Methods/GF_CreateInvoice_WBP.4dm, Project/Sources/Methods/Ord_CreateBatchInvoice.4dm and Project/Sources/Methods/Ord_CreateBatchInvoiceNPlants.4dm have been modified to change tax group company "1" from tax group "L" to "H", whatever that may mean.

 has been modified to change tax group company "1" from tax group "L" to "H", whatever that may mean

## GHPA
Method Project/Sources/Methods/GHPA_Excel_Export.4dm has been modified to exclude floating actions.

Method Project/Sources/Methods/GHPA_UpdateRecord_GF.4dm has been modified to get the plants present form Greenhouse_Field for Moving Actions.

Method Project/Sources/Methods/Ord_Create_and_Update_GHPA.4dm has been modified to save a new GHPA as a first step, so it creates an ID, IDM and ComCode_Owner using the trigger.

## Financial
Method Project/Sources/Methods/FinT_CCY_UpdateRecord.4dm has been modified. A query line has been added:
```4D
$order2:=$order.query("Ord_CropCode = :1 and Ord_Week = :2 and Ord_OrderType2 = :3 and Ord_Status # :4"; $CropCode_text; $YearPrev1+"@"; "Del@"; "Can@")
// highlight-next-line
$order2:=$order2.query("Ord_Type_Start_Material # :1"; "Stage4")
```
This new line (highlighted above) could easily be integrated into the query above it, saving a server call:
```4D
$order2:=$order.query("Ord_CropCode = :1 and Ord_Week = :2 and Ord_OrderType2 = :3 and Ord_Status # :4 and Ord_Type_Start_Material # 'Stage4'"; $CropCode_text; $YearPrev1+"@"; "Del@"; "Can@")
```

## Order
Method Project/Sources/Methods/Ord_ExportExcel_Flex.4dm now also exports the Company Name of Delivery2, instead of just the Comapny Code.

## TCBP
Several methods have been added starting with `TCBP_`. It seems like some pre-work for drawing things on a canvas (canvas plugin from Rob). The idea is to create an overview of TC Planning Actions per week and per Batch as stated in [Issue #246](https://github.com/Iribov/Xiphium/issues/246).

## Misc
Method Project/Sources/Methods/PopupMenu_From_Collection.4dm has been adjusted to the new `#DECLARE` and `Var` syntax. The method now also ignores special characters for menu items, while still respecting the `-` special character as a line seprator.

## Meme of the week
![](nothing_works.jpeg)
*Meme of the week is NOT a recurrent theme and is only instantiated whenever I feel like it.*