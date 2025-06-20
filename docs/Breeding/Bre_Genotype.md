---
sidebar_position: 1
---
# Genotype
## Purpose
The `Bre_GenoType` table contains records of individual genotypes—plant lines that are tracked, evaluated, or used for further breeding. Each genotype typically originates from a cross (`Bre_Crosses`) and may go through multiple selection and propagation cycles.

## Key Relationships

- One **Bre_Crosses** record can result in multiple genotypes in `Bre_GenoType`.
- `Bre_GenoType` records can be used as **parents** in the `Bre_Crosses` table, enabling recursive lineage tracing.

## Core Fields

- **ID**: Unique identifier of the genotype.
- **Name**: Descriptive name or code used internally.
- **OriginCrossID**: Foreign key to the `Bre_Crosses` table, indicating the cross event from which the genotype originated.

## Common Usage
Genotypes are core entities within breeding workflows. They represent the units that are characterized, tested, and possibly released as new varieties. The table stores key identity information (e.g., name, code, species, variety) and optionally tracks lineage through a link to the cross that produced them.

It is possible to connect a Genotype to a [PlantCode](../Plants/PlantCode.md). This is necessary if a grown plant will become a tissue culture plant. It is also useful to know when a Genotype comes from tissue culture.

## Caveats