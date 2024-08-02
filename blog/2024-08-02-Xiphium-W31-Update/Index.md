---
title: Xiphium 2024-W31 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Breeding
Method ***Access_SetupBreedingMenu*** has had 3 new input tabs added to 'Taxonomy Specie'.

## Tax Spec

Method ***TaxSpec_UpdateRecord*** has been extended. The method now extract the amount of [PlantTotal] and [Cultivars] records related to it.

The [Tax_Spec] forms have also received some updates, as can be seen by the modifications of methods ***TaxSpec_SelectForDetail*** and ***TaxSpec_Sum***

## Financial Turnover
Method ***FinTuY_UpdateRecord*** has been adjusted to so that when 0 related orders are found, a 0 is entered in the accompanied fields

:::tip
There is a way to do the same thing, but with less lines of code, improving the readability.

Right now, the code is as follows:
```4D
$order:=ds.Order.query("Ord_ComCode_Sup = :1 and Ord_ComCode_Customer = :2 and Ord_Year = :3 and Ord_Status # :4 and Ord_Status # :5"; vComCode_Cred_Text; vComCode_Deb_Text; $year_text; "can@"; "fin@")
$count:=$order.count("Ord_ID_Ordernumber")
If ($count#0)
	[FinTurCom_Year]FinTuY_TO_Order_Total:=$order.sum("Ord_Cost_Total")
	[FinTurCom_Year]FinTuY_TO_Prog_Total:=$order.sum("Ord_Cost_Total_Prog")
Else 
	[FinTurCom_Year]FinTuY_TO_Order_Total:=0
	[FinTurCom_Year]FinTuY_TO_Prog_Total:=0
End if 
```
After the query, a check is done if there are any orders found (using the .count() function). If there are orders found, sum up the required numbers, else, put a 0.

We don't have to do an if else statement to guard for the possibility of not finding any orders. Using the ***Num()*** function, we can achieve the same thing but with less lines of code:

```4D
$order:=ds.Order.query("Ord_ComCode_Sup = :1 and Ord_ComCode_Customer = :2 and Ord_Year = :3 and Ord_Status # :4 and Ord_Status # :5"; vComCode_Cred_Text; vComCode_Deb_Text; $year_text; "can@"; "fin@")
[FinTurCom_Year]FinTuY_TO_Order_Total:=Num($order.sum("Ord_Cost_Total"))
[FinTurCom_Year]FinTuY_TO_Prog_Total:=Num($order.sum("Ord_Cost_Total_Prog"))
```

Now, when there are no Orders found, the $order.sum() will return Null or Undefined, using the ***Num()*** function, this will get transformed into a 0, eliminating the need for a check and If/Else statement.

:::

## Order
Method ***Ord_UpdateRecord*** has been modified. There are 2 Else statements added that when a 'Week' field is empty, the corresponding 'Year' field will be 0. But when the 'Week' is empty, why not let the standard functions do their job and fill in empty values in month and year?

:::tip
There is a way to do the same thing, but with less lines of code, improving the readability.

The following code tries to convert a year-week to a year-month and year:

```4D
If ([Order:]Ord_Week#"")
	$week:=[Order]Ord_Week
	$date:=DateTime_WeekNrToDate(Num(Substring($week; 6; 2)); Num(Substring($week; 1; 4)))
	$month:=DateTime_GetYearMonthNr($date)
	[Order]Ord_Date_Planned:=$date
	[Order]Ord_Month:=$month
	[Order]Ord_Year:=Year of($date)
Else 
	[Order]Ord_Year:=0
End if 
```

If it is desirable to have the year and month be 0 (and "") when the week is empty, it's better to remove the If/Else statement and let the functions do their job. We can also remove the local variables as they make the code unnecessarily longer (and use the better suited ***DateTime_YearWeekNrToDate*** method instead of the ***DateTime_WeekNrToDate*** to convert a year-week to a date). All of these tricks combined results in the following code:

```4D
[Order]Ord_Date_Planned:=DateTime_YearWeekNrToDate([Order]Ord_Week)
[Order]Ord_Month:=DateTime_GetYearMonthNr([Order]Ord_Date_Planned)
[Order]Ord_Year:=Year of([Order]Ord_Date_Planned)
```

Keep in mind that this code will change the [Order]Ord_Date_Planned to !00-00-00! and the [Order]Ord_Month to "", which is different behavior than the original code.

:::

## TC Plan Action
Methods ***TCPA_SyncExportTCPlanActions*** and ***TCPA_SyncExportTCPlanActionsN_1*** have been adjusted. The methods now have an additional field to synchronize. This is the [TC_Plan_Action]TCPA_Locations field.

## TC Plan Cycle
Button vScan_Btn_Close5 in form [TC_Plan_Cycle];"TCPC_List" has been added. This button seems to import Load planning cycles based on the pasteboard content.

## Plant Year
Method ***PlantY_UpdateRecord*** has been modified to extract extra information from delivery items. The amount Stage 3 plants poduced by company codes 1 through 6 are now calculated in their respective (newly created) fields.

Method ***PlantY_UpdateRecord_Val*** has been modified to record the last time the record was updated. It also searches for records identical to itself.

:::tip
If you quickly want to find duplicate records, the method ***duplicates*** is highly optimized to do so. Unfortunately it is only compatible with a single alpha/text field (for now)
:::

Button PlantY_Btn_DistributePlantPrev in form [PlantYear];"PlantY_Detail" has been modified. The button now calculates the forecast in a different way.

## DeliveryNote
Method ***Ord_CreateDeliveryNote*** and button Ord_Dialog_InD_Btn_OK of form [Order];"Ord_Dialog_DiT" have been modified. Where there used to be 3 ***DB_UnlockRecord***, are now 3 UNLOAD RECORD function calls. Probably because method ***DB_UnlockRecord*** puts the given table to READ ONLY mode, while UNLOAD RECORD doesn't change the Read/Write mode.

## Analytical Lab
AnO Detail now sorts samples by SampleCode instead of ID.

Method ***AnPlate_ExportFCM_AnPla_Layout*** has been adjusted to better display the exported information.

Isolation plate has a new option for blocked wells called 'PCR temporary' that block wells B01, B02, D01, and G10. This is now also the default option when creating an isolation plate.

## Web stuff
Method ***Web_MaintenanceController*** has been modified. It seems that method ***Web_DocumentsSendFile*** has been split into two methods: 
1. ***Web_MaintenanceGetDocument*** 
2. ***WebApp_SetJSONResponse***

This is probably done for better maintainability and/or reusability.

Method ***Web_MaintenanceGetDocument*** has been simplified by removing the $reply.mimeType property, and removing the first parameter called $action (leaving only the parameter called $id).

Method ***Web_MaintenanceGetEquipment*** has been modified. The $document.url property is removed. Also, a commented out QUERY BY FORMULA has had its last comparison removed.

