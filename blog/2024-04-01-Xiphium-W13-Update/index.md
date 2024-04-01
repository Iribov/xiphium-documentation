---
title: Xiphium 2024-W13 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Web Stuff
Method ***000_TestRL*** now includes the ***Web_PhotosController*** method.

Method ***Doc_AddDocumentWebGeneral*** is added. This method facilitates the idea of having an app where you can save a picture to any record in any table in Xiphium.

Method ***Doc_Show_General_QR_Code*** is added. This method opens table form **[Document];"Doc_Dialog_QR_Code"** that generates a QR code of any record from any table. This QR code is then displayed on this form and can be used by the general picture app.

Two new categories are added to the ***Web_PhotosGetCategories*** method called 'Analyse Isolation Plate' and 'General'. Methods ***Web_PhotosGetSubjectInfo*** and ***Web_PhotosSave*** also has these new categories included.

## Plant Company Year
Company Crop Year has 2 new tabs added to the access method named 'PlaCY Prog' and 'PlaCY Eff'. Both of these tabs show the same selection of [PlantC_Year] Records.

Plant Company Year has received updates to it's UpdateRecord and Sum methods, indicating that there is work done to make this table (more) functional.

## Plant Year
[Plant Year] has received some update to the UpdateRecord, UpdateRecord_Validate, Sum and Excel Export methods.

## TC Plan Group Year
UpdateRecord and UpdateRecorD_Validate methods have been updated. Both methods have 1 extra line filling a (new?) field:

```4d
[TC_Plan_GYear]TCPY_Plant_T_Prev1:=[TC_Plan_GYear]TCPY_Plant_Stock_Begin*[TC_Plan_GYear]TCPY_TPP_Prev1
```
and
```4d
[TC_Plan_GYear]TCPY_Plant_T4_Plus_End:=[TC_Plan_GYear]TCPY_Plant_Stock_End:10+[TC_Plan_GYear]TCPY_Plant_T4_Prod
```

## Greenhouse
***GF_ExportExcel*** has been adjusted to include the following 2 new Excel export methods:
- ***GF_ExportExcelReportBreeding***
- ***GF_ExportExcelReportExpSmall***
In other words: 2 new Excel exports options are now available from Greenhouse-Field. 

## HourRegistration & WBSO
Method ***HR_ReportExcel_2_CT_WBSO*** has been adjusted to include more information. The file now includes what year is exported in the header data and the main data includes the employee code instead of just the name. The separation of Iribov Analytical Services and Iribov is now also implemented in the export.

## Xiphium is now open source
The GitHub repository of Xiphium is now made open source, meaning everyone can access the source code and is licences to use and (help) develop the product. This will open the door to a better and more stable Xiphium, with the help of the programming community!

![](Open_Source_Logo.png)

Check it out: [https://github.com/Iribov/Xiphium_Project](https://en.wikipedia.org/wiki/April_Fools%27_Day)

## Sidenotes
Method ***Duplicates*** is added to **very** quickly find duplicate values of a field and make these duplicate records the current selection. This works with classic 4D code and thus does not work with ORDA (only in 4D v20 or higher could we make this method with pure ORDA).
