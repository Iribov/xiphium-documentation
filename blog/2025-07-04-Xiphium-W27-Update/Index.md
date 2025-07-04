---
title: Xiphium 2025-W27 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

:::info
A total of 158 files were modified. Many of which are form alterations that will not be discussed here.
:::

<!--truncate-->

## Dashboards
Analysis Dashboard query code has been optimized for both specificity and readability.

Financial Dashboard has been adjusted to combine the 2 separate graphs into 1 graph with a shared x-axis.

## Plant Code
Plant_Code has a new detail tab called 'AnSam'. This tab shows the related analys_samples (do note that the results from related clones (via clone link) are NOT loaded).

Fields Pla_Cert_AnSam_CY and Pla_Cert_AnSam_CY_Res are added.
Pla_Cert_AnSam_PY contains the amount of related True (to type) Analysis_Samples records from last year,
Pla_Cert_AnSam_CY contains the amount of relates Analysis_Samples records from this year.

Here is the code added to method ***Pla_UpdateRecord***

```4D
$yearCurrent:=Year of(Current date)
$yearPrev1:=$YearCurrent-1

$anSam:=ds.Analysis_Sample.query("AnSam_PlantCode = :1 "; [Plant_Code]Pla_PlantCode)

$anSam1:=$anSam.query("order.AnO_Year = :1 and AnSam_TypeTest_Clone = :2"; $yearPrev1; "True@")
[Plant_Code]Pla_Cert_AnSam_PY:=$anSam1.length

$anSam1:=$anSam.query("order.AnO_Year = :1 and AnSam_TypeTest_Clone = :2"; $yearPrev1; "True@")
$anSam1:=$anSam.query("order.AnO_Year = :1"; $yearCurrent)
[Plant_Code]Pla_Cert_AnSam_CY:=$anSam1.length
```
As always, hard coded values don't need to be parameterized in the query. Using single quotes inside the query string makes it more readable. Also, the second to last query is useless, as the variable gets overwritten with the query on the next line... This seems like an error that needs to be fixed.

Method ***Pla_UpdateRecord_Ord*** has also been modified. It now draws extra data from related orders. Like the latest year of a TTT Order, and the latest year of a Maint SEE (maintenance certification) Order.

## Financial Ledger
There are new fields added to [FinLed_Month]:
- [FinLed_Month]FinLem_Amount_12M_Prev1
- [FinLed_Month]FinLeM_Amount_12M_Plan
- [FinLed_Month]FinLeM_Amount_12M_Real
- [FinLed_Month]FinLGM_Amount_12M_Prev1_MC
- [FinLed_Month]FinLGM_Amount_12M_Plan_MC
- [FinLed_Month]FinLGM_Amount_12M_Real_MC

Method ***FinLeM_UpdateRecord*** has been modified:
- Forecast 1 and Forecast2 are now calculated properly.
- A new clause in one of the case of statements is added (hard to explain without just copy/pasting the code)
- The new fields are filled with data.

## TC Plan Action
Method ***TCPA_SyncExportTCPlanActions*** has been modified to default to only export actions from the last 2 days (instead of defaulting to the last 7 days). Keep in mind, that this only applies if the third parameter is omitted. The export (as well as the import method ***TCPA_SyncExportTCPlanActionsN_1***) now also synchronized the department code.

Method ***TCPA_UpdateRecord*** has been modified with:
```4D
$TCPG:=ds.TC_Plan_Group.query("TCPG_ID = :1"; [TC_Plan_Action]TCPA_ID_TCPG)
[TC_Plan_Action]TCPA_Rec_TCPG:49:=$TCPG.length
$TCPG:=$TCPG.first()
If ([TC_Plan_Action]TCPA_DepCode=0)
	[TC_Plan_Action]TCPA_DepCode:=$TCPG.TCPG_DepCode
End if 
```
Why do we need these extra fields, and why do we need this code? We're working in a relational database, and these records are related to each other!

## Order History
The trigger of table order history has been modified to include IDMs.
:::note IDM Calc
De IDM is calculated here as:
```4D
ID*1000)+Settings_GetDefaultCompany_Num
```
Even though according to the [documentation](../../docs/General/IDM) it should be:
```4D
ID*100)+Settings_GetDefaultCompany_Num
```
By multiplying the ID by 1000 instead of 100 you loose how many records can be created.
A 32 bit signed integer (longint in 4D) has 2^31 = **2,147,483,647** as a maximum. After this, it will automatically go into minus number to **-2,147,483,647** for a total of **4,294,967,294** records max.

The **regular** IDM, by multiplying with a 100, makes this maximum lower to 2^31= **536,870,912** *2 (for negative numbers* = **1,073,741,824**

This new IDM, by multiplying with 1000 can only have:
2^28 = 268,435,456 * 2 = 536,870,912 records in total.

We are currently only at 2 million Order-History records, so it is not a big problem (yet!), and was probably done to be compatible with default company codes higher than 99. But it's not the standard we agreed on!
:::

## Meme of the week

![](Oh_Legacy_Code.jpeg)

_Meme of the week is NOT a recurrent theme and is only instantiated whenever I feel like it._