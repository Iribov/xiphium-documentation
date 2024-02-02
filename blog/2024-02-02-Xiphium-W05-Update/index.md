---
title: Xiphium 2024-W05 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Reference Collection Individual
The backend of reference collection individual (tracking individual reference collection 'tubes') is now in place. The frontend of this feature will be implemented in the next week(s).

## Iribov Brazil
Company Code 006 (Iribov Brazil) is continued to be integrated into the system. This week, the DeliveryNote code generator now takes creditor 006 into account when creating a DeliveryNote (using format YYCNNNN where YY = Year, C = ComCode Creditor, N = sequential number).

## Delivery Bundling
There are changes made to the code that facilitates bundling of Delivery_Items. There now seems to be a 'protection' or 'guard clause' to enforce a rule with the alert: '*This Delivery Note should not be bundled, because the new location production needs to have the barcodes*'. There are more changes to this code, but the intentions of the changes are unlear from just reading the code.

## Add document error handling
If there is an error when adding a document, method 'WebApp_Error' is now called to build the $return parameter, instead of building the $return parameter in 3 seperate lines.

## Financial Month (liquidity)
Financial month continues to be developed. The focus is now mostly on modifying the forms and update method to comply to current vision for the table.

:::tip
The queries in method FinLem_UpdateRecord can be optimized to reduce server calls, as discussed in the 4D lesson 'Take care of the queries' @47:00 minutes (watching the whole lesson is recommended though). Although this optimization may not be noticeable when working close to the server, it will be noticeable when further away form the server (say, connected with a VPN from home).
:::

<details>
<summary>Query optimization(s)</summary>

**Optimization example:**

current code:
```4d
$invoice1:=$invoice.query("Inv_Date_Invoice <= :1"; $date_M_Fist)
$invoice1:=$invoice1.query("Inv_Date_Payment > :1 or Inv_Date_Payment = :2"; $date_M_Fist; !00-00-00!)
$invoice1:=$invoice1.query("Inv_Date_Closed > :1 or Inv_Date_Closed = :2"; $date_M_Fist; !00-00-00!)
[Fin_Liq_Month]FinLiM_Deb_Open:=$invoice1.sum("Inv_Amount_SC_Inc_Tax")
```
These 3 server calls can be reduced to a single server call using brackets inside of the query:

```4d
$invoice1:=$invoice.query("Inv_Date_Invoice <= :1 and (Inv_Date_Payment > :1 or Inv_Date_Payment = :2) and (Inv_Date_Closed > :1 or Inv_Date_Closed = :2)";$date_M_Fist;!00-00-00!)
```
This minimizes communication between the server and the client, optimizing both speed (server only needs to do 1 query instead of 3) and network chatter (server only sends data to client once instead of 3 times).

</details>

## Order Synchronization
The line: ```QUERY SELECTION([Order]; [Order]Ord_no_sync_to_WBP=False)``` was added to method '***Ord_SyncExportOrdersWBPtoFTP***'. What this means is unclear to me.

## Greenhouse Sorting scan menu
Safety is added to the method ***Scanning_CloseSortingGF***. This means that a password is now needed to finish sorting in the scan menu.

## Analysis Invoice creation
Both methods for creating invoices (from suborders and from samples) have a slight change logic so that the discount is taken from the year present in the OrderCode, and not from the year of Date_Entry. This should help with selecting the correct discount(s) for order created in one year, but invoiced in another.

:::info Analysis OrderCode format
OrderCode = [YYMMNNN]  
YY=year  
MM=month  
NNN = sequential number  
:::

## Temperature format
The 'TemperatureFormat' is added to the formatting options for displaying Temperatures. This format is used for integers only (no commas), and will show the ```℃``` symbol behind the (stored) integer.

Example: '12' will be shown as '12℃' when using this format.





