---
title: Xiphium 2025-W14 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## TC Calculator
The TC Calculator was build on a wrong formula, making all calculations wrong. This is now corrected. The formula now used is `Plants = Stock * MF^Cycles`. The object method has also been modernized to use the `Var` variable declarations.

## TC Experiment Scan Menu
Small bugfixes and improvements were done based on feedback.
The Treatment_Link has been partially implemented, more work has to be done before being able to say it is fully implemented.

## PlantC_Total
7 fields have been added to PlantC_Total. 1 field is added for each Greenhouse Activity Group (GH0 to GH6). Excepetions for Protocol Component Number can be entered here. These exceptions are implemented in the***GHPA_Get_ProtComp*** method.

## Financial
Method***FinLeM_UpdateRecord*** has been modified to properly handle a case where the Status=Realized.

## Greenhouse planning
Several small improvements have been made to the GHPA and surrounding tables.

## Purchase local
a start has been made to create and fill the new local purchase tables and forms

## Catalog changes
Field [Order]Ord_Week_Transp_to_NL has been added.

Fields from [PuArt_CT], PuArt_CY and PuArt_CM were renamed from prefix 'PuArt_' to 'PuA_'.


## Misc
Method***Doc_ListboxHandler*** now has an optional table pointer parameter.

Method***Doc_ShowListFormPreview*** has been modernized to use the `#DECLARE` function.
:::danger Update as you go
The 'new' `#DECLARE` functionality is used for these new parameter (great!), but the local variables are still declared using the old `C_` syntax (bad!).
:::

***Doc_ShowPreview*** has been updated to also show PDF previews on Windows PCs.

Method***Doc_ShowSubFormPreview*** has been added. This method Displays the preview of the current document record in a subform.

Method***File_GetMimeType*** has the 'bmp' file extension added to it.

## Web Stuff
A constant is added for the "Xiphium Order Score App ID". Also, 5 new methods have been added for this app.