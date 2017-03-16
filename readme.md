

The details are as follows:
 
1. Get the List of Salesforce Objects - use url - http://localhost:8087/globalObjects
2. the output of above is available in - globalObjects-output.json (e.g. 100 object where 3 is already 
    created)
3. Requirement - User should be able to filter what is already synced and what can be synced
 
User can create table from a selection (s) of above UI . the URL for table creation is : 
http://localhost:8087/createTable?objectName=<<SF Object API Name>>
 "Failed to invoke describeSobject."
4. Get the differnce of Object vs Database definitions including field definitions. Use the Url : 
http://localhost:8087/SfDbObjectStructureDifferenceIdentifier
5. The output of aboev could be as follows:
                {"INT_GOAL__C":"Field(s) is missing - [IsDeleted, Name]","INT_CONTACT":"Table is missing"}
                Note: Here 2 fields are missing from INT_GOAL__C table where as INT_CONTACT is completely 
                missing.
6. The expectation is
                a) Display the missing result in the UI with capability to call the respective API to 
                either create the table or alter the fields
                b) UI should allow user to call the createTable API or alterTable API.
                c) The alterTable API is - 
                http://localhost:8087/alterTable?objectName=<<ObjectName>>&alterFields=<Field1>~<Field2>
                d) CreateTable API is - 
                http://localhost:8087/createTable?objectName=<<SF Object API Name>>
               
7. UI Should have capability to sync the data from the Salesforce to the Database.
                a) Before Calling this UI should call the SfDbObjectStructureDifferenceIdentifier API
                 and if there is no difference then it should call the sync API
                b) The URL for sync API is - http://localhost:8087/SyncSalesforce
               
 
Addition Information
1) Product Name is : Salesforce DataManager
2) Create a Logo on your own (if any)
3) The app should be single Page Application
  
http://salesforcedatamanager.cloudhub.io/globalObjects
http://salesforcedatamanager.cloudhub.io/SfDbObjectStructureDifferenceIdentifier
http://salesforcedatamanager.cloudhub.io/createTable?objectName=Goal__C
http://salesforcedatamanager.cloudhub.io/alterTable?objectName=Goal__C&alterFields=IsDeleted~Name
http://salesforcedatamanager.cloudhub.io/SyncSalesforce

{
	"isDifferent" : "true"
	difference : [{
						"objectName":"A1", 
						isMissing : "false",
						"missingColumns" : ["a","b"]
					},
					{
						"objectName":"A1", 
						isMissing : "true",
						"missingColumns" : null
					}
					]
}