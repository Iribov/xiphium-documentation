---
title: Xiphium 2024-W06 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Greenhouse 
### Scanning Menu Sorting
The greenhouse scanning menu for sorting continues to get incremental improvements. The changes are small and the intentions are unclear from the code alone, but there is work being done to improve the experience of the scanning menu.

### Excel Flex Export
Work is being done on the Excel Flex Export for the Greenhouse. When the new export will be ready for testing/use is unclear from just reading the code.

## Iribov Brazil
Iribov Brazil is continued to be integrated into the system. This week the integration is in the Tissue culture scanning menu, specifically the 'printing' menu for printing QR/barcodes for tissue culture.

## Delivery
There have been several changes in different parts related to deliveries:

### Delivery and Planning Actions
a small change to method ***DeN_ExportToTC2E_Scanning*** is done. a new 'If, Else' statement is introduced to a query for Planning Actions. If the delivery_item has a 'Scan_Week_Realized', that week is used to search for planning actions. Otherwise, the week set in the DeliveryNote is used.

### Unbundling
A small addition to the method ***DeSca_UnBundleSelection*** is done. The method now also copies the 'Scan_Type_Box' from Delivery_Scanning to the Delivery_Item when 'unbundling' bundled deliveries.

### Customer Feedback Excel Export
Work is being done on the Customer Feedback Excel Export. When the export is ready for testing/use is unclear from just reading the code.

### OneDrive Photo sharing
Some code has been added to the ***DiT_UpdateRecord*** method to shield Iribov Brazil off from the OneDrive photo sharing system. Probably with the intention of adding Iribov Brazil in later.

## Web Document
Method ***Doc_AddDocument*** has received additional error catching. It seems like a method that can add a document to a record from the web (apps). It is now coded in that a file must have a filename when uploading, and returns an error if it doesn't.

## Backup Info
The method that informs us if a Xiphium backup had any trouble has been updated. The information message now includes the 'DefaultCompany' Code (which database had trouble with the backup?).

:::info
The 'DefaultCompany' Code is the company code of where the Xiphium Database is running. The Xiphium Database in NL has 'DefaultCompany' Code '001', Macedonia '003' etc.
:::

## TC Planning Actions (TCPA)
Small change made to the UpdateRecord methods. If a TCPA has Activity "DT@" (@ is a wildcard than can be anything), the TCPA no also needs a ComCode Production to receive the 'DefaultCompany' Code as its 'ComCode Master'.  
It seems like this change is done in regards to synchronizing  "DT" Action between locations.

## Order
2 buttons have been added.
1. 'Create TCPA delivery actions'
2. 'Fill TCPC IDM via TCPA T4 Ord IDM'

These buttons have been added in regards to a request to make it easier to create TC Plan Actions for a large(r) amount of Orders at once, and to close the 'triangle' of Order, TCPC and TCPA. I believe these button are added as a test. If/When they are to be used by others in the 'regular' workflow, is unclear from just reading the code.

### TC Planning Action (TCPA)
Button 'Fill OrderIDM T4 via Week Root in Order' has been added to the TCPA List Form. This button is supposed to close the 'Triange' of Order, TCPC and TCPA. The intended usage in the workflow are unclear from just reading the code.





