---
sidebar_position: 3
---

# Analysis Sample
Analysis_Samples are the individual (leaf) samples present in an [Analysis_Order](Analysis_Order.md). These samples are grouped together in an [Analysis_SubOrder](Analysis_SubOrder.md)

**Mixed Samples** 
On rare occassions, a client can have grouped/mixed samples that need to be tracked/reported indidually. In that case, mixed samples can be used (still in devlopment). 

---

## Core information

The core of Analysis_Sample is to store the end result of an analysis. The results are stored in different fields depending on the type of analysis:

1. Result Clean
2. Result True
3. Result Total
4. Result 1

Additionally, for samples with the objective of pathogen and genotyping (set in their respective Analysis_Suborder) the fields 'Pathogens Tested' and 'Markers tested' are useful information for interpreting the final result.

### 1. Result Clean
Stores the result of a pathogen detection test. Is either positive ``+`` or negative ``-`` but can sometimes be doubtfull ``+/-``

### 2. Result True
```
Needs further research
```

### 3. Result Total
```
Needs further research
```
### 4. Result 1
Result 1 is used for different purposes depending on the kind of result that is entered:
- Pathogen: used as a remarks field for the given result. ``vv`` is often used with a negative result to indicate that the sample is 'virus free'

:::danger
A sample with Result 1: 'vv' (virus free) is not neccessaruly free of any pathogens. It is only free from the pathogens it is tested on!
:::

---
Analysis_Samples can get their result from [Analysis_DataPoint](Analysis_DataPoint.md) (in development, limited use), but can also be entered directly in the Analysis_Sample (mostly used now).