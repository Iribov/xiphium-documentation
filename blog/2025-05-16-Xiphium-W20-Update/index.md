---
title: Xiphium 2025-W20 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

:::info
A total of 2331 files were changed. This makes it difficult to find significant changes to discuss here.
:::

<!--truncate-->

## Unused local variables
An effort has been made to remove unused local variables. The compiler listed 1166 local variables that were declare, but never used in the method. This is now reduced to 400. Most of these local variables were either leftover from copy/pasting a different method and adjusting the code (where all references were removed). Some were leftovers from code that is now removed or commented out.

In a few cases however, it was the result of a typo or a missing $ sign in either the declaration or the use of the variable. This goes to show that regularly using the 'find unused local variables' can help reduce bugs. But in order for it to be effective, we have to remove all current unused local variables. This will probably be done before the end of next week.

## Type all variables
The current compiler settings are set to 'Process and interprocess variables are typed'. Changing this to 'All variables are typed' will ensure all variables (even local variables) must be typed. This will reduce bugs and enforce proper variable declaration. There are currently almost 63.000 references of variables that are not declare (if a variable is used 10 times without being declare, those are 10 references).

:::tip reminder
When working on a method (new or existing), take some time to implement the `#DECLARE` and `Var` variable declarations. The legacy syntax using `C_XXX` is deprecated as of 4D 20 R7 [link](https://developer.4d.com/docs/Concepts/variables#declaring-variables).
:::

## CropC_Week renaming
All fields of the [CropC_Week] table (formerly known as [CropWeek]) have their prefixes changed from `CroWe_` to `CropCW_`. These field name changed have affected on many methods. ORDA references to these fields did not update automatically (as expected) and have been replaced with the search and 'replace in content' function.
## CropC_Year renaming
All fields of the [CropC_Year] table (formerly known as [ComPCrop_Year]) have their prefixes changed from `ComPCropY_` to `CropCY_`. These field name changed have affected on many methods.

## Analysis Group
Method ***AnGr_UpdateRecord*** had new code introduced in the Week 19 Update. This contained several syntax errors that are now fixed.

Method ***AnLi_UpdateRecord*** accidentally saved a query result into a process variable instead of a local variable. This is fixed in this update, however, the next lines still use the process variable, which now contains no data.

<details>
<summary> the code</summary>

```4D
$anTe:=ds.Analysis_Test.query("AnTe_ID = :1";[Analysis_Link_Test_Group]AnLI_ID_AnTe)
	$anTe:=$anTe.first()
[Analysis_Link_Test_Group]AnLi_Cost1:=anTe.AnTe_CostTotal
[Analysis_Link_Test_Group]AnLi_Cost2:=anTe.AnTe_CostTotal2
```
</details>
