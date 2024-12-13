---
title: Xiphium 2024-W50 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

:::tip reminder
Don't forger to replace **$0**, **$1** etc. with the new **#DECLARE** syntax. And replace **C_** with **Var**
:::

<!--truncate-->

## Medium
Some small work done on the Medium table and form.

Method ***MedPro_UpdateRecord*** has been adjusted. A classic query is replaced by an ORDA query.

## Analysis Cost
Method ***Clo_Analysis_Cost_Calculation*** has been added. This method accepts a clone entity, an optional amount of samples and an optional boolean to include the Order cost or not. After discussion with Analytical Lab we might want to split up the method into 2 core parts:

1. A method that calculates the analysis cost based on amount of samples, amount of pathogens and the type of pathogens.
2. A method that accepts a Crop, PlantCode and/or Clone and searches for a relate Analysis Group. This method can use method 1 to calculate cost.

## Greenhouse Planning
Method ***GHPA_Delete_Actions*** has been adjusted to only remove deleted actions from the listbox and listbox selection of the selection is defined (gave errors in other places).

Method ***GHPA_Excel_Export*** has been adjusted to correctly export square meter information of actions that started before the selected year, but are still in the greenhouse in the selected year (only if the GHPA record of this previous year is in the current selection!).

Method ***GHPA_UpdateRecord_GF*** has been updated. The method now gets information from Greenhouse-Field related to repotting.

## Math
Methods ***Math_Ceil*** and ***Math_Floor*** have been added. The methods seem to do functionally the same as the ***RoundUp*** and ***RoundDown*** methods. After quick testing, the 'Round' method are usually slightly faster, but they are both so fast it doesn't have significant impact on run time. These new methods should be removed and references should be replaced with the ***RoundUp*** and ***RoundDown*** methods.

:::warning
The **#DECLARE** and **Var** syntax was not used for these new methods. This makes me very upset :'(
:::

:::note
If your're rounding up -12.4 what should you get? the definition of Math Ceiling (as well as the method) says it should -12. If rounding up means rounding away from 0, it should be -13 (as reflected in method RoundUp). Should these methods both exist? What shall we do?
:::

## Order

Method ***Ord_Calc_GHPA_Days*** has been activated in the method ***Ord_UpdateRecord***. This was done by request of Richard. The new way of calculating days in the greenhouse is (often) more accurate in non-production Orders.

## Catalog changes
Field MesSto_Box_Used has been renamed to MedSto_Box_Used.

Table [Exp_Treatment_Summary] has been added along with 11 'empty' fields.

## Choice List
5 soil types have been removed from the Choicelist:
1. JK OPT22
2. KNA 055 FN PH 5,1 T104
3. KNA 058 FN TQPD60
4. KNA 070 Tray28 + VEE007
5. KNA Bollengrond

## Web Stuff
Method ***Web_LocationsControllerOld*** has been removed.

Methods ***Web_TCStockCheckController***, ***Web_TCStockCheckGetStock*** and ***Web_TCStockCheckGetUser*** have been added.
