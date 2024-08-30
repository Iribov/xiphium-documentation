---
title: Xiphium 2024-W35 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

---


## Financial
### Ledgers
Tables "FinLed_Codes" and "FinLeG_Codes" have been added. There are also about 10 unnamed fields added to each existing Financial ledger tables:
- FinLed_Month
- FinLed_Year
- FinLed_Total
- FinLeG_Month
- FinLeG_Year
- FinLeG_Total

The new tables might have been made to standardize the ledger codes for the different locations, but we'll have to wait for that explanation from the creator of these tables.

:::warning
Methods ***Clear_FinLGC***, ***Clear_FinLeC*** and ***Clear_FinLeT*** probably need a second look. The method names do not correspond with the contents!
:::

:::tip
The trigger methods of [Finled_Codes] and [FineLeG_Codes] contain the following code (respectively):

```4D
If ([FinLed_Codes]FinLeC_ID=0)
	[FinLed_Codes]FinLeC_ID:=Sequence number([FinLed_Codes])
End if 
```
```4D
If ([FinLeG_Codes]FinLGC_ID=0)
	[FinLeG_Codes]FinLGC_ID:=Sequence number([FinLeG_Codes])
End if 
```
This code is not necessary (anymore) since this functionality is built into 'ID' fields with the 'autoincrement' property, which is automatically enabled for the ID field.

:::danger
Unnecessarily enabling triggers slows down the process of creating/modifying/deleting records!

:::

### Articles
Method ***Access_SetupPurchaseMenu*** has been extended to include 3 new access functions, of which the tables have not been made (yet):
- Purchase Articles Loc
- Purchase Articles Loc Year
- Purchase Articles Month

IDM is added to Purchase Article. Probably in preparation of combining/Importing articles from other locations.

## Greenhouse Field
Method ***GF_PrintBatchLabelMultiple*** has been added. The method name indicates that it facilitates the printing of many labels at once related to greenhouse-field.

Button "TC2E_Button_PrintLabels8" in form "GF_List" has been added. The button contains code that seems to the new ***GF_PrintBatchLabelMultiple*** method.

## Experiment
The [Experiment];"Exp_CreateRecord_Dialog" has been updated to conform to the current Experiment code standard. This was particularly difficult given the given standard standard has not been followed well. 

<details>
<summary>Details</summary>

The standard for an experiment code is `[Year]-[2 letter code of country]-[CropCode]-[Sequence Number]` Example: `2024-NL-063-001`. The inconsistency (apart from experiments that didn't use this standard at all) was in the [CropCode] and [Sequence Number]. Both of these sometimes contained leading zero(s), and sometimes not. This made it difficult to calculate the next sequence number.

The solution was to use regex to match the experiment code to this 'loose' standard (with or without leading zeros). The regex was easily created using [ChatGPT](https://chatgpt.com): `^\\d{4}-[A-Z]{2}-\\d{1,4}-\\d{1,4}$`.

```4D
$maxSequenceNumber:=0
For each ($experiment; $experiments)
	If (Match regex:C1019("^\\d{4}-[A-Z]{2}-\\d{1,4}-\\d{1,4}$"; $experiment.Exp_ExperimentCode))  //only count if experiment contains experimet code with format: [Year]-[country 2 character alpha code]-[CropCode]-[sequenceNumber]
		$splitString:=Split string:C1554($experiment.Exp_ExperimentCode; "-"; sk ignore empty strings:K86:1+sk trim spaces:K86:2)
		If ($splitString.length>0)
			$sequenceNumber:=Num:C11($splitString[$splitString.length-1])  //assume the last part of experiment code is the sequence number
			$maxSequenceNumber:=New collection:C1472($maxSequenceNumber; $sequenceNumber).max()
		End if 
	End if 
End for each 
$sequenceNumber:=$maxSequenceNumber+1
$experimentCode.push(Choose:C955($sequenceNumber<1000; String:C10($sequenceNumber; "000"); String:C10($sequenceNumber)))

//join for experiment code (should be unique)
Form:C1466.ExperimentCode:=$experimentCode.join("-")
```

:::tip
the 'if' statement after the `Match Regex` function is not necessary since all experiment codes that hit this code, are conform with the standard and thus will always be split into a collection of 4 elements.
:::
</details>

## Analytical Services
2 label printing buttons have been deleted after their functionality have been moved to a dropdown button 6 months ago.

### Analysis Isolation Plate Status+Scanning
Project form "AnIsoPlate_RepurposeForResearch" has been added. This popup screen asks the user what project2 they want to connect the isolation plate to and re-purposes the isolation plate form production to research, giving it the status 'Research'.

This was a request from the analytical lab to not accidentally throw away plates that are used for research after the production process. The only confusing part is that combined plates (plates used for both research and production) and plates used for research only don't have this 'Research' status.

We have also introduced the status 'discarded' after the (elution) plates have been thrown away, instead of leaving them on 'reported' like we used to.

Several forms and methods have been modified to account for this new status.

## Web Stuff
On request, some web methods have been modernized to using the #DECLARE function instead of the classic $0, $1 etc. for variable declaration.

The following methods have been added for the locations app:
- Web_LocSettingsGetLocation
- Web_LocSettingsGetUser
- Web_LocSettingsSaveLocation

## Misc
A few v20 project mode compiler errors have been resolved by removing some ':' from the end of local variables.