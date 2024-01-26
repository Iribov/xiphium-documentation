---
title: Xiphium 2024-W04 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Github.

<!--truncate-->
## Greenhouse Sorting Scanning Menu
Some small changes have been made to the Greenhouse sorting scanning menu. It is now possible to add a remark to the sorting!

The popup 'GF_Reason_Not_Planted_Machine' has been modified with some extra options and changes to current options.

## Financial Month (liquidity)
The Financial Month (called Fin_Liq_Month a.k.a. 'Financial Liquidity Month' on the background) has gotten a new tab added to its list form named 'Creditor'. 15 fields have been added that are supposed to track the Open and Overdue amounts+Percentages op debitors.

Also, some updates have been made to the 'Update Record' method. The intension of this change is unclear but it seems to improve current queries.

## Financial turnover month
Some fields have been added to the Financial turnover month table that track the Debitors Open Percentage and Debitor Overdue PErcentage of both the debitor company and the debitor mother company.
## Analysis Order
The Analysis Order detail screen has been subject to change according to feedback from the ISO evaluation. Unused button will be removed, and used buttons will be rearranged. If a button has been removed, and you believe it has to come back, please contact the Analytical Lab.
## Analysis Suborder
The Analysis suborder code has received some update to automatically create 'Pathogens to test' and 'Markers to Test' links from their respective text fields.

Also, the 'Update Record' method is currently under construction to remove old/unnecessary code. This should have no effect on daily operations but if there are, contact IT immediately!
## Delivery Note
A small change has been made to the 'Update Record' method that automatically enters an employee code and employee name of the account manager involved in the delivery note. The account manager is automatically entered by searching in the Company table with the company code customer from the delivery note.
## Order
A small change has been made to the 'Update Record' method optimizing the way company production is taken from order group.
## Iribov in Brasil!
The TCPA_SyncExportOrders method now has lines added that take Company code 006, and country 'Brasil' into account.






