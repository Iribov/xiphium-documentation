---
sidebar_position: 5
---
# TC Registration Employee
The Tissue Culture Registration per Employee (TC Reg Emp) registers everything done to (a batch of) tissue culture plants. Whenever an employee uses the scanning system for tissue culture, a TC Reg Emp record is either added or modified. Modifications to a TC Reg Emp record are recorded in the [Mutations_Employee](Mutations_Employee.md) table. TC_Reg_Emp is the most detailed Table to get the current 'Plants Present' (a.k.a Stock), but most often [TCPA](TCPA.md) is used because 'Plants present' is also synchronized to this table.

## Tracing/Tracking cycle of TC_Reg_Emp
The tracing cycle of TC_Reg_Emp (within tissue culture) is as follows:
1. Scanning of jars is done in the scanning menu. 
	1. This creates an [Employee Job](Employee_Job.md) record, as well as a 'Transfer' [Mutations Employee](Mutations_Employee.md) record
2. Printing of new stickers while creating new TC_Reg_Emp record(s)
	1. When printing, this both links the new TC_Reg_Emp to the 'current' [Employee Job](Employee_Job.md), and creates a new 'Printing' [Mutations Employee](Mutations_Employee.md) to indicate the new plants/stock.

![](TC_Reg_Emp%20Tracing.png)
It is possible to send/get plants to/from [Delivery Items](../Deliveries/Delivery_Items.md) using [Mutations_Employee](Mutations_Employee.md), but that explanation has to wait until another day.
## And more... So much more...
There is much more data the TC Reg Emp registers, which should be described when this documentation gets more attention.