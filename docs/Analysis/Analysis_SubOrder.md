---
sidebar_position: 2
---

# Analysis Suborder
Analysis_Suborder is used as a grouping of [Analysis_Samples](Analysis_Sample.md), and a more detailed explanation of an [Analysis_Order](Analysis_Order.md).

### Core information
The core information of an Analysis_SubOrder are:
- Crop
- Type Objective
- Pathogens to test (if objective is pathogen test)
- Markers to test (if objective is genotyping)

Analysis_Suborders should be added according to their core information. Although allowed, duplicate suborders should not exists within most Analysis_Orders. The exception is if Analysis_Suborder is used for 'batches' (arbitrary grouping of samples from a client).

---

## Why Suborders?
Suborders are used for 2 main reasons:
1. Grouping of Analysis_Samples
2. Giving more detail than an analysis Order

### 1. Grouping of Analysis_Samples
When using groupings of analysis_samples, it is easier to modify parameters that are the same for the whole group.

For instance: 'Pathogens to Test' used to be a field that had to be filled in every Analysis_Sample. Sure, we had a button that could change a selection all at once but **you** had to make sure to select the proper samples. Now, it's a lot easier as you only have to change the 'pathogens to test' field in the suborder, and all related samples are automatically updated!

Furthermore, it will be the place where an aggregation of data can be shown for that specific group/batch.

###  Giving more detail than an analysis Order
The analytical lab often gets orders from a client with different crops. In Analysis_Order it is only possible to set 1 Crop Code for the order. This would mean that the analytical lab would either:
- Create an Analysis_Order for every crop sent
- Create 1 order without specifying a crop code
Both options are not ideal, and therefore we will use the Analysis_Suborder for this information. 

The example used here is for Crop, but all other 'Core information' are fields that are (or used to be) specified in the Analysis_Order, but create problems for the analytical lab and should therofre be moved to Analysis_Suborder.

:::info
Although suborders are not that useful for most small and/or internal orders, they help the analytical lab a lot with bigger and/or external orders. 

And because we want to make 1 clear and streamlined process, everyone will have to get used to using suborders.
:::

---

## Analysis_Suborder creation
Suborders can be created in 3 ways:
1. Manual creation
2. Suborder/batch import
3. Automatic creation from sample import

### 1. Manual creation
By using the 'Create suborder' button in Analysis_Order detail, a suborder can be created. You can manually enter the core information. Manual creation can be used if the client does not deliver a proper import form.

### Suborder/batch import
Some clients deliver arbitrary sample grouping ('batches') that have to be respected. This happens mostly with FCM aneuploidy of seeds and PCR-Marker genotyping. There are special import files that can be used to automatically create suborders

### Automatic creation from sample import
When using a Sample import file or importing samples from the [Clones](../Plants/Clones.md) table, Suborders are automatically created according to the given core information of the samples.


---

## Analysis_Sample Creation
Samples can be created from either the Analysis_Suborder, or an excel import. 

### from suborder
When samples are created from a suborder, the samples automatically inherit the core information of the suborder.

### from Excel import
When doing an [Analysis_Sample](Analysis_Sample.md) import from excel, samples are linked to a suborder according to mathcing core information (or a suborder is added with this core information).
 