---
title: Xiphium 2025-W10 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

:::note
Some git changes to forms might be due to the upgrade to 4D 20.6 LTS. These will not be discussed here.
:::

## Company
Method ***Com_ExportExcel_Flex*** has been extended to include more options.

## Financial
Many small changes have been made to forms and methods related to financial tables to improve functionality.

## Greenhouse
Method ***GF_CreateInvoice_WBP_PlantingS3*** has been added.

### GHPA
***GHPA_Backwards_Calculation*** 

## labels
Method ***Label_SendToPrinter*** has been modified to be able to print images in labels.

## Mail
Method ***Mail_NewMessage*** has been modified to check if the message is already in HTML format.

## Order
Method ***Ord_DeliveryAnnouncementMail*** has been extended to include more boiler plate text with auto filled information.

## Delivery
Method ***Scanning_CloseDeliveryNextBox*** now has the variable vScan_UpdateTotals set to true, to enforce updating the totals.

## TC Reg Emp
Metho d***TC2E_ExcelRep8_Flex*** has the option 'Plant Group' added as an option.

## Misc
Methods ***DateTime_GetDayName*** and ***DateTime_GetMonthName*** now have an optional second parameter for language. Right now it only supports Dutch and English.

Method ***String_HexEncode*** has been added. The method Encodes a blob to a hex-encoded string.

## Catalog changes
Alpha Field 'Dit_Pla_PlantCloneCode' has been changed from max 20 characters to 30.
Fields DiT_Invoicing_Reason_GF and GF_Invoicing_Reason have been.

:::danger Keyword Indexes
There are a total of 10 keyword indexes in Xiphium. A keyword index is meant to for alpha & Text fields to facilitate quick queries when you're looking for keywords within a piece of text.

However, most of the time in Xiphium, the field only contains a code that is a foreign key. A keyword index is not needed in these cases, since you most often look for the whole key, and not just part of it. If the code doesn't have a separator in it (a space, -, /, etc.), the keyword index is completely useless and overkill.
:::