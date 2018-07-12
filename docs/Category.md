# YnabApiEndpoints.Category

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
**deleted** | **Boolean** | Whether or not the category has been deleted.  Deleted categories will only be included in delta requests. | 


