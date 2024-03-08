---
sidebar_position: 3
---
# Protocol Lines
A Protocol Line is a singular step of a [Protocol1](Protocol1.md). A protocol line is used as a *bridge* or *connection* to create a [Greenhouse Planning Action (GHPA)](GHPA.md). More details on this planning mechanism can be found in the [introduction](Introduction.md).

## Fields
Protocol Lines is a small table with only a few fields, so we will go over very field and explain its functionality:

| Field Name Xiphium | Common Name | Description |
| --- | --- | --- |
| ProtL_Activity_Group | Activity Group | Indicates the activity group of the action that has to be taken |
| ProtL_Activity       | Activity       | Indicates the activity of the action that has to be taken |
| ProtL_Number         | Step           | The number of the step (of the sequence). It should always start at step 1 |
| ProtL_Requirement    | Requirement    | Additional parameters can be added here. If the order meets these requirements, this step will also be translated to an action. Otherwise, this step is ignored.
| ProtL_ID             | ID             | Unique ID of the Protocol Line
| ProtL_ID_Anchor      | ID Anchor      | Anchors the Protocol Line to another Protocol Line. This makes the Protocol line into a 'Floating Action' when creating a [GHPA](GHPA.md)
| N/A                  | Is Floating Action | Indicates if the action is fully dependent on (floating around) another action. Floating actions cannot have actions dependent on them. |
| ProtL_Date_Created   | N/A |Date of record creation |
| ProtL_Name_Created   | N/A | username who created the record |
| ProtL_Date_Modified  | N/A | Date of last record modification |
| ProtL_Name_Modified  | N/A | username of who last modified the record |

