Project2 is a summary table of several lower level tables. A Project2 record should **always** be linked to a [Project1](Project1.md) record. The 'core' information of a Project2 record is:
- CompanyCode Production
- Crop(Code)
- WorkType
- CompanyCode Client (optional)
- addition (optional)

:::info addition field
The 'addition' field is meant to be used when new Project2 needs to be created with the same core information as an existing Project2. This goes against the principal of Project2 being just a summary table of the core information, but has already been used for many years.
:::

From this data, a ProjectCode2 is generated using the format [CompanyCode Production]-[CropCode (alpha3)]-[WorkType]-*[CompanyCode CLient(optional)]-[Addition(optional)]*. With this ProjectCode2, records in other tables can be connected to this Project2.

:::info special ProjectCode2's
Some 'special' ProjecCode2's have been created in the past. ProjectCode2: 1-111 (Free, holiday) only contains the [CompanyCode Production]-[Addition] fields. Creating this kind of code is still possible, but only for admins.
:::

## Project2 Year
Most/all data tracked in Project2, is also tracked per Year in [Project2 Year](Project2Year.md).