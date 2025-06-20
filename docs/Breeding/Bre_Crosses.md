---
sidebar_position: 2
---
# Crosses
## Purpose
The `Crosses` table stores breeding events—crosses between two parent [Genotyps](Bre_Genotype.md). Each record represents a unique cross with associated data such as parent genotypes, cross date, and resulting outputs (seeds, seedlings, plants).

## The bigger picture
Crosses are fundamental to creating new [Bre_Genotype](Bre_Genotype.md) and serve as the starting point for the breeding cycle. These events link historical and future genotypes together, allowing for full pedigree tracking and analysis.

## Key Relationships

- A single cross can produce many genotypes in `Bre_GenoType`.
- Parent genotypes (from `Bre_GenoType`) are linked via `Parent1ID` and `Parent2ID`.
- This recursive relationship allow tracking multi-generational breeding pipelines.
- 
## Core Fields

- **BreedID**: Unique identifier of the cross.
- **Parent1ID / Parent2ID**: References to `Bre_GenoType`, identifying the parental lines.
- **CrossDate**: When the cross was performed.
- **CrossName**: A human-readable code or label for the cross.