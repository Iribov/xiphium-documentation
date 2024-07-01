---
title: Xiphium 2024-W26 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Clone_Link
Triggers of both [Clone] and [Clone_Link] have been adjusted to be able to handle a change in Clo_PlantCloneCode. This will only work if the field Clo_PlantCloneCode is set to 'unique'. And to do that, we need to remove duplicates. For this reason, the button 'Duplicates' has been added to the [Clone];"Clo_List" Form.

## TC Scanning
Method ***Scanning_ClosePrinting*** has been adjusted to be compatible with TC_Reg_Emp records connected to an Experiment Treatment via IDM.

## TC_Reg_Emp
Method ***TC2E_UpdateRecord*** has been adjusted for TC_Reg_Emp records that are connected to an Experiment Treatment through IDM update their Experiment and Treatment Code (these should not change, so the necessity of this addition is debatable)

## Analytical Lab

### Pathogens
Some field name changes to the Pathogen Table have been applied.

### Analysis Overview
The plate overview for creating isolation plate layouts 'Analysis Overview' have been made compatible with 384 plates. The export functionalities have not implemented 384 plates yet.

### ProjectCode2 Debitor
The popup window for creating an Analysis Order now has a choicelist added to it. It will search for Project2 records with a (partially) matching Project2 Long Code. We might need to extend this to the fields of the List+Detail forms as well.

### Removal of object methods
Some forms of Analysis have been combed through to delete empty object methods. This makes it more clear in the editor which objects have methods behind them, and which objects don't.

## Delivery
Method ***Den_DetailPrintDelNote*** had some refactoring done. It is not immediately clear if there is functionality added to the method, or if it's just a user experience optimization.

Button **AnSam_Btn_MailPDF7** of form [DeliveryNote];"DeN_Detail" now also saves the exported document to the record.

Buttons **AnSam_Btn_MailPDF8** has been added to form [DeliveryNote];"DeN_Detail" with a method identical to button **AnSam_Btn_MailPDF7**

:::note
Saving a file directly to a record during document creation is a very useful feature that could be implemented in other parts of Xiphium as well. The Analytical lab has asked for this is the past.
:::

### Soft Fruit Labels
2 forms are added to print labels for soft fruit:
1. DiT_Label_Softfruit
2. DiT_Label_Softfruitmetgat


Method ***Den_DetailPrintDelNoteOld*** was added to preserve state of the method before the changes.

## Documents
Method ***Doc_ShowDetailFormPreviewExT*** was added to show a preview of documents from Epxeriment Treatments. This replaces the more general ***Doc_ShowDetailFormPreview*** in the Experiment Treatment table.

## TC Plan Group
Method ***TCPG_ExportExcel_Flex*** has been worked on. 

## Web Stuff

Method ***000_TestRL*** has received a new method ***Web_InfectedController*** and about 25 lines of comments explaining it.

Method ***WebApp_Startup*** has 2 new routings added:
```4D
WebApp_AddRouting("/api/infected/@"; "Web_InfectedController")
WebApp_AddRouting("/api/locations/@"; "Web_LocationsController")
```

The following methods have been added:
- ***Web_InfectedController***
- ***Web_InfectedGetScanLine***
- ***Web_InfectedGetUser***
- ***Web_InfectedSaveScanJob***

### constants
Method ***Constants_Setup*** has a new line creating a new constant: Xiphium Infected App ID

## Duplicates
Method ***duplicates*** has received a small optimization. The 'MULTI SORT ARRAY' function has been replaced with the more performant 'SORT ARRAY' function.

At this moment the function is only compatible with a text fields, we might want to expand that to other field types as well.