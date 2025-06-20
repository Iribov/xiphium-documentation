---
sidebar_position: 4
---
# Greenhouse Planning Action (GHPA)

## Purpose
Table containing the planning of the greenhouse. A planning is made per [order](../../Tissue_Culture/Order.md). If plants from different orders are planted together in [Greenhouse_Field](../Greenhouse_Field.md), the planning is still maintained per order. Production numbers synchronized from [Greenhouse_Field](../Greenhouse_Field.md) will be split to the planning action in ratio of the amount of plants in their related [order](../../Tissue_Culture/Order.md).

## The bigger picture
Planning the greenhouse actions per step (rather than the old 'total time in greenhouse' planning) creates better estimates for production, which is useful for account managers, as well as an automatic work list for the greenhouse.

## Key relationships
- [Order](../../Company/Order/Order.md): to get some its core information (Crop/Plant Code, Incoming Week, Delivery Week)
- [Prot_Lines](Prot_Lines.md): to know what action to perform
- [Prot_Component](../../Tissue_Culture/Prot_Component.md): to know the parameters/details of that action for this Crop/Plant Code
- `Spaces` (only when an action is planned for a specific space)

- The relation to [Greenhouse_Field](../Greenhouse_Field.md) and [Mutations](../Mutations.md) runs via the Order relation.
## Core Fields
- `Status`: displays the status of the action.
- `Activity`: Indicates what action has to be done.
- `Cycle Days`: Amount of time the plants has to grow/stay put after the action has been performed.
- `Date Planned`: The date this action has been planned for
- `Date Realized`: The (last) date this action has actually been done
- `Plants Planned`: Amount of plants planned for this action
- `Plants Realized`: Amount of plants actually done/realized.
- `Temperature Day`: Ambient temperature requirement for the plant during/after this action at night.
- `Temperature Night`: Ambient temperature requirement of the plant during/after this action at night.
- `GHPA_IDM_Previous`: links back to its previous action. Makes it easier to go through the 'chain' of actions to update the planning.

### Status
The status of the Greenhouse Planning Action (GHPA) can be 1 of the following 4:
1. Planned
2. Done
3. Finished
4. Overdue
5. Cancelled

#### Planned
When the status of a GHPA is 'Planned', this means that the action is planned to happen in the future, and is not fulfilled yet.
#### Done
When the status of a GHPA is 'Done', this means that the current action is fulfilled, but there are currently still plants in the related Greenhouse-Field records. The action is fulfilled when the fields 'Date Realized' and 'N Plants Realized' are filled.
#### Finished
When the status of a GHPA is 'Finished', it means that this action is fulfilled and there are no longer plants present in related Greenhouse-Field records. The action is fulfilled when the fields 'Date Realized' and 'N Plants Realized' are filled.
#### Overdue
When the status of a GHPA is 'Overdue', it means that the 'Date Planned' is in the past, and the action is not fulfilled. This happend when ```Current Date>Date Planned``` and 'Date Realized' is empty.
#### Cancelled
When the status of a GHPA is 'Cancelled', it means that the related [Order](../../Tissue_Culture/Order.md) of that GHPA is set to 'Cancelled'. This action no longer needs to be fulfilled.

## Date&Plants Realized
Greenhouse Planning actions need to adjust to the reality. If a plant batch is received earlier, then the rest of the planning must be adjusted according to that. In other words, the planning needs to adjust itself according to what happened in the reality. For this reason, we have the "Date Realized" and "Plants Realized" fields.

The "Date Realized" and "Plants Realized" fields are filled using method ***GHPA_UpdateRecords_GF***. This is a rather complex method but in essence it looks to related Greenhouse_Field records (via the Order relation) and gathers data from different places depending on the kind of GHPA we're updating.

Here is a summary of where the data comes from per Activity Group

| Activity Group Code | Activity Group Description | Auto Date Realized from GF | Source Table                                         |
| ------------------- | -------------------------- | -------------------------- | ---------------------------------------------------- |
| GH0                 | Sowing                     | ❌                          | [Mutations](../Mutations.md)                         |
| GH1                 | Planting                   | ✅                          | [Mutations](../Mutations.md)                         |
| GH2                 | Sorting                    | ✅                          | [Mutations](../Mutations.md)                         |
| GH3                 | Floating Activities        | ❌/✅ *                      | [Greenhouse_Field](../Greenhouse_Field.md) *         |
| GH4                 | Repotting                  | ✅                          | [Mutations](../Mutations.md)                         |
| GH5                 | Moving                     | ❌                          | [GF_Locations History](../GF_Locations%20History.md) |
| D@                  | Delivery                   | ✅                          | [Mutations](../Mutations.md)                         |

