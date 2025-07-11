---
title: Xiphium 2025-W28 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

:::info
A total of 104 files were modified. Many of which are form alterations that will not be discussed here.
:::

<!--truncate-->
## Delivery
Method ***DiT_CreateClones*** has been added to facilitate creating Clones from Delivery Items. However, the method does not check if the Plant_Code actually exists. It does check if the Clone already exists or not.
## Clone
Method ***Clo_ColorField*** has a whole new section that colors several fields based on certification results.

Modify batch can now modify the 'Virus' checkmark.

Method ***Clo_UpdateRecord_Ana*** has its classic queries to [Analysis_Samples] replaced by ORDA.
## Plant Code
***Pla_Colorfield_List*** also color based on certified status.

***Pla_UpdateRecord*** now takes analysis results for certification just like in Clones.

## TC Plan Action
Field TCPA_CropCultCode has been added to TCPA. All of the cultivar fields are queried from Plant_Code, which could have been connected via TCPG but is chosen to be copy/pasted into TCPA instead.
## Analytical Lab
Method ***AnPlate_ExportFCM_AnPla_Layout*** has been modified to be able to deal with 384 plates and npw accept an entitySelection instead of a string of platenames (comma separated). All references to this method have been updated as well.

Field [Analysis_Order]AnO_Year has been renamed to [Analysis_Order]AnO_Year_Result to clarify what year it takes (the table contains multiple date fields).

Method ***AnOv_InitPlateCanvas*** has been corrected. A 384 plate showed 2 'H' rows because of a typo.

Analysis_Oligo's now display an additional popup when put into the basket (for ordering). This popup only appears when the Oligo was last ordered withing 6 months. This is to prevent double orders, because it is unlikely that an Oligo will be ordered more often than every 6 months.
## Contract
Method ***Con_ColorField*** has been extended to color the 'Week Ready' field based on the status and/or week ready data.

Method ***Con_UpdateRecord*** now counts the amount of actions and open actions from the [ActionList]
## Ledgers
Method ***FinLGM_UpdateRecord*** has been expanded. Many more fields are now filled with data.
## Greenhouse_Field
Method ***GF_ExportExcelReportExpSmall*** exports 2 extra columns called 'Total Plants received' and 'Plants lost sorting'.
## Order
Method ***Ord_ExportExcel_Flex*** has 2 new options for exporting called 'Week transport to NL' and 'List price assignment'
## Web stuff
The Media app has received some updates