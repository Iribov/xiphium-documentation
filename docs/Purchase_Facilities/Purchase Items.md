---
sidebar_position: 10
---
Purchase items is the connection between [Purchase Order](Purchase%20Order.md) and [Purchase Articles](Purchase%20Articles.md). It captures key details of each purchase order, such as the order number, item codes, quantities, prices, supplier information, and relevant dates. The table ensures efficient tracking of purchased items from the order creation to delivery, as well as provides data on customer and supplier relationships.

This table basically contains all the historical order data of a [Purchase Articles](Purchase%20Articles.md)

## **Core Functions**
    
- **Price Calculation**: Stores purchase and sales prices for each item, allowing for calculations of total prices based on units.
    
- **Supplier and Customer Data**: Associates each purchase item with a supplier and a customer, capturing their respective details.
    
- **Date Tracking**: Records important dates such as the creation date, needed date, delivery date, and modification date.
    
- **Status and Remarks**: Includes fields to track the order’s status and any remarks from the supplier or internal users.
    

## **Key Fields**

- **Puit_OrderNumber**: Unique order number for relating to the [Purchase Order](Purchase%20Order.md).
    
- **Puit_ArtCode_Intern**: Internal article code for the purchased item.
    
- **Puit_Units_Ordered**: Quantity of units ordered.
    
- **Puit_Received**: Quantity of units received.
    
- **Puit_PriceUnit_Buy**: Unit price for the purchase item.
    
- **Puit_PriceUnit_Sales**: Unit price for the sales of the item.
    
- **Puit_Status**: Current status of the purchase order (e.g., open, completed).
    

This table plays a crucial role in tracking the lifecycle of [Purchase Order](Purchase%20Order.md) and calculating purchase and sales prices for better financial oversight.