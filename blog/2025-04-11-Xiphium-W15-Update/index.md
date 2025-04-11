---
title: Xiphium 2025-W15 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Financial Dashboard
A Dashboard tab has been modified from showing CropC_Week data to FunTurCom_Month data.

## Clones
Method Project/Sources/Methods/Clo_ExportExcel_Flex.4dm has been modified to add 12 optional columns to the export.

Method Project/Sources/Methods/Clo_UpdateRecord.4dm is modified to what seems like to copy the certification status.

## Web Stuff

Project/Sources/Methods/Web_OrderScoreController.4dm, Project/Sources/Methods/Web_OrderScoreGetDocument.4dm, Project/Sources/Methods/Web_OrderScoreGetOrder.4dm, Project/Sources/Methods/Web_OrderScoreGetScore.4dm and Project/Sources/Methods/Web_PhotosSave.4dm  have been modified for extra functionality.


## Catalog
9 fields have been added to the [Clone] table.
- Clo_OriginClone_N_CB_Cert
- Clo_OriginClone_CB_Cert_all
- Clo_Plant_S0
- Clo_Plant_S1
- Clo_Plant_B0
- Clo_Plant_B1
- Clo_Plant_B2
- Clo_Plant_B3
- Clo_Average Level

Field GF_Rec_GPA has been added to the Greenhouse_Field table.

Field GHPA_IDM_GH ahs been added to the GH_Plan_Action table.

## Other
Many other 'small' adjustment have been made (mostly UI or user functionality). These changes are not significant enough to discuss here.