>\*The only floating action that can get a date is the 'Flower Photo' (FP) action. It takes the latest 'Week Ready' field from related greenhouse-field (only if all related 'week-ready' fields are filled)

Let's go over all activity Groups and how they get their realized data.

### GH0, Sowing
strangely enough, sowing is registered in the [Mutations](../Mutations.md) exactly the same way as planting (see next section)

### GH1, Planting
For planting actions, Mutations related to the related Greenhouse_Field records where the [Mutations]Mut_TypeCheck="Planting" are taken. Then the field [Mutations]Mut_GF_Plants_Total is summed to get the total amount of realized plants while the "Date Real" is filled by the maximum date of the field [Mutations]Mut_Date_From.

### GH2, Sorting
For planting actions, Mutations related to the related Greenhouse_Field records where the [Mutations]Mut_TypeCheck="Sorting" are taken. Then the field [Mutations]Mut_1_Plants_Lost is summed to get the total amount of realized plants while the "Date Real" is filled by the maximum date of the field [Mutations]Mut_Date_From.

## GH3, Floating Activities
Floating activities generally don't get updated automatically, with the exception of the flower photo of an action where the related order has OrderType5 21 or 35. In this case, the field 'Week Ready' is taken for the 'Date Realized'. Since there is no 'amount of plants', the 'Plants Realized' is just filled with the 'Plants Planned' parameter (so we assume all plants are done as planned).

:::Note
Instead of having a case of statement with a query for every Activity Group, is was chosen to combine Mutations query. The only parameters needed from the GHPA is the ACtivity Group, which get translated into a 'TypeCheck' and a 'sumField'. The 'TypeCheck' is used to query the Mutations and get the right mutations for the activity group. The 'sumField' was needed because different type of Mutations have their 'Amount of plants' number in different Fields.

To minimize branching in the code (optimizing readability as well), the mutations query takes more parameters into account than needed for a single activity, but the parameters are combined with the "or" operator so in practice only the ones needed are found.
```4D
For each ($GF; $GFs)
	$query:=New collection()
	$queryObject:=New object("parameters"; New object)
	$params:=$queryObject.parameters
	
	$query.push("Mut_PlantCode = :plantCode")
	$params.plantCode:=$GF.GF_PlantCode
	
	$queryOr:=New collection
	
	$queryOr.push("(Mut_GroupCodeTo = :groupCodeFrom and Mut_TableTo = 'GF')")  //tab 2
	$queryOr.push("(Mut_GroupCodeFrom = :groupCode and Mut_TableFrom = 'GF' and Mut_ID_TableFrom = :id)")  //tab 3
	$queryOr.push("(Mut_GroupCodeFrom = :groupCode and Mut_TableFrom = 'GF' and Mut_TableTo = 'GF')")  //tab 4
	$queryOr.push("(Mut_GroupCodeFrom = :groupCode and Mut_TableFrom = 'GF' and Mut_TableTo = 'DiT')")  //tab 5
	$params.groupCodeFrom:=$GF.GF_GroupFrom
	$params.groupCode:=$GF.GF_GroupCode
	$params.id:=$GF.GF_ID
	$query.push("("+$queryOr.join(" or ")+")")
	
	$query.push("Mut_TypeCheck = :mutationActivity")
	$params.mutationActivity:=$mutationActivity
	If ($mutationActivity#"")
		$mutations:=$mutations.or(ds.Mutations.query($query.join(" & "); $queryObject))
	End if 
End for each 
```
:::
### Week Planned
Method ***GF_UpdateRecords_GHPA*** not only modifies the 'Date Realized' of the Planning action. It also modifies the 'Week Planned' of a GHPA according to what is entered in the Greenhouse Field. This modified "week planned" taken from Greenhouse_Field overrides even the "Date Manual" in GHPA.

At this moment, there are only 2 activities that are updated this way. And they're updated by their corresponding field in Greenhouse Field:

| GHPA Activity Group | Greenhouse Field |
| ------------------- | ---------------- |
| GH2 (Sorting)       | GF Sorting Week  |
| D@ (Delivery)       | Week Ready Real  |

