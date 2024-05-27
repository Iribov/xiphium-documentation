---
title: Xiphium 2024-W20 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->
:::note
The changes from week 19 are also included in this week's changes, therefore I will only cover changes in methods and Project Form objects (i.e. buttons). Table Forms will be ignored.
:::

## Status 'Current'
Many tables have a status that is time based. Meaning that the status can, for example, be either old, current or future. This 'current' status was often also named 'running' because it is currently running. However, this is now standardized to 'current'. Many tables have had this change implemented:
- [Clone]
- [ComPCropY]
- [ComProd_Week]
- [ComProd_Year]
- [CropWeek]
- [CropYear]
- [Contact]
- [Employee_Month]
- [Employee_Week]
- [Employee_Year]
- [Fin_ExchangeRate]
- [FinIGY_InvestmentGroupYear]
- [FinLed_Month]
- [FinLed_Year]
- [FinLeG_Month]
- [FinLeG_Year]
- [FinTur_ComCrop_Year]
- [FinT_MG1_Year]
- [FinT_MG2_Year]
- [FinTurCom_Year]
- [PlantC_Week]
- [PlantC_Year]
- [PlantMonth]
- [PlantYear]
- [PlantTotal]
- [Project1_Year]
- [Project2_Year]
- [ProjectGroup_Year]
- [Pu_Article_Month]
- [Pu_Article_Year]
- [TC_Plan_GYear]
- [TeamMonth]
- [TeamWeek]
- [TeamYear]
- maybe more that I have missed?

There might be some side effects of changing the status name. These side effects will show in due time, and will be tackled one by one. Every implementation of this change is ignored in the rest of this blog post.

## Deliveries
Scanning menu for deliveries now also fills the company name in the Delivery Note.

Method ***DeN_ExportToTC2EScanning*** now also calls the ***Clo_UpdateRecord*** when creating a new Clone.

Method ***DiT_UpdateRecord*** now also searches for delivery items of the same Order and sums up the amount of plants of these delivery items and calculates the difference of this sum with the amount of plants ordered. This should give a better view if the Order has been fulfilled or not.

## Greenhouse-Field
Object method has been added to Form 'Scan_Dialog_EnterDeliveryGF' object 'vScan_Btn_Close5' that seems to take information from the clipboard and creates Mutation_Employee records for Greenhouse-Fields records.

## Complaints
Method ***AL_ExportExcelComplaints*** has been added to export complaints to an Excel file.

## Access tabs
A new naming standard for tab inter process variables has been introduced and implemented in some of the access methods. Instead of naming the variables `<>kCompanyTab1` and `<>kCompanyTab2` a leading 0 is introduced, making it `<>kCompanyTab01` and `<>kCompanyTab02`.


## Analytical Lab
### Analysis Isolation Plate Overview
The plate creation in Analysis Isolation Overview did not always respect the order of the selected samples when putting them into an isolation plate. It seems like the selected (highlighted) entities of the list box would automatically be ordered by record number (not even by ID!). The idea implemented to fix this is to go through the full list box entitySelection (source) with a for loop and check every entity if it's in the selected (highlighted) entitySelection (the unordered one) and add it to an ordered entitySelection one by one (as shown below).

```
var $sample : cs.Analysis_SampleSelection
$samples:=ds.Analysis_Sample.newSelection(dk keep ordered)
For each ($sample; Form.samples)
	If (Form.selectedSamples.contains($sample))
		$samples.add($sample)
	End if 
End for each 
```

Method ***AnOv_UpdateWellsNew*** has been changes to keep its order. Apparently, newly made selection using the `.newSelection()` function don't keep their order by default when adding entities. Using `.newSelection(dk keep ordered)` will keep the entitySelection order of the entities added to the entitySelection.

:::note
The entitySelection in the list box holding the selected entities seems to be unordered by default. Maybe initializing the entitySelection using the `.newSelection(dk keep ordered)` would prevent this, but this has not been tested yet.
:::

### Pathogens
Methods ***AnSam_CreateUpdate_PathogensTes*** and ***AnSo_CreateUpdate_PathogensToTe*** now have an extra if statement in case a 'duplicate' pathogen record is present, but one of them has the status 'inactive'. This is because there are some duplicate pathogen name short in the Pathogen table, but deleting them was not desirable therfore, the status of the duplicates is set to 'inactive'.

## Clone
Method Clo_UpdateRecord has had a change.

When finding the 'Date In' of the origin clone, we do a While loop to follow the clone link all the way to the first clone. Instead of using the 'Clo_Date_in' of this original clone, the 'Date_in_OrigClone' is used.

