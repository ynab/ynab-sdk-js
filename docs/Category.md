# Category

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**categoryGroupId** | **String** |  | 
**name** | **String** |  | 
**hidden** | **Boolean** | Whether or not the category is hidden | 
**originalCategoryGroupId** | **String** | If category is hidden this is the id of the category group it originally belonged to before it was hidden. | [optional] 
**note** | **String** |  | 
**budgeted** | **Number** | Budgeted amount in current month in milliunits format | 
**activity** | **Number** | Activity amount in current month in milliunits format | 
**balance** | **Number** | Balance in current month in milliunits format | 
**goalType** | **String** | The type of goal, if the cagegory has a goal (TB&#x3D;Target Category Balance, TBD&#x3D;Target Category Balance by Date, MF&#x3D;Monthly Funding) | 
**goalCreationMonth** | **Date** | The month a goal was created | 
**goalTarget** | **Number** | The goal target amount in milliunits | 
**goalTargetMonth** | **Date** | If the goal type is &#39;TBD&#39; (Target Category Balance by Date), this is the target month for the goal to be completed | 
**goalPercentageComplete** | **Number** | The percentage completion of the goal | 
**deleted** | **Boolean** | Whether or not the category has been deleted.  Deleted categories will only be included in delta requests. | 


<a name="GoalTypeEnum"></a>
## Enum: GoalTypeEnum


* `TB` (value: `"TB"`)

* `TBD` (value: `"TBD"`)

* `MF` (value: `"MF"`)




