# Hour Registration
All worked hours are supposed to be registered in Hour Registration. All Hour Registration records are connected to a [Project2](Project2.md) via a ProjectCode2.

The base information of an Hour Registration record are:
- Employee Code (who)
- Date (when)
- ProjectCode2 (what)
- Hours (how long)

**Employee Code** facilitates the connection to the [Employee](Employee.md) table.

**Hours** are divided into Direct and Indirect Hours. They are both summed up to the 'Hours Total' field.
**Direct hours** are the default hours that are supposed to be entered for most projects. They are supposed to represent hours you have worked directly linked to this project.
**Indirect hours** are made up mostly for tissue culture. When you are cutting plants, these are direct hours. When you are doing anything else, these are indirect hours.

**ProjectCode2** is divided into 3 fields: ProjectCode2, ProjectCode2_Manual and ProjectCode2_Used. This system is in place so that it is possible to attribute hours manually to another ProjectCode2 than was originally entered (while keeping that history). 
**ProjectCode2** is the field where the Employee enters on what Project2 they have worked on. **ProjectCode2_Manual** can be used by a manager to manually apply the hours to a different Project2 than the Employee originally entered. **ProjectCode2_Used** is the field that is (supposed to be) used for actually attributing the hours to a Project2. This field contains simple logic: If ProjectCode2_Manual is entered, copy that ProjectCode. Otherwise, copy it from field ProjectCode2.

**ProjectCode2_Used logic:** 
```4D
If (ProjectCode2_Manual#"")
	ProjectCode2_Used = ProjectCode2_Manual
Else
	ProjectCode2_Used = ProjectCode2
End if
```
