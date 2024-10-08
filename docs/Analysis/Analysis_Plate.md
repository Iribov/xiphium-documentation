---
sidebar_position: 9
---
# Analysis Plate
Analysis Plate is the plate (layout) used for Analysis. Similar to [Analysis Isolation Plate](Analysis_Isolation_Plate.md), the record itself only contains basic information of the plate. The actual plate Layout is stored in the [Analysis Datapoint](Analysis_DataPoint.md) records.

The idea is that you can take an [Analysis Isolation](Analysis_Isolation.md) and put it into an Analysis Plate, creating an [Analysis DataPoint](Analysis_DataPoint.md) with the plate location (well). This [Analysis DataPoint](Analysis_DataPoint.md) is also used to store analysis results. The Plate Name and Position is used as an 'anchor' for importing results from XML, CSV and/or Excel files.