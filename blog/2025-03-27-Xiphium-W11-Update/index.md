---
title: Xiphium 2025-W11 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

:::info
Not many changes have been made this week.
:::

## Analysis Order
Method Project/Sources/Methods/AnO_CreateInvoiceSample.4dm has been modified to put the invoiceremark in invoice description 3 (instead of invoice description 2).

## Order
Method Project/Sources/Methods/Ord_ExportScoreList.4dm now has 
`xlSheetSetPrintFit($sheet; 1; 0)` instead of `xlSheetSetPrintFit($sheet; 1; 1000)` and has line 166 `xlSheetSetPrintArea($sheet; 1; 1; $row; 20)` uncommented.

Method Project/Sources/Methods/Ord_ExportScoreListQCBT.4dm has the TCPA Week added to its export.

## Greenhouse
Method Project/Sources/Methods/Ord_Update_GH_Protocol.4dm has been modernized with the `#DECLARE` and `Var` syntax. Also, the greenhouse protocol is now only filled if it was empty before, it will not be overwritten anymore. This is to make sure that old orders and old GHPAs don't get updated when a new version of a protocol is created.

GHPA Go To button now uses the protocol component ID connection to go from GHPA to related protocol components.

## Delivery
Method of object 'Button12' in form 'Dit_List_Subform_DeN' has Pieter Duijn added to its hardcoded access.

## Meme of the week
![](ExcelAsDatabase.jpeg)
_Meme of the week is NOT a recurrent theme and is only instantiated whenever I feel like it._