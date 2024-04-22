---
title: Xiphium 2024-W16 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->
:::note
It seems like the lack of changes from last week have been balanced this week...

This weeks Git(Hub) changes have been too many to create a good overview. Therefore, I will ignore all of the Table Form changes (this means all code written directly in objects/buttons or the methods of Table Forms.
:::
## 000_TestRL
Method ***000_TestRL*** now contains 3 new methods:
1. ***Scanning_UploadDeliveries***
2. ***WebApp_Startup***
3. ***Web_DeliveriesController***
## Action List
Method ***AL_UpdateRecord_Val*** has its SQL query code replaced by ORDA. 
:::note
There is a typo in method ***AL_UpdateRecord_Val*** on line 16: `If ($ACE.lemgth#0)` which should be: `If ($ACE.length#0)`
:::
## Experiment Scan Menu
The Experiment Scan Menu is still in development, but is now able to do its basic scanning task. The experiment and treatment implementation is still in development.

### Changes to essential scanning methods:
small changes were made to method ***Scanning_CloseScanning*** and ***Scanning_ClosePrinting***. The methods now accept an (extra) boolean parameter to keep the current dialog open. This (should) have no impact on current implementations of the methods since the boolean defaults to False.

## Access excel export
Method ***Access_ExcelExportOverview*** has been added to export the user access to excel.

## Clone
### Excel Flex Export
Method ***Clo_ExportExcel_Flex*** has been extended to include the 'new' Issue, Issue Remark and Age of the clone.

## Invoice_Detail
Methods ***InD_UpdateRecord*** and ***InD_UpdateRecord_Val*** have been adjusted. ***InD_UpdateRecord_Val*** has only received a small change, while ***InD_UpdateRecord*** has received some big changes. The intention of these changes seem to mostly changes SQL and classic 4D queries into ORDA.
## Crop Year
New tab "Locations" has been added to the Crop Year access method.

9 fields have been renamed from `CroYe_Plant_S3_Loc[company code]` to `CroYe_Plant_S3_[company code]`. example: `CroYe_Plant_S3_Loc001` -> `CroYe_Plant_S3_001`.

Method ***CroYe_Sum*** has been extended to include more fields.

Method ***CroYe_UpdateRecord*** has been extended to fill more Plant Summary fields.

## Company
### Filter method
Method ***Com_Filter*** has been added to filter the Company List Form, instead of using the object method of the Filter Button.

### Update Val
Method ***Com_UpdateRecord_Val*** has been extended to get all the account manager name(s) from financial turnover Company Crop (total). 

<details>
<summary>Code Improvement!</summary>

:::note
There is a flaw in method ***Com_UpdateRecord_Val*** on lines 41 to 46:
```
If ($AccManagers.length=1)
	[Company]Com_Acc_Man_Names_in_FinTurCCT:=$AccManagers[0]
	If ($AccManagers.length>1)
		[Company]Com_Acc_Man_Names_in_FinTurCCT:=$AccManagers.join(" | ")
	End if 
End if 
```
The above code could simply be replaced with:
```
[Company]Com_Acc_Man_Names_in_FinTurCCT:=$AccManagers.join(" | ")
```
However, this will overwrite the field if there are no account managers found in financial turnover. If this is undesired, we could use 1 'if' statement to create the following code:
```
If ($AccManagers.length>0)
	[Company]Com_Acc_Man_Names_in_FinTurCCT:=$AccManagers.join(" | ")
End if 
```
:::tip
The `.join()` function will not add the seperator character if only 1 element is in the collection.
:::
:::

</details>

## DeliveryNote
### Action (Complaints)
Method ***DeN_Create_Complaint*** has a small addition that adds the Action IDM to the DeliveryNote.

Method ***DeN_UpdateRecord*** has been extended to look for Action (complaints)
:::tip
The newly added code does the same query twice if there is a record found. it would be more time efficient to query only once, and save the result in a variable. This way, you only exchange data with the server once.
:::


### Go To Action
Method ***DeN_Goto_ACE*** has been added. This method goes from DeliveryNote to Action via the Action IDM entered in DeliveryNote. This method has been added to the 'Tools' button.
## Delivery Item
### Action (complaints)
Method ***DiT_Create_Complaint*** has been added. This method creates an Action (complaint) and connects all selected Delivery_Items to this (new) Action (complaint). 

:::danger
It seems that now it is both possible to connect a [DeliveryNote] AND [Delivery_Items] to an [Action]. It would make more sense from a relational database design perspective to only be able to do 1 of these connections!
:::

### Feedback Excel export
Method ***DiT_ExportDel_Cust_Feedback*** has been adjusted to contain more information. The details are too big to summarize here.

### UpdateRecord
Method ***DiT_UpdateRecord*** has been adjusted. 

The record now tracks when and by who the record was created, and last edited. It also updates the 'clone is issue', 'clone issue is incident' and 'clone issue remarks' from the clone. 

If the amount of plants accepted by the customer (DiT_N_14_Accept_Cust) = 0, then the Accept_Cust is now calculated using:
`[Delivery_Items]DiT_N_12_Accept_Good+[Delivery_Items]DiT_N_17_Del_NoInfo` instead of the just `[Delivery_Items]DiT_N_12_Accept_Good`

### Go To Buttons
All of Go To methods below has been added to the 'Tools' button.
<details>
<summary>Delivery Items Go to Buttons</summary>

Method ***DiT_Goto_Clone*** has been added. This method goes from Delivery_Items to their Clone using the 'PlantCloneCode' entered in the Delivery_Items.

Method ***DiT_Goto_DeN*** has been added. This method goes from the highlighted Delivery_Items to their related DeliveryNote(s).

Method ***DiT_Goto_GF*** has been added. This method goes from the selected Delivery_Items to their related Greenhouse_Field records that contains their Delivery_Items IDM.

Method ***DiT_Goto_Order*** has been added. This method goes from the selected Delivery_Items to their related [Order] record. It does so by using the Order IDM entered the Delivery_Items.

Method ***DiT_Goto_PuArt*** has been added. This method goes from the selected Delivery_Items to their related [Purchase_Acticle]. It does this by using the Article code entered in the Delivery_Items.
</details>

## Financial Turnover
Method ***FinLiM_UpdateRecord*** now takes status into account. Some queries were updated as well

:::tip
Combining multi-line queries to a one-line query using the `AND` or `OR` operator(s) minimizes client/server communication. This optimization might not be as noticeable on LAN, but are more noticeable over WAN.
:::

quite some Financial Turnover methods were changes:
1. ***FinLiM_ColorField***
2. ***FinLiM_RadioB_Inv***
3. ***FinLiM_UpdateRecord***
4. ***FinTuM_UpdateRecord***
5. ***FinTuT_UpdateRecord*** (method has been emptied, but not deleted)
6. ***FinTuY_UpdateRecord*** (method has been emptied, but not deleted)

## HourRegistration
Method ***HR_UpdateRecord*** has been updated. The WBSO Code us now updated through the new connection(s). This has greatly simplified the code:
```
//get wbso code via Project2_Year route
var $project2Year : cs.Project2_YearEntity
$project2Year:=ds.Project2_Year.query("Pro2Y_IDM = :1"; [HourRegistration]HR_IDM_Pro2Y).first()
$WBSO_Code:=String($project2Year.ProjectGroup_Year.ProjectGroup.ProGT_ProjectCode)
```
## Order Group
Method ***Ord_DialogModifyBatch*** has been extended. The method now also updates more parameters when entered in the dialog:
1. Company Name Sales (from entered Company Code Sales)
2. Company Name Sales2 (from entered Company Code Sales2)
3. Status
4. Order Type 2
5. Order Date

## Plant Month
Method ***PlantM_UpdateRecord*** has had some changes. The method now calculates a lot more periods. It seems like the method needs some more work befire being fully functional.
## Project2
Method ***Pro2_DialogModifyBatch*** has been added. This method implements the modify batch dialog 'Pro2_Dialog_ModifyBatch'.
### Project2 Month
Method ***Pro2M_UpdateRecord*** has been adjusted. Some SQL queries have been replaced with ORDA. The logic for 'status' has been moved to the top and status 'current' has been added. Also, several date periods are calculated, but are not used (yet).
## TCPA Excel Flex
Method ***TCPA_Excel_Export_Flex*** has been extended. It seems to be able to add more subtotal(s) now.
## Financial Dashboard
Financial Dashboard has a newly filled tab. The new tab is a copy from the 'General Dashboard' tab 'TC Moving Sum' and shows the moving sum of transfers of 6 different things (Model, Plan, Real, Model S3, Plan S3 and Real S3).
## Web stuff
Method ***Web_DeliveriesController*** has been added. The method seems to authorize a given action based on an API key.

Method ***WebApp_Startup*** has been extended with the new ***Web_DeliveriesController***. The startup method initializes routing for the given webapps.

## Simple Export bugfix
Method ***00_Simple_Export*** had a bug where related '1' fields gave an error (but still exported just fine). 

After analysing this part of the code, it seems that the method itself is not capable of exporting '1' fields more than 1 relation away. In other words, it can only export data directly related to the current table.

