---
title: Xiphium 2025-W07 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Financial
Method ***Access_SetupFinancialMenu*** has 3 new output form and 3 new input form tabs added to it.

### Investments
Work has been done on the financial investment table(s). This is mostly front-end/visual work and less logic work.

## Deliveries
Method ***DiT_Export_For_Transp_Invoice***  has 6 columns added to it called:
- Plantcode
- Plantname
- /# containers
- Amount
- Price
- Total Price

Method ***DiT_Export_PackingListExpress*** has a bold format added for the net weight, dimensions and the box.

## Greenhouse_Field
Method ***GF_ExportExcelReportEstimateQC*** has the new column "Type start material" added to it.

## GHPA
Method ***GHPA_Automatic_Planning_Calc*** has been adjusted to only fire the forwards calculation when the when the stage3 delivery week is fixed or there are plants present in the greenhouse.

Method ***GHPA_Backwards_Calculation*** is simplified for readability. The function should be (more or less) identical.

Method ***GHPA_UpdateRecord_GF*** has been adjusted to use the temperature of the spaces history. Spaces history can now be used to plan thye temperature of a space.

Method ***GHPA_ColorField***  has been modified. The method is supposed to compare Start Week, end Week, Fust and temperature and make the field red when there is a change. However, because these comparisons are done with data from other tables, some are too slow to actually work. I might need to pull data into the GHPA table with the 'updaterecord' method to do a faster comparison. This does mean, however, that the comparison will always be out of date...

## Analysis Order
Bug in auto layout (automatic plate creation) resolved.

Method ***AnSam_Import_Ploidy_Request*** has been adjusted to check for empty rows in the excel.

## Apps
Constant `Xiphium Media Storage App ID` is added to method ***Constants_Setup***.

Methods ***Web_MediaStorageController***, ***Web_MediaStorageGetDetails***, ***Web_MediaStorageGetMedia***, ***Web_MediaStorageGetUser*** and ***Web_MediaStorageSaveDetails*** have been added for the MediaStorage app.

## Misc
Method ***Constants_Add*** has it's syntax error in the `#DECLARE` fixed. And for some reason the `If (Count parameters<4)` replaced by `If ($type="")`

Method ***Mail_NewMessage*** is modified to set property 'content' to 'html content'.

Method ***Ord_DeliveryAnnouncementMail*** now sends to rob.laveaux@pluggers.nl instead of info@pluggers.nl.

