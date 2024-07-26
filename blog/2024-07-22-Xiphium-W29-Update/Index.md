---
title: Xiphium 2024-W29 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Breeder Rights

Method ***BreRig_ColorField*** has been added to color the status field.

## Deliveries
Method ***Access_SetupDeliveriesMenu*** has tab "Box Packing" added to DeliveryNote (detail?).

Method ***DeN_Print_BoxLabel_DiTBoPa*** has been added. The method uses the Form [DeliveryNote:7]; "DeN_Print_BoxLabel_DiTBoPa" to print labels.

A button has been added that seems to Create [Delivery_Items_BoxPacking] records for tge highlighted [Delivery_Items].

## Greenhouse
Method ***GF_ExportExcelReportEstimateQC*** now has 6 extra columns in its export named:
1. First day prod TC
2. Last day prod TC
3. First week prod TC
4. Last week prod TC
5. First day planting GF
6. Last day planting GF

Button "ExT_Btn_Label2" on form [GreenhouseField];"GF_List" has been adjusted. It seems to include more data in an IF statement, as well as a helpful alert text when something 'special' has occurred.

## Order
Method ***Ord_ExportScoreListQCBT*** now has an extra column that calculates a week from TCPA and takes the transport temperature from [Crop].

## TCPG
Button "TCPG_Btn_ModifyBatch1" has been added to Form [Prices];"PlaPri_List". The buttons seems to be copied from a TCPG excel export and seems to be partially modified.

## TCPC
Button "Button12" has been added to the Form [TC_Plan_Cycle];"TCPC_List". The button seems to be updating the Cycles, but it also seems that the code is still in development.

## Plant Prices
Button "vScan_BTN_Close5" has been added to the Form [Prices];"PlaPri_List". The button seems to be copied from a TC2E Excel import button and has not been properly adjusted yet.

## Clone
Method ***Clo_UpdateRecord_Ana*** is now compatible with having a single clone that has multiple analysis_samples with an identical display code.

<details>

<summary>Code style proposal</summary>

The code of the enhanced part is now as follows:
```4D
QUERY:C277([Analysis_Sample]; [Analysis_Sample:5]AnSam_PlantCloneCode=[Clone]Clo_PlantCloneCode)
QUERY SELECTION([Analysis_Sample]; [Analysis_Sample]AnSam_DisplayCode="2")
If (Records in selection([Analysis_Sample])=1)
	[Clone]Clo_AnSam_Result_2:=[Analysis_Sample]AnSam_Result_1+" "+[Analysis_Sample]AnSam_Result_2
	[Clone]Clo_AnaOrder2:=[Analysis_Sample]AnSam_OrderCode
Else 
	QUERY SELECTION([Analysis_Sample]; [Analysis_Sample]AnSam_Result_1#"")
	If (Records in selection([Analysis_Sample])>=1)
		ORDER BY([Analysis_Sample]; [Analysis_Sample]AnSam_OrderCode; <)
		FIRST RECORD([Analysis_Sample])
		[Clone]Clo_AnSam_Result_2:=[Analysis_Sample]AnSam_Result_1+" "+[Analysis_Sample]AnSam_Result_2
		[Clone]Clo_AnaOrder2:=[Analysis_Sample]AnSam_OrderCode
	End if 
End if 
```

There is an IF statement for when there is only 1 record found, and a longer ELSE statement if this is not the case.

It seems like the code can be simplified and the whole IF ELSE statement can be removed, so the code that is currently under the ELSE statement is always executed. This might technically slow down code execution in most cases, but it increases readability of the code:

```
QUERY([Analysis_Sample]; [Analysis_Sample]AnSam_PlantCloneCode=[Clone]Clo_PlantCloneCode;*)
QUERY([Analysis_Sample];&;[Analysis_Sample]AnSam_DisplayCode="2";*)
QUERY([Analysis_Sample];&;[Analysis_Sample]AnSam_Result_1#"")

If (Records in selection([Analysis_Sample])>=1)
	ORDER BY([Analysis_Sample]; [Analysis_Sample]AnSam_OrderCode; <)
	FIRST RECORD([Analysis_Sample])
	[Clone]Clo_AnSam_Result_2:=[Analysis_Sample]AnSam_Result_1+" "+[Analysis_Sample]AnSam_Result_2
	[Clone]Clo_AnaOrder2:=[Analysis_Sample]AnSam_OrderCode
Else
	[Clone]Clo_AnSam_Result_2:=""
	[Clone]Clo_AnaOrder2:=""
End if 
```
In hindsight we do need the IF ELSE statement to set an empty string for Clo_AnSam_Result_2, but that's only because of the string concatenation that is happening otherwise (if no records are found, it would result in an " " instead of "")

</details>

## Web stuff

Method ***WebDocumentsSendFile*** has been created to abstract logic from ***Web_DocumentsController***.

### New Maintenance app
A new constant has been added to the ***Constants_Setup*** method. The constant i named "Xiphium Maintenance App ID".

Methods have been added for the maintenance app:
- ***Web_MaintenanceController***
- ***Web_MaintenanceGetEquipment***
- ***Web_MaintenanceGetUser***
- ***Web_MaintenanceSaveMaintenance***