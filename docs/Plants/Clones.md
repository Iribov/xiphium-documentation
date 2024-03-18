---
sidebar_position: 3
---
# Clone
The Clone table is used to assign unique codes to a group of individual plants. A Clone is a subgroup under [PlantCode](PlantCode.md).

When to create a new Clone, is up to the users/organisation. But at least 1 clone should exists for every [Plant Code](PlantCode.md) in order to use the registration.

A Clone has the unique 'PlantCloneCode' that is made up of:
- [Plant Code](PlantCode.md)
- Clone Code (often, sequence number)

<details>
<summary>Example of Clone Code</summary>

Plant Code '05-015-0001' was made to receive new plants from the client. The plants they sent in will be registered under the first created clone with sequence number '0'. The PlantCloneCode will be '05-015-0001-00'

Then, this plant is used for polyploidisation and the resulting plant(s) after this process are now registered under a newly created Clone with Clone Code '01'. The PlantCloneCode will be '05-015-0001-01'

</details>

:::note
The Clone table has little to do with the scientific definition of a Clone. In Xiphium a Clone can be genetically identical to another Clone (with a different Clone Code). 
The Clone table provides a registration code under which multiple/many individual plant(lets) are registered. 
:::