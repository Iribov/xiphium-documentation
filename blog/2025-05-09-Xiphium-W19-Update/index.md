---
title: Xiphium 2025-W19 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

:::info
The 2025-W18 update is incorporated into this week's update. So this is 2 weeks of progress in 1 blog post. Because of this, only project method changes are discussed here.
:::

<!--truncate-->


## Invoicing
Method ***InD_UpdateRecord*** has been updated to create a Project2_Year record when it doesn't exist yet (but only if the Project2 records exists already!).

Creditor 006 'Brasil' has been added to method ***Inv_GetNextInvoiceNr***.

## Analytical Lab
### Lysis Plate
The option 'External Preparation' (for when a client delivers an already prepared lysis plate) got lost in the Lysis Plate introduction update, but has been added to the UI once more.

### Test Group
Method ***AnGr_UpdateRecord*** has code implemented that evaluates its begin and end date, and updates the status accordingly. Classic queries have also been converted to ORDA.

### Link Test Group
The table [Analysis_Link_Test_Group] that links [Analysis_Test] with [AnalysisGroup] has received some development. Classic queries have been converted to ORDA.

### Analysis Test
Method ***AnTe_UpdateRecord*** has received lots of edits. Mostly to convert classic queries to ORDA. 

:::danger
Lines 60-66 of method ***AnTe_UpdateRecord*** are now commented out. This code aggregates related pathogens into 1 string to show in the test table. This is needed because a single test can have 1 or more pathogens related to it. Only showing 1 related pathogen in the 'test' table is misleading (and it's what the method is doing now).
:::

## Dashboard
Method ***Dash_D2_FillGraph*** has a bug fixed. During the renaming of Crop Week and Crop Year, one variable was not changed to the new naming standard.

## Documents
Table [Order_Quality_Score] has been added to method ***Doc_GetPrimaryKeyForTable***

## Financial Ledger
Ledger groups Month could sometimes get a sum value from related Ledger Months when updating the record, but not show any Ledger Month in the detail form of the Ledger Group Month. This was due to changes on how the related records were searches.

:::danger relate only one way!
The financial ledgers module has too many ways to relate one table with another. This is mostly due to data duplication in all of the tables.

I could connect from Ledger Group Year to Ledger Month in several different ways.
However, the right relational database way is to have NEVER duplicate date (unless there is a good reason to). This means that the ledger code and description is only stored in the table [FinLed_Codes], and other tables are only connected to it (exception could be [FinLed_Total] that uses the ledger code as a foreign key). [FinLed_Year] & [FinLed_Month] only need to link to each other with IDs and can get the ledger code and description through the relation.

The new tables [FinLed_Codes] and [FinLeg_Codes] are not connected to the other ledger tables at all!
:::

## Greenhouse
### Greenhouse Planning
Summer and Winter protocols are now incorporated into the greenhouse planning module. Certain steps can be 'summer' or 'winter' only. Every Prot_component als have the ability to add 'cycle days winter' that stack on top of the regular cycle days. The winter period can be given for each activity specifically.

The activity 'flower photo' for purpose 'experiment' is now automically detected as 'done' when all related delivery items have a document that starts with 'experiment'. Greenhouse field now also tracks the amount of 'experiment' documents.

## Order
Method ***Ord_UpdateRecord*** has a code snippet added that gets the country code and country name from the [Company] table. 

:::tip
This code snippet uses a neat way to accomplish its purpose using ORDA:
```4D
$Company:=ds.Company.query("Com_ComCode_Num = :1"; Num([Order:12]Ord_ComCode_Delivery2))
[Order]Ord_CountryCode:=$Company.min("Com_CountryCode")
[Order]Ord_CountryName:=$Company.min("Com_Country")
```
In this way, if no company record was found, it should return empty strings. And even when multiple records are found (which should not happen), the code still works without errors.

:::warning
When multiple records are found (which should not happen), this code might return unexpected results.
:::

## Plant
Method ***PlaCT_UpdateRecord*** has code fixed that was filling [Protocol] fields for some reason. This weird code was introduced in 2023-W38.

Many methods and forms of Plant (PlantC_Year ,PlantYear, PlantTotal etc.) related tables have received updates.

## TCPA
Methods ***TCPA_SyncExportOrders*** & ***TCPA_SyncImportOrders*** have their logic tweaked slightly.


## Web Stuff
Several methods related to the Order Score app have been modified.
## Misc
Utility method ***IsWeekInRange*** is added to easily return to you if a weeknumber falls within a range of weeknumber (even if they wrap around the year). This method is aded for the summer/winter protocol for the greenhouse planning.