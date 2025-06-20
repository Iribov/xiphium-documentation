---
sidebar_position: 2
---
## Purpose
The Build [Order](Order.md) is meant for building up a stock for larger production. It takes plants from the  [Initiation](Initiation.md) or [Maintenance](Maintenance.md) 'Phase' (worktype), and puts them into the Build phase.

## The bigger picture
Build is technically the second [stage](../../General/Stages.md) of tissue culture (similar to 'Production'). The reason for using 'Build' as this 'in between' for going from Initiation or Maintenance to Production is done for practical reasons. The build stage is often done by a different team and needs a different level of know-how and monitoring than the other stages.

## Core Fields
- Client Code
- Work Type
- Order Type 2 = 'Build'
- Week Prognose
- Amount Prognose: A target can be set here. However, it is often left empty (=0)
- Production Company
- Plant Code

## Common Usage
A Build order is needed when a plant is going to be used for (mass) production, but only a small stock is currently present. 

## Caveats
If only a small production is needed, a build order is not the right choice. It is unclear when this cut-off point is exactly, so it's up to the planner/account manager to decide if a build order is appropriate to use.