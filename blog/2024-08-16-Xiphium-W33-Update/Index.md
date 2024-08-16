---
title: Xiphium 2024-W33 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

---
## Company
Method ***Com_UpdateRecord_Val*** now does a query to [Com_History] to check if there is only 1 [Com_History] history record with status 'current' and identical 'ComCode_Prod'

<details> 

<summary>Com_UpdateRecord_Val Code addition</summary>

```4D
C_OBJECT($comHist)
$comHist:=ds.Com_History.query("ComH_ComCode = :1 and ComH_Status = :2"; [Company]Com_ComCode_Num; "Curr@")
If ($comHist.length=1)
	$comHist:=$comHist.first()
	[Company]Com_ComCode_Prod:=$comHist.ComH_ComCode_Prod
Else 
	[Company]Com_ComCode_Prod:=0
End if 
```

</details>

## Employee Job
Method ***EmJo_Excel_Export*** has a new colums called "MF", which exports the multiplication factor, calculated as 'totalTransfers'/totalScanned'.

## Order
Method ***Ord_ExportExcel_Flex*** Now has an extra (optional) column: 'Clones in T4 TCPA'. This option lists all the clones in the related T4 TCPAs

<details>

<summary>Code proposition</summary>

The added code can be greatly simplified from:

```4D
$TCPA:=ds.TC_Plan_Action.query("TCPA_IDM_Ord = :1 and TCPA_Activity_Group = :2 and TCPA_Status # :3"; [Order]Ord_IDM_OrderNumber; "T4"; "Delete")
If ($TCPA.length<=1)
	$TCPAClones:=$TCPA.max("TCPA_Clone_Clones_Used")
	xlSheetSetCellText($sheet; $row; vColumn83; $TCPAClones)
Else 
	C_COLLECTION($col)
	$col:=New collection
	For each ($TCPAitem; $TCPA)
		$col:=$col.concat(Split string($TCPAitem.TCPA_Clone_Clones_Used; " | "))
	End for each 
	$col:=$col.distinct()
	$TCPAClones:=$col.join(" | ")
	xlSheetSetCellText($sheet; $row; vColumn83; $TCPAClones)
End if 
```
to 

```4D
$TCPA:=ds.TC_Plan_Action.query("TCPA_IDM_Ord = :1 and TCPA_Activity_Group = 'T4' and TCPA_Status # 'Delete'"; [Order]Ord_IDM_OrderNumber)
$col:=$TCPA.distinct("TCPA_Clone_Clones_Used")
//do an extra join and split to account for records with multiple clones
$string:=$col.join(" | ")
$TCPAClones:=Split string($string; " | ").distinct()
xlSheetSetCellText($sheet; $row; vColumn83; $TCPAClones)
```
:::warning
Above is optimized for readability and not (neccessarily) for performance.
:::
The query is simplified by putting hard coded values in the query string itself, instead of using parameters. The If Else statement is not necessary (it would slightly improve performance, sacrificing some readability).
</details>

## PlantC_Year & PlantTotal
Both [PlantC_Year] and [PlantTotal] have been worked on, adding some methods and form changes for user functionality.

## Web Stuff
Many changes are done with methods starting with 'Web'. Most of them are refactorings (renaming of variables), some methods are added and there are some functional changes as well. All changes are too many to list here.

## Misc

Utility methods ***String_URLDecode*** and ***String_URLEncode*** have been added. These methods encode/decode a string.

## Meme of the week
![](technical-debt-1-600x530.png)

*Meme of the week is NOT a recurrent theme and is only instantiated whenever I feel like it.*