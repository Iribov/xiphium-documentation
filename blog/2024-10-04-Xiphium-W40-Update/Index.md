---
title: Xiphium 2024-W40 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

---
## Analytical lab
Implementation of the newly added Lysis and Lysis Plate tables came with some bugs. These bugs have been squashed over the course of this week, and the system seems to be stable for routine usage. However, there are still optimsations to be done for a better/more user friendly workflow.

## Deliveries
Method ***DeN_CreateInvoice_DiT*** has been adjusted to get the invoice code differently when running in NL compared to other locations.

Method ***DeN_CreateInvoice_DiT_Add*** has been added. The method creates an invoice from a DeliveryNote and is 477 lines long.

There seem to be more checks inserted into multiple buttons that have something to do with creating (the right) invoices.

## synchronization

Method ***Exp_SyncImportDocuments*** has been adjusted to use the IDM instead of the ID of a record.

### new table
The table [SyncAction] has been added. It seems to be able to record synchronization actions  detailing the record, time, user and action.

### new methods
3 new methods have been added relating to synchronization:
1. SyncAction_Create
2. SyncAction_ExportDeletedRecords
3. SyncAction_ImportDeletedRecords

These methods seem to be able to synchronize actions on records. The ***SyncAction_Create*** method has been applied to [TC_Plan_Cycle] to Create and delete records on all synchronized locations.

## HourRegistration

Method ***HR_ReportExcel_Flex*** has been modified. Option 'Work Type' has been added to the flex export, as well as some subtotals.

## Misc

Table [Media_Production] now supports documents being added to its records.

Method ***Doc_ShowDetailFormPreviewExT*** has been modified to properly display related documents of Experiment Treatments.

It seems like several tables thtat didn't have any forms, now have an automatically created Input and Output form.

