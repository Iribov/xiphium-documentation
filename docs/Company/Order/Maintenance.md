---
sidebar_position: 3
---
## Purpose
The maintenance [Order](Order.md) is meant to start the maintenance process. This means keeping a plant in tissue culture but with a minimal stock.

## The bigger picture
Keeping a plant in maintenance means that we want the plant to keep being 'fresh' in tissue culture, by cutting it before the material gets too old, but only cut to maintain a small stock (not to multiply!). 
## Core Fields
- Client Code
- Work Type
- Order Type 2 = 'Initiation'
- Week Prognose
- Amount Prognose = 0 (should be kept empty, because the amount of plants is not important)
- Production Company
- Plant Code

## Common Usage
Maintenance is often done when a client does not have any orders for this plant, but we do expect orders to come in the future. Maintenance prevents the need for a new initiation, which is a costly process.
## Caveats
Plants cannot be in maintenance too long. Degradation of the plant material appears after a certain amount of cycles in tissue culture. This degradation is different in every crop, cultivar and or plant, so it is not known exactly when an old Plant_Code needs to be discarded.