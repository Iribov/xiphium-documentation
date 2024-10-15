---
title: Xiphium 2024-W41 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

---
## Experiment Scan Menu
Bugfixes done on the experiment scan menu. 

Still a bug with the new photo app where a photo can be linked to a treatment by scanning the barcode of a box. The 'new way' of connecting [TC_Reg_Emp] and [Exp_Treatment] is not implemented there (yet).

## Project2

2 new detail forms have been added called "Hour MP" and "Real MP". These tabs are Project2 Year forms.

### Project2 Year
Several changes have been made to Project2 Year. One of the changes is method ***Pro2Y_UpdateRecord***.

## Analytical Lab
Method ***AnIsoPlate_Excel_Export_PCR2*** has been modified to adjust to the new [Analysis_Lysis_Plate] and [Plate_Activty] table.

## Invoice
Field [Invoice]Inv_Reason_Credit is now unlocked when the status of the invoice is "Send" and/or "Paid".

## Order
Field [Order]Ord_Invoice has been added to the Order filter.

## Protocol Component
Method ***ProtComp_ControlAccess*** has been added. This method makes it so that you can only edit Protocol Components from the current location (the location Xiphium is running)

Method ***ProtComp_DuplicateToLocation*** has been modified. The progressbar code is now commented out

Methods ***ProtComp_SyncExportProtComp*** and ***ProtComp_SyncImportDocuments*** have been modified. It seems like it now better accommodates the synchronization of documents related to the Protocol Component.

## TCPA
Method ***TCPA_SyncImportTCPlanActions*** has been modified to no overwrite the connected order (Order IDM) with nothing, if there was an Order IDM present in the destination TCPA.

## Document
Method ***Doc_AddDocument*** now implements the ***Doc_Updaterecord*** method.

## Misc
Method ***Scanning_PrintTrayLabelsLilium*** has been added. This method prints tray labels with a specific format for Lilium.

## Web stuff
The 'Media' app (for Medium from the TC kitchen?) has been added to Xiphium.