# Mutations Employee
Mutations made to the [Tissue Culture Registration Employee](TC_Reg_Emp.md) (TC Reg Emp) record are recorded here. This includes cutting plants to be used in a new TC Reg Emp record. The mutations employee registers both from what TC Reg Emp the plantlets came from, to which TC Reg Emp the plantlets went to. This creates a traceable lineage of where plants in Tissue Culture come from.

There is much more data the mutations employee registers, which should be described when this documentation gets more attention.

- **MuEm_Barcode**: connects the mutation employee to a TC_Reg_Emp.
- **MuEm_ID_TC2E**: in NL: 257504/2884552 is filled with data (ca 11%). When filled, is identical to MuEm_ID_TableFrom: when MuEm_TableFrom='TC2E'
- **MuEm_TC2_TableTo**:  Seems to register what kind of mutation is done? (Transfer, printing, delivery, etc.)
- **MuEm_TC2_TableFrom**: Only contains 'TC' or ''. mostly filled with 'TC' when MuEm_TableFrom='Mut'
- **MuEm_TableFrom**: Acronymn of table where the mutation comes from
- **MuEm_ID_TableFrom**: ID of record of table set in MuEm_TableFrom.
- **MuEm_ID_TC2_To**: ID of [Employee_Job](Employee_Job.md)
- **MuEm_ID_EmJo** : ID of [Employee_Job](Employee_Job.md)
- **MuEm_ID_TC2_From**: mostly filled when MuEm_TableFrom='Mut'

following fields seem useless; In NL database these are all 0 of null!
- **MuEm_ID_TC2E_G1_to**
- **MuEm_ID_TC2E_G2_to**
- **MuEm_ID_TC2E_G3_to**
- **MuEm_ID_TC2E_G4_to**
- **MuEm_Date_Modified**
- **MuEm_Date_Created**
- 

