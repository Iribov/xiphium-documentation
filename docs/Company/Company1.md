# Company

## Purpose

The `Company` table defines all organizations involved in a wide variety of processes — whether internal companies. external clients or even suppliers. Each company is assigned a unique identifier (company number or code), which serves as the standard reference across the database. This table acts as the central registry of recognized entities in the system.
## The Bigger Picture

Because many tables in Xiphium involves a company, this table is one of the most referenced in the system. Using a unique code to represent companies reduces redundancy and ensures consistency in cross-table relationships — even though some information (like company name) may still appear redundantly for reporting or performance reasons.
## Core Fields
The main information of a company is:
Company Name
Company Number/Code
Mother Company Number
Address
## Mother Company
Sometimes, a (big) company creates/acquires a 'daughter company'. This daughter company will become a separate 'Company' record, for it often has a different name, address and other information. To still link this daughter company to its original 'Mother Company', the field 'Company Code Mother Company' can be filled.

## Common usage
Company records are not made to often, only when a new client, supplier (or even rarer, a new internal company) appears. Company records are mostly used as a reference, for example by [Invoice](../Financial/Invoice.md) to identify the Creditor and Debitor, by [Order](Order/Order.md) to indetify the Client, the production company and delivery location (usually the address of the client).
## Caveats
The table contains around 3 fields that are the company code/company number. Make sure to enter ALL of them, or something might go wrong in one of the related tables.