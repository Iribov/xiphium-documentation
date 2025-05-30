---
title: Xiphium 2025-W22 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

:::info
A total of 146 files were changed. This makes it more difficult to find significant changes to discuss here.
:::
<!--truncate-->

## King API integration
It is now possible to import Ledgers directly via the King API. For now, a button with a popup is added to manually enter the months to import, and manually trigger the importing process. When this works correctly, a monthly crontask can be setup to keep ledgers up to date automatically. All method names start with 'KingAPI_' except for ***FinLeM_ImportLedgerFromData*** (that converts King API data to ledgers).
## Dashboard
Some dashboards gave an error when no records are found (Analytical lab financial dashboard). Some of these dashboards are adjusted, but most dashboards always have at least 1 record to display.

## Analytical lab
### Isolation Plate Overview
The analysis Isolation Plate overview had some complaints of being very slow. This was due to many relational data that had to be accessed. This is fixed by saving the 'context'. 4D will follow these relationships the first time, but the second time it 'remembers' the context and will get all related information in 1 server call (instead of several!). 1 downside is that many to many (n:n) relationships are not able to use this optimization (so some workarounds had to be done).

Using context is as easy as adding an object to the query as shown in the [documentation](https://developer.4d.com/docs/19/ORDA/entities#using-the-context-property).
Because we use a query object, parameters also need to put in the object. This can be a collection (for numbered parameters) or an object (for named parameters).
```4D
$queryObject:=New object("parameters"; New collection($plate.AnIsoPlate_PlateName); "context"; "isolations_overview")
$selection:=ds.Analysis_Isolation.query("AnIso_IsoPlateName = :1 order by AnIso_IsoPlateWell asc"; $queryObject)
```
:::danger
When using context, make sure it's a unique name. Contexts are saved on the client session. Using the same context somewhere else can 'pollute' the context, making it slower than intended.
:::

:::tip
4D 20 supports setting the context [manually](https://developer.4d.com/docs/20/API/DataStoreClass#setremotecontextinfo). This way you can skip the first round of 'learning'. 
:::
## Declare local variables
There are now 59.883 compiler errors when set to 'all variables are declared' compared to 60.693 last week. Showing that this will take a lot of continuous effort in order to bring down to 0.

## Misc
Method ***DateTime_Months_In_Range*** is added to calculate the amount of months of a date range (including start and end month). This is useful when you need a loop for every month, and the range crosses a year (example: from 21-11-2024 to 18-2-2025 contains 4 months).

Method ***duplicates*** only used to work for alpha/text fields. The method is updated to work with text and number fields (but not 64 bit integer fields). Making is useful to find things like duplicate id fields, or other fields used in a relationship.