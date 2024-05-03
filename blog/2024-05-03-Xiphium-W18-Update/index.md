---
title: Xiphium 2024-W18 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->
:::note
Because of the many changes this week, I will only cover changes in methods. I will try to find significant changes object methods (i.e. 'buttons') but will probably miss some.
:::



## Crop Year
Method ***CroYe_UpdateRecord*** now also calculates the 'CroYe_Plant_Forecast0' and 'CroYe_Plant_Open_FC0'

## Deliveries
### UpdateRecord
Method ***DiT_UpdateRecord*** now also calculates the amount of related Actions related to it. This should only be able to 0 or 1 given the (intended) 1:1 relationship. This number can help with finding delivery items that have actions related to them.

<details>
<summary>Optimization strategies</summary>

While the above method is a perfectly valid, there is an alternative method that can be considered: 

Instead of doing a query to [Actions] for **every** Delivery_Item **every time** the record is updated, the query could also be done only when looking for Delivery_Items with an [Action]. Sure, the search would become slower, but all of the updates would become quicker.

So depending on the amount of times we expect users to search any Delivery_Items with a related [Action], we can consciously choose one of the 2 methods for optimal performance for our use case.

</details>

### Go to button
Method ***DiT_Goto_ACE*** has been added to go from Delivery_Items to an Action.

## Financial
Several Field Name changes have been done in several Financial tables.

### FinLiM_UpdateRecord
Method ***FinLiM_UpdateRecord*** seems to have many code changes because of these name changes. However, some significant code changes are:
- When querying for invoices, `Inv_ComCode_Deb_MC # 1` is added

<details>
<summary>Queries and placeholders</summary>

:::tip
Placeholders in queries are a great way to use variables inside of your query safely. However, when using hard coded values, it's more readable if they're put in the query directly.

The current
```
$invoice1:=$invoice.query("Inv_Date_Invoice >= :1 and Inv_Date_Invoice <= :2 and Inv_ComCode_Deb_MC # :3"; $date_LastYear; Current date; 1)
```
is less clear than:

```
$invoice1:=$invoice.query("Inv_Date_Invoice >= :1 and Inv_Date_Invoice <= :2 and Inv_ComCode_Deb_MC # 1"; $date_LastYear; Current date)
```
:::

</details>

:::danger
There seems to be duplicated code in method ***FinLiM_UpdateRecord*** from line 248 to line 260. Since these lines contain a query (that is now duplicated), it has a significant impact in the performance of this method.
:::
- a new code block is added for records that have the status 'Realized'. In this block the fields FinLiM_L_TO_Plan, FinLIM_L_TO_12M_Plan, FinLiM_L_TO_Plan_MC and FinLiM_L_TO_12M_Plan_MC are filled using [FinTurCom_Month] data.

### Status query
Method ***FinT_CCM_UpdateRecord*** has been modified. An [Order] query now excludes an extra [Order] status 'GreenHouse'.

<details>
<summary>not(collection in query)</summary>

instead of repeating the same property/field 3 times, it can be more readable to use the property/field once, and compare it to a collection.

so instead of the current:
```
$orderSel:=$orderSel.query("Ord_CropCode = :1 and Ord_Month_S3 = :2 and Ord_OrderType2 = :3 and Ord_Status # :4 and Ord_Status # :5 and Ord_Status # :6"; $CropCode_Text; [FinTur_ComCrop_Month]FinTurCCM_Month; "Del@"; "Can@"; "Fin@"; "Green@")
```

We could do:
```
$orderSel:=$orderSel.query("Ord_CropCode = :1 and Ord_Month_S3 = :2 and Ord_OrderType2 = :3 and not(Ord_Status in :4); $CropCode_Text; [FinTur_ComCrop_Month]FinTurCCM_Month;new collection("Del@"; "Can@"; "Fin@"; "Green@"))
```
It's a good idea to check if wildcards are still respected. Maybe performance will be better too!
 
</details>

The same method can be applied to method ***FinT_CCY_UpdateRecord*** line 125.

## Plant Price
Method ***PlaPri_UpdateRecord*** has been adjusted to keep track of by who and when the record was created and modified.

## Project2 Year
Method ***Pro2Y_UpdateRecord*** has been adjusted. The order query now ignores the ComCode_Prod. This means that all orders of the same WorkType, Customer and Crop as the Project2_Year will be used for the budget (except cancelled Orders ofcourse).

The 'TC budget' is now automatically filled using the orders. This makes it impossible to manually adjust the amount.

## Web Stuff
Method ***000_TestRL*** had a massive cleanup, leaving only 3 of the 1214 lines intact.

Method ***Web_DeliveriesController*** has been adjusted in response to [ticket #204](https://github.com/Iribov/Xiphium/issues/204).

Method ***Web_DeliveriesGetItem*** has been added.

Methods ***Web_GreenhouseLoad*** and ***Web_GreenhouseSave*** have been adjusted to also fill the 'DiT_Q_Medium_Score' field on the Delivery_Item.

## Miscellaneous
### Clone Link synchronisation
Methods ***TCPA_SyncExportCloneLink*** and ***TCPA_SyncImportCloneLink*** have been added to facilitate the synchronization of the [Clone_Link] records.

### Licencing expiration
Methods ***A_StartupParameters*** and ***A_StartupParameters_new*** have had their dates adjusted. This method is meant as a lock for an expired Xiphium license.