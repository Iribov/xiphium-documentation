---
sidebar_position: 11
---

**Purpose:** Tracks stock purchase records, including item details, supplier, usage, and inventory-related metrics.

The `Purchase_Stock` table records all stock entries related to purchases, providing a detailed log of materials received, their types, quantities, origin, and current stock status. It functions as a transactional and tracking table within the purchasing and inventory management system, capturing both user- and supplier-related metadata, stock movements, and usage over time. This table plays a crucial role in ensuring traceability, accountability, and accurate inventory valuation, particularly for chemical and crop-related materials.

## **Core Fields**

- `PuSto_Date`: Date of the stock record.
- `PuSto_Date_Previous`: Date of the previous stock record.
- `PuSto_Week`, `PuSto_Month`, `PuSto_Month_for_LedgerMonth`: Time indicators.
- `PuSto_Period`: Fiscal or tracking period.
- `PuSto_Status`: Status (enumerated; e.g., draft, finalized).
- `PuSto_Made_by`: User who created the record.
- `PuSto_Date_Created`, `PuSto_Date_Modified`: Audit timestamps.

## **Item Description**

- `PuSto_Article_Description`: Name/description of the article.
- `PuSto_ArtCode_Intern`: Internal article code.
- `PuSto_CropCode`, `PuSto_Crop`: Crop classification.
- `PuSto_Type`: Type/category of stock.
- `PuSto_Text`: Additional description/notes.
- `PuSto_Group1`: Optional grouping.

## **Supplier Info**

- `PuSto_ComCode_Sup`: Supplier company code.
- `PuSto_ComName_Sup`: Supplier company name.
- `PuSto_Person`: Supplier contact person.
- `PuSto_DeliveryNote`: Delivery reference.

## **Stock Quantities (Units/Pieces/Weight)**

- `PuSto_Unit_Start`, `PuSto_Unit_In`, `PuSto_Unit_Used`, `PuSto_Unit_Inventory`, `PuSto_Unit_End`, `PuSto_Unit_Sold`, `PuSto_Unit_Differnce`: Various unit tracking metrics.
- `PuSto_Pcs_End`: Ending pieces count.
- `PuSto_Gram_End`, `PuSto_Gram_Used`: Weight tracking (grams).
- `PuSto_Unit_Type_Chem`: Unit type for chemicals.

## **Financials and Metrics**

- `PuSto_UnitPrice`: Price per unit.
- `PuSto_Amount_End`: Total ending amount.
- `PuSto_Days_Resonse`: Response time in days (possibly lead time).
- `PuSto_N_Documents`: Linked document count.
- `PuSto_N_RecordsDetail`: Count of associated detail records.
## **Foreign Keys / Links**

- `PuSto_IDM_PuArt`: Links to a [Purchase Articles](Purchase%20Articles.md) record.
## **Other**

- `PuSto_Location`, `PuSto_Location_Detail`: Physical or warehouse storage location.
- `PuSto_ZZZ`: Miscellaneous or legacy field (purpose unclear).