---
title: Xiphium 2024-W44 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->
## Order
Big changes have been made to method ***Ord_UpdateRecord***. It seems like a lot of additions have been made to properly handle Greenhouse Data.

## Financial
Old fields called 'GroupCode' and 'GroupName' have now been renamed to 'LedgerGroupCode' and 'LedgerGroupName' respectively.

## Delivery Items
Method ***DiT_Export_PackingList*** has been extended with the 'Scan Activity' column.

## Greenhouse
### GH Planning Actions
Method ***Ord_Calc_GHPA_Days*** has been added. The method can calculate the amount of days plants need to be in the greenhouse according to the new Greenhouse Protocol, without actually creating the Greenhouse Planning Actions. This can be used to fill the 'Days H1' field for Order that cannot find a 'classic' Greenhouse Protocol Component.

### Scanning
Status 'In Progress' has been renamed to 'Busy Planing' for added clarity.
## Analysis Lab
The Analysis Dashboard has been extended to show the financial data of both 'TPO' invoices and the total of all analysis lab invoices.

Auto Layout for Lysis Plates has been corrected to ignore 'Control Sample' parameters when the option 'Use Client Layout' is selected (matching the UI).

Method ***Access_SetupAnalysisPlateMenu*** has been modified to contain proper and more clear naming conventions.

## Plant Code
Method ***Pla_UpdateRecord_Part_AmountLoc*** has been extended with the following code to calculate the plants present in location 6.
```4D
$tcpa1:=$tcpa.query("TCPA_ComCode_Production = :1"; vSet_ComCode_Prod_0006_Text)
[Plant_Code]Pla_N_Present_TC_06:=$tcpa1.sum("TCPA_N_Plants_Present")
```

Method ***Pro2_Excel_Export_ProjectUpdate*** now generates a more useful document name and exports the amount of hours from Project2_Year.

## Purchase Articles
A progress bar is added to the Object Method of form [Purchase_Article];"PuArt_list" button vScan_Btn_Close7.

## Web Stuff
Small adjustments done to methods relating to the maintenance app.

Method ***Web_MediaGetMedium*** has a significant change to the 'reply' object format, indicating changes done to the Media app.

Methods relating to the Photos app have been adjusted and simplified.

## Invoice Filter
The 'Filter' button of invoices was changed from classic 4D queries to ORDA queries over a year ago. However, our current method of querying is very inefficient since every search parameter is another call to the server. This object method is now optimized to only do a single server call for the query. Let this be an example of how we can do optimized filter buttons, making the system more responsive for people working from home (where these kind of inefficiencies are felt the hardest).