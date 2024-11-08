---
title: Xiphium 2024-W45 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Xiphium License
Methods ***A_StartupParameters*** and ***A_StartupParameters_new*** have been modified. These methods compare the current date to a hardcoded value to determine if the 'license' has been expired. These dates need to be changed every year, otherwise the system just shuts down on startup (if the proper passwords are not given). Dates have been moved from the en of 2024 to the middle of 2025.

## Access
several access methods have been added:
1. ***AccFunc_GroupCount***
2. ***AccFunc_UserCount***
3. ***AccGr_OverviewStats***
4. ***AccTab_GroupCount***
5. ***AccTab_UserCount***

***AccGr_OverviewStats*** seems to be a method that gets (user) access information to show to the user. 

## Greenhouse
Method ***GHPA_UpdateRecord_GF*** has been added to update information in the GH_Plan_Actions from Greenhouse_Field (not all actions re/can be included in this).

## Breeding
Method ***BreGeno_PrintBatchLabelBreeding*** has been extended to include the 'BreedName' in the label.

## Order
Method ***Ord_UpdateRecord*** has been modified. The following code has been added at line 1929:
```4D
If ([Order]Ord_Rec_FinTur=0)
	$fint_CCT:=ds.FinTur_ComCrop_Tot.query("FinTurCCT_ComCode_Deb_MC = :1 and FinTurCCT_CropCode = :2 and FinTurCCT_Sum_ComCode_MC = :3"; $ComCode_Customer_MC; $CropCode; True)
	[Order]Ord_Rec_FinTur:=$fint_CCT.length
	
End if 
```
So it counts the amount of related [FinTur_ComCrop_Tot] records.

## Analytical lab
popup screen in the scanning menu did not properly save Protocol and Isolation program into the Isolation Plate, even though for the user it seems that way. This is now properly saved during scanning.

Method ***AnDP_ColorField2*** has been added to color the status field of DataPoints in Listboxes.

Sticker printing button "BevelButton2" the [Analysis_Lysis_Plate];"ALP_List" form has been modified. The buttons used to had a double for loop, resulting in the square number of labels. This is now corrected. Also, the button doesn't ask for an amount of labels per plate anymore, it's always 1 sticker per record.

All 'Auto Layout' buttons have been removed from the [Analysis_Order];"AnO_Detail" form. This button is now only to be used in the "Analysis_Overview" screen.

## Project2
Method ***Pro2_SelectForDetail*** has been modified. The method now has no code running for tab 5, 6, 18 and 19. Tab 5 and 6 are related to master project (which is never really implemented).

Method ***Pro2_Excel_Export_ProjectUpdate*** has been implemented in a button in the [Project2];"Pro2_Detail" Form.

## Misc
Method ***Listbox_GetFilterQuery*** has been modified. It seems like this is a general method that queries listbox information. Could be interesting to use/expand when transitioning to a more ORDA approach.