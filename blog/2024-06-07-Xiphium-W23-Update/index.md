---
title: Xiphium 2024-W23 update
authors:
  - jim
---
Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->

## Query Optimization
Method ***AnIsoPlate_CreateRecord_PCR*** has had a query optimization where the '.orderBy()' function has been incorperated into the query call. This optimizes performance since now, the query call returns the entitySelection already ordered, instead of needing to do an additional server request with the .orderBy function.

Reducing the network calls from 2 to 1 makes this query about 2x as fast. Queries and data communications between server and client are often the slowest parts of our code. Optizing these parts will make the methods run faster. This is even more true when connecting to Xiphium via VPN!

<details>
<summary>Code change</summary>
old code (2 server requests):

```4D
$selection:=ds:C1482.Analysis_Isolation_Plate.query("AnIsoPlate_PlateName = :1"; $year+"-@")
$selection:=$selection.orderBy("AnIsoPlate_PlateName")
```

new code (1 server request):

```4D
$selection:=ds:C1482.Analysis_Isolation_Plate.query("AnIsoPlate_PlateName = :1 order by AnIsoPlate_PlateName asc"; $year+"-@")
```

:::note
Combining the 'query' and 'Order By' into a single network request is NOT possible using classic 4D code.
:::

</details>

Method ***AnIso_SelectForDetail*** has been optimized to directly query using ORDA, instead of doing a classic Query and converting it to ORDA using 'Create Entity Selection' (however, the 'Create Entity Selection' line still needs to be removed).

## Delivery Note

Methods ***DeN_Create_PDF_AN_GF*** and ***DeN_Create_PDF_DN_GF*** have been added. The methods create some kind of report of the Delivery Note

Method ***DeN_Detail_ListboxHandler*** is added. The method handles the custom events "On Filter" and "On Tools Button".

Method ***DeN_ExportExcel_Pending*** has been added. This method exports DeliveryNote fields of the current selection.

Method ***DeN_Print_Address_Label*** has been added. This method print the Address Label using the "DeN_Print_AddressLabel12" tableform and functions 'FORM SET OUTPUT' and 'PRINT RECORD'.

## Documents
Method ***Doc_ShowDetailFormPreview*** has been added. This method can show a preview of documents in a seperate window. 

Methods ***File_CanPreviewInWebArea*** and ***File_GetMimeType*** have been extended with the "heic" extension. This means that files with this extension can now be previewed using method ***Doc_ShowDetailFormPreview***.

Form "Doc_ListFormPreview2" has new buttons 'DocumentIcon' and 'DownloadButton'.

## Experiment
Method ***Exp_UpdateRecord*** now searches for documents related to its treatments and saves the amount found in field 'Exp_Rec_Doc_ExT'.

### Treatment
Method ***ExT_UpdateRecord*** has been adjusted so that Obervation Percentage fields are now calculated using the 'ExT_N1_Explants' field instead of the 'ExT_N2_Plant_Analysed'.

## Fincancial
Some work has been done on the financial tables. It's too much effort to write down all the changes, but changes have been made to methods:
1. FinCM_Sum
2. FinCM_UpdateRecord
3. FinT_CCM_UpdateRecord
4. FinT_CCT_UpdateRecord

## TCPA
Method ***TCPA_SyncExportDelitemsResults*** has field 'DiT_N_17_Del_NoInfo' added to its massive oneline QUERY BY FORMULA. This line finds all records with any amount of plants in any of the given fields, and/or if it has any text in field 'DiT_Q_Remarks'.

Method ***TCPA_SyncExportTCPlanGroups*** has been changed to export the last 2 weeks instead of the last 5 days.

## Web stuff
Method ***WebApp_Startup*** has 2 'locations' API endpoints modified to use method ***Web_LocationsController*** instead of ***Web_TCLocationsController***.

Method ***Web_LocationsController*** has been added. This method is used in API in both the 'tc-locations' and the newer 'locations' endpoints.

Methods ***Web_LocationsControllerNew***, ***Web_LocationsGetAllLocations***, ***Web_LocationsGetJar***, ***Web_LocationsSaveJar***, ***Web_LocationsGetLocation***, ***Web_LocationsRefreshScanData***, ***Web_LocationsSaveScanData***, ***Web_LocationsUploadScanData*** have been added. These methods probably add a lot of functionality to the locations app.

## Clone
The 'Create Record' buttons that call the "Clo_Create_Record_Screen" Form now also auto fill the plantcode when no Clone is selected, but a Plant_Code record is in the current selection. This should make it easier to create new clones without typos in the Plant Code. Not all subforms have a 'create record' button, but they all do have an 'add record' button.

## Catalog changes
Catalog changes indicate changes in the database structure. These could be:
- Field changes (additions, renaming, removal)
- Index changes
- Table changes

Table [Fin_Com_Month] has a lot of changes in its fields. Fields "FinCM_E01_MC" to "FinCM_E27_MC" have been retyped from Alpha to Real. 

Table [FinTur_ComCrop_Tot] has 'Field_52' renamed to 'FinTurCCT_ComCode_Prod_MC'

Several new indexes have been added:
- [TC_Registration]TC2_GroupCode_From
- [TC_Registration]TC2_TableFrom
- [Mutations_Employee]MuEm_TC2_TableFrom
- [Mutations_Employee]MuEm_Start_N_Plants
- [Mutations_Employee]MuEm_ID_TC2_To
- [Greenhouse_Field]GF_GroupFrom
- [Greenhouse_Field]GF_TableFrom
- [GF_Reservations]GFRes_N_Trays
- [Delivery_Boxes]DeBo_DeliveryNote
- [Delivery_Items]DiT_N_Plant
- [Delivery_Items]DiT_Location_Temp_GF_Delivery
- [Invoice_Items]InD_Description_D01_GCFrom
- [Order]Ord_N_Plant_Open

