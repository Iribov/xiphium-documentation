---
title: Xiphium 2024-W38 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

---
## Crop
Method ***Cro_SyncExportCrops*** has been modified. The export now includes the following 2 fields:
1. [Crop]Cro_EmpCode_Tech_Spec
2. [Crop]Cro_EmpName_Tech_Spec

## Plant Total
Some work has been done on the [PlantTotal] table (Sum, ColorField etc. methods). Most notably the ***PlantT_UpdateRecord*** has been modified to save the amount of related active PlantCodes and to save their cultivar codes in a joined string (as well as other updates).

## Employee
Method ***Emp_Updaterecord_Val*** has been modified to empty some fields when no HourRegistration records are found.

:::tip
It is not necessary to add an else statement to enter 'empty' data into fields. When no entities are found, wrapping the data in String(), Num(), Date() etc. prevents the need for an If, Else statement.
```4D
C_OBJECT($hr; $accGM; $con; $country)

$hr:=ds.HourRegistration.query("HR_EmpCode = :1"; [Employee]Emp_EmpCode)
[Employee]Emp_Rec_HR:=$hr.length

If ($hr.length#0)
	
	$hr1:=$hr.orderBy("HR_Date").first()
	[Employee]Emp_HR_Week_Fist:=$hr1.HR_Week
	$hr1:=$hr.orderBy("HR_Date").last()
	[Employee]Emp_HR_Week_Fist:=$hr1.HR_Week
	[Employee]Emp_Date_HR_Last:=$hr1.HR_Date
	[Employee]Emp_HR_Week_Last:=$hr1.HR_Week
	
	[Employee]Emp_Days_Since_last_HR:=Num(Current date-[Employee]Emp_Date_HR_Last)

Else 
	[Employee]Emp_HR_Week_Fist:=""
	[Employee]Emp_HR_Week_Fist:=""
	[Employee]Emp_Date_HR_Last:=!00-00-00!
	[Employee]Emp_HR_Week_Last:=""
	[Employee]Emp_Days_Since_last_HR:=0
End if 
```
2 Optimizations can be done:
1. Remove the main If, Else statement for better readability.
2. implement the orderBy() into the query so it is only once performed server-side (during the query), instead of twice client-side.
```4D
C_OBJECT($accGM; $con; $country)
var $hr : cs.HourRegistrationSelection
var $hr1 : cs.HourRegistrationEntity

$hr:=ds.HourRegistration.query("HR_EmpCode = :1 order by HR_Date asc"; [Employee]Emp_EmpCode)
[Employee]Emp_Rec_HR:=$hr.length
$hr1:=$hr.first()
[Employee]Emp_HR_Week_Fist:=String($hr1.HR_Week)
$hr1:=$hr.last()
[Employee]Emp_HR_Week_Fist:=String($hr1.HR_Week)
[Employee]Emp_Date_HR_Last:=Date($hr1.HR_Date)
[Employee]Emp_HR_Week_Last:=String($hr1.HR_Week)
If([Employee]Emp_Date_HR_Last=!00-00-00!)
	[Employee]Emp_Days_Since_last_HR:=0
Else
	[Employee]Emp_Days_Since_last_HR:=Num(Current date-[Employee]Emp_Date_HR_Last)
End if
```
There is still one If, Else statement for the Days calculations but the code is shorted and better readable.
:::
## Greenhouse-Field
Method ***GF_UpdateRecord*** has been modified to fill a virus field:
`[Greenhouse_Field]GF_Virus_in_Clone:=$Clone.Clo_CB_Virus`. 
## Order
Method ***Ord_ExportExcel_Flex*** has been modified to add one more column called 'Varierty Owner Name'.

Method ***Ord_UpdateRecord_Prices*** has been modified. The query for prices has been modified by adding `PlaPri_OrderType2 = 'Del@'`.
Making the query from:
```4D
$prices:=ds.Prices.query("PlaPri_ComCode_Prod = :1 and PlaPri_CropCode = :2 and PlaPri_Week_Start <= :3 and PlaPri_Week_End >= :4 and PlaPri_OrderType2 = :5"; [Order]Ord_ComCode_Prod; [Order]Ord_CropCode_Num; $orderWeek; $orderWeek; $orderType2+"@")
```
To:
```4D
$prices:=ds.Prices.query("PlaPri_ComCode_Prod = :1 and PlaPri_CropCode = :2 and PlaPri_Week_Start <= :3 and PlaPri_Week_End >= :4 and PlaPri_OrderType2 = :5 and PlaPri_OrderType2 = :6"; [Order]Ord_ComCode_Prod; [Order]Ord_CropCode_Num; $orderWeek; $orderWeek; $orderType2+"@"; "del@")
```
## Plant Code
Method ***Pla_UpdateRecord_Part_AmountLoc*** has been modified. The TCPA query has the line `TCPA_N_Plants_Present > 0` added to filter out actions without plants present.
## Project2 Month
Some work has been done on Project2 Month. Several methods have been modified.
## Project2 Year
Some work has been done on Project2 Year. Several methods have been modified.
## Documents
Method ***Web_DocumentsController*** has been modified to accommodate for OneDrive documents.

### Documents Preview
Method ***Doc_GetPhotosFromOneDrive*** now takes a third parameter to load the photo form OneDrive to memory. This facilitates the method ***Doc_GetPreviewableItems***

Method ***Doc_GetDocumentPathOnServer*** has been modified to facilitate method***Doc_GetPhotosFromOneDrive***.

Method ***Doc_GetPreviewableItems*** has been added. This method returns a collection of previewable items. This can be any document form the server or OneDrive. This method is used to facilitate ***Doc_ShowListFormPreview***.

Method ***Doc_ShowListFormPreview*** has been modified. 

## Web stuff
Method ***Web_PurchStockGetStock*** and ***Web_PurchStockUpdateStock*** have been updated.