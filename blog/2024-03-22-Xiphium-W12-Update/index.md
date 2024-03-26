---
title: Xiphium 2024-W12 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Menu Experiment Scanning
Menu Experiment Scanning continues to get improvements. Now, observations can modified in the experiment while in the menu. The observations are then dynamically added to the treatment listbox using the new method ***ExT_AddObservationsColumns***. The base function (scanning and printing for TC) is not fully functional yet.

## Scan_Dialog_Planning
If the Planning Group is created before **Current Date**, the Company Code production field is no longer editable in this scanning menu.

## Delivery Items
Method ***DiT_UpdateRecord*** has received an update that the new part from last week that determines the certification. If a delivery is bundled, multiple clones are 'under' 1 Delivery Item, and the status has to be aggregated in delivery items. The method now skips this step if no clones are found 'under' the Delivery Item.

## General QR Code
Method ***Doc_Show_General_QR_Code*** is added. This method generates a QR code based on the highlighted record. This method is applicable to any record of any table. This method is one of the preparations for a general Photo scanning app.

## Employee QR Code
Method ***HR_PrintLabels_QR*** is added to create a QR code for an employee. This will make it easier in different scan menu's to log in.

## HourRegistration
Method ***HR_UpdateRecord*** has a small change related to the WBSO code. It seems like this code is prone to future changes since the exact (expected) workings are not defined yet.

## QR Code labels analytical Lab
The special seperation character "|" that is used in Analytical QR codes to seperate the Table number from the unique identifiers has been replaces with a whitespace " ". This is due to inconsistencies in the generation/printing of the QR Code. Sometimes the "|" would get replaced with a " ", but sometimes it was just removed from the QR code, making it unusable.

## Project2_Year
### Budget
Method ***Pro2Y_UpdateRecord*** has been modified to calculate budgets differently than before. The exact workings were discussed and a new version should be implemented soon.

### Radio buttons
Method ***Pro2Y_RadioB_Ord*** is added to centralize the radio button behaviour of the 'Order' detail screen of Project2_Year.

### Duplicated fields
Some duplicated fields in Project2_Year could be removed. These fields have been mostly replaced in the code an layout so that the (connected) Project2 variant is used.
These fields are:
- Crop Code
- Crop Name
- Company Code
- Company Name
- Worktype
These fields should never change over the lifetime of the project, so it is not necessary to store them in Project2_Year.

## Reference Collection Individual
The Reference Collection QR code layouts can now be printed for Reference Collection Individual with the help of a popup screen with a drop down button.

## Greenhouse App
Method ***Web_PhotosGetCategories*** has been expanded with 2 new categories:
1. Reference Collection
2. Experiment-Treatments
```json
$categories.push(New object:C1471("id"; "Reference-Collection"; "name"; "Reference Collection"; "prefix"; ""))
$categories.push(New object:C1471("id"; "Experiment-Treatments"; "name"; "Experiment Treatments TC (TC Reg Emp Barcode)"; "prefix"; ""))
```

Method ***Web_PhotosSave*** has also incorporated these 2 new categories.

## TC print Labels
Methods ***Web_TCPrintDuplicateLabels*** and ***Web_TCPrintLabels*** have been modified to use the ***Scanning_PrintLabelsQR*** method when default company = '004'.
In other words: Iribov Ghana will be printing QR code labels for Tissue Culture (as soon as the database there is updated).

## Crop
The 'Create Record' button for creating a new (unique) crop has been modified. It should be tested for bugs, and replace the 'add record' button.

The new method ***filterOnDisplayedFields*** is now used in the List form by a searchable field. This is useful for searching a crop name in all 3 crop name fields at once (but other displayed fields will be searched too).

## Financial Turnover
The financial turnover tables have had many modification. Many layout modifications have been done.
various 'Distribute Turnover' buttons have been added
'Create Months' button has been added for Financial Turnover Worktype Year
