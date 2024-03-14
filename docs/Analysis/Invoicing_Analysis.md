# Invoicing
Invoicing of [Analysis_Order](Analysis_Order.md) can be done on 2 levels:
- [Analysis_SubOrder](Analysis_SubOrder.md) Level
- [Analysis_Sample](Analysis_Sample.md) Level
Both ways get their basic information from Analysis_Order, but the details are filled from their respective source.

This structure is in place because in the past, only FCM orders used Suborders (except internal orders), and PCR orders used Samples. As of now, all Analysis_Orders use both Suborders and Samples. In the future we might go to a single structure for invoicing.

## Analysis Order
The [Analysis_Order](Analysis_Order.md) contains basic information for invoicing. The following information is taken for invoicing no matter what option of invoicing is chosen:

- WorkType
- ProjectCode2 Debitor
- ProjectCode2 Creditor
- Order Number
- PersonName Customer

> ProjectCode2 Debitor and ProjectCode2 Creditor are copied to their respective fields upon creation of an [Invoice](../Financial/Invoice.md). Read more information about these fields in [Invoice_Items](../Financial/Invoice_Items.md).

## 1. Suborder Level
### Other info taken from Analysis Order
- External Code (Client)

### Taken from suborder
- Article Code
- Crop Name (scientific)
- Order Number
- Amount Measured
- Crop Name (local)


## 2. Sample Level

### Other info taken from Analysis Order
- Article Code(s)
- Crop Name(s)

### Taken from sample
- [NONE]

No data is actually taken from Analysis_Sample. The information is actually entered/updated in the Analysis Order and can be modified in the popup when creating the invoice.