# Invoice Items

## Purpose

Each record in the `Invoice_Items` table represents a single line on an invoice — detailing one product, quantity, price, and applicable taxes or discounts. This structure allows invoices to be broken down into their individual components for accurate billing, reporting, and validation.

## The Bigger Picture

Invoice items are what make an invoice meaningful — transforming it from a total amount into a traceable list of what was actually billed. They typically reflect the outcome of a delivery or service and often link back to `Delivery_Items` or `Order_Items`, ensuring consistency across operational and financial records.

In practice, each invoice answers three critical questions:

1. **What** is invoice exactly? (Service, goods etc.)
2. **How many** of this item is invoiced?
3. **What item price** is invoiced? (Price per unit of the item)
4. **How much** is owed for this item? (total)

## Key Relationships
[Invoice](Invoice.md): Every items needs to be related to an Invoice.
[Delivery_Items](../Deliveries/Delivery_Items.md): When an invoice is related to a DeliveryNote, An invoice_Items is usually related to a Delivery Item.
[Project2](../Projects/Project2.md) Debtor: Under which Project2 does this cost belong to?
[Project2](../Projects/Project2.md): Creditor: Under which Project2 does this turnover belong to?

## Core fields
- Price per Unit: The price handled per unit of this item.
- Amount of units: units are invoiced of this item?
- Amount Ex Tax: Amount for this item without tax.
- Amount Incl Tax: Amount for this item with tax.
- Tax Perc: Percentage of tax applicable on this item.