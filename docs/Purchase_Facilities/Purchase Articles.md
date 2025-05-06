---
sidebar_position: 2
---

The `Purchase_Articles` table is a **comprehensive master table** for articles intended for procurement. It plays a **critical role in managing procurement logistics**, **supplier interactions**, **product data**, **cost and price calculations**, and **inventory performance over time**.

## **Core Functions and Responsibilities:**

### 1. **Article Identification & Description**
    
    - **Fields:** `PuArt_Name_Product`, `PuArt_Article_Description`, `PuArt_ArtCode_Intern`, `PuArt_ArtCode_Supplier`, `PuArt_ArtCode_Storage`, `PuArt_ProductCode_Producer`
        
    - Stores product names and both internal and external (supplier) codes for unambiguous identification.
        
### 2. **Categorization and Typing**
    
    - **Fields:** `PuArt_Type1`, `PuArt_Type2`, `PuArt_Type3`, `PuArt_Group1`, `PuArt_Product_Form`, `PuArt_UnitType`, `PuArt_PackedForm`, `PuArt_BrandName`, `PuArt_CN_Code`
        
    - Allows categorization by type, group, form, brand, and standardized coding systems (possibly customs or trade classification).
        
### 3. **Supplier and Customer Information**
    
    - **Fields:** `PuArt_ComName_Supplier`, `PuArt_ComCode_Supplier`, `PuArt_ComName_Sales`, `PuArt_ComCode_Sales`
        
    - Links products to suppliers and possibly also to associated customers or sales companies.
        
### 4. **Pricing and Costing**
    
    - **Fields:**
        
        - Purchase Prices: `PuArt_Price_Buy_List_Unit`, `PuArt_Price_Pur_Unit`, `PuArt_Price_Buy_Real_Unit`, `PuArt_Price_Pur_DiscountPerc`, `PuArt_Price_Cost_Unit`, `PuArt_Price_Buy_List_Pcs`, `PuArt_Price_Buy_Real_Pcs`
            
        - Sales Prices: `PuArt_Price_Sales`, `PuArt_Price_Sales_Unit`, `PuArt_Price_Sales_Unit_List`
            
        - Margin: `PuArt_Margin`
            
    - Enables cost tracking, price list management, discounts, and margin analysis.
        
### 5. **Inventory and Stock Management**
    
    - **Fields:** `PuArt_Stock_Unit_Current`, `PuArt_Stock_Unit_Minimum`, `PuArt_Stock_pcs_Current`, `PuArt_Unit_in_Order`, `PuArt_Unit_Weight`, `PuArt_Mol_Weight`
        
    - Stores current stock levels, minimum stock requirements, and unit characteristics for purchasing and storage.
        
### 6. **Activity and Forecast Tracking**
    
    - **Fields:**
        
        - Ordered: `PuArt_N_Ordered_01_12`, `PuArt_N_Ordered_13_24`, `PuArt_N_Ordered_25_36`
            
        - Costs: `PuArt_Cost_01_12`, `PuArt_Cost_13_24`, `PuArt_Cost_25_36`
            
        - Sales: `PuArt_N_Sales_Unit_01_12`, `PuArt_N_Sales_Unit_13_24`, `PuArt_N_Sales_Unit_25_36`
            
        - Invoicing: `PuArt_Invoice_TO_01_12`, etc.
            
    - Tracks ordering, costing, and sales over 12-month intervals for forecasting and planning.
        
### 7. **Logistics and Storage**
    
    - **Fields:** `PuArt_Location_Storage1`
        
    - Indicates storage locations or inventory zones.
        
### 8. **Administrative Metadata**
    
    - **Fields:** `PuArt_ID`, `PuArt_Date_Created`, `PuArt_Date_Modified`, `PuArt_Record_Created_By`, `PuArt_Record_Modified_By`, `PuArt_Date_Price_Update`
        
    - Tracks record creation/modification dates and responsible users.
        
### 9. **Quality & Compliance**
    
    - **Fields:** `PuArt_Formula`, `PuArt_QMS`, `PuArt_Status`, `PuArt_Status_For_Invoice`
        
    - Supports formula tracking and quality management systems (QMS) indicators.
        
### 10. **Project and Period Association**
    
    - **Fields:** `PuArt_Project`, `PuArt_Period`
        
    - Links items to projects or purchasing/forecasting periods.
        

