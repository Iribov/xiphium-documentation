---
title: Xiphium 2024-W48 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->
## Access
Severall Acces Methods have been adjusted. There is now a direct query on the datastore 'AccessPriviliges' instead of a query on a form object.
This affects the follwing methods:
- Project/Sources/Methods/AccFunc_GroupCount.4dm
- Project/Sources/Methods/AccFunc_UserCount.4dm
- Project/Sources/Methods/AccTab_GroupCount.4dm
- Project/Sources/Methods/AccTab_ShowOverview.4dm
- Project/Sources/Methods/AccTab_UserCount.4dm

## Delivery Items
Method Project/Sources/Methods/DiT_Export_PackingListExpress.4dm has a small adjustment to make an excel export work better (a picture is now first saved in a local variable, before exported to excel).

## Project2
The ALERTS in method Project/Sources/Methods/Pro2Y_UpdateRecord.4dm have been removed. They were probably used for debugging, but forgotten during programming.

## TCPA
Method Project/Sources/Methods/TCPA_ExportExcel_Cross_WksSPa2.4dm has been modified. Some hard coded export values are changed. The significance of which are not clear to me on first sight.

## Experiment
The 'Create Record' dialog of experiment now also contains 'Experiment Type 1' and is required to be filled.

## Web stuff
Method Project/Sources/Methods/Web_LocSettingsController.4dm has been modified. The 'GET' endpoint for action 'location' has been split into 2. There is one where the ID is knonwn, and one where the ID is unknown.

Method Project/Sources/Methods/Web_LocSettingsGetLocations.4dm has been added. This method returns a collection of all locations (From [Spaces_Detail])