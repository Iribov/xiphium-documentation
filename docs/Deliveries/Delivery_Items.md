---
sidebar_position: 2
---
# Delivery Items
## Purpose

Represents the individual units within a delivery — typically trays, boxes, or other containers of plant material. Each row reflects one distinct item being delivered, including its composition and origin.

## The Bigger Picture

Delivery items are the building blocks of a delivery note. While `DeliveryNote` provides the high-level context (e.g. where and when), `Delivery_Items` defines the contents. This table is critical for translating production output into logistics documentation, customer communication, and stock movements. It also forms a bridge to quality control and post-delivery tracking.

Delivery Items can be used to move plants out of, and into Tissue Culture stock and the Greenhouse(-Field). 

Besides sending and receiving plants, The Delivery_Items also track 'result' (or 'feedback') data about the plants. This includes results from the Greenhouse (if plants are/were from the greenhouse) and results from the customer (if any results are given). This result is mostly about how many plants have survived, and their state. This 'survival rate' can be a good indications of problems somewhere in the supply chain.

## Greenhouse-Field connection
Everything in [Greenhouse_Field](../Greenhouse/Greenhouse_Field.md) comes from Delivery_Items, and is also taken out of the Greenhouse via Delivery_Items. The Delivery_Items contain the IDM of their related Greenhouse-Field, and the Greenhouse-Field contains the IDM of their related Delivery_Item. This effectively creates an unconventional many to many (n:n) relationship between these 2 tables, without making a relation between the tables.

## Feedback
Delivery Items also contain feedback of the plants. Not just even the feedback after delivery, but also from the greenhouse.

The feedback is divided into Period1 and Period2. Period1 refers to the feedback where Stage2 plants are grown to Stage3 plants. Period2 generally refers to the feedback from the customer that is growing the plants further.

**Plants Delivered** are the amount of plants delivered from Iribov

**Plants Order** are the amount of plants ordered according to the related order

**Plants not used** are the amount of plants that are delivered, but that are not used.

:::note
Columns 'Plants not used' and 'Plants Lost' can be confusing, but the difference is that 'Plants Lost' are plants that 'did not survive' the planting stage, while 'Plants not used' are the amount of plants that weren't even used for planting but are still discarded (maybe because the client doesn't have enough space, or we over delivered).
:::

### Period1
**Plants Lost** are the amount of plants that are discarded/lost during the planting stage

**Planting Pending** are the amount of plants that are still waiting to be planted and/or to get feedback form (calculated automatically). The calculation is as follows:
```
Planting Pending = Plants Delivered - Plants not Used - Plants rooted - unroot/problems - No feedback planted - Plants Lost
```

**Plants rooted** are the amount of plants that have been rooted successfully

**Unroot/Problems** are the amount of plants that have issues, but are planted anyway.

**No feedback planted** When no feedback is given about the plants (or the given feedback doesn't add up to the delivered amount), this column can be used. It will help moving the plants from 'Planting Pending' to 'Plants Planted'

**Plants Planted** is a calculated Column adding the following fields together:
- Plants Rooted
- Unroot/Problems
- No feedback planted

### Period2

**Plants Rejected** are plants that are rejected by the customer because they are not up to their standards.

**Plants OffType** are the amount of plants that show too much deviations in their characteristics.

**accept pending** are the amount of the plants that are awaiting feedback for Period2.

**Plants good** are the customers indication of the amount of good plant delivered. 
:::note
'Good' is a very relative term so this might not be the most accurate number, but it is an indication on both customer satisfaction and quality of the plants. However, a low 'plants good' can also be the result of bad transportation conditions or even bad conditions on the customer's site.
:::

**No Feedback Accepted** [Good explanation needed]

**Plant Accepted supplier** [Good explanation needed]

**Plants accepted customer** are the 'plants good' that we agree with (or is that 'Plants Accepted supplier'?). 
:::note example
If customer 1 says that 500 of the 1000 delivered plants are 'plants good', and another customer 2 (of the same batch of plants) says 900 of the 1000 delivered plants are 'plants good', something is clearly wrong with customer 1. We can negotiate that maybe something is wrong on the customer's site and register 700 'Plants accepted customer' because we don't agree with the customer's 500 'Plants good'.
:::

**No feedback accepted** [Good explanation needed]

---

**Plants invoiced** are the amount of plants that are invoiced to the customer

**Plants credit** are the amount of plants credited to the customer.

