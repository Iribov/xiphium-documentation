---
title: Xiphium 2025-W03 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Experiment Treatment Summary
The [Exp_Treatment_Summary] table has been incorporated into the new experiment scanning menu. This is a test for now, and the old connections are left untouched. There will be a point in the future where we will replace all connection from Treatment to Experiment to go via the Treatment_Summary table.

Method ***Treatment_Conversion_Method*** was added to fill the Treatment_Summary table using the data from the Treatment Table. The Treatment records are also immediatly connected to their new Treatment_Summary record.

## Deliveries 
Method ***DeN_Print_BoxLabel*** now has a progress bar.

Method ***DiT_Export_PackingListExpress*** now exports the picture in a different size.

button "DiT_Button_BoxLabel15" has been added to form [DeliveryNote]"DeN_Detail"

2 new forms have been added called [DeliveryNote]"DeN_Print_BoxLabel_no_plantname" and [DeliveryNote]"DeN_Print_CMR_LogisticsNL".

## Greenhouse Planning
Method ***GHPA_UpdateRecord_GF*** now ignores internal deliveries. This was especially a problem with combined Greenhouse_Field records (combining still poses a problem in other areas). Also, a rule has been implemented that a delivery action is only even "Done" when there are no longer plants present in the greenhouse, and the status is directly set to "Finished". Partial deliveries are not planned!

Form "GHPA_Overview" has been improved after user feedback. There is now a popup when modifying protocolcodes in a batch (using the button), and you are able to clear the manual protocolcode as expected using the 'empty' checkbox.

## Misc

### Plugin Register Keys
Method ***App_OnStartup*** has been modified. It seems that all register keys for plugins have been updated. The OS seperated register keys for the plugin "xlBook" are now merged into one call. This gives an error on my windows machine.

:::note
is it useful to have these register keys hard-coded anyway? Shouldn't they be in some separate file on the server?
:::

### groupBy
Method ***groupBy*** and its subsequent methods ***GroupbyConvertGroups*** and ***GroupbyAggregateGroups*** have been improved and refactored. The method now correctly handles aggregations when a collection is passed (used to only work for EntitySelections).

### TCB
Lots of work is done to multiple methods that have to with the TC Planning visualization (methods starting with TCB). Most (if not all) of the empty methods added last week are now filled with code.