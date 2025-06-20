## Purpose

An Invoice is a detailed list of goods shipped or services rendered, with an account of all costs — an itemized bill. The `Invoice` table captures this billing data, linking each invoice to the customer, delivery, and financial details.
## The Bigger Picture

Invoices connect the operational side of Xiphium (like deliveries) to financial workflows. They ensure that what was sent is correctly billed, forming the foundation for revenue tracking, client communication, and payment follow-up.

In practice, each invoice answers three critical questions:

1. **Who** is involved? (Client and provider)
2. **When** did it happen? (Creation, due dates, payment)
3. **How much** is owed? (Totals, with and without tax)

## Key Relationships
- [Invoice_Items](Invoice_Items.md): line items on the invoice
- [Company](../Company/Company1.md): linked as Debitor (client) and Creditor (provider)

Invoices are made from many different (source) tables. However, there is no 'real' relationship/connection made to those tables. Here is a (probably incomplete) list of tables where invoices can be made from:
- [Order](../Company/Order/Order.md): for tissue culture production cost/services
- [Analysis_Order](../Analysis/Analysis_Order.md): for analysis invoices (pathogens testing, ploidy testing, etc.)
- [HourRegistration](../Projects/HourRegistration.md): For invoices based on hours made to a specific [Project2](../Projects/Project2.md).
- [DeliveryNote](../Deliveries/DeliveryNote.md): for delivered goods
- [Greenhouse_Field](../Greenhouse/Greenhouse_Field.md): for Greenhouse actions not included in the Order (like repotting after the fact).
## Core Fields
- Invoice_Code: Unique identifier of the invoice
- Company Code Creditor: Company that is the client (to pay the invoice).
- Company Code Debitor: Company that provides the service (to receive the payment).
- Amount Ex Tax: The invoice amount excluding taxes
- Amount Incl Tax: The invoice amount including taxes
- Tax Perc: Percentage of tax
## Common Usage
Generally, only the financial department is qualified to create and modify Invoices. 
## Caveats
[Invoice_Items](Invoice_Items.md) also contains a field for 'Tax Percentage', which means that a single invoice can have multiple items with different tax rates. Making the field 'Tax Perc' in Invoice inaccurate.

[Invoice_Items](Invoice_Items.md) contains a field for relating to Delivery_Items, which means that a single invoice can have multiple items from different DeliveryNotes. Making the field 'DeliveryNote' in Invoice inaccurate/incomplete.
