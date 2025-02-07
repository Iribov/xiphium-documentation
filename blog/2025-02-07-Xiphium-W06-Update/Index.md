---
title: Xiphium 2025-W06 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors. Mostly project method changes are covered.
:::

<!--truncate-->

## Analysis
Plate layout methods have been modified. It is now possible to select an analysis_test id that will be used when creating DataPoint records. Making it possible for PCR to create Analysis_Plates that are actually useful. More feedback on the design and functionality is needed before being able to fully implement and use this feature.

## Constants
Constants methods ***Constants_Setup*** has been modified to add new constants for trigger errors. This is an effort to standardise trigger errors and to create clear error messages when these errors are triggered to inform the user what has gone wrong.

Methods ***Constants_Add*** and ***Constants_ExportToFile*** have been modified to be compatible with integer values.

The three methods are also modernized with the `#DECALRE` and `Var` declarations.

## Crop Company tables
There is some work done on some of the Crop-Company tables. Fields, Forms, methods and process variables have some renaming done to comply with the 'new' naming standard. If any functional changes have been made, it is very hard to read from the diffs...

## DeliveryNote
Method ***DiT_Export_For_Transp_Invoice*** has been added. The method exports a packing list for the selected deliver items.

## Order
Method ***Ord_DeliveryAnnouncementMail*** has been added. The method creates an email for the delivery announcement. This method is also aded (but commented out) in methods ***Ord_PrintDeliveryAnnouncement*** and ***Ord_PrintDeliveryAnnouncementEN***

## GHPA
Method ***GHPA_UpdateRecord_GF*** has been modified to be able to get data from mutations for sowing actions (which strangely are identical to planting actions in the mutations) as well as fixing a mistake for sorting actions.

## Misc
The new iribov log has been uploaded. The old logo is now named 'Logo Iribov oud.png'.

We have several logo's in our database. Some of them make sense(variantions) but some of them do not. And the naming could be better for most of them. Time for a cleanup?

List of Iribov logo's in the database:

| Number | Name                    | Description                                                                                                               |
| ------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 2044   | 050611 Iribov logo.jpg  | 'fleur de lis' part of the old logo                                                                                       |
| 2196   | Iribov SBW Logo         | The old Iribov logo with the SBW part                                                                                     |
| 2204   | IribovSBW BSL           | The same old Iribov logo as 2196 with the SBW part and with the text/slogan: 'breeding support laboratory' below the logo |
| 2206   | Logo Iribov.png         | the new Iribov logo                                                                                                       |
| 2207   | Logo SBW bsl2           | the new iribov logo (exact same as previous one)                                                                          |
| 2224   | 170615 Iribov Logo.png  | 'fleur de lis' part of the old logo (same as 2044 but as png)                                                             |
| 2246   | Logo IWA.jpg            | big Old iribov West africa logo with text/slogan: 'Farmer support laboratory' below the logo                              |
| 2247   | Logo IG.jpg             | Big Old iribov ghana logo with text/slogan: 'improved planting material' below the logo                                   |
| 2248   | Iribov logo new.png     | The old iribov logo                                                                                                       |
| 2249   | Iribov SBW logo oud.png | the same as 2204                                                                                                          |
| 2250   |                         | the same as 2204, but smaller                                                                                             |
| 2254   | Logo Iribov oud.png     | the old iribov logo                                                                                                       |

:::tip svg files
It is possible to use .svg files for the logo's, so we don't have to deal with the issues of them becoming 'low quality' with large sizes. The file size of .svg's is generally smaller than a large .png or .jpg, but we have to be careful with compatibility in our code (if our code expects an .jpg or .png and gets an .svg it will not go well). Command [SVG EXPORT TO PICTURE](https://developer.4d.com/docs/commands/svg-export-to-picture) can be very useful if the logo has to be exported on the fly.
:::