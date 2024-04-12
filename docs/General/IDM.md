---
sidebar_position: 2
---
4D automatically adds an ID field as primary key to every newly created table. This ID field ensures that every record in a table has a unique identifier. Xiphium sometimes has an additional **IDM** that stands for 'ID Master'. The idea is to add the [Default Company](Default%20Company.md) at the end of the ID.

IDM is used for synchronisation. When several instances of Xiphium need to exchange data, the standard 'ID' is not unique accross these instances (both will have their first record with ID '0'). When the IDM is used, all records are unique across all instances (assuming the default company is different in every instance).

The default formula for IDM has now been agreed to be `ID*100+Num(Default_Company)`, but has not always been implemented this way.