---
title: Xiphium 2025-W08 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Analytical Lab
Method***AnPlate_Excel_Export_PCR*** has been added. This is one step towards using the analysis plate layout which will be a big step automation, making it possible to import (raw) analysis data into Xiphium.

## Employee Contract
Method***EmpCon_SelectForDetail*** has 2 alerts removed from itself. These alerts were probably there for debugging reasons.

## GH_Plan_Actions
Method***GHPA_Automatic_Planning_Calc*** has been modified. The forwards calculation is now only executed when there are either plants present in the greenhouse, or the 'Week Stage3 Fixes' checkmark is checked.

Method***GHPA_ColorField*** is modified to show colors when the last Greenhouse Format (fust) is different than the in the related order, or when the temperature in the related Space is different than what the action needs (only applies for actions that have been planned into a specific space using the space IDM).

Method***GHPA_UpdateRecord_GF*** has its syntax error fixed.

Method***GHPA_UpdateRecord_GHPA*** now detects and saves whether the action is the last action with a Greenhouse_Format (only the last action with a fust should be compared to the Grenhouse Format from the Order).

Method***GHPA_UpdateRecord_Spa*** has been added. This method takes the temperature saved in its related space history record so that it can be compared faster in the layout. This part could possibly go to the ***GHPA_UpdateRecord_DuplicateData*** method, since it is data that is duplicated from spaces history to GHPA.

Method***GHPA_Update_Entity*** has incorporated method***GHPA_UpdateRecord_Spa***.

## Order
Method***Ord_PrintDeliveryAnnouncement*** has been worked on for testing it seems. The method has uncommented the embedded ***Ord_DeliveryAnnouncementMail*** and only executes it when current user='designer'. This has to do with ticket #248 of the Xiphium repo and is about sending a table generated in 4D via Email (and must be editable by the user before sending).

## TCB
Method***TCBP_Draw*** has been modified to change a few standard values for rendering.

## Web
Methods***Web_MediaStorageGetDetails*** and***Web_MediaStorageGetMedia*** have been modified slightly.

## Pictures
Pictures Picture3.jpg and Picture4.png (naktuinbouw logo and European flag) have been added directly to the TableForm DiT_Label_SoftfruitmetgatNew. I believe it used to take these from the picture library. Why this is changed, is unclear to me.

## New Fields
New fields have been added to the EmpCon and GH_Plan_action tables:

EmpCon:
1. EmpCon_Salary_LC_FT_PrevLine
2. EmpCon_Sal
3. EmpCon_Salary_Perc_FT_Mut_Line
4. Field_80

GH_Plan_action
1. GHPA_Is_Last_Fust_Action
2. GHPA_Space_Temp_Day
3. GHPA_IDM_ProtComp
4. GHPA_ID_ProtCult
5. Field_91