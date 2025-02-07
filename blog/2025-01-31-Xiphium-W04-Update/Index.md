---
title: Xiphium 2025-W04 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Tax Group
Methods ***Ord_CreateBatchInvoice***, ***Ord_CreateBatchInvoiceNPlants***, ***GF_CreateInvoice_WBP***, ***DeN_CreateInvoice_Dit*** and ***DeN_CreateInvoice_Dit_Add*** now have TaxGroup "L" for TaxGroupCompany "1", "2" and "" instead of taxgroup "H". Most of these changes were done in week 02, but these might have been overlooked.

## DeliveryNote
Method ****DeN_ColorField*** now also colors the DeliveryNote_Master field green if the record is a master deliveryNote.

Method ***DeN_Print_BoxLabel*** has been modified. I don't understand the changes based on the code changes, but the change seems small.

Method ***DiT_Export_PackingListExpress*** has had the line `xlSheetSetPrintFit($sheet; 1; 1000)` added to it. Probably making it print better.

## Greenhouse Planning Actions
Method ***GHPA_UpdateRecord_GF*** has been modified. A new way of matching moving actions (HG5) and GF_LocationsHistory records. This new method is not foolproof, but more flexible than we had.

## Order
Method ***Ord_ExportScoreListQCBT*** has been modified. 2 queries are now filtering comcode_Delivery1 instead of comcode_delivery2

Old:
```4D
QUERY SELECTION([Order]; [Order]Ord_ComCode_Delivery2#"005")
```
new:
```4D
QUERY SELECTION([Order]; [Order]Ord_ComCode_Delivery1#"005")
```

## TCB
Several 'TCB' methods have been modified, gaining additional features for this module.

## Misc
Method ***Scanning_PrintTrayLabels*** has an added 'amount' value that is always export "Amount = 300"

Method ***GroupBy*** has been simplified, requiring a small change in all the caller methods.

Link between [Spaces] and [Spaces_History] has been renamed to 'space' and 'histories' (n:1, 1:n respectively).

Link between [Spaces] and [Spaces_Detail] has been renamed to 'space' and 'details' (n:1, 1:n respectively).