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

## Fields and their functions
Let's try to categorize and describe some fields of [TC_Reg_Emp]. There are a total of 152 fields in [TC_Reg_Emp] (as of writing this 06-06-2024), so not all fields will be covered.

### Fundamental fields
The fundamental fields are fields that describe fundemental properties needed to identify the produced plant.

| field name (Xiphium) | Visual Name (user) | Description | Formula |
| -------------------- | ------------------ | ----------- | ------- |
| TC2E_Barcode         | Barcode            | Unique Code generated by using that is printed labels that are put on tissue culture containers. | Method: ***Barcode_CreateEAN13***        |
| TC2E_ID              | ID                 | Numeric Unique Code automatically generated by the database. Is locally unique, NOT unique across database instances | Auto-Generated by DB |
| TC2E_ID_Master       | IDM/ID Master      | Numeric Unique Code generated from combining the Default_Company and ID. | `[TC_Reg_Emp]TC2E_ID_Master:=(100000000*Num([TC_Reg_Emp]TC2E_ComCode_Master))+[TC_Reg_Emp]TC2E_ID` |
| TC2E_ID_ComCode_Master | N/A              | Default Company Code of the database instance that has originally created this record. |  |
| TC2E_ID_Job          | Job ID             | ID of the [Employee_Job] record under which this registration has been produced |  |
| TC2E_ID_TCPG         | TCPG ID            | ID of the Planning Group under which this registration is produced | |
| TC2E_CropCode        | Crop Code          | Alphanumeric Code of the Crop that is produced. This field has a relation to the [Crop] table. | |
| TC2E_Cropname1       | Crop Name          | Latin name of the Crop that is produced | `QUERY([Plant_Code]; [Plant_Code]Pla_PlantCode=[TC_Reg_Emp]TC2E_PlantCode) [TC_Reg_Emp]TC2E_Cropname1:=[Plant_Code]Pla_CropName`  | |
| TC2E_PlantCode       | PlantCode          | Plant Code of the plants that are produced. This field has a relation to the [Plant_Code] table. |  |
| TC2E_PlantName       | Plant Name         | Copy of data field Pla_Plant_Name1 of the related [Plant_Code] record | `QUERY([Plant_Code]; [Plant_Code]Pla_PlantCode=[TC_Reg_Emp]TC2E_PlantCode) TC_Reg_Emp]TC2E_Plantname:=[Plant_Code]Pla_PlantName1` |
| TC2E_ID_Emp          |                    | ID of the employee who produced these plants. This field is related to the [Employee] table | |
| TC2E_Emp_Name        |                    | Name (first and last) of the employee who produced these plants. | |
| TC2E_Activity        | Activity           | Alphanumeric Abreviation describing which activity is done to the plants | |
| TC2E_ActivityGroup   | Activity Group     | Alphanumeric abreviation describing the group of the activity | |

### base fields
The base fields are important fields necessary to tracking the production of plants

| field name (Xiphium) | Visual Name (user) | Description | Formula |
| -------------------- | ------------------ | ----------- | ------- |
| TC2E_N_Box_0_Trans   | Boxes Produced     | Amount of boxes (containers) produced, fully filled with plants | |
| TC2E_N_0_PPB         | Plants per Box     | Amount of plants present per Box | |
| TC2E_N_Plants_0_Trans | Plants Produced   | Amount of plants produced | `[TC_Reg_Emp]TC2E_N_Plants_0_Trans:=[TC_Reg_Emp]TC2E_N_Box_0_Trans*[TC_Reg_Emp]TC2E_N_0_PPB` |
| TC2E_N_Box_0_Infected | Boxes Infected    | Amount of boxes (containers) infected | |
| TC2E_N_Plants_0_Infected | Plants Infected | Amount of plants infected | |
| TC2E_N_Box_0_Discarded | Boxes Discarded | Amount of boxes (containers) discarded | |
| TC2E_N_Plants_0_Discarded | Plants Discarded | Amount of plants discarded | |
| TC2E_N_Box_0_Used | Boxes Transferred | Amount of Boxes used/transferred for/to the next cycle | |
| TC2E_N_Plants_0_Used | Plants Transferred | Amount of plants used-for/transferred-to the next cycle | |
| TC2E_N_Box_0_Delivered | Boxes Delivered | Amount of boxes used for delivery | |
| TC2E_N_Plants_0_Delivered | Plants Delivered | Amount of boxes used for delivery | |
| TC2E_N_Box_0_Correction | Boxes Correction | Amount of boxes (manually?) corrected to create an accurate stock | |
| TC2E_N_Plants_0_Correction | Plants Correction | Amount of plants (manually?) corrected to create an accurate stock | |
| TC2E_N_Box_0_Cooling | | | ? | 
| TC2E_N_Plants_0_Cooling | | ? | |
| TC2E_N_Box_0_Present | Boxes Present | Amount of boxes in stock (currently present) | `TC2E_N_Box_0_Present:=TC2E_N_Box_0_Trans-TC2E_N_Box_0_Used-TC2E_N_Box_0_Discarded-TC2E_N_Box_0_Infected-TC2E_N_Box_0_Delivered-TC2E_N_Box_0_Correction-TC2E_N_Box_0_Cooling` |
| TC2E_N_Plants_0_Present | Plants Present |Amount of boxes in stock (currently present) | `TC2E_N_Plants_0_Present:=TC2E_N_Plants_0_Trans-TC2E_N_Plants_0_Used-TC2E_N_Plants_0_Discarded-TC2E_N_Plants_0_Infected-TC2E_N_Plants_0_Delivered-TC2E_N_Plants_0_Correction-TC2E_N_Plants_0_Cooling` |

