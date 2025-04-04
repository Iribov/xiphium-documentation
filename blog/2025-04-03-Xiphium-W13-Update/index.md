---
title: Xiphium 2025-W13 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Documents
Method ***Doc_GetRelatedPreviewableItems*** has been added, replacing the ***Doc_ShowDetailFormPreview*** and ***Doc_ShowDetailFormPreviewExT*** methods.
Related documents are now easier to define and are taken into account in the regular ***Doc_ShowListFormPreview*** method, greatly standardizing the related documents definition.

## Greenhouse
[Greenhouse_Field]GF_Invoicing_Reason has been added to the filter method

## HourRegistration WBSO
WBSO hours are now also ignored if the WBSO code used =`" "` and not only if it is empty `""`. This is done because a lot of corrections are now done by putting the WBSO code manual to `" "`.

Method ***Pro2Y_WBSO_Connection_Import*** is added to be able to import connect Project2_Years to PeojectGroup_Years using an excel import.

## Project2
Method ***Pro2_Updaterecord_Val*** has been modified for the status of a Project2 to be able to go to 'Active' after is has been 'Finished' in the past. The status can only go to active if it is done manually (with a checkmark), if there are active TCPGs and/or open Orders.
## Order
Method ***Ord_ArchiveBatch*** has been expanded with 2 if statements based off of process variables. This makes it hard to read when/why this change takes effect.

Method ***Ord_CreateDeliveryNote*** has been adjusted so that a newly made DeliveryNote doesn-t have the current date, but the date entered in the popup screen.

Method ***Ord_ExportExcel*** has a new option for when the shift button is used, the the method Ord_PrintDeliverySheetT4Action is triggered.
Method ***Ord_PrintDeliverySheetT4Action*** is added to export the Scorelist TCPA items to an Excel document.

## Web
Metho ***Web_TCStockCheckGetStock*** has a ' badge' added to its reply parameter (whatever that may mean)

## Catalog file
Table Order_Quality_Score has been added with about 20 fields.

## Meme of the week
![](confusingDocs.jpeg)
_Meme of the week is NOT a recurrent theme and is only instantiated whenever I feel like it._