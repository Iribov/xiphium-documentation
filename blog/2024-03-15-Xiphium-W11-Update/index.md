---
title: Xiphium 2024-W11 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## TC Experiment Scan Menu
The new scanning menu for tissue culture experiments has been put into the live database. This menu is not functional yet, but it's finally out the design phase and into the 'pre'-implementation phase.

## Order
A new tab has been added to the Order Detail screen called 'Related Orders'.

Method ***Ord_UpdateRecord*** has a minor change to take production orders into account.

### Stage5
A few small changes in Order and Greenhouse-Field methods have been made to also accept 'stage5'  instead of only 'repotting'.

## Financial Turnover

### Summary
Some work has been done on many of the financial turnover tables. It's too much work/detail to list all changes made (this can be seen on the GitHub), so a short summary is made here. The most notable changes are:

#### Status
The status for most/all financial turnover tables has been changed to:
- Prognosis (month is in the future)
- Current (current month)
- Realized (month is in the past)

#### Financial Turnover WorkType
The Financial Turnover WorkType tables 'Month' and 'Year' have received some attention. The Update Record methods have been added and/or updated to get some data from other places.


## Plants Code
'remarks commercial' is now a searchable filed in Plant Code.

## Delivery Items
Part of method ***DiT_UpdateRecord*** has been rewritten. The rewritten part tried to get information from the [Clone] table using the plantCloneCode entered in the delivery item. 
Bundled deliveries sometimes have multiple clones bundled, so a delivery_item can't have a plantCloneCode entered.

The new version of the method takes this into account, and searches the [Delivery_Scanning] for plantCloneCodes and aggregates the results in Delivery_Items.

## Miscellaneous
Protocol Component has been removed from the Analysis menu.

The 'DisplayCode' field in analysis sample can now be edited even after the analysis order is 'locked'. 'DisplayCode' is only used for the [Clone] table, so this has no effect on the Analysis Results whatsoever.

Method ***filterOnDisplayedFields*** has been added. This method can filter a 'classic' form using a text input, and searching all fields displayed in the current tab of the List Form. Finding all records that have a value in a displayed field that (partially) matches the text input.

Method ***Web_PhotosGetCategories*** now has a new category: 
```{"id": "delivery-item-experiment", "name": "Delivery item experiment GF", "prefix": "Experiment"}```. Its seems to be preparation for pictures taken in the greenhouse that have to be linked back to a TC Experiment.

Button 'vScan_Btn_Close7' has been added to the Delivery Note detail form. The button contains code that 'Imports Feedback Form info into records from the clipboard (tab delimited text)'.