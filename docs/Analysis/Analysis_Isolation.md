---
sidebar_position: 5
---

# Analysis Isolation
Analysis_Isolation represents an individual isolation from an [Analysis_Sample](Analysis_Sample.md). When a sample is isolated again, this would be a different Analysis_Isolation. Analysis_Isolations are usually put in a 96 well plate. This is tracked in the [Analysis_Isolation_Plate](Analysis_Isolation_Plate.md) table. 

The use of Analysis_Isolation is mostly to facilitate a connection between [Analysis_Sample](Analysis_Sample.md) and [Analysis_DataPoint](Analysis_DataPoint.md) but is also very useful for planning Isolation_Plate layouts.

Analysis_Isolation makes it possible to do multiple analyses on a sample, and keep track of the results.