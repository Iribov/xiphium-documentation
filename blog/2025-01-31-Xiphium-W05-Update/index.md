---
title: Xiphium 2025-W05 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Experiment Treatment
bugfix in Form Scan_Dialog_Experiment3. Treatment summary records can now be created in the scanmenu.

## Delivery Note
bugfix in ***DeN_Print_BoxLabel*** to comply with pagebreaks.

## GHPA
Method ***GHPA_ColorField*** has been extended to show colors on the "week planned" field. The first and last actions of a planning are compared to the order (week delivery to greenhouse and week prognose respectively).

Fix bugs in ***GHPA_UpdateRecord_GF***. Also added the exception that repotting actions where the order goes from stage4 to stage5 can be filled from the 'planting' mutations.

## Order
Bugfix in ***Ord_ExcelExport_Flex***, the 'Cancel' button actually cancels the export. Options "S3 Plants Delivered to GF" and "Plants Start GF" were added.

## PlantC_Total, PlantTotal
Some work has been done on the [PlantC_Total] and [PlantTotal] tables. Several methods and forms have been modified to add basic functionality to the table.

## TCB
2 new "TCB_" methods were added and many were modified to ad functionality.

## Misc
Method ***Report_Init*** has been extended with 1 more process variable init (variable name: Report_SpacerHeight). This is used to fix an issue where printing box labels was very slow.

Dropdown GoTo buttons in [Greenhouse_Field] and [GH_Plan_Action] have been replaced by a 3D Button with dropdown. This makes the UI look cleaner while offering the same functionality. This can also be implemented for the GoTo button in [Order], making it more user friendly than the current 'tools' popup.

## Catalog
3 fields of TCPC have been renamed:

| Old Name                        | New Name                      |
| ------------------------------- | ----------------------------- |
| TCPC_Plants_Mult_Realized_Excel | TCPC_Plants_T1_Realized_Excel |
| TCPC_Plants_Prer_Realized_Excel | TCPC_Plants_T3_Realized_Excel |
| TCPC_Plants_Root_Realized_Excel | TCPC_Plants_T4_Realized_Excel |
and 14 fields were added (of which 4 got an actual fieldName):
1. TCPC_MF_Last_3C
2. TCPC_Cycle_Phase
3. TCPC_Date_Update
4. TCPC_CultCode_Origin