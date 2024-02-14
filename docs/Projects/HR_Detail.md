# Hour Registration Detail
Hour registration detail is used by Tissue Culture to register hours on a more detailed level than [HourRegistration](HourRegistration.md).

While HourRegistration only registers (mainly):
1. ProjectCode2
2. Hours
	1. Direct
	2. Indirect
3. Date
4. Employee

HourRegistration Detail, in addition to the above, also registers the [TC Planning Group](../Tissue_Culture/TCPG.md). This gives a more detailed overview of who worked on what exactly.

:::warning
HourRegistration Detail does not register on what Activity the hours are spent. A detailed Description of what activities are done in these registered hours can be found in [TC Registration Employee](../Tissue_Culture/TC_Reg_Emp.md). If multiple activities are done in the same day, by the same person, in the same [TCPG](../Tissue_Culture/TCPG.md); it is impossible to know/calculate the amount of hours spent on each activity.
:::

