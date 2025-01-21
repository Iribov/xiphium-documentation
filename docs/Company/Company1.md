# Company
The Company table is one of the main base tables of Xiphium. This table contains companies/entities and gives them a unique company number (and\or code) that is referenced across the database. This number/code is generally referred to as the 'Company Code'.

The Company table contains both Internal companies, and external companies (clients).

The main information of a company is:
Company Name
Company Number/Code
Mother Company Number
Address

## Mother Company
Sometimes, a (big) company creates/acquires a 'daughter company'. This daughter company will become a separate 'Company' record, for it often has a different name, address and other information. To still link this daughter company to its original 'Mother Company', the field 'Company Code Mother Company' can be filled.