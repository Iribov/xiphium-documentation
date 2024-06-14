---
title: Xiphium 2024-W24 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Indexes
All indexed fields are set to 'automatic'. However, automatic indexes default to a B-Tree index (except for boolean fields). Most of our indexes fields that are not ID's/unique values should be set to a Clustered B-Tree instead!

:::tip
If a field inside a table has repeating values, a Clustered B-tree is the best option.
The more the value repeats, the more advantageous a Clustered B-Tree is.
If the value only repeats 2-3 times, we're not sure (yet) what the best option is.

Here are some great examples for using a Clustered B-Tree over a standard B-Tree:
- Status
- Work Type
- Employee Code
- Anything with a choicelist
- Foreign keys (most of the time)

:::info
Local testing with a 38GB data file contained a 6GB index file. Transforming the 86 biggest indexes to Clustered B-Tree, resulted in a 3GB index file! 

1/2th of the original size, with more optimization to go!
:::

## Analysis_Suborder CropCode
CropCode field in Analysis Suborder has been transformed from Alpha to Longint. Subsequent methods have been adjusted.

## Crop
2 new fields are added:
- [Crop]Cro_EmpCode_Tech_Spec
- [Crop]Cro_EmpName_Tech_Spec

Method ***Cro_UpdateRecord*** now searches employee name of the [Crop]Cro_EmpCode_Tech_Spec.

## Experiment
Method ***Exp_UpdateRecord*** now also counts the amount of excel files related to the record and stores in in field [Experiments]Exp_Rec_Doc_Excel.

## Financial
Work has been done on the financial company tables. it's too much work to summarize here.

## Order
Method ***Ord_Check*** has a change in querying overtime orders.
The query went from:
`$order1:=$order0.query("Ord_Week = :1 and Ord_Week < :1"; ""; $week_0)`
to
`$order1:=$order0.query("Ord_Week # :1 and Ord_Week < :2"; ""; $week_0)`

Method ***Ord_ExportExcelCheckOverview*** does something extra related to "Different planning group" and "Build, week prog < 5 weeks or has passed".

## Web Stuff
Method ***000_TestRL*** has been extended with methods ***Web_LocationsControllerOld*** and ***Web_LocationsController***.

Method ***Web_LocationsController*** has been refactored for better readability. Most actions have been abstracted to a methods. Also, action "user" has been added.