:::note
the full code for finding the 'Date In' of the origin clone is:
```4D
For each ($cloneLink; $cloneLinks)
	//add all non zero dates to collection
	If (Date($cloneLink.originclone.Clo_Date_In)#!00-00-00!)
		$originDates.push(Date($cloneLink.originclone.Clo_Date_In))
	End if 
End for each 
	
If (Date:C102($originDates.min())#!00-00-00!)  //safety mechanism to not overwrite manual data when no clone links are present
	//get the earliest date from all linked origin clones
	[Clone]Clo_Date_in_OrigClone:=Date($originDates.min())
End if 
```
We go through all of the clonelinks and save the 'Clo_Date_In' to a collection. Then we get the first date by taking the lowest date out of that collection and assign it to the 'Clo_Date_in_OrigClone' field. Why was this changed from taking the 'Clo_Date_In' to taking the 'Clo_Date_in_OrigClone' from the origin clone(s)?
:::

### Brazil plants present
Method ***Clo_UpdateRecord_TC2*** has been expanded to get the total amount of plants present in location 006 (Brazil).

## TC Scanning
Form 'Scan_Dialog_Printing' objects 'vScan_CloneCode2' and 'vScan_CloneCode2' and form 'Scan_Dialog_Printing' object 'vScan_CloneCode2' now also include the ***Clo_UpdateRecord*** method before saving the new clone.

## Company History
A new table is added (renamed technically) called [Com_History]. It seems to be a table similar to [Order_History], but then for the Company Table. For now its seems to mostly be prepared to track company code (mc), name and location changes (country, address ect.), when and who made the change.

:::tip
Some methods for 'PlaCT' can probably be deleted or renamed. Take a look at the following methods:
- ***PlaCT_Colorfield2***
- ***PlaCT_Sum2***
- ***PlaCT_UpdateRecord2***
:::

## Documents
Method ***Doc_Updaterecord*** has been adjusted where some Classic 4D queries have been replaced by ORDA queries as well as filling the Crop Code, Crop Name and Cultivar Code Origin.

:::warning
Line 42 and 43 of method ***Doc_Updaterecord*** both fill the same field but with different data:
```4D
$find:=ds.Plant_Code.query("Pla_ID = :1"; [Document]Doc_ID_ForeignKey:3)
	If ($find.length=1)
		$find:=$find.first()
		[Document]Doc_CropCode:=$find.Pla_CropCode_Num
		[Document]Doc_CropName:=$find.Pla_CropName
		[Document]Doc_CultCode_Origin:=$find.Pla_CultCode_Origin
		[Document]Doc_CultCode_Origin:=$find.Pla_PlantCode
	End if 
```
This means that the `[Document]Doc_CultCode_Origin` will always be filled the the `$find.Pla_PlantCode`.
:::


## Experiment Treatment
Method ***ExT_UpdateRecord*** modified. The classic 4D query has been replaced with an ORDA query. Also, a new query has been added to fill the Cropcode and cultcode origin according to the plantCode.

:::note
The CropCode is also entered in the Experiment, and is now (also?) searched in the Treatment. What is the relation between these fields of these related tables?

Does a treatment **always** have **single** plant_code?
:::


## Financial
Method ***FinAcDate_UpdateRecord*** has been extended to fill fields related to loans, saldo and their difference.

Table [Fin_Liq_Month] has been renamed to [Fin_Com_Month]. The existing fields and methods are renamed to comply to the naming standard. Fin_Com_Month also has about 85 new unnamed fields.

Tables [Fin_Com_Year] and [Fin_Com_Total] have been added. The new tables also have several new forms and methods.

## CropWeek TPP
Table [CropWeek] has 4 extra fields (renamed from unnamed fields):
1. CroWe_TPP_12M_Real
2. CroWe_TPP_12M_Plan
3. CroWe_TPP_12M_Model
4. CroWe_TPP_12M_Calc

Table [ComPCrop_Week] has 4 extra fields
1. ComProdW_TPPReal
2. ComProdW_TPPPlan
3. ComProdW_TPPModel
4. ComProdW_TPPCalc

These fields calculate the Transfers per Plant (TPP) of the last 12 Months and have been added to their respective ***UpdateRecord*** methods.

## Order
Method ***Ord_Check*** has removed (commented out) a section that searches for contact records (lines 781 t/m 784).

Method ***Ord_ExportExcel_Flex*** has been modified. It seems like some extra optional fields have been added.

Method ***Ord_UpdateRecord*** now searches invoices based on Order IDM to fill the [Order]Ord_N_Plant_Invoiced field.

## TCPA
Method ***TCPA_ExportActivityListClones*** has been added that exports the TC Planning to Excel.

Method ***TCPA_SyncExportClones*** has been adjusted to include Macedonia, Ghana, Brazil and Osorno (Company Code 8). The method now also only searches for clones created in the last 7 days, instead of the last 14 days.
Method ***TCPA_SyncImportClones*** has also been adjusted to reflect these changes.

## Web Stuff
Action 'refresh' has been added to method ***Web_DeliveriesController***. Method Web_DeliveriesRefresh has also been added.
