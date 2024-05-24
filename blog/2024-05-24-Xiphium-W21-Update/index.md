---
title: Xiphium 2024-W21 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->
## Delivery Items Dashboard
The delivery items dashboard has received some bugfixes and improvements:
- Date matrix now works as intended
- Cultivar graphs use the same logic as the Crop graphs, just a different selection (better maintainability)
- PlantCode and Cultivar Origin were used in an unclear mix. This is now all set to Cultivar Origin.
- Other small optimizations and improvements

## Plant Com Prod Year
Method ***Access_SetupPlantsMenu*** has been adjusted. All output and input forms of 'Plant Com Prod Year' (or 'PlaCY') have been renamed in this method.

## Company History (ComH)
Method ***ComH_UpdateRecord*** now adds the current date and current user to its 'Date_Created', 'Date Modified' and 'EmpName Created', 'EmpName Modifed' fields.

## Crop

### Crop Synchronisation
Method ***Cro_SyncExportCrops*** now also includes fields [Crop]Cro_Transport_Temp_Stage2 and [Crop]Cro_Transport_Temp_Stage3. The variable $lastweek has also been changed from `Current date-7` to `Current date-150` meaning that changes from 150 days ago are now exported for synchronization. This is probably done temporarily to properly synchronize the newly added fields.

### Crop 'Import transport temp' button
Button 'vScan_Btn_Close5' was added to the Crop List tab 5 (certification). This button gets text from the pasteboard consisting of the following data:
- Crop Code Number
- Temperature Stage 2
- Temperature Stage 3
The button then finds the crop record matching the Crop Code and puts the temperature in their respected fields.

## Financial
Several field name changes in [Fin_Com_Month]:

<details>
<summary>Field name changes</summary>

| Old Name | New Name |
| - | - |
| FinCM_L_Loans_In | FinCM_L_Loan_In_Real |
| FinCM_L_Loans_Out | FinCM_L_Loan_Out_Plan |
| FinCM_L_Mut_Cred | FinCM_L_Mut_Cred_Real |
| FinCM_L_Mut_Deb | FinCM_L_Mut_Deb_Real |
| FinCM_L_Investment | FinCM_L_Invest_Plan |
| FinCM_L_Liq_In_Sum | FinCM_L_Liq_In_Plan |
| FinCM_L_Loans_Out | FinCM_L_Loan_Out_Plan |
| FinCM_L_Tax | FinCM_L_Tax_Plan |
| FinCM_L_Liq_Out_Sum | FinCM_L_Liq_Out_Plan |
| FinCM_Mut_Intern | FinCM_L_Liq_Saldo_Plan |
| FinCM_RC_End_Calc | FinCM_RC_End_Plan |
| FinCM_RC_End_Saldo | FinCM_RC_Saldo_Plan |
| FinCM_L_Loans_In_MC | FinCM_L_Loan_In_Plan_MC |
| FinCM_L_Loans_Out_MC | FinCM_L_Loan_Out_Plan_MC |
| FinCM_L_Mut_Cred_MC | FinCM_L_Mut_Cred_Real_MC |
| FinCM_L_Mut_Deb_MC | FinCM_L_Mut_Deb_Real_MC |

</details>

Method ***FinCM_UpdateRecord*** has been worked on. It seems to mostly summarize data from other tables.

Method ***FinCY_UpdateRecord*** has been worked on. It seems to mostly summarize data from other tables and do simple calculations with these summarized data to fill its fields.

Method ***FinLGT_UpdateRecord*** has been worked on. There are 3 'MC' fields added that are filled from 'FinLeG_Total'. These fields are then used for some simple calculations.

Method ***FinLGY_UpdateRecord*** has its classic 4D query replaced by an ORDA query.

## Medium Labels
Method ***MedPro_PrintLabels*** now has an extra option for company 006. Apparently these labels have to be slightly different from the labels in 001 and 003, 004.

## TC Reg Emp
Method ***TC2E_ExportConceptListOrder*** now has 2 extra columns named "Transport temp Stage3" and "Tranfer Price"

## Analysis Order Access Trigger
The trigger method of [Analysis_Order] has been modified. There were fields that a regular used could change, but a manager couldn't. These fields have been added to the manager group as well. Also, the field 'AnO_amount_Datapoints' is added to the exception list.

The code is hard to read and it's easy to make mistakes. Therefore, an optimized method of declaring exception fields will be implemented next week. This will make it possible to pass in an array of fields, as well as the individual fields to the ***DB_LockFields*** method.

## Web Stuff
Method ***WebApp_Startup*** has received the extra line `WebApp_AddRouting("/api/locations/@"; "Web_TCLocationsController")`. This means a new API routing has been added.

:::note
What I find strange is that the method ***Web_TCLocationsController*** is also called in the line before. It must have something to do with a different routing for the same app, but I'm not familiar enough with this architecture to know for sure.

<details>
<summary>Web_TCLocationsController</summary>

```4D
// (PM) WebApp_Startup
// Initialize the routings for your web app

WebApp_AddRouting("/api/deliveries/@"; "Web_DeliveriesController")
WebApp_AddRouting("/api/documents/@"; "Web_DocumentsController")
WebApp_AddRouting("/api/greenhouse/@"; "Web_GreenhouseController")
WebApp_AddRouting("/api/greenhousefield/@"; "Web_GFExperimentController")
WebApp_AddRouting("/api/hours/@"; "Web_HoursController")
WebApp_AddRouting("/api/hours-v2/@"; "Web_HoursController")  // RL (12-01-2024) : Streamlined HTTP Client and API usage with other SwiftUI apps
WebApp_AddRouting("/api/photos/@"; "Web_PhotosController")
WebApp_AddRouting("/api/tc-production/@"; "Web_TCProductionController")
WebApp_AddRouting("/api/tc-printing/@"; "Web_TCPrintingController")
WebApp_AddRouting("/api/tc/@"; "Web_TC_Controller")
WebApp_AddRouting("/api/tc-locations/@"; "Web_TCLocationsController")
WebApp_AddRouting("/api/locations/@"; "Web_TCLocationsController")
```

</details>

:::

Method ***Web_TCLocationsController*** now has 2 new actions: 'refresh' and 'upload'.

