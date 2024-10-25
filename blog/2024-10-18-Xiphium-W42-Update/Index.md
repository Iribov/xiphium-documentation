---
title: Xiphium 2024-W42 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

---
## Analytical Lab
Methods ***ALP_Button_PrintLabelQR*** and ***AnIsoPlate_Button_PrintLabelsQR*** have been adjusted to be compatible with the new workflow of the analytical lab.

## TCPG
TCPG has a new detail tab called 'Documents' added to both its access method ***Access_SetupTissueCultureMenu*** and tab selection method ***TCPG_SelectForDetail***.

## Experiment Treatment
Field ExT_IDM_Previous has been added. Method ***ExT_UpdateRecord*** has been extended to autimatically fill this field when it is 0. The automatic search is done using the following parameters:
- Experiment Code
- Treatment Code
- Plant Code
- Cycle (cycle has to be smaller than current cycle)
A selection of treatments is made and the treatment with the highest cycle of this selection, will be picked and its IDM stored in the new IDM_Previous field.

```4D
//Treatment IDM connection
If ([Exp_Treatment]ExT_IDM_Previous=0)
	var $treatments : cs.Exp_TreatmentSelection
	var $treatment : cs.Exp_TreatmentEntity
	$treatments:=ds.Exp_Treatment.query("ExT_ExperimentCode = :1 and ExT_TreatmentCode = :2 and ExT_PlantCode = :3 and ExT_Cyclus < :4 order by ExT_Cyclus asc"; [Exp_Treatment]ExT_ExperimentCode; [Exp_Treatment]ExT_TreatmentCode; [Exp_Treatment]ExT_PlantCode; [Exp_Treatment]ExT_Cyclus)
	$treatment:=$treatments.last()
	[Exp_Treatment]ExT_IDM_Previous:=Num($treatment.ExT_ID_Master)
End if 
```

## Greenhouse
Method ***GF_ExportExcel_Flex*** has been modified. A new (optional) column called "picking order" has been added.

Method ***Scanning_PrintTrayLabelsLilium*** has been modified. The template has been modified, probably because of a desired change in the export (to remove unnecessary data).

## Protocol
Method ***Prot_UpdateRecord*** has been modified to automatically fill the 'Prot_Revision_Due_Date' field. This is done using the 'Prot_Date_Version' and 'Prot_Revision_Term_Year' fields.

Method ***Prot_ColorField*** has been extended. Field 'Prot_Revision_Due_Date' now turns red when it's past the date, orange if the date is winthin 30 days and white otherwise.

## Delivery Items
Method has been added to form [Delivery_Items];'DiT_Label_SoftfruitmetgatMac' that seems to fill process variables that are used in the label printing. As the name suggests, this label is meant to be printed from a mac for correct formatting.

## Documents
The method ***Doc_Updaterecord*** has been modified. The method assigns the tablt name to a field according to the table number. These table names are programmed manually, and has been extended to include more tables.

 ***Doc_Updaterecord*** has also been added to the following methods:
- ***Doc_AddDocumentAllCanAdd***
- ***Doc_AddDocumentWeb***
- ***Doc_AddDocumentWebGeneral***

## Web
Modifications have been made to methods related to the media app. Specifically:
 ***Web_MediaGetDiscarded*** and ***Web_MediaGetMedium***. The changes seem minimal and is mostly to comply with data formats.

## Misc
Method ***GroupbyCreateGroups*** has been modified to be able to work with integer fields. This method is part of the ***GroupBy*** method, that can create groups from a collection of objects/EntitiySelection based on their properties/fields.
