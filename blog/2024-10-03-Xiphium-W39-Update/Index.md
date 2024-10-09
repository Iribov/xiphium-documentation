---
title: Xiphium 2024-W39 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

---

## Analytical Lab
The Analytical lab has 2 new tables inserted into their workflow:
1. Analysis_Lysis
2. Analysis_Lysis_Plate

Analysis_Lysis has been inserted between Analysis_Sample and Analysis_Isolation to facilitate the user to create seperate Lysis and Isolation plates (before, these were considered 'the same' plate).
This change was necessary since from the first design of the Analytical Lab automation, a 'lysis plate' and 'elution plate' were always identical, hence the previous 'isolation plate' was enough to cover them both. Since then, new techniques have been adopted making this assumption untrue, and a necessity for the extra 'lysis' tables was born. 

This change was first developed seperately in project mode, so the changes could be tracked. The tracked changes came to 360 files changed, of which 60 are project methods (in project mode, every object method is also a file. So deleting/adding objects with a method can result in many file changes).
Implementing these changes was done manually, copy and pasted file by file. UI changed had to be done manually, object by object.

After implementation, some bugs were reported. This was mostly due to copy/paste mistakes, and partially due to project mode differences and incomplete testing beforehand.

:::note
It is not recommended to do big changes like this without using project mode in production. All the manual copy+pasting took many hours, and can be replaced by a single 'merge', resulting in many more hours available for testing.
:::

All file changes regarding this major update will be ignored for the rest of this blog post.

## Dashboard
New Dashboard page has been added showing several TPPs:
- TPP Rooting
- TPP Delivered
- TPP Planted
- TPP Accepted/Invoiced
### Plant Company Year
Method ***PlaCY_UpdateRecord*** has been updated to calculate more kinds of Transfer per Plant (TPP) to facilitate the dashboard.

The dashboard can show either a bar chart for the selected years, or a bubble chart showing the TPP of the last selected year but the total amount of plants of the selected years.

## DeliveryNote
Filter is made to filter records where Pending 1 or Pending 2 is not 0.

## Order
Go to option added to 'Go to Prices' using method ***Ord_Goto_Prices***

## Project2_Year
Some fields have been renamed:

| Old fieldname | New fieldname |
| -- | -- |
| Pro2Y_Am_Saldo_Budget_Cost |  Pro2Y_Am_A_Saldo |
| Pro2Y_Am_C_Invoiced_TC | Pro2Y_Am_B_TC_Saldo |
| Pro2Y_Am_C_Invoiced_Ana | Pro2Y_Am_B_Ana_Saldo |
| Pro2Y_Am_C_Invoiced_GF | Pro2Y_Am_B_GF_Invoiced |
| Pro2Y_Am_C_Invoiced_Other | Pro2Y_Am_B_Other_Saldo |
| Pro2Y_Am_C_Invoiced_Total | Pro2Y_Am_B_Total_Invoiced 
| Pro2Y_Am_Saldo_Budget_Cost_MP | Pro2Y_Am_A_Saldo_MP |
| Pro2Y_Am_B_Tot_Budget_Saldo | Pro2Y_Am_B_Tot_Saldo |
| Pro2Y_Am_C_Budget_Real | Pro2Y_Am_C_Real |
| Pro2Y_Am_C_Budget_Saldo | Pro2Y_Am_C_Saldo |

And three new fields have been added:
- Pro2Y_Rec_Pro2W
- Pro2Y_Am_D_Invoiced
- Pro2Y_Hour_Saldo


## Documents
Method ***Doc_CopyDocument*** has been adjusted to be able to suppress the alert when a document is not found.

Method ***Exp_SyncExportDocuments*** has been adjusted to only try to export a document if it exists on the server. Newly added method ***File_ExistsDocumentOnServer*** helps with this.

Methods ***Doc_GetPreviewableItems*** and ***Doc_ShowListFormPreview*** have been adjusted to be better compatible with OneDrive files.

Methods ***Exp_SyncExportExperiments*** and ***Exp_SyncImportExperiments*** now exports/imports both the Experiment and Treatment documents.

## Protocol Component
Buttons 'vScan_Btn_Close3' and 'vScan_Btn_Close5' have been added to form [Prot_Component];'ProtComp_List'. The 2 buttons contain almost identical code for importing tab delimited text from the pasteboard only difference is that one of the buttons doesn't actually save the record, and is likely used as a test.

