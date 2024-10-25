---
title: Xiphium 2024-W43 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

:::note
A staggering 518 files have been modified this week! Because of this overwhelming amount of (mostly) Form changes, only the Project method changes are discussed here.
:::

<!--truncate-->

## Clone
Method ***Clo_ReadyForGreenHouse*** has been added. This method analyses all related [analysis_sample] (and the  relatedsamples from Origin Clones) to see if any pathogen is last tested positive, and compares the analysed pathogens to a list of pathogens that should be tested. This method is the 'missing link' to be able to send only 'clean' material to the greenhouse.

## Financial
Some work has been done on the [FinLeG_Codes] table.

Method ***FinLGC_AddRecord_FinLGT*** has been added. Should we implement this logic into the 'Create Record' button?

Method ***FinLGC_UpdateRecord*** has been added. The method only creates an IDM and counts the amount of related FinLeG_Total and FinLed_Codes records

Method ***FinLGT_UpdateRecord*** has its classic query replaced by an ORDA query.

Methods ***FinLeC_UpdateRecord***, ***FinLeM_UpdateRecord***, ***FinLeT_UpdateRecord***, ***FinLeT_UpdateRecord*** and ***FinLeT_UpdateRecord_Validate*** have been modified with an ORDA query to [FinLed_Codes] to get the LedgerGroup Code and/or Name. Why is this needed, just use the relation where this group code/name is needed!

## Delivery Items

Method ***DiT_UpdateRecord*** has been modified. the method now has an added IF/Else statement checking if the DiT has an Order IDM and takes information from other delivery items with the same order conenction:
```4D
If ([Delivery_Items]DiT_IDM_Ord#0)
	$diT:=ds.Delivery_Items.query("DiT_IDM_Ord = :1"; [Delivery_Items]DiT_IDM_Ord)
	[Delivery_Items]DiT_Order_Sum_DiT:=$diT.sum("DiT_N_Plant")
	[Delivery_Items]DiT_Order_Sum_Dif:=[Delivery_Items]DiT_N_Plant_Order-[Delivery_Items]DiT_Order_Sum_DiT
Else 
	[Delivery_Items]DiT_Order_Sum_DiT:=0
	[Delivery_Items]DiT_Order_Sum_Dif:=0
End if 
```
As mentioned in other blogs, there is no need to do an If statement here if you wrap the .sum() with a Num() as follows:

```4D
$diT:=ds.Delivery_Items.query("DiT_IDM_Ord = :1"; [Delivery_Items]DiT_IDM_Ord)
[Delivery_Items]DiT_Order_Sum_DiT:=Num($diT.sum("DiT_N_Plant"))
[Delivery_Items]DiT_Order_Sum_Dif:=[Delivery_Items]DiT_N_Plant_Order-[Delivery_Items]DiT_Order_Sum_DiT
```

## Greenhouse
### Planning (GHPA)
Methods ***GHPA_Automatic_Planning_Calc***, ***GHPA_Backwards_Calculation*** ***Ord_Create_and_Update_GHPA*** have been adjusted to work properly with floating actions.
### Protocol1
Method ***Prot1_UpdateRecord*** has been modified to make sure only 1 protocol version is active (at all times).

## Project2
Method ***Pro2_Excel_Export_ProjectUpdate*** has been added. The method creates an excel file with some basic data from Project2, but the format is pretty.

## PlantC_Total
Method ***PlaCT_UpdateRecord*** has been modified. The TCPA query now only includes records records with plants present.

## Order
Method ***Ord_ExportExcel_Flex*** has been modified. 2 new options have been added:
1. Transp. temp Stage2
2. Transp. temp Stage3

## Analytical Lab
✂icon added to the lysis plate label/sticker. First the unicode character was used, but this didn't work.

### Analysis_Lysis
[Analysis_Lysis] has the same abbreviation as [Action_List] (AL), so methods for [Analysis_Lysis] are renamed to AnL_ instead of AL_ so no collision is method naming will occur.

### Analysis Lysis Plate
Access for the Analysis Lysis Plate list and detail form has been modified for better naming.

## TC Plan Group Year
Method ***TCPY_UpdateRecord*** now also sums the amount of plants present from TCPA.

Method ***TCPY_UpdateRecord_Val*** has been modified. Thee delivery items query now includes records where Dit_stage="DF".

:::tip

When using 'hardcoded' values in a query, there is no need for a placeholder. The following query:

```4D
$delivery_Items:=ds.Delivery_Items.query("DiT_ID_TCPG = :1 and DiT_Month = :2 and (Dit_Stage = :3 or Dit_Stage = :4)"; $ID_TCPG; $Year_Text+"@"; $DelStage; "DF")
```
can be rewritten as:
```4D
$delivery_Items:=ds.Delivery_Items.query("DiT_ID_TCPG = :1 and DiT_Month = :2 and (Dit_Stage = :3 or Dit_Stage = 'DF')"; $ID_TCPG; $Year_Text+"@"; $DelStage)
```
This makes the query more concise and easy to read. 
:::

## web stuff
small adjustments and refactors done to the 'media' app methods.