### secondary fields
The secondary fields are fields that are used for tracking, but are less imports. Fields such as 'Infection Level' are not as important as 'Plants Infected'

| field name (Xiphium) | Visual Name (user) | Description | Formula |
| -------------------- | ------------------ | ----------- | ------- |
| TC2E_N_Plants_Present_Sterile | Plant present Sterile | Amount of plants currently present that are not infected | |
| TC2E_N_Plants_Present_Contam | Plant present contaminated | Amount of plants currently present that are infected | |
| TC2E_N_Plants_InfectDC | Infected DC | Amount of plants that are infected because of reason 'DC' | |
| TC2E_N_Plants_InfectDG | Infected DG | Amount of plants that are infected because of reason 'DG' | |
| TC2E_N_Plants_InfectDS | Infected DS | Amount of plants that are infected because of reason 'DS' | |
| TC2E_N_Plants_InfectDA | Infected DA | Amount of plants that are infected because of reason 'DA' | |
| TC2E_N_Plants_InfectLS | Infected LS | Amount of plants that are infected because of reason 'LS' | |
| TC2E_N_Plants_InfectDR | Infected DR | Amount of plants that are infected because of reason 'DR' | |
| TC2E_N_Plants_InfectDD | Infected DD | Amount of plants that are infected because of reason 'DD' | |
| TC2E_N_Plants_InfectBF | Infected BF | Amount of plants that are infected because of reason 'BF' | |
| TC2E_N_Plants_InfectBFG | Infected BFG | Amount of plants that are infected because of reason 'BFG' | |
| TC2E_N_Plants_Prod_S0 | Plants produced per Cont. Level; Level S0 | Amount of plants without contamination | |
| TC2E_N_Plants_Prod_S1 | Plants produced per Cont. Level; Level S1 | Amount of plants without contamination, but with a suspicion of possible contamination | |
| TC2E_N_Plants_Prod_B1 | Plants produced per Cont. Level; Level B1 | Amount of plants with some contamination | |
| TC2E_N_Plants_Prod_B2 | Plants produced per Cont. Level; Level B2 | Amount of plants with contamination | |
| TC2E_N_Plants_Prod_B3 | Plants produced per Cont. Level; Level B3 | Amount of plants with a lot of contamination | |
| TC2E_N_Plants_Prod_B4 | Plants produced per Cont. Level; Level B4 | Amount of plants with severe contamination | |
| TC2E_N_Plants_Prod_B5 | Plants produced per Cont. Level; Level B5 | Amount of plants with extreme contamination | |


#### Infection/Contamination definitions
Within the system, the reasons/explanations of infection use acronyms. You can technically use these anything you want to, for the meaning is not set in stone. Nonetheless, we do have a standard for using these withing the company:

Clean Sterile - S0                 No contamination

Clean Sterile - S1                 Material is clean but some suspicious signs are seen for contamination

Contaminated B1               Some clouds of bacteria in max 20% of the plants in a jar; Possible to mark with marker; Separate plants without mark during cutting in separate jars;

Contaminated B2               Clouds of bacteria in more than 20% of the plants; Not possible anymore to mark; Plants not separated during cutting.

Contaminated B3               Bacteria all over in the medium or on the medium; Plants are still qualified for cutting.

Contaminated B4 / B5      Bad contamination and plants are not qualified anymore. Will be discarded as DG or DC.

*NOTE: it’s possible that for some specific crops or based on directions from planners contamination level 4 and 5 are also used for production for specific reasons.*

---

LS                         Record broken jars (accidents).

DA                       Record contamination from initiations (AA). Use 1 label to scan and adjust the qty.

BFG                    Record S0 to B1/2/3.
 <small> If material is from S0 to B2 or B3 it has to be indicated on the worksheet in addition, for transfer to enter it during scanning. </small>

BF                       Record S1 to B1/2/3.
 <small> If material is from S1 to B2 or B3 is has to be indicated on the worksheet in addition, for transfer to enter it during scanning. </small>

DR             Record destroy rest material / old stock.

| |Bacterial Contamination|Fungus Contamination|
|---|---|---|
|DG|S0 -> discard (if not special contamination like the pink bacteria)|S0, S1, C1,2,3 à discard (if not special contamination like a mite fungus outbreak)|
|DC|S1 or B1,2,3 -> discard (if not special contamination like the pink bacteria)||
|DS*|S0, S1, B1,2,3 -> discard When there is a special bacterial outbreak such as pink bacteria|S0, S1, B1,2,3 à discard. When there is a special fungus outbreak due to mites or otherwise|
 
 <small> *This option DS can only be chosen after discussion and approval with lab manager. </small> 
 
Adjust S0 to S1 and adjust B1 to B2 or B3: This has to be indicated on the worksheet for transfer to enter the correct level

## And more... So much more...

There is much more data the TC_Reg_Emp registers, which should be described when this documentation gets more attention.