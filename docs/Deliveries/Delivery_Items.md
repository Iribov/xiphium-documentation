---
sidebar_position: 2
---
# Delivery Items
Delivery Items are the detail of [DeliveryNote](DeliveryNote.md). Delivery Items are connected to a DeliverNote through the DeliveryNote Number.

Delivery Items can be used to move plants out of, and into Tissue Culture stock and the Greenhouse(-Field). 

Besides sending and receiving plants, The Delivery_Items also track 'result' (or 'feedback') data about the plants. This includes results from the Greenhouse (if plants are/were from the greenhouse) and results from the customer (if any results are given). This result is mostly about how many plants have survived, and their state. This 'survival rate' can be a good indications of problems somewhere in the supply chain.

## Greenhouse-Field connection
Everything in [Greenhouse_Field](../Greenhouse/Greenhouse_Field.md) comes from Delivery_Items, and is also taken out of the Greenhouse via Delivery_Items. The Delivery_Items contain the IDM of their related Greenhouse-Field, and the Greenhouse-Field contains the IDM of their related Delivery_Item. This effectively creates an unconventional many to many (n:n) relationship between these 2 tables, without making a relation between the tables.