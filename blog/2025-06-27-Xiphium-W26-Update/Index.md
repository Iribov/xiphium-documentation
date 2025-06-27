---
title: Xiphium 2025-W26 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

:::info
A total of 117 files were modified. Many of which are to update variable declaration.
:::

<!--truncate-->
## Financial Dashboard
Financial dashboard tab4 has received some updates, including an extra figure. Method ***FinDash_D4*** has been added to centralize the graph generation code.

## Delivery
Method ***DiT_ExportDel_DelNote_WBP*** is added.

## Order
Method ***DiT_ExportExcel_Flex*** has an extra option for 'Order Remark 2'.

Method ***Ord_PrintDeliverySheet*** has been modified to support report option 5 (whatever that may mean).
### Oder History Synchronisation
Methods ***OrH_SyncExport*** and ***OrH_SyncImport*** are added to synchronize Order history between locations.

Method ***OrH_UpdateRecord*** now also saves the default company and creates an IDM (to support the sync of course).


## Analytical
### Analysis Order
Analysis Order Detail has a new tab for samples of phenotype Analysis Orders (such as TTT).

## Medium
Method ***MedPro_PrintLabels*** was slightly optimized while updating the variable declarations. However, it can be more optimized still:

```4D
$MediumLinesComponents:=ds.Media_Lines.query("MedL_MediumCode = :1 or MedL_MediumCode = :2"; [Media_Production]MedPro_MediumCode; [Media_Production]MedPro_MediumCode_AB)
$MediumLinesComponents:=$MediumLinesComponents.query("MedL_MediumCode # :1 order by MedL_ComponentCode"; "")
```
The above code does 2 server calls to get to 1 selection. This can be optimized like the following:
```4D
$MediumLinesComponents:=ds.Media_Lines.query("(MedL_MediumCode = :1 or MedL_MediumCode = :2) and MedL_MediumCode # '' order by MedL_ComponentCode"; [Media_Production]MedPro_MediumCode; [Media_Production]MedPro_MediumCode_AB)
```
This is one concise query, minimizing server calls. By using the single quotes in the third statement instead of a placeholder, it is even more readable.
### Analysis Test
The Test Type (Objective) is now only automatically filled if there are related pathogens, And there is no text in the field.

## TCBP
Several TCBP methods have been modified. The intention is not clear by only reading the code changes.

Method ***TCBP_ActionEventHandler*** now does an action on double click. It requests the user for the amount of plants planned and applies it.



