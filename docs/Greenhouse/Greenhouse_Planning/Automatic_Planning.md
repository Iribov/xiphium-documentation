---
sidebar_position: 2
---
# Automatic Planning (in theory)

The whole road from an [Order](../../Tissue_Culture/Order.md), all the way to a Planning is not a simple one. It is partially explained in the ‘Order’ section where it is described how the system goes from an [Order](../../Tissue_Culture/Order.md), to a [Protocol1](Protocol1.md). A [Protocol1](Protocol1.md) has multiple [Protocol Lines](Prot_Lines.md) (the ‘steps’ of a protocol).

For every [Protocol Lines](Prot_Lines.md), a [Greenhouse Planning Action (GHPA)](GHPA.md) is made containing:
- **step number** (which step in the protocol),
- **Activity Group**, Activity (optional) and
- **OrderNumber**.

The Entity Relational Diagram (ERD) of the system is shown in Figure below.
![](img/ERD_GHPA.png)

## Fill Parameters

Next step is to fill the planning action with parameters from [Protocol Component](../../Tissue_Culture/Prot_Component.md), which will actually make the planning actions useful.

To fill the parameters of a planning action, a complex query (search) must be done to account for the possible exceptions. These exceptions are stored in the PlantC_Total (a.ka. Plant Location Total). In this table you can enter an alternative Protocol Code/Number for each Activity Group. Then, a query is performed in [Protocol Component](../../Tissue_Culture/Prot_Component.md) where the CropCode, Activity (or Activity Group) is taken. The matching [Protocol Component](../../Tissue_Culture/Prot_Component.md) with the lowest Protocol Number, or a matching alternative Protocol Code/Number, is chosen to receive its parameters from. The IDM of the Protocol Component is saved in the planning action.

## Backwards Calculation

After taking the parameters Multiplication Factor (MF) and Cycle Weeks, we can start creating an actual planning. Taking the prognose week from Order as our final week, we move from the latest planning action (with the highest ‘step number’) to the first planning action. Subtracting weeks and adding the multiplication factor every step of the way.


|  Week   | Cycle Days | Activity                        |
| ------- | ---------- | ------------------------------- |
| Week 12 | 21         | Planting                        |
| Week 15 | 35         | Moving                          |
| Week 20 | 35         | Moving                          |
| Week 25 | 1          | Delivery (=prognose week Order) |

## Forwards Calculation

When the order contains plants planned for Rooting, Stage 3 Delivery or plants present in the greenhouse, the forwards calculation is performed. The forwards calculation will always overtake the backwards calculation.

The forwards planning makes use of the "Plants Realized" and "Date Realized" from Actions that have been performed, "Plants Planned" and "Date Planned" from actions that have not been performed and "Plants Present" and "Date Planned" for the action that is next (The GHPA with status 'Planned', but previous GHPA with Status 'Done').