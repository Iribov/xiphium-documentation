---
title: Xiphium 2024-W27 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

:::note
Not many changes have been done this week. Seems like a summer holiday.
:::

## Experiment Treatment
Experiment Treatments has a new tab in its detail screen called 'Photos'. This page also looks for pictures in the Delivery_Items and dropbox.

## Analytical Lab
Method ***AnPlate_ExportFCM_AnPla_Layout*** now supports text wrap for its headers. Previously some text was cut off when exporting.

Method ***AnSam_Import_Ploidy_Request*** has been adjusted. It now accepts a PlantCloneCode in column 10.

## Financial
Several method withing the financial tables have been updated slightly.

## Web stuff
Methods ***Web_InfectedController*** has bee adjusted. The method no longer has the need for a 'method' and the 'actions' have been renamed.

Methods ***Web_InfectedRefresh*** and ***Web_InfectedUpload*** have been added

## Catalog changes
7 fields have been added to the [BreederRights] table. Indicating that this table might receive more attention in the coming future.
1. BreRig_CPVO_CountryB
2. reRig_CPVO_Breeder
3. BreRig_CPVO_Holder
4. BreRig_CPVO_Maintainer
5. BreRig_CPVO_Grant_Date
6. BreRig_Import_Date
7. BreRig_CPVO_Register_Type

3 fields have been renamed from their default name in the [Action_List] table
1. AL_Date_Verification_Planned
2. AL_Measure_Not_Effective
3. AL_Date_Verification_Real