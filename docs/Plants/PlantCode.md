---
sidebar_position: 2
---
# Plant Code
Plant Code is a table that holds the registration of plant variations. Each record has a unique 'Plant Code' that can be used throughout the database as a reference.

A 'Plant Code' is a unique code where a combination of 'owner', 'crop' and variations are registered. This code is made up of:
- [Company Code](../Company/Company.md) of the owner of the plant/cultivar
- [Crop Code](Crop.md) of the plant
- Cultivar Code (sequential code within a Crop)

<details>
<summary>Example of Plant Code</summary>

Company (with company code) '1' has a plant of crop code '15'. This is the first Plant Code of this crop. The Plant Code will be '01-015-0001'.

Then, Company (with company code) '5' also has a plant of crop code '15'. This is then the second Plant Code of this crop. The Plant Code will be '05-015-0002'.

Finally, Company (with company code) '1' has a plant of crop code '32'. This is the first Plant Code of this crop. The Plant Code will be '01-032-0001'

</details>

:::note
Be aware that the field 'Cultivar Code' does not necessarily match the official definition of a cultivar. Different 'Plant Code' records could belong to the same (official definition of a) cultivar. 

'Variation Code' might be a better name to describe the 'cultivar code'. Because a new Plant Code can be made for every 'Variation' of a plant. This new 'variation' could be an identical Cultivar of another Plant Code. What a 'variation' is exactly, is up to the users/organisation.

If you wish to track what Plant Codes are from a similar origin (cultivar maybe?), the field 'Cultivar Code Origin' can be used to refer to the 'original' Plant Code.
:::
