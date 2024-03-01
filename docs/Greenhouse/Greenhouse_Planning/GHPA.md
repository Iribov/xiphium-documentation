---
sidebar_position: 4
---
# Greenhouse Planning Action (GHPA)

Table containing the planning of the greenhouse. A planning is made per [order](../../Tissue_Culture/Order.md). If plants from different orders are planted together in [Greenhouse_Field](../Greenhouse_Field.md), the planning is still maintained per order. Production numbers syncronized from [Greenhouse_Field](../Greenhouse_Field.md) will be split to the planning action in ratio of the amount of plants in their related [order](../../Tissue_Culture/Order.md).

## Status
The status of the Greenhouse Planning Action (GHPA) can be 1 of the following 4:
1. Planned
2. Finished
3. Overdue
4. Cancelled

### Planned
When the status of a GHPA is 'Planned', this means that the action is planned to happen in the future, and is not fulfilled yet.
### Finished
When the status of a GHPA is 'Finished', it means that this action is fulfilled. The action is set to 'Finished' when the field 'Date Realized' has a date in it.
### Overdue
When the status of a GHPA is 'Overdue', it means that the 'Date Planned' is in the past, and the action is not fulfilled. This happend when ```Current Date>Date Planned``` and 'Date Realized' is empty.
### Cancelled
When the status of a GHPA is 'Cancelled', it means that the related [Order](../../Tissue_Culture/Order.md) of that GHPA is set to 'Cancelled'. This action no longer needs to be fulfilled.

#### Date Realized
The status 'Finished' is dependent on the field 'Date Realized'. This field can be entered manually whenever an action has been fulfilled. But sometimes it can be filled automatically. How this field is filled, depends on the kind of action. The update of 'Date Realized' is instantiation from updating a related Greenhouse Field Record (related via Order) using method ***GF_UpdateRecords_GHPA***.

| Activity Group Code | Activity Group Description | Auto Date Realized |
| ------------------- | -------------------------- | ------------------ |
| GH0                 | Sowing                     | ❌                 |
| GH1                 | Planting                   | ✅                 |
| GH2                 | Sorting                    | ✅                 |
| GH3                 | Floating Activities        | ❌                 |
| GH4                 | Repotting                  | ❌                 |
| GH5                 | Moving                     | ❌                 |
| D@                  | Delivery                   | ✅                 |

### Week Planned
Method ***GF_UpdateRecords_GHPA*** not only modifies the 'Date Realized' of the Planning action. It also modifies the 'Week Planned' of a GHPA according to what is entered in the Greenhouse Field.

At this moment, there are only 2 activities that are update this way. And they're updated by their corresponding field in Greenhouse Field:

| GHPA Activity Group | Greenhouse Field |
| ------------------- | ---------------- |
| GH2 (Sorting)       | GF Sorting Week  |
| D@ (Delivery)       | Week Ready Real  |

