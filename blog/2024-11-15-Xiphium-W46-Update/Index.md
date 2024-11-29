---
title: Xiphium 2024-W46 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

<!--truncate-->
## Access
Methods ***AccFunc_GroupCount***, ***AccFunc_UserCount***, ***AccTab_GroupCount*** and ***AccTab_UserCount*** are modified to accept an integer instead of an object as the first parameter. And for some reason, the '.first()' is replaced by [0].

and ***AccGr_OverviewStats*** have been modified to show a progress bar.

## TCPA
Method ***TCPA_DialogModifyBatch*** has been extended to include the field: [TC_Plan_Action]TCPA_Remarks_from_ProductionLoc.

## Clone
Button "Create Analysis" used to be only able to add clones to an [Analysis_Order] if the order has status "New". The analytical lab expressed how it sometimes happens that a client (mostly internal) sends samples in batches, and when the first batch is received the status changes to "Material send" because the 'Date received' is filled in (manually). One option would have been to only fill a 'Date received' once the last batch has been received, but the analytical lab opted to allow users to add Clones to an [Analysis_Order] when the status is "Material send", you just get a popup with: "Are you sure about this?".

## Analysis
Methods ***AnSam_ColorField*** and ***AnSam_ColorField2*** have been modified for better performance and simplicity.

Method ***AnSam_Import_Pathogen_RequestV2*** has been renamed to ***AnSam_Import_Pathogen_Request*** to avoid confusion (to 'original' version 1 was not used anymore).

Method ***AnSam_Import_TPO_Request*** has been added to support importing samples for TPO Bioassay tests. Before, the method ***AnSam_Import_Pathogen_Request*** was used, but this caused issues in automatic suborder being made for 'Pathogen' testing, messing up the Analysis Order information.

Method ***AnSam_UpdateRecord_Ploidy*** has been modified to change the sample status to 'Repeat' if the latest analysed datapoint has status 'Denied'. This is to indicate clearly which samples need to be repeated when making a new plate layout for repeats. The method is now also implemented in all/most places where the regular ***AnSam_UpdateRecord*** is executed.
:::tip
If the method ***AnSam_UpdateRecord_Ploidy*** has to be executed everywhere the ***AnSam_UpdateRecord*** method is executed, maybe it's better to include one method into the other...
:::

File lists.json has been modified. The option "Repotted" and "" have been added to the Greenhouse-Field status choicelist.

## Web stuff

Method ***Web_MediaController*** now has a small code addition:
```4D
: (Web_PhotosGetSubjectInfo($action; $id))
		
: (($action="photos") & ($method="POST"))
	$reply:=Web_PhotosSave
	WebApp_SetResponse($reply)
```
This seems to extend functionality of the communication between the app and Xiphium for the Media app.

Methods ***Web_PhotosGetCategories***, ***Web_PhotosSave*** and ***Web_PhotosGetSubjectInfo*** have been modified to be able to upload photos of Media using the general photos app.

