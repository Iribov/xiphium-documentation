---
sidebar_position: 4
---
## Purpose
A Production [Order](Order.md) is meant to be used for (large) tissue culture productions. 
## The bigger picture
Production orders are the core of the system. It is meant to start the planning of the multiplication stage and (depending on the type of plant that needs to be delivered) the rooting stage. Sometimes it even triggers the planning of the greenhouse (if a [Stage4](../../General/Stages.md) plant needs to be delivered).
## Core Fields
- Client Code
- Work Type = 11
- Order Type 2 = 'Production'
- Week Prognose
- Amount Prognose:
- Production Company
- Plant Code
## Common Usage
Usually, a sizable stock is already present (or else a [Build](Build.md) Order might be more appropriate first), so the production should only take a few cycles to complete (unless a really big amount of plants is needed).
## Caveats
