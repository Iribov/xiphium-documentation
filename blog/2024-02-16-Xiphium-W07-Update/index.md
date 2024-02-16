---
title: Xiphium 2024-W07 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Project2 Year
Project2 Year now contains code to get the cost from the invoice items. This is done by searching Invoice_Items on their 'ProjectCode2 Debitor' field (and some other parameters of course). These costs are then divided into 3 categories:
1. Analytical (when creditor is company code 12)
2. Greenhouse (when creditor is company code 5)
3. Other
:::note
Internal invoices for Analytical has been done for multiple years. However, internal invoicing for the Greenhouse is not a thing yet. The code is already implemented, but won't get any data until internal invoicing for Greenhouse is realized.
:::

## Analytical lab
multiple changes are realized this week in regards to the 'Analysis' module.

### Project2 code from Analysis to Invoice items
ProjectCode2 Debitor and creditor are now filled automatically when creating an invoice from an Analysis Order. 

The fields 'ProjectCode2 Creditor' and 'ProjectCode2 Debitor' from the Analysis Order are copied into the 'ProjectCode2 Creditor' and 'ProjectCode2 Debitor' fields of the Invoice Items.

### Analysis Order and SubOrder
Some fields are both entered in the Analysis Order, and Analysis Suborder. And because the different analysis suborders can contain different values for 1 field, and the analysis order typically can only hold 1 value; there's a mismatch.

Therefore, for the following fields it is still possible to enter in the Analysis_Order upon creation, but as soon as suborders are created (with a value in the field), these values will overwrite the Analysis_Order value. When different values are entered in the different suborder, these values will be concatenated in the Analysis Order.

This applies to fields:
- Crop Code
- Crops (Crop Name Scientific)
- Type Objective
- Type Material (Type tissue)

:::info Example
<details>
<summary>Example with Crop</summary>

If You create an Analysis Order, you can only enter 1 Crop.
Let's say you use Brassica.

But in reality, the client sends both Brassica and Iris. Instead of splitting this into 2 order, it's possible to create 2 suborders: 1 with crop 'Brassica', and 1 with crop 'Iris'.

The problem, however, is when you look at the Analysis Order it only says 'Brassica'. This is the mismatch we solved with this update.

Now, because we have 2 suborders ('Brassica' and 'Iris'), the analysis Orders is updated to say 'Brassica, Iris'. So now, when you look at the order, it mentions both crops. When you're searching for either 'Brassica' or 'Iris', the order always comes up.

</details>
:::

### Analysis Genotyping
A new Excel file for importing has been created by the analytical lab. The import button is now updated and started implemented.

### Reference Collection individual
A scanning system for tracking individual tubes of a 'Reference Collection' has been developed and exposed this week. Testing for bugs is still necessary and will start next week.

## Clone
Modify Batch now takes the field Clo_CB_Clock into consideration. When a clone already has this 'blocked' property, the fields that track 'who' and 'when' blocked this record will not be overwritten.

## Greenhouse Field
Greenhouse Field now contains a field called 'GF_Analysis_Clean'.
This field copies the 'Clo_AnSam_Result_0_Clean' field from [Clone] to indicate whether the clone was tested 'Clean' by the analytical lab.
The field also changes color depending on the contents of that field (Green when clean, red when not clean, etc.).

## TCPA SEE (Certification)
There are fields added to the form and filter regarding SEE (certification).

## Delivery items
The article code field in Delivery Items is now searchable.





