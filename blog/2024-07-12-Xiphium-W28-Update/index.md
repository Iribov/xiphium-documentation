---
title: Xiphium 2024-W28 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Medium Storage
Medium Storage Entry Dialog has been adjusted to check the privileges of the user and puts the table in READ WRITE or READ ONLY mode according to these privileges.

## Experiment Scan Menu
The scanning menu forms have received changes to solve several runtime errors. These errors are mostly v19 quirks regarding empty objects and functions not being able to handle them. 4D v20 has solved these issues, and therefore did not come up during local testing.

Date Start and Week start of the treatment should now be properly updated after changes made in ***Scanning_ClosePrinting***

Method ***TC2E_UpdateRecord*** has been updated after the last update caused issues because of Treatments with an IDM of 0. This caused experiment stickers to be printed even for TC_Reg_Emps that were not connected to an experiment. This was solved by the addition of a simple IF statement.

### Create treatment
PlantCode is now part of the popup screen when creating a new Treatment. PlantCode is also added to the check of uniqueness when creating a Treatment.

The popup screen now has Listpickers for most fields, making it easier to create a Treatment without exactly knowing all the codes beforehand.
## Contact
Code is added for tab 7 to find all related documents of the Contact record.
## Crop Week
The TCPA query in method ***CroWe_UpdateRecord_TCPA*** now contains the argument to look for WorkType = 11. This is to allign the amount of hours with the ComProd_Week table.
Please note that this argument was removed in the 2023-W38 update (reason for this removal has not been remembered yet).
## DeliveryNote
Method ***DeN_DefaultSort*** has a new argument for when default company is 004.

Methods ***Scanning_UploadDeliveries*** and ***Web_Scanning_UploadDeliveries*** have enhanced a classic query by including the deliveryNote number in the query when searching for delivery items.

## Delivery_Items_BoxPacking
New table was added called [Delivery_Items_BoxPacking] with the following fields:
1. DiTBoPa_ID
2. DiTBoPa_DeliveryNote
3. DiTBoPa_PlantCode
4. DiTBoPa_TrolleyNr
5. DiTBoPa_N_Units
6. DiTBoPa_N_Plants
7. DiTBoPa_TCPG
With a relation to DeliveryNote
## Photos
Method ***Doc_CopyPhotoToOneDrive*** now has the attribute 'Execute on server' enabled. 
## Invoice
Method ***InD_ExportCurrentSelection*** commented out the ***InD_UpdateRecord*** method in the beginning of the method. It seems like it could have been removed completely since ***InD_ExportCurrentSelection*** takes a selection of records, and would only update the current record of this selection.

UpdateRecord button in the InD_List Form now displays a progress bar.
## Project2
Method ***Pro2_ExportExcel_Flex*** has received some extra options for exporting.
## Analytical
[Analysis_Marker] now has a new column named 'AnMa_CropCode_MarkerName' that combines the cropCode and markerName to a single field. This field is set to be 'Unique'. This new field is added to the trigger to ensure data consistency.
## Web stuff
Method ***000_TestRL*** now has the ***DB_LockFields*** method added on line 5 after executing the ***Web_InfectedController*** method. The comments says it's in regard of ticket #214 which is about errors when the WiFi strength is low during scanning in the TC Delivery app.

Methods ***Web_InfectedGetScanLine*** and ***Web_InfectedSaveScanJob*** have been removed (or renamed?).
