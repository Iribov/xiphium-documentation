---
sidebar_position: 1
---
# Delivery Note

## Purpose

The `DeliveryNote` entity records the overarching details of a delivery transaction, encompassing information such as destination address, recipient company, and delivery type. It serves as the primary document for tracking the movement of plant materials, particularly within the context of plant and tissue culture operations.

## The Bigger Picture

Within the delivery workflow, the `DeliveryNote` functions as the central record that encapsulates the "where" and "why" of a shipment. It provides context for the associated `Delivery_Items`, which detail the specific contents of the delivery. This separation ensures clarity between the logistical aspects of the delivery and the items being transported.

## Key Relationships
    
- `Delivery_Items`: Each `DeliveryNote` is linked to one or more `Delivery_Items` that specify the individual items included in the delivery.
        
## Core Fields

- `DeliveryNote Type`: Categorizes the delivery as 'Out', 'In', or 'Internal'.
- `DestinationCompany`: Identifies the recipient company of the delivery.
- `DestinationAddress`: Specifies the delivery location.
- `DeliveryDate`: Records the date the delivery is scheduled or has occurred

## Common Usage

Users create a `DeliveryNote` when initiating a shipment of plant materials. The note captures essential information about the delivery's destination and purpose. Subsequently, users associate specific items with the delivery by adding entries to the `Delivery_Items` table. This process facilitates accurate tracking and documentation of both the delivery's logistics and its contents. 

## Edge Cases

- **Internal Deliveries:** While labeled as 'Internal', these deliveries may occur between different company codes, indicating transfers within the organization but across distinct operational units.

## Caveats
Deliveries also fill or empty the greenhouse stock. So if any plants need to put into the greenhouse, or taken out of the greenhouse, it has to follow the delivery process.