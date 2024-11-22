---
title: Xiphium 2024-W47 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

:::tip REMINDER
When working on a method (new or existing), take some time to implement the `#DECLARE` and `Var` variable declarations.
:::

## Access
Method ***AccGr_OverviewStats*** has been optimized to be able to be quit whenever is needed.

Method ***AccTab_ShowOverview*** has been added. This method gathers overview information and shows a dialog showing this info.

### Experiment
Access tab added for [Experiment] Input form named 'Text'.

## Order
Field 'Protocol GH (New)' has been added to form [Order];"Ord_List" tab 'Greenhouse' with a searchable box.

## Company
Method ***Com_UpdateRecord_Val*** has been modified. Only 1 query has been modified so that all related purchase items are taken, instead of just purchase items with Type_In_Out="In".

<details>
<summary>The code</summary>

Old query:
```4D
$pur:=ds.Purchase_Items.query("Puit_to_PuOrd.PuOrd_ComCode_Sup = :1 and Puit_to_PuOrd.PuOrd_Type_In_Out = :2"; [Company]Com_ComCode_Num; "In")
```
New Query:
```4D
$pur:=ds.Purchase_Items.query("Puit_to_PuOrd.PuOrd_ComCode_Sup = :1 "; [Company]Com_ComCode_Num)
```

</details>

## Delivery
Method ***DiT_Export_PackingListExpress*** has been added. The method is an excel export for the Packing list.

## Greenhouse
### Greenhouse-Field
Button is added to Greenhouse-Field with code that sets fields [GF_Date_Repotted] and [GF_Plants_Repotted] with the current date and the amount of plants present respectively. This amount and date indicate that the repotting is done and can be used for both invoicing and GH_Plan_Actions.

### Greenhouse planning
Methods ***GHPA_Apply_Modify_Parameters*** has been added as an abstraction for modifying GHPAs using the 'GHPA_Modify' dialog screen. This made it possible to use this screen on double click of a GH_Plan_Action.

Method ***GHPA_Get_ProtComp*** has been added as an abstraction, making it possible to use it in the 'Go to Protocol Component' button in GH_Plan_Action. Maybe it's easier to store the ID of the used protComp, but for now it's both fine. This method is implemented in the ***GHPA_Update_Prot*** method, which contained this code before the abstraction.

Method ***GHPA_UpdateRecord_DuplicateData*** has been modified to be better readable (implement `#DECLARE` and remove unnecessary local variables).

Method ***GHPA_UpdateRecord_GF*** has been modified to get the date for the 'FP' (Flower Photo) action of TTT Orders from the Greenhouse-Field field 'Week Ready'.

Method ***GHPA_UpdateRecord_GHPA*** has been modified to get the day and night temperatures as seperate fields (instead of 1 text field). The text fields are still filled using these 2 seperate values. Also, the `#DECLARE` and `Var` syntax is implemented.

## Media
Method ***MedPro_UpdateRecord*** has been modified to replace an SQL query with an ORDA query.

## Synchronization
Method ***TCPC_UpdateRecord*** has been modified to include the Company CountryCode

Method ***TCPC_UpdateRecord*** has been modified to exclude TCPA records with status 'Delete'.

## Photos
Method ***Web_PhotosSave*** has been extended with a new category called "Deliver-item-ttt".

## Dynamic Dropdown with checkboxes
Method ***generate_Form_CheckBoxes*** has been extended to include standard action buttons 'Select All', 'Deselect All' and 'Invert'. These buttons can be hidden if needed. These buttons use the new method ***generate_Form_Checkboxes_Method*** in order to fuction.

## Compiled
Methods ***ALP_UpdateWells***, ***AnOv_WellEventHandler***, ***AnIsoPlate_UpdateWells***, ***AnPla_UpdateWells***,  had an `EXECUTE FORMULA` statement with a local variable. This is apparently not supported in compiled mode. A process or interprocess variable must be used instead. For this specific implementation, a new method called ***ObjectPath_To_Property*** was created to get the right property from the Form object.

Method ***Leading_zeros*** has been modified to be compatible with a compiled database (had to do with retyping a variant type local variable).

## Misc
Method ***Menu_ModifySelectionList*** has replaced its `DISPLAY SELECTION($table->; *)` with `MODIFY SELECTION($table->; Multiple selection; False; *)`. It seems like the code does mostly the same thing, but it might have better behavior like this.

Method ***Menu_TC2E*** implements this modified ***Menu_ModifySelectionList*** method, using it instead of the (old?) ***Menu_ModifySelection*** mehod.