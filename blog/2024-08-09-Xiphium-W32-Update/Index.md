---
title: Xiphium 2024-W32 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

---
## I declare to use #DECLARE
4D has the new #DECLARE syntax to replace the classic $0, $1, $2 syntax for method parameters. In 4D 20R4 the #DECLARE replaces the need for the ***Compiler_*** methods. It is recommended to use the #DECLARE syntax for this reason but also, the declaration of the function is displayed in the status bar exactly as it is for 4D commands.

For this reason I propose that when making adjustments to a method, to also replace the classic parameter declarations with the #DECLARE syntax.

:::warning
Keep in mind that the parameters declared with the #DECLARE are always initialized to their default data type (integer defaults to 0, Text defaults to "", etc. 

Checking if a parameter is passed to the method should be done using the **Count parameters** function and not the **Undefined()** function.
:::

:::tip
Check out the documentation and blog posts about #DECLARE:

[Parameters | 4D Docs](https://developer.4d.com/docs/Concepts/parameters/#declaring-parameters)

[Streamlined Method Parameter Declarations – 4D Blog](https://blog.4d.com/streamlined-method-parameter-declarations/)

[Coder-friendly syntax for class functions and methods – 4D Blog](https://blog.4d.com/coder-friendly-syntax-for-class-functions-and-methods/)
:::

---
## Experiment
Method ***Exp_UpdateRecord*** has been modified to look for related documents using ORDA instead of classic queries.

Button Dit_Btn_CreateEmail7 has been added to form [Experiments]:"Exp_Detail". The button seems to export documents to a folder. It seems this is a test to export all treatment pictures at once (which has been a request form researchers).

### Experiment Scan Menu
Creating Experiments and treatment via the scan menu did not result in fully 'filled' records. 
The TCPG_ID and Activity Code are now added when creating a treatment. What more data needs to be added to these creation menus must be discussed.

## Greenhouse
The following fields have been added:
- GF_Plants_Sorted_Mini_1s
- GF_Plants_Sorted_Small_1st
- GF_Plants_Sorted_Medium_1st
- GF_Plants_Sorted_Large_1st
- GF_Plants_Sorted_Total_1st
- Field_215

Method ***GF_ExportExcelReportResults*** now also includes the newly created fields in its export (except for 'Field-215').

Button ExT_Btn_Label1 in form [Greenhouse_Field];"GF_List" has been modified. The following code has been added:

```4D
If (([Greenhouse_Field]GF_Plants_Sorted_Mini_1st+[Greenhouse_Field]GF_Plants_Sorted_Small_1st+[Greenhouse_Field]GF_Plants_Sorted_Medium_1st+[Greenhouse_Field]GF_Plants_Sorted_Large_1st+[Greenhouse_Field]GF_Plants_Sorted_Total_1st)=0)
	[Greenhouse_Field]GF_Plants_Sorted_Mini_1st:=[Greenhouse_Field]GF_N_Plants_Sorting_Mini
	[Greenhouse_Field]GF_Plants_Sorted_Small_1st:=[Greenhouse_Field]GF_N_Plants_Sorting_Small
	[Greenhouse_Field]GF_Plants_Sorted_Medium_1st:=[Greenhouse_Field]GF_N_Plants_Sorting_Medium
	[Greenhouse_Field]GF_Plants_Sorted_Large_1st:=[Greenhouse_Field]GF_N_Plants_Sorting_Large
	[Greenhouse_Field]GF_Plants_Sorted_Total_1st:=[Greenhouse_Field]GF_N_Plants_Sorting_Total
End if 
```
Basically, all the newly created 'Sorted_x_1st' fields are filled by their respective 'Sorting' fields if none of them were filled yet.

## Plant Code
Field [Plant_Code]Plate_zzz_2 has been renamed to [Plant_Code]Pla_Item_ID_Extern.
Plant Code has received several small updates this week to implement this 'new' field.

Method ***Pla_UpdateRecord_Part_AmountLoc*** now excludes Deleted TCPA's when calculating the 'Plants Present'

## Protocol Component
Field [Protocol_Component]ProtComp_Date_Last_Sync_Import has been added.

Method ***ProtComp_DuplicateToLocation*** has been modified to set the [Prot_Component]ProtComp_Date_Last_Sync_Import to !00-00-00! for the duplicated record.

Method ***ProtComp_SyncExportProtComp*** now sets the[Prot_Component]ProtComp_Date_Last_Sync_Import to **Current date**.

Method ***ProtComp_UpdateRecord*** now converts the saved ComCode to ComCode_Text

## TC Plan Cycle
Method ***TCPC_CreateRecords_TCPA_TCPG*** now only copies remarks to TCPA when the TCPC remark is not empty and appends the TCPC remark to the current TCPA remark.

:::warning
The current implementation keeps appending the TCPC remark every time the method is executed!

```4D
If ([TC_Plan_Cycle]TCPC_Remarks1#"")
	[TC_Plan_Action]TCPA_Remarks_Planning:=[TC_Plan_Action]TCPA_Remarks_Planning+" "+[TC_Plan_Cycle]TCPC_Remarks1
End if 
```
Please check lines 78-80, 179-181 and 278-280 if this implementation is desirable.
:::

## WBSO (ProjectGroup and Project2)
Method ***WBSO_Pro2_ConnectionDiffReport*** has been added. This method asks for 2 years and compares every ProjectGroup_Year - Project2_Year connection of these 2 years. This can be useful to see what has changed between 2 years.

## Order

Buttons vScan_Btn_Close8 and vScan_Btn_Close9 have been added to form [Order]:"Ord_List". Both buttons seem to import Order records from the clipboard. There are some changes between the 2 buttons. It has probably been a test.

## Maintenance app

Method ***Web_MaintenanceController*** has a new action called "maintenance" with method "GET". This option calls the method ***Web_MaintenanceGetEquipment***, which returns details of the given equipment ID. Part of ***Web_MaintenanceGetEquipment*** has been abstracted to new method ***Web_MaintenanceGetMaintenance***. This method converts the equipment maintenance record to an object.

Method ***Web_MaintenanceSaveMaintenance*** has been modified to fix bugs and improve functionality.

## Misc
- Method ***DateTime_ConvertfromISODate*** has been modified. There is now a check if the date and time pointers are not **Null** before assigning a value to them.
- Method ***DateTime_ToISODate*** now accepts a placeholder for when the date would be !00-00-00!

## Meme of the week
![](dbFinalForm.jpg)
*Meme of the week is NOT a recurrent theme and is only instantiated whenever I feel like it.*