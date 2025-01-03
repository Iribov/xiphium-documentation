---
title: Xiphium 2025-W01 update
authors:
  - jim
---

![](2025-happy-new-year-background-design-greeting-card-banner-poster-illustration-vector.jpg)

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

<!--truncate-->

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

## Catalog changes
Field 'Con_ID_Com' is added to the [Contact] table.

:::danger
Several tables have been renamed. This causes many changes in forms and methods, making it difficult/time consuming to decipher what has actually been changed, and what's just a consequence of the name change.

For this reason, only project method changes will be discussed this week.
:::

Table [CropWeek] has been renamed to [CropC_Week]. 

Table [ComPCropY] has been renamed to [CropC_Year].

Field 'Doc_Rec_Link' has been added to the [Document] table.

Table [Items_Lines] has been renamed to [Table]. All fields have their prefix 'It_' changed to 'Table_'.

An automatic index is added for field [Mutations_Employee]MuEm_Date_Created.
:::tip
Automatic indexes default to a B-Tree (except on boolean fields). A Cluster B-Tree index is beneficial for data that has repetition in it. The more repetition the data has, the more beneficial a cluster is. Because many [Mutations_Employee] records get created every day, many of them contain the same date, therefore making it more beneficial to Index as a cluster, compared to a regular B-Tree.
:::

## Greenhouse_Field
Method ***GF_ListboxHandler*** has been added. The method seems to be a preparation to provide functionality for Greenhouse-Field records displayed in a listbox. The method is not implemented anywhere yet.

:::danger New year, new syntax!
Method ***GF_ListboxHandler*** did not use the `#DECLARE` syntax for parameters, but used to old $1, $2 syntax.

![](Im_Watching_You_Meme.jpg)
:::

## Documents
Method ***Doc_Updaterecord*** has been modified to update the amount of records linked to it. This number is saved into the new [Document]Doc_Rec_Link field.

## Print Labels
A logical error has been fixed in several sticker printing methods.
The previous code:
```4D
$data:=String_Substitute($data; "year"; String(Year of([TC_Reg_Emp]TC2E_Date)-2000; "00"))
```
Takes the year of the date and uses that year as part of a year-week format. This is not robust, the beginning of 2025 is a good example of that:
`30-12-2024 = 2025-W01`

This error is fixed by using the DateTime_GetYearWeekNr, which returns the correct year-week according to ISO 8601. Resulting in the following code:
```4D
		$data:=String_Substitute($data; "year"; Substring(DateTime_GetYearWeekNr([TC_Reg_Emp:131]TC2E_Date); 3; 2))
```

## Table
Method ***Table_GetCustomTableName*** takes table pointer and returns the custom table name.  This method should/could be used in multiple places to set the user facing name of the table. For instance: every Output form has a Text field on the top left displaying the 'Custom Table Name'. This is now done via hardcoded text, but should/could be replaced by this method so future name changes can be done once, and applied everywhere.

Method ***Table_GetPrimaryKey*** takes a table pointer and returns a pointer to the primary key field. This is now done by one big `Case Of` statement that needs to be filled manually whenever a table is added or a primary key is changed. ORDA can do this automatically using the following code:
```4D
ds[tableName].getInfo().primaryKey
```

The entire method ***Table_GetPrimaryKey*** could be replaced with the following code:
```4D
// (PM) Table_GetPrimaryKey
// Returns the primary key fieldPointer for the given tablePointer
#DECLARE($tablePtr : Pointer)->$fieldPtr : Pointer
var $tableName; $pKeyFieldName : Text
var $fieldNr : Integer

$tableName:=Table name($tablePtr)
$pKeyFieldName:=ds[$tableName].getInfo().primaryKey
$fieldNr:=ds[$tableName][$pKeyFieldName].fieldNumber
$fieldPtr:=Field(Table($tablePtr); $fieldNr)
```
*Do note that this method needs a valid table pointer, otherwise errors will be generated.*