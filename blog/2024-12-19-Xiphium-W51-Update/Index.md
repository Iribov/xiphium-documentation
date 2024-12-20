---
title: Xiphium 2024-W51 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Project Mode conversion
Highlight buttons are not supported in project mode. They are automatically converted to invisible buttons. Some buttons gain the 'on mouse enter' form event as a side effect.

## Invoices
A new tab called 'Documents' is added to the access method Project/Sources/Methods/Access_SetupCompanyMenu.4dm. There are already 2 other with this name... 
A page 10 is added to the method ***Inv_SelectForDetail*** with what seems to be a document tab.

## Analysis Pathogen Cost Caclulation
Method Project/Sources/Methods/An_Calc_Pathogen_Cost.4dm has been added. This method can calculate the expected cost of pathogen analysis done by the analytical lab based on several parameters. 

***Clo_Analysis_Cost_Calculation*** has been renamed to Project/Sources/Methods/Cro_Analysis_Pathogen_Cost_Calc.4dm. This method now takes a Crop entity to search for related Analysis_Groups and can calculate the analysis cost using the new ***An_Calc_Pathogen_Cost*** method.

## Delivery Note
Method Project/Sources/Methods/DeN_GetNextDeliveryNoteNrPurcha.4dm has been modified. The SQL query has been altered so that comcode master is now ignored.

## Experiment
Method Project/Sources/Methods/Exp_ExportToLocation.4dm has been added. This method uses the ***Exp_SyncExportExperiments*** to export experiments to another location of Xiphium.

Methods Project/Sources/Methods/Exp_SyncExportDocuments.4dm, Project/Sources/Methods/Exp_SyncExportExpTreatments.4dm and Project/Sources/Methods/Exp_SyncExportExperiments.4dm have been modified to facilitate the ability to manually synchronize experiments.

## Financial Ledgers
Method Project/Sources/Methods/FinLeM_UpdateRecord.4dm has been modified. The method now has an extra if statement that checks if 'type1' contains a 'C' before applyying the amount realized to the forecast:
```4D
If ([FinLed_Month]FinLeM_Status="Prognosis")
	[FinLed_Month]FinLeM_Amount_Open_SC:=[FinLed_Month]FinLeM_Amount_ForeCast2_SC-[FinLed_Month]FinLeM_Amount_Realized_SC
// highlight-next-line
	If ([FinLed_Total]FinLeT_Type1#("@"+"C"+"@"))
		If ([FinLed_Month]FinLeM_Amount_Realized_SC>[FinLed_Month]FinLeM_Amount_ForeCast2_SC)
			[FinLed_Month]FinLeM_Amount_ForeCast2_SC:=[FinLed_Month]FinLeM_Amount_Realized_SC
		End if 
// highlight-next-line
	End if 
End if 
```

## Greenhouse
### GHPA
Method Project/Sources/Methods/GHPA_Excel_Export.4dm has been modified. This square meters export method had some overlooked bugs that made it behave weirdly. The export works more stable now, but the results have not yet been verified.

Methods Project/Sources/Methods/GHPA_Forwards_Calculation.4dm and Project/Sources/Methods/GHPA_Forwards_Calc_Recursion.4dm have been modified. After some discussion, the way of doing the forwards calculation is revised. This is not yet implemented in the code.

Method Project/Sources/Methods/GHPA_UpdateRecord_GF.4dm has bee extended with code fill the 'moving' actions from the [GF_Locations_History] table. This code first looks for a matching week, if no actions are found, the search is widened by 1 week on each side (total of 3 weeks). Then the highest date is used as 'date realized' and the 'plants planned' become the 'plants realized' (since the amount of plants moves is not kept in the [GF_Locations_History] or [Greenhouse_Field] tables).

Method Project/Sources/Methods/Ord_Create_and_Update_GHPA.4dm has been fixed of 2 issues. 
1. a single if statement prevented already created floating actions to behave as a floating action.
2. The check whether changes made to a GHPA were actual changes in values was wrong. It always saved the GHPA (even if not needed!), thus wasting time. This check is now corrected.

## Order
Method Project/Sources/Methods/Ord_ArchiveBatch.4dm has been extended with the following code:
```4D
If (vOrd_DaysH1Set0#0)
	[Order]Ord_Cycle_H1_Manual:=0
	$week2:=[Order]Ord_Week4
	$date2:=DateTime_WeekNrToDate(Num:C11(Substring($week2; 6; 2)); Num:C11(Substring($week2; 1; 4)))
	[Order]Ord_Date_Planned:=$date2
	[Order]Ord_Date_Stage3:=[Order]Ord_Date_Planned+[Order]Ord_Cycle_H1_Manual
	$date1:=[Order]Ord_Date_Stage3
	[Order]Ord_Week_Stage3:=DateTime_GetYearWeekNr($date1)
	[Order]Ord_Date_Modified3:=Current date
	[Order]Ord_EmpName_Modified7:=Current user
End if 
```

Method Project/Sources/Methods/Ord_UpdateRecord.4dm has been modified. The method now ingores puts the 'H1 season days' to 0 when the new GHPA protocol is used (season days are planned to be embedded into this new protocol).

## Web stuff
Method Project/Sources/Methods/Web_TCStockCheckGetStock.4dm has been modified.
Small modifications in the reply:
1. plantName is now CropName1 +" "+ PlantName isntead of just PlantName
2. current weeks is now rounded down instead of up.

The reply now also contains additional information from related planning action(s):
- TCPA id
- TCPA status
- TCPA week real
- TCPA activity
- TCPA N Plants Real
- TCPA N Plants Produced
- TCPA N Plants Present

This extra information will certainly enrich the app.