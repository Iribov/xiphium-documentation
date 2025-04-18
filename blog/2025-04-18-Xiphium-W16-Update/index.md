---
title: Xiphium 2025-W16 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Experiments
The Experiment Treatment Link has been fully implemented. Newly created treatments are now required to link back to a previous treatment (except when it's the first cycle of course).

## Purchase Local
Some work has been done on the forms of the local purchase tables.

## Crop
Error in ***Cro_UpdateRecord_Val*** has been fixed. The crop_year queries are also optimized by integrading the .orderBy() function into the query, reducing the server calls from 2 to 1 for each query.

```4D
//Old query and .orderBy()
$cropCY2:=$cropCY.query("ComPCropY_ComCode_Prod = :1"; 2).orderBy("ComPCropY_Year").last()

//New query with order by
$cropCY2:=$cropCY.query("ComPCropY_ComCode_Prod = 2 order by ComPCropY_Year desc").first()
```
Also notice how there was no need for a placeholder if there is a fixed value. By ordering the selection the other way (descending), you can take the first record instead of the last (possibly negligible optimization depending on the amount of returned records, but an optimization nonetheless).

## Delivery
***Scanning_UploadDeliveries*** has been extended to create mutations_employee records if needed.

## Documents
Method ***Doc_GetPhotosFromOneDrive*** now also extracts the file creation date using the new ***File_GetDateCreated*** method.

[ExP_Treatment_Summary] has been added to ***Doc_GetPrimaryKeyForTable***.

## Greenhouse
M2 export ***GHPA_Excel_Export*** has been modified to include the m2 available for temperature ranges per week.

## Plant
PlantYear and PlantMonth have had some work done on their forms and some of their methods. This includes fieldname changes as well as method expansions.

## TPP
***TCPG_TPP_Calculation*** has been added to calculate TPP for any given period. The method is not reliable (yet) as it does not deal properly with internal deliveries.

## Web stuff
several methods have been modified for the order score and media app.