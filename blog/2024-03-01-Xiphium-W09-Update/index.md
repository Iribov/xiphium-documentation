---
title: Xiphium 2024-W09 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Clone
New 'Documents' tab is added to the Clones table.

'Create Record' Popup now also includes the 'Origin Plant Type' or 'Plant Type' dropdown as an optional parameter. The 'Plant Type' indicates what kind of tissue/plant type the clone has initially been presented as (Stage2, Stage3, Stage4, Root, Bulb etc.).

## Branched Choicelist
Method ***ChoiceList_Coll_From_Param1*** has been created to return a collection from a choicelist according to 'Parameter Alpha 1'. This makes it possible to create a dynamic popup menu that only shows valid options. This is useful in multiple cases around the database.

:::info Example
In Analysis Order, The field 'Method' indicates what analysis method will be used. The field 'Objective' indicates the objective of the analysis. These 2 fields are connected with each other. Method 'FCM' (Flow Cytometry) can have the Objectives 'Ploidy', 'Ploidy i.s.' and 'Aneuploidy'. Method 'PCR' and 'ELISA' can both have the Objective 'Pathogen'

So now, when Method 'FCM' is chosen, only the options 'Ploidy', 'Ploidy i.s.' and 'Aneuploidy' are shown as options.
:::
The filters used for these options are entered in the 'Alpha Param1' field in the choicelistItem. If multiple values are needed, they can be entered with comma seperation.

## Delivery Items 
### Email Score
Method ***DiT_CreateEmailScore*** has been added. The method creates an email containing the 'scores' of highlighted Delivery Items and sends it to info@iribov.com. The method can be used by a new button in the DiT_List form.

### Field Name changes
Some Delivery_Items fields have had a name change:

| Old Name               | New Name                       |
| --------               | --------                       |
| DiT_SalesLoc_Q_Remarks | DiT_SalesLoc_Issue_Remarks     |
| Field_220              | DiT_SalesLoc_Is_Issue          | 
| Field_221              | DiT_SalesLoc_Issue_Is_Incident |

It seems like these name changes have something to do with tracking issues on a delivery Items level.


## Financial turnover
Some minor changes in method ***FinT_CCY_UpdateRecord*** where field names containing 'FinTurCCY_ASP_Real' are changed to 'FinTurCCY_ASP_Total'. The implication of this change is unknown form just reading the code, but it looks like refactoring (just changing the names, without functionally changing anything).

The forms for several financial turnover tables have been adjusted. Some name changes in fields, but mostly adding 'invisible' button for sorting  and adding/adjusting the filter button.

### Field Name Changes
Some Financial Turnover fields have had a name change:

| Old Name                       | New Name                   |
| ---                            | ---                        |
| FinTurCCY_ASP_Real             | FinTurCCY_ASP_Total        |
| FinTurCCY_ASP_Real_Order       |  FinTurCCY_ASP_Total_Order |
| FinTurCCY_ASP_Real_Order_Prev1 | FinTurCCY_ASP_Prev1_Order  |
| Field_158                      | FinTurCCY_ZZZ              |
| Field_159                      | FinTurCCY_Perc_GF          | 
| Field_160                      | FinTurCCY_Perc_S3          | 
| Field_161                      | FinTurCCY_ASP_S3_Prev1     | 
| Field_162                      | FinTurCCY_ASP_S4_Prev1     |

The idea behind these name changes in unclear without knowing the context.

## Greenhouse 

### Greenhouse Planning Action
The week M2 Excel Export has been enhanced in the second tab (temperatures). Now, all Planning actions that have been assigned to a sepcific space (through Space IDM) are excluded from the temperature aggregations. Below the temperature aggregations are now the Space aggregations. This makes the second tab of the export the 'Temperatures and Spaces' table.

### Greenhouse app
Method ***Web_GreenhouseSave*** has some changes, indicating an improvement in the Greenhouse App. What these changes improve exactly is unclear without understanding the context.

## Order History
Method ***Ord_History_Export*** is added to mimic the excel Eloy used to make manually. The method accepts  an Order_History Selection (ORDA) and outputs an Excel with a single tab. In this tab, it is tracked in what week there are changes done to the order. What the changes amount to (in amount of plants), and who initiated the changes (total or client changes). 

## Tissue Culture

### TCPA Synchronisation
Changes have been made to methods ***TCPA_SyncExportTCPlanActions*** and ***TCPA_SyncExportTCPlanActionsN_1*** to include the field 'TCPA_BF_Finished' in the synchronisation.

### TC App
Methods ***Web_TCGetJarsBack*** and ***Web_TCSaveJarsBack*** both have some changes, indicating changes made into the TC app. The funcitonality of these changes are unclear without knowing the context.

### TCPC filter button
The filter button in the TCPC_List form has been modified to correct (what seems like) a logic mistake in the filtering of records.

## Purchase Article Month (PuartM)
Some invisible buttons (used for sorting) have been modified in the 'list' and 'subform' form, but for some reason they contain fields for the [FinTur_ComCrop_Year] table. Is that correct?

## Analytical Lab
### Reference Collection Individual
Reference Collection individual continues to get improvements as bugs are being found by using the new system.

## Iribov Brazil
Iribov Brazil is continued to be integrated into the system. This week, 'HR_WeekEntry' is modified to include comcode 004 in a certain check related to (Team) Manager stuff. (-> this was a change for Ghana)

