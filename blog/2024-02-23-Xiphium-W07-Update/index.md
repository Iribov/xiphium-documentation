---
title: Xiphium 2024-W08 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Invoice
Invoice has received 3 extra fields to track who and when the record was last modified, And who created the record (date of creation was already tracked).
Most (if not all) methods creating invoices have also received these 3 extra fields.

## Delivery Items
Excel Export method ***Dit_ExportPercRootsvsAccept*** has been added. The name of the method suggests it export Delivery Items and compares the 'Percentage rooting' with the 'Percentage accepted'. This method used to be an object method (code directly written in a button), but has been moved to this newly created method.

The dialog popup for exporting to Excel has been extended.

The 'CrossCode' is now copied from Greenhouse Field over to Delivery Items. This should help Breeding with keeping track of their crosses that are not (yet) 'declared' as PlantCodes.

## Greenhouse Planning Actions
Method ***GHPA_Excel_Export*** has been added. The method exports the square meters planned per week. This is done in 2 tabs (2 different views).
1. Per Crop
2. Per Temperature
The Excel Export is still very bare-bones and feedback has already been given for improvements.

## TC Planning Cycles
Methods ***CPA_SyncExportTCPlanCycles*** and ***TCPA_SyncImportTCPlanACycles*** have been added, implying the beginning of (testing?) the Synchronization of Planning Cycles between locations. It is not clear if these methods are in use yet.

## Crop
A 'Create Record' Button has been added to the Crop List. The 'Add Record' button is still available for now, but should be removed over time.
People quite often add a blank record, and don't modify it. This makes it confusing to other users who want to add a Crop, because they get a duplicate key error.

The create record button gives a popup, and a record can only be created if a non-existing corp code is entered, preventing the duplicate key error.

Preventing duplicate keys is important in both Xiphium, and reporting tools that use Xiphium data.

