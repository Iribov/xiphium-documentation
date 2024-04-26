---
sidebar_position: 1
---
# Delivery Note
The Delivery Note table contains information generally seen on a delivery note. In addition, some Plant and Tissue Culture related information is also added. A Delivery (can) consists out of multiple [Delivery_Items](Delivery_Items.md). The distinction between DeliveryNote and Delivery Items is that the DeliveryNote contains more general information about **WHERE** the delivery is going (address, company, etc.), while the Delivery_Items contain the information of **WHAT** is being sent.

There are 3 different types of deliveryNotes:
1. Out
2. In
3. Internal

### Out
The DeliveryNote type 'Out' indicates that the plants are going 'out of the company' and (usually) to a client.

### In
The DeliveryNote type 'in' indicates that plants are going 'in to the company'.

### Internal
The DeliveryNote type 'internal' indicates that plants are being sent internally. However, this doesn't mean it's going from and to the same company code.