---
title: Xiphium 2024-W37 update (1 year Git(Hub) aniversary)
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::info
This Blog post marks a year of Tracking Xiphium using Project mode and Git(Hub)!
This means that we can look back on all changes made to Xiphium in the last year!
:::

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

---
## Dashboard
### TPP
Methods ***Dash_D9_FillGraph_Bar*** and ***Dash_D9_FillGraph_Bubble*** have been added. These methods create a graph to display TPP's for the dashboard, taken from [ComPCropY] and/or [PlantC_Year]

### Radio Button
Radio button 'Transfers'(object Name: Radio Button21) of Form 'General_Dashboard' tab 7 ("TC Capacity/Crop") now updates [PlantC_Total] records remark to be 'Double' when requirements are met.

:::danger Waring
It seems like someone accidentally pasted code here because this dashboard tab has nothing to do with [PlantC_Total], and this button should only be a simple selector for graph options.
The exact same code has been pasted in Form [PlantC_Total]"PlaCT_List" objectName: "Button 4".
:::

## Action List
Method ***AL_ExportExcelComplaints*** now exports an extra columns with 'ComName Init', which seems to be the company name that initiated the complaint.

## Breeding Rights
Method ***BreRig_UpdateRecord*** has been modified. A classic query has been refactored to an ORDA query. The method now finds a Genus Name and CropCode based on a GenusCode, and finds a GenusCode based on GenusName.

:::danger Warning

The code is now as follows:
```4D
If ([BreederRights]BreRig_GenusCode#0)
	$tax_Genus:=ds.Tax_Genus.query("TaxGen_GenusCode = :1"; [BreederRights]BreRig_GenusCode)
	If ($tax_Genus.length=1)
		$tax_Genus:=$tax_Genus.first()
		[BreederRights]BreRig_GenusName:=$tax_Genus.TaxGen_GenusName
		[BreederRights]BreRig_CropCode:11:=$tax_Genus.TaxGen_CropCode
	End if 
End if 

If ([BreederRights]BreRig_GenusCode=0) & ([BreederRights]BreRig_GenusName#"")
	$tax_Genus:=ds.Tax_Genus.query("TaxGen_GenusName = :1"; [BreederRights]BreRig_GenusName)
	If ($tax_Genus.length=1)
		$tax_Genus:=$tax_Genus.first()
		[BreederRights]BreRig_GenusCode:=$tax_Genus.TaxGen_GenusCode
	End if 
End if 
```
The code sequence should be inverted. First, a GenusCode should be found if there is none, then the GenusName and CropCode should be found. Or alternatively, The CropCode should be taken after both queries.

:::

## Crop Loc Year
Method ***ComPCropY_UpdateRecord*** has been extended to calculate 4 different Transfers per Plant (TPP):
1. TPP Root (Transfers per Rooted Plant)
2. TPP Del (Transfers per Deliverd Plant)
3. TPP Planted (Transfers per Planted Plant)
4. TPP Accept (Transfers per Accepted Plant)

These fields are used for the TPP Dashboard.

## Plant
### Plant Code
Method Pla_Export_Excel_Quart_ReportMC has been added.

### Plant C Total
Some work has been done on the [PlantC_Total] table. Methods ***PlaCT_Filter*** and ***PlaCT_UpdateRecord*** have been modified. The forecast in ***PlaCT_UpdateRecord*** is now only updated if defaultCompany="001".

### Plant C Year
Some work has been done on the [PlantC_Year] table. Methods ***PlaCY_Colorfield***, ***PlaCY_Sum*** and ***PlaCY_UpdateRecord*** have been modified. 

### Plant Total
Methods ***PlantT_UpdateRecord*** has been modified. The method now assigns values from a [Company] record to process variables. The use of this is unclear from reading just the diff allone.

## DeliveryNote
Method ***DeN_PrintLabelsQR*** has been modified. The method now checks if printer "ZebraTLP2824Kas" is present before sending the print command to it. Otherwise it will use printer "ZebraTLP2824".

## Delivery Items
Method ***DiT_Export_PackingListTS*** has been added. The method exports a packing list. The acronym 'TS' is unclear to me.

Method ***DiT_ExportExcelDialog*** has been modified to include the new ***DeN_PrintLabelsQR*** export option.

## Financial
[Fin_Com_Total], [Fin_Com_Month] and [Fin_Com_Year] have their UpdateRecord method modified to store the last date the method has bee applied to that record.

## Project2
Method ***Pro2_Updaterecord_Val*** has been modified. The classic query has been optimized for performance.

## Spaces
Method ***SpaD_UpdateRecord*** has been modified. The method now takes the username from a variable that is set in the beginning of the method:

```4D
If (Modified record([Spaces_Detail]))
	
	// RL 06-09-2024) : Zie ticket #221
	If (([Spaces_Detail]SpaD_EmpName_Modified#Old:C35([Spaces_Detail]SpaD_EmpName_Modified)) & ([Spaces_Detail]SpaD_EmpName_Modified#""))
		$currentUser:=[Spaces_Detail]SpaD_EmpName_Modified
	Else 
		$currentUser:=Current user
	End if 
```

This was done in response to ticker #221 on github. The locations app makes changes to this record, and the 'current user' would be designer. This is not fixed with the above implementation.

## Tax(onomy) Genus
Method ***TaxGen_UpdateRecord*** has been modified. the classic query has been refactored to an ORDA query. Also, the Genus code will be equal to the record ID if the Genus code is empty(=0).

## TCPA
Method ***TCPA_ExportDCWeek*** has been modified. 2 new columns have been added with the name "CropName" and "PlantName"

Method ***TCPA_SyncExportProtCultivar*** has been modified. The method now changes its behaviour depending on the $fromCompany variable (NL is handled differencly than the others).

Method ***TCPA_SyncImportProtCultivar*** has been modified. The method now does a multi-line classic query based on given parameters, instead of a query based on id.

## TCPY
Method ***TCPY_UpdateRecord*** now also counts the amount of related TCPC records.

## Web stuff
Several adjustments have been done for the locations and the purchase app.