---
title: Xiphium 2024-W14 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Action List (Audits, Incidents)
Method ***Ace_UpdateRecord*** is update to use the CopCode_Num instead of its text variant.

2 new fields called "DeN_IDM_Ace" and "DeN_Rec_Ace" have been added.
"DeN_IDM_Ace" will probably be used to connect a delivery Note to an Incident. "DeN_Rec_Ace" seems to be named that it will count the amount of Incident ([Action]) records that are related to this Delivery Note.

:::note
The new field "DeN_IDM_Ace" indicates that a [DeliveryNote] has a N:1 (many-to-one) relation to the [Action] table. However, "DeN_Rec_Ace" seems to indicate that multiple [Action] records can be connected to a [DeliveryNote] records, indicating a 1:N (one-to-many) relationship from DeliveryNote to [Action]. This is contradictory information, or an indication that a N:N (many-to-many) is actually desired.
:::

## Delivery Issues
Method ***DeN_Create_Complaint*** is adjusted to include the Delivery Note Number in the newly created [Action]

## Clone
The method ***Clo_Filter*** is extended so that the new fields indicating of the Clone has an Issue or Incident, and the issue remark are now searchable by the user.

A new field "Clo_Rec_DiT" is added. The name seems to indicate that it will be used to count the amount of delivery items related to this clone. 5 Other fields have been created, but not named.

The ChoiceList "Clo_Type_Origin" has 2 new options: "Stage 2" and "Clone Split".

## Plant Total
Bugfix in method ***PlantT_UpdateRecord*** to count the total amount of PlantCodes and the amount of active PlantCodes.

Addition in method ***PlantT_UpdateRecord_Val*** to count the amount of clones and the amount of active clones.

14 fields were added of which 10 are unnamed.
the other 4 fields are the fields used for counting the total and active PlantCodes and Clones.

## Plant Year
Addition in method ***PlantY_UpdateRecord*** to sum the amount of ordered and prognosed plants from [Order] records.

## Project2 Year Budget
The budget calculations have been adjusted. Budget B now doesn't include the Budget Hours anymore. Budget Hours is now calculated as `Budget A - Budget B` and the conversion from Budget Hours (in euro's) to the Hour Budget (in Hours) is now `(Budget Hours * Hour_Perc_Direct)/HourTarif`.

## HourRegistration
Field "HR_IDM_Pro2Y" is added as a preparation for the new WBSO connection that will run per Year. This field has a relation to the field "Pro2Y_IDM" of table [Project2_Year].

## Web Photos
Part of method ***Web_PhotosGetSubjectInfo*** that deals with the Experiment Treatment, seems to be rewritten to be more concise while maintaining the same functionality.

## Analytical Lab
The Analysis_Isolation_Plate Excel export for preparation plates now includes a QR code so it can be used with the new app for adding pictures to the record.