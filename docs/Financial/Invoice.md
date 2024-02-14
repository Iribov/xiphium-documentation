An Invoice is a detailed list of goods shipped or services rendered, with an account of all costs; an itemized bill.

The itemized list is saved in a related table called [Invoice Items](Invoice_Items.md) and are related by an **InvoiceNumber**.

In essence, the Invoice table contains the general information of an invoice:
1. Who?
	1. Who is the client (Debitor)?
	2. Who is the provider (Creditor)?
2. When?
	1. Invoice Creation
	2. Payment
	3. Etc.
3. How much?
	1. Total amount
		1. Excluding Tax
		2. Including Tax
