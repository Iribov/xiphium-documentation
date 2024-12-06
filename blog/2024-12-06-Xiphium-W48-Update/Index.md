---
title: Xiphium 2024-W49 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->
## GHPA

Method ***GHPA_Backwards_Calculation*** has been modified to properly use the multiplication factor in its calculation.

Method ***GHPA_Forwards_Calc_Recursion*** has been modified. The method now takes the 'Plants Present' from Greenhouse Field as the amount of plants to calculate with when the previous action is done, and the current action is not done yet. This is necessary due to losses and deliveries that are not planned.

Method ***GHPA_Flexlist_Export*** has been added. It's a first version of a flexlist export, more options will come in the future.

Method ***Ord_Create_and_Update_GHPA*** has been modified to keep the correct order of GHPAs.  In 2024-W43, a query was added to exclude floating actions from an entity selection used as an 'anchor' (floating actions can never be an anchor). Problem is, queries don't respect ordered entitySelections, so the selection became unordered and causing problematic side-effects in chaining GHPAs after each other 
(they all linked to the first GHPA).

Method ***GHPA_Forwards_Calculation*** is updated with the new **#DECLARE** and **Var** syntax.

Method ***GHPA_UpdateRecord_GF*** has been refactored for simplifying the logic and better readability.

### GHPA Overview
When batch modifying the Greenhouse Protocol Code of Orders, there is now a list picker in place.

When removing the manual protocol code, the GHPAs will now be updated using the Automatic Protocol. Other fields of the Order listbox have been set to non-enterable.

## Ledgers
LedgerGroupMonth has a new tab added to its access called "FinLGM IF Ledger In Group MC".

Method ***FinLeM_UpdateRecord*** has modified. The method now fills the date fields again (date begin and date end) from the month field. This was removed in 20224-W20, and caused issues with the Ledger Dashboard. (**C_** variable declarations have been replaced by the new **Var** syntax)

## Plant Month
Method ***PlantM_UpdateRecord*** now fills the IDM of the record.

## Analytical Lab
Button DiT_Button_Import3 in AnO_Detail has been modified. The import button is used 1-3x a year for Bejo, and was not updated with the new rules ([Analysis_Sample] ALWAYS needs to be connected to an [Analysis_SubOrder]). The method is now updated with this rule, as well as the new **#DECLARE** and **Var** syntax.

## Utility Methods
Methods ***RoundDown*** and ***RoundUp*** have been modified with the new **#Declare** and **Var** syntax, making the methods even shorter and easier to read.

## Web stuff
Method ***Web_LocSettingsController*** has been modified. The Case of statement has no need for an $id anymore, and the 'Locations Get' and 'Locations Post' options have been added.

Methods ***Web_LocSettingsGetLocation*** and ***Web_LocSettingsGetLocations*** now include the UserID in the reply.

Method ***Web_LocSettingsSaveLocations*** has been added. This method can save multiple locations settings at once.