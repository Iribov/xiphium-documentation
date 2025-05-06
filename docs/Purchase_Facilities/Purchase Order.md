---
sidebar_position: 9
---

### Function
Represents a single purchase order made to a supplier. This table is the main header record for purchase orders, capturing supplier, order date, and status.

### Key Fields

- `PuOrd_OrderNumber`: Unique identifier for the purchase order.
- `PuOrd_ComCode_Sup`: Foreign key to[Company](../Company/Company1.md)  linking to the supplier.
- `PuOrd_ComCode_Cust`: Foreign key to [Company](../Company/Company1.md) linking to customer
- `PuOrd_Date`: Date the order was created.
- `PuOrd_Status`: Status of the order.

### Relationships

- One-to-many with [Purchase Items](Purchase%20Items.md).
