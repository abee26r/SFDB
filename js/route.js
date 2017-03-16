(function(){
    var app = angular.module('sfdbApp', ['ngRoute', 'cusServices']);

    app.controller('HomeController', [ '$scope', function($scope){
        $scope.abc = 'Abee';
    }]);

    app.controller('ManageObjController', ['$scope', 'getObjects', 'createTable', function($scope, getObjects, createTable){
        //$scope.objs = getObjects();@@TODO 
        $scope.objs = res1;
        
        $scope.selectAll = function(){
        	angular.forEach($scope.objs, function(obj){ obj.checkbox = $scope.allSelect; });
        }
        
        $scope.saveObjects = function(){
        	angular.forEach($scope.objs, function(obj){ 
        		if(obj.checkbox){
        			console.log(obj.sfObjectName);
              $scope.tempObj = obj.sfObjectName;
              createTable();
        		}        		
        	});
        }
        
        $scope.countA = $scope.objs.length;
        $scope.countP = 0;
    	  $scope.countC = 0;
		    $scope.countS = 0; 
        calcCount($scope);
        
        $scope.updateSaveCount = function(e){
        	if(e)
        		$scope.countS++;
        	else
        		$scope.countS--;
        }
        
        
    }]);
    app.controller('SyncController', [ '$scope', function($scope){
        var resp = res2;
        $scope.tables = parseResp(resp);
        $scope.isCollapse = true;
        
        $scope.syncObject = function(table, diff){
        	console.log(table);
        	console.log(diff);
        }
        
        $scope.syncAllObject = function(){
        	angular.forEach($scope.tables.difference, function(table){ 
        		        		
        	});
        }
        $scope.inProgress = false;
    }]);
    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
    app.config(function($routeProvider) {
    $routeProvider
        .when('/s', {
            templateUrl : './html/home.html',
            controller : 'HomeController'
        })
        .when('/manage', {
            templateUrl : './html/manage.html',
            controller : 'ManageObjController'
        })
        .when('/', {//synchronize
            templateUrl : './html/synchronize.html',
            controller : 'HomeController'
        });
    });
    app.directive('topNav', function(){
        return {
            templateUrl: './html/nav.html'
        };
    });
    
    app.directive('progress', function(){
        return {
            templateUrl: './html/progress.html'
        };
    });

    app.directive('footerCts', function(){
        return {
            templateUrl: './html/footer.html'
        };
    });


    
})();

function calcCount($scope){
	angular.forEach($scope.objs, function(obj){
		if(!obj.createSfObject){
			$scope.countP++;
		}else{
			$scope.countC++;
		}
	});
}

function parseResp(data){
  var res = {};
  var fc = 'Field(s) is missing - [', tc = 'Table is missing';
  if(true){
    res.isDifferent = true;
    var arr = [];
    for(item in data){
      var x = {};
      x.objectName = item;      
      var temp = data[item];
      if(temp == tc){
        x.isMissing=true;
      }else if(temp.indexOf(fc) > -1){
        var cols = [];
        temp = temp.replace(fc, '').replace(']', '');
        console.log(temp);
        x.missingColumns= temp.split(', ');
      }
      arr.push(x);
    }
    res.difference = arr;
  }else{
    res.isDifferent = false;
  }
  return res;
}

var res1 = [{
    "sfObjectName":"APD_Staging__History",
    "sfObjectLabel":"History: APD Staging",
    "createSfObject":false
  },
  {
    "sfObjectName":"APD_Staging__c",
    "sfObjectLabel":"APD Staging",
    "createSfObject":true
  },
  {
    "sfObjectName":"AccMergeFldExcep__mdt",
    "sfObjectLabel":"Account Merge Fields Exception",
    "createSfObject":false
  },
  {
    "sfObjectName":"AcceptedEventRelation",
    "sfObjectLabel":"Accepted Event Relation",
    "createSfObject":false
  },
  {
    "sfObjectName":"Account",
    "sfObjectLabel":"Account",
    "createSfObject":false
  },
  {
    "sfObjectName":"AccountContactRelation",
    "sfObjectLabel":"Account Contact Relationship",
    "createSfObject":false
  },
  {
    "sfObjectName":"AccountContactRole",
    "sfObjectLabel":"Account Contact Role",
    "createSfObject":false
  },
  {
    "sfObjectName":"AccountFeed",
    "sfObjectLabel":"Account Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"AccountHistory",
    "sfObjectLabel":"Account History",
    "createSfObject":false
  },
  {
    "sfObjectName":"AccountPartner",
    "sfObjectLabel":"Account Partner",
    "createSfObject":false
  },
  {
    "sfObjectName":"AccountShare",
    "sfObjectLabel":"Account Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"AccountTeamMember",
    "sfObjectLabel":"Account Team Member",
    "createSfObject":false
  },
  {
    "sfObjectName":"AccountTerritoryBatch__c",
    "sfObjectLabel":"AccountTerritoryBatch",
    "createSfObject":false
  },
  {
    "sfObjectName":"Account_Financial_Data_View_Profile__c",
    "sfObjectLabel":"AccountFinancialDataViewProfile",
    "createSfObject":false
  },
  {
    "sfObjectName":"Account_Junction__c",
    "sfObjectLabel":"Account Hierarchy Association",
    "createSfObject":false
  },
  {
    "sfObjectName":"Account_Plan__c",
    "sfObjectLabel":"Account Plan",
    "createSfObject":false
  },
  {
    "sfObjectName":"Account_Team__c",
    "sfObjectLabel":"Account Team",
    "createSfObject":false
  },
  {
    "sfObjectName":"ActionLinkGroupTemplate",
    "sfObjectLabel":"Action Link Group Template",
    "createSfObject":false
  },
  {
    "sfObjectName":"ActionLinkTemplate",
    "sfObjectLabel":"Action Link Template",
    "createSfObject":false
  },
  {
    "sfObjectName":"ActivityHistory",
    "sfObjectLabel":"Activity History",
    "createSfObject":false
  },
  {
    "sfObjectName":"AdditionalNumber",
    "sfObjectLabel":"Additional Directory Number",
    "createSfObject":false
  },
  {
    "sfObjectName":"Agency_Account__c",
    "sfObjectLabel":"Agency Account",
    "createSfObject":false
  },
  {
    "sfObjectName":"AggregateResult",
    "sfObjectLabel":"Aggregate Result",
    "createSfObject":false
  },
  {
    "sfObjectName":"Allocation_Detail__History",
    "sfObjectLabel":"History: Allocation Percent Distribution",
    "createSfObject":false
  },
  {
    "sfObjectName":"Allocation_Detail__c",
    "sfObjectLabel":"Allocation Percent Distribution",
    "createSfObject":false
  },
  {
    "sfObjectName":"Allocation_Model__History",
    "sfObjectLabel":"History: Allocation Model",
    "createSfObject":false
  },
  {
    "sfObjectName":"Allocation_Model__c",
    "sfObjectLabel":"Allocation Model",
    "createSfObject":false
  },
  {
    "sfObjectName":"Allocation__History",
    "sfObjectLabel":"History: Allocation",
    "createSfObject":false
  },
  {
    "sfObjectName":"Allocation__Share",
    "sfObjectLabel":"Share: Allocation",
    "createSfObject":false
  },
  {
    "sfObjectName":"Allocation__c",
    "sfObjectLabel":"Allocation",
    "createSfObject":false
  },
  {
    "sfObjectName":"Announcement",
    "sfObjectLabel":"Announcement",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexClass",
    "sfObjectLabel":"Apex Class",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexComponent",
    "sfObjectLabel":"Visualforce Component",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexEmailNotification",
    "sfObjectLabel":"Apex Email Notification",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexLog",
    "sfObjectLabel":"Apex Debug Log",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexPage",
    "sfObjectLabel":"Visualforce Page",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexPageInfo",
    "sfObjectLabel":"Apex Page Info",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexTestQueueItem",
    "sfObjectLabel":"Apex Test Queue Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexTestResult",
    "sfObjectLabel":"Apex Test Result",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexTestResultLimits",
    "sfObjectLabel":"Apex Test Result Limit",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexTestRunResult",
    "sfObjectLabel":"Apex Test Run Result",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexTestSuite",
    "sfObjectLabel":"Apex Test Suite",
    "createSfObject":false
  },
  {
    "sfObjectName":"ApexTrigger",
    "sfObjectLabel":"Apex Trigger",
    "createSfObject":false
  },
  {
    "sfObjectName":"AppMenuItem",
    "sfObjectLabel":"AppMenuItem",
    "createSfObject":false
  },
  {
    "sfObjectName":"Approval",
    "sfObjectLabel":"Approval",
    "createSfObject":false
  },
  {
    "sfObjectName":"Asset",
    "sfObjectLabel":"Asset",
    "createSfObject":false
  },
  {
    "sfObjectName":"AssetFeed",
    "sfObjectLabel":"Asset Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"AssetHistory",
    "sfObjectLabel":"Asset History",
    "createSfObject":false
  },
  {
    "sfObjectName":"AssignmentRule",
    "sfObjectLabel":"Assignment Rule",
    "createSfObject":false
  },
  {
    "sfObjectName":"AsyncApexJob",
    "sfObjectLabel":"Apex Job",
    "createSfObject":false
  },
  {
    "sfObjectName":"AttachedContentDocument",
    "sfObjectLabel":"Attached Content Document",
    "createSfObject":false
  },
  {
    "sfObjectName":"Attachment",
    "sfObjectLabel":"Attachment",
    "createSfObject":false
  },
  {
    "sfObjectName":"AuraDefinition",
    "sfObjectLabel":"Lightning Component Definition",
    "createSfObject":false
  },
  {
    "sfObjectName":"AuraDefinitionBundle",
    "sfObjectLabel":"Lightning Component Bundle",
    "createSfObject":false
  },
  {
    "sfObjectName":"AuraDefinitionBundleInfo",
    "sfObjectLabel":"AuraDefinitionBundle Info",
    "createSfObject":false
  },
  {
    "sfObjectName":"AuraDefinitionInfo",
    "sfObjectLabel":"AuraDefinition Info",
    "createSfObject":false
  },
  {
    "sfObjectName":"AuthConfig",
    "sfObjectLabel":"Authentication Configuration",
    "createSfObject":false
  },
  {
    "sfObjectName":"AuthConfigProviders",
    "sfObjectLabel":"Authentication Configuration Auth. Provider",
    "createSfObject":false
  },
  {
    "sfObjectName":"AuthSession",
    "sfObjectLabel":"Auth Session",
    "createSfObject":false
  },
  {
    "sfObjectName":"BackgroundOperation",
    "sfObjectLabel":"Background Operation",
    "createSfObject":false
  },
  {
    "sfObjectName":"BrandTemplate",
    "sfObjectLabel":"Letterhead",
    "createSfObject":false
  },
  {
    "sfObjectName":"Brand__c",
    "sfObjectLabel":"Brand",
    "createSfObject":false
  },
  {
    "sfObjectName":"BusinessHours",
    "sfObjectLabel":"Business Hours",
    "createSfObject":false
  },
  {
    "sfObjectName":"BusinessProcess",
    "sfObjectLabel":"Business Process",
    "createSfObject":false
  },
  {
    "sfObjectName":"CO51Report__mdt",
    "sfObjectLabel":"CO51Report",
    "createSfObject":false
  },
  {
    "sfObjectName":"Calendar__History",
    "sfObjectLabel":"History: Fiscal Calendar",
    "createSfObject":false
  },
  {
    "sfObjectName":"Calendar__c",
    "sfObjectLabel":"Fiscal Calendar",
    "createSfObject":false
  },
  {
    "sfObjectName":"CallCenter",
    "sfObjectLabel":"Call Center",
    "createSfObject":false
  },
  {
    "sfObjectName":"Campaign",
    "sfObjectLabel":"Campaign",
    "createSfObject":false
  },
  {
    "sfObjectName":"CampaignFeed",
    "sfObjectLabel":"Campaign Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"CampaignMember",
    "sfObjectLabel":"Campaign Member",
    "createSfObject":false
  },
  {
    "sfObjectName":"CampaignMemberStatus",
    "sfObjectLabel":"Campaign Member Status",
    "createSfObject":false
  },
  {
    "sfObjectName":"CampaignShare",
    "sfObjectLabel":"Campaign Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"Campaign_Execution_Week__History",
    "sfObjectLabel":"History: Campaign Execution Week",
    "createSfObject":false
  },
  {
    "sfObjectName":"Campaign_Execution_Week__c",
    "sfObjectLabel":"Campaign Execution Week",
    "createSfObject":false
  },
  {
    "sfObjectName":"Case",
    "sfObjectLabel":"Case",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseComment",
    "sfObjectLabel":"Case Comment",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseContactRole",
    "sfObjectLabel":"Case Contact Role",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseFeed",
    "sfObjectLabel":"Case Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseHistory",
    "sfObjectLabel":"Case History",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseShare",
    "sfObjectLabel":"Case Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseSolution",
    "sfObjectLabel":"Case Solution",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseStatus",
    "sfObjectLabel":"Case Status Value",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseTeamMember",
    "sfObjectLabel":"Case Team Member",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseTeamRole",
    "sfObjectLabel":"Case Team Member Role",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseTeamTemplate",
    "sfObjectLabel":"Predefined Case Team",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseTeamTemplateMember",
    "sfObjectLabel":"Predefined Case Team Member",
    "createSfObject":false
  },
  {
    "sfObjectName":"CaseTeamTemplateRecord",
    "sfObjectLabel":"Predefined Case Team Record",
    "createSfObject":false
  },
  {
    "sfObjectName":"CategoryData",
    "sfObjectLabel":"Category Data",
    "createSfObject":false
  },
  {
    "sfObjectName":"CategoryNode",
    "sfObjectLabel":"Category Node",
    "createSfObject":false
  },
  {
    "sfObjectName":"Category_Family__c",
    "sfObjectLabel":"Category Family",
    "createSfObject":false
  },
  {
    "sfObjectName":"Category_Selection__c",
    "sfObjectLabel":"Category Selection",
    "createSfObject":false
  },
  {
    "sfObjectName":"Category__c",
    "sfObjectLabel":"Category",
    "createSfObject":false
  },
  {
    "sfObjectName":"ChaaterGrpsAndProfiles__mdt",
    "sfObjectLabel":"ChaaterGrpsAndProfile",
    "createSfObject":false
  },
  {
    "sfObjectName":"Charge_Type__c",
    "sfObjectLabel":"Charge Type",
    "createSfObject":false
  },
  {
    "sfObjectName":"ChatterActivity",
    "sfObjectLabel":"Chatter Activity",
    "createSfObject":false
  },
  {
    "sfObjectName":"Child_Opportunity_Validations__mdt",
    "sfObjectLabel":"Child Opportunity Validations",
    "createSfObject":false
  },
  {
    "sfObjectName":"ClientBrowser",
    "sfObjectLabel":"Client Browser",
    "createSfObject":false
  },
  {
    "sfObjectName":"CollaborationGroup",
    "sfObjectLabel":"Group",
    "createSfObject":false
  },
  {
    "sfObjectName":"CollaborationGroupFeed",
    "sfObjectLabel":"Group Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"CollaborationGroupMember",
    "sfObjectLabel":"Group Member",
    "createSfObject":false
  },
  {
    "sfObjectName":"CollaborationGroupMemberRequest",
    "sfObjectLabel":"Group Member Request",
    "createSfObject":false
  },
  {
    "sfObjectName":"CollaborationInvitation",
    "sfObjectLabel":"Chatter Invitation",
    "createSfObject":false
  },
  {
    "sfObjectName":"CombinedAttachment",
    "sfObjectLabel":"Note, Attachment, Google Doc And File",
    "createSfObject":false
  },
  {
    "sfObjectName":"Community",
    "sfObjectLabel":"Zone",
    "createSfObject":false
  },
  {
    "sfObjectName":"ConnectedApplication",
    "sfObjectLabel":"Connected App",
    "createSfObject":false
  },
  {
    "sfObjectName":"Contact",
    "sfObjectLabel":"Contact",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContactFeed",
    "sfObjectLabel":"Contact Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContactHistory",
    "sfObjectLabel":"Contact History",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContactShare",
    "sfObjectLabel":"Contact Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentDistribution",
    "sfObjectLabel":"Content Delivery",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentDistributionView",
    "sfObjectLabel":"Content Delivery View",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentDocument",
    "sfObjectLabel":"Content Document",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentDocumentFeed",
    "sfObjectLabel":"ContentDocument Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentDocumentHistory",
    "sfObjectLabel":"Content Document History",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentDocumentLink",
    "sfObjectLabel":"Content Document Link",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentFolder",
    "sfObjectLabel":"Content Folder",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentFolderItem",
    "sfObjectLabel":"Content Folder Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentFolderMember",
    "sfObjectLabel":"Content Folder Member",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentVersion",
    "sfObjectLabel":"Content Version",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContentVersionHistory",
    "sfObjectLabel":"Content Version History",
    "createSfObject":false
  },
  {
    "sfObjectName":"Contract",
    "sfObjectLabel":"Contract",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContractContactRole",
    "sfObjectLabel":"Contract Contact Role",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContractFeed",
    "sfObjectLabel":"Contract Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContractHistory",
    "sfObjectLabel":"Contract History",
    "createSfObject":false
  },
  {
    "sfObjectName":"ContractStatus",
    "sfObjectLabel":"Contract Status Value",
    "createSfObject":false
  },
  {
    "sfObjectName":"CorsWhitelistEntry",
    "sfObjectLabel":"CORS Whitelist Origin",
    "createSfObject":false
  },
  {
    "sfObjectName":"Create_Edit_Opportunity_Validation__c",
    "sfObjectLabel":"CreateEditOpportunityValidation",
    "createSfObject":false
  },
  {
    "sfObjectName":"CreditProfileCredentials__c",
    "sfObjectLabel":"CreditProfileCredentials",
    "createSfObject":false
  },
  {
    "sfObjectName":"CronJobDetail",
    "sfObjectLabel":"Cron Job",
    "createSfObject":false
  },
  {
    "sfObjectName":"CronTrigger",
    "sfObjectLabel":"Scheduled Jobs",
    "createSfObject":false
  },
  {
    "sfObjectName":"CurrencyType",
    "sfObjectLabel":"Currency Type",
    "createSfObject":false
  },
  {
    "sfObjectName":"CustomBrand",
    "sfObjectLabel":"Custom Brand",
    "createSfObject":false
  },
  {
    "sfObjectName":"CustomBrandAsset",
    "sfObjectLabel":"Custom Brand Asset",
    "createSfObject":false
  },
  {
    "sfObjectName":"CustomObjectUserLicenseMetrics",
    "sfObjectLabel":"Custom Object Usage By User License Metric",
    "createSfObject":false
  },
  {
    "sfObjectName":"CustomPermission",
    "sfObjectLabel":"Custom Permission",
    "createSfObject":false
  },
  {
    "sfObjectName":"CustomPermissionDependency",
    "sfObjectLabel":"Custom Permission Dependency",
    "createSfObject":false
  },
  {
    "sfObjectName":"Cycle__History",
    "sfObjectLabel":"History: Cycle",
    "createSfObject":false
  },
  {
    "sfObjectName":"Cycle__Share",
    "sfObjectLabel":"Share: Cycle",
    "createSfObject":false
  },
  {
    "sfObjectName":"Cycle__c",
    "sfObjectLabel":"Cycle",
    "createSfObject":false
  },
  {
    "sfObjectName":"Dashboard",
    "sfObjectLabel":"Dashboard",
    "createSfObject":false
  },
  {
    "sfObjectName":"DashboardComponent",
    "sfObjectLabel":"Dashboard Component",
    "createSfObject":false
  },
  {
    "sfObjectName":"DashboardComponentFeed",
    "sfObjectLabel":"Dashboard Component Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"DashboardFeed",
    "sfObjectLabel":"Dashboard Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"DataStatistics",
    "sfObjectLabel":"Data Statistics",
    "createSfObject":false
  },
  {
    "sfObjectName":"DataType",
    "sfObjectLabel":"Data Type",
    "createSfObject":false
  },
  {
    "sfObjectName":"DatacloudAddress",
    "sfObjectLabel":"Data.com Address",
    "createSfObject":false
  },
  {
    "sfObjectName":"DatedConversionRate",
    "sfObjectLabel":"Dated Conversion Rate",
    "createSfObject":false
  },
  {
    "sfObjectName":"DeclinedEventRelation",
    "sfObjectLabel":"Declined Event Relation",
    "createSfObject":false
  },
  {
    "sfObjectName":"DigitalComponentCAD__c",
    "sfObjectLabel":"DigitalComponentCAD",
    "createSfObject":false
  },
  {
    "sfObjectName":"DigitalComponentUSD__c",
    "sfObjectLabel":"DigitalComponentUSD",
    "createSfObject":false
  },
  {
    "sfObjectName":"Document",
    "sfObjectLabel":"Document",
    "createSfObject":false
  },
  {
    "sfObjectName":"DocumentAttachmentMap",
    "sfObjectLabel":"Document Entity Map",
    "createSfObject":false
  },
  {
    "sfObjectName":"Domain",
    "sfObjectLabel":"Domain",
    "createSfObject":false
  },
  {
    "sfObjectName":"DomainSite",
    "sfObjectLabel":"Custom URL",
    "createSfObject":false
  },
  {
    "sfObjectName":"Dropbox_for_SF__Async_Queue_Item__c",
    "sfObjectLabel":"Async Queue Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"Dropbox_for_SF__Library__c",
    "sfObjectLabel":"Library",
    "createSfObject":false
  },
  {
    "sfObjectName":"DuplicateRecordItem",
    "sfObjectLabel":"Duplicate Record Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"DuplicateRecordSet",
    "sfObjectLabel":"Duplicate Record Set",
    "createSfObject":false
  },
  {
    "sfObjectName":"DuplicateRule",
    "sfObjectLabel":"Duplicate Rule",
    "createSfObject":false
  },
  {
    "sfObjectName":"EmailMessage",
    "sfObjectLabel":"Email Message",
    "createSfObject":false
  },
  {
    "sfObjectName":"EmailMessageRelation",
    "sfObjectLabel":"Email Message Relation",
    "createSfObject":false
  },
  {
    "sfObjectName":"EmailServicesAddress",
    "sfObjectLabel":"Email Services Address",
    "createSfObject":false
  },
  {
    "sfObjectName":"EmailServicesFunction",
    "sfObjectLabel":"Email Service",
    "createSfObject":false
  },
  {
    "sfObjectName":"EmailStatus",
    "sfObjectLabel":"Email Status",
    "createSfObject":false
  },
  {
    "sfObjectName":"EmailTemplate",
    "sfObjectLabel":"Email Template",
    "createSfObject":false
  },
  {
    "sfObjectName":"EntityDefinition",
    "sfObjectLabel":"Entity Definition",
    "createSfObject":false
  },
  {
    "sfObjectName":"EntityParticle",
    "sfObjectLabel":"Entity Particle",
    "createSfObject":false
  },
  {
    "sfObjectName":"EntitySubscription",
    "sfObjectLabel":"Entity Subscription",
    "createSfObject":false
  },
  {
    "sfObjectName":"ErrorLogs__c",
    "sfObjectLabel":"Error Log",
    "createSfObject":false
  },
  {
    "sfObjectName":"Event",
    "sfObjectLabel":"Event",
    "createSfObject":false
  },
  {
    "sfObjectName":"EventFeed",
    "sfObjectLabel":"Event Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"EventLogFile",
    "sfObjectLabel":"Event Log File",
    "createSfObject":false
  },
  {
    "sfObjectName":"EventRelation",
    "sfObjectLabel":"Event Relation",
    "createSfObject":false
  },
  {
    "sfObjectName":"EventWhoRelation",
    "sfObjectLabel":"Event Who Relation",
    "createSfObject":false
  },
  {
    "sfObjectName":"ExcludedFieldsforOpptyClone__c",
    "sfObjectLabel":"ExcludedFieldsforOpptyClone",
    "createSfObject":false
  },
  {
    "sfObjectName":"ExcludedProfilesForOppFieldLock__c",
    "sfObjectLabel":"ExcludedProfilesForOppFieldLock",
    "createSfObject":false
  },
  {
    "sfObjectName":"ExternalDataSource",
    "sfObjectLabel":"External Data Source",
    "createSfObject":false
  },
  {
    "sfObjectName":"ExternalDataUserAuth",
    "sfObjectLabel":"External Data User Authentication",
    "createSfObject":false
  },
  {
    "sfObjectName":"ExternalSocialAccount",
    "sfObjectLabel":"Managed Social Account",
    "createSfObject":false
  },
  {
    "sfObjectName":"FeedAttachment",
    "sfObjectLabel":"Feed Attachment",
    "createSfObject":false
  },
  {
    "sfObjectName":"FeedComment",
    "sfObjectLabel":"Feed Comment",
    "createSfObject":false
  },
  {
    "sfObjectName":"FeedItem",
    "sfObjectLabel":"Feed Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"FeedLike",
    "sfObjectLabel":"Feed Like",
    "createSfObject":false
  },
  {
    "sfObjectName":"FeedPollChoice",
    "sfObjectLabel":"Feed Poll Choice",
    "createSfObject":false
  },
  {
    "sfObjectName":"FeedPollVote",
    "sfObjectLabel":"Feed Poll Vote",
    "createSfObject":false
  },
  {
    "sfObjectName":"FeedRevision",
    "sfObjectLabel":"Feed Revision",
    "createSfObject":false
  },
  {
    "sfObjectName":"FeedTrackedChange",
    "sfObjectLabel":"Feed Tracked Change",
    "createSfObject":false
  },
  {
    "sfObjectName":"FieldDefinition",
    "sfObjectLabel":"Field Definition",
    "createSfObject":false
  },
  {
    "sfObjectName":"FieldPermissions",
    "sfObjectLabel":"Field Permissions",
    "createSfObject":false
  },
  {
    "sfObjectName":"FinnAppsAccountSyncProfiles__c",
    "sfObjectLabel":"FinnAppsAccountSyncProfiles",
    "createSfObject":false
  },
  {
    "sfObjectName":"FiscalYearSettings",
    "sfObjectLabel":"Fiscal Year Settings",
    "createSfObject":false
  },
  {
    "sfObjectName":"FlexQueueItem",
    "sfObjectLabel":"Flex Queue Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"FlowInterview",
    "sfObjectLabel":"Flow Interview",
    "createSfObject":false
  },
  {
    "sfObjectName":"FlowInterviewShare",
    "sfObjectLabel":"Flow Interview Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"Folder",
    "sfObjectLabel":"Folder",
    "createSfObject":false
  },
  {
    "sfObjectName":"FolderedContentDocument",
    "sfObjectLabel":"Foldered Content Document",
    "createSfObject":false
  },
  {
    "sfObjectName":"ForecastShare",
    "sfObjectLabel":"Forecast Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"Form_Detail__c",
    "sfObjectLabel":"Form Detail",
    "createSfObject":false
  },
  {
    "sfObjectName":"Form_Header_Field_Data__c",
    "sfObjectLabel":"Form Header Field Data",
    "createSfObject":false
  },
  {
    "sfObjectName":"Form_Header_Field_Details__mdt",
    "sfObjectLabel":"Form Header Field Details",
    "createSfObject":false
  },
  {
    "sfObjectName":"Form_Header_Record_Type__mdt",
    "sfObjectLabel":"Form Header Record Type",
    "createSfObject":false
  },
  {
    "sfObjectName":"Form_Header__Feed",
    "sfObjectLabel":"Feed: Form Header",
    "createSfObject":false
  },
  {
    "sfObjectName":"Form_Header__History",
    "sfObjectLabel":"History: Form Header",
    "createSfObject":false
  },
  {
    "sfObjectName":"Form_Header__Share",
    "sfObjectLabel":"Share: Form Header",
    "createSfObject":false
  },
  {
    "sfObjectName":"Form_Header__c",
    "sfObjectLabel":"Form Header",
    "createSfObject":false
  },
  {
    "sfObjectName":"FunctionSkip__c",
    "sfObjectLabel":"Function Skip",
    "createSfObject":false
  },
  {
    "sfObjectName":"GUHAssociation__History",
    "sfObjectLabel":"History: Goal User Hierarchy Association",
    "createSfObject":false
  },
  {
    "sfObjectName":"GUHAssociation__Share",
    "sfObjectLabel":"Share: Goal User Hierarchy Association",
    "createSfObject":false
  },
  {
    "sfObjectName":"GUHAssociation__c",
    "sfObjectLabel":"Goal User Hierarchy Association",
    "createSfObject":false
  },
  {
    "sfObjectName":"Generic_Charge_Type__mdt",
    "sfObjectLabel":"Generic Charge Description",
    "createSfObject":false
  },
  {
    "sfObjectName":"GoalOppErrorRecord__c",
    "sfObjectLabel":"GoalOppErrorRecord",
    "createSfObject":false
  },
  {
    "sfObjectName":"Goal_Assignment__c",
    "sfObjectLabel":"Goal Team",
    "createSfObject":false
  },
  {
    "sfObjectName":"Goal_Data__Share",
    "sfObjectLabel":"Share: Goal Data",
    "createSfObject":false
  },
  {
    "sfObjectName":"Goal_Data__c",
    "sfObjectLabel":"Goal Data",
    "createSfObject":false
  },
  {
    "sfObjectName":"Goal__Feed",
    "sfObjectLabel":"Feed: Goal",
    "createSfObject":false
  },
  {
    "sfObjectName":"Goal__History",
    "sfObjectLabel":"History: Goal",
    "createSfObject":false
  },
  {
    "sfObjectName":"Goal__Share",
    "sfObjectLabel":"Share: Goal",
    "createSfObject":false
  },
  {
    "sfObjectName":"Goal__c",
    "sfObjectLabel":"Goal",
    "createSfObject":false
  },
  {
    "sfObjectName":"GrantedByLicense",
    "sfObjectLabel":"Setting Granted By License",
    "createSfObject":false
  },
  {
    "sfObjectName":"Group",
    "sfObjectLabel":"Group",
    "createSfObject":false
  },
  {
    "sfObjectName":"GroupMember",
    "sfObjectLabel":"Group Member",
    "createSfObject":false
  },
  {
    "sfObjectName":"Holiday",
    "sfObjectLabel":"Holiday",
    "createSfObject":false
  },
  {
    "sfObjectName":"InstalledMobileApp",
    "sfObjectLabel":"Installed Mobile App",
    "createSfObject":false
  },
  {
    "sfObjectName":"KnowledgeableUser",
    "sfObjectLabel":"Knowledgeable User",
    "createSfObject":false
  },
  {
    "sfObjectName":"Lead",
    "sfObjectLabel":"Lead",
    "createSfObject":false
  },
  {
    "sfObjectName":"LeadFeed",
    "sfObjectLabel":"Lead Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"LeadHistory",
    "sfObjectLabel":"Lead History",
    "createSfObject":false
  },
  {
    "sfObjectName":"LeadShare",
    "sfObjectLabel":"Lead Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"LeadStatus",
    "sfObjectLabel":"Lead Status Value",
    "createSfObject":false
  },
  {
    "sfObjectName":"Linked_Opportunity__History",
    "sfObjectLabel":"History: Linked Opportunity",
    "createSfObject":false
  },
  {
    "sfObjectName":"Linked_Opportunity__c",
    "sfObjectLabel":"Linked Opportunity",
    "createSfObject":false
  },
  {
    "sfObjectName":"ListView",
    "sfObjectLabel":"List View",
    "createSfObject":false
  },
  {
    "sfObjectName":"ListViewChart",
    "sfObjectLabel":"List View Chart",
    "createSfObject":false
  },
  {
    "sfObjectName":"ListViewChartInstance",
    "sfObjectLabel":"List View Chart Instance",
    "createSfObject":false
  },
  {
    "sfObjectName":"Location__c",
    "sfObjectLabel":"Location",
    "createSfObject":false
  },
  {
    "sfObjectName":"LockOpportunityFields__c",
    "sfObjectLabel":"LockOpportunityFields",
    "createSfObject":false
  },
  {
    "sfObjectName":"LoginHistory",
    "sfObjectLabel":"Login History",
    "createSfObject":false
  },
  {
    "sfObjectName":"LoginIp",
    "sfObjectLabel":"Login IP",
    "createSfObject":false
  },
  {
    "sfObjectName":"LookedUpFromActivity",
    "sfObjectLabel":"Lookups from Activity",
    "createSfObject":false
  },
  {
    "sfObjectName":"Macro",
    "sfObjectLabel":"Macro",
    "createSfObject":false
  },
  {
    "sfObjectName":"MacroHistory",
    "sfObjectLabel":"Macro History",
    "createSfObject":false
  },
  {
    "sfObjectName":"MacroInstruction",
    "sfObjectLabel":"Macro Instruction",
    "createSfObject":false
  },
  {
    "sfObjectName":"MacroShare",
    "sfObjectLabel":"Macro Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"MailmergeTemplate",
    "sfObjectLabel":"Mail Merge Template",
    "createSfObject":false
  },
  {
    "sfObjectName":"ManageProductsNoAccess__c",
    "sfObjectLabel":"ManageProductsNoAccess",
    "createSfObject":false
  },
  {
    "sfObjectName":"MatchingRule",
    "sfObjectLabel":"Matching Rule",
    "createSfObject":false
  },
  {
    "sfObjectName":"MatchingRuleItem",
    "sfObjectLabel":"Matching Rule Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"NAPI_Insert_date__c",
    "sfObjectLabel":"NAPI Insert Date",
    "createSfObject":false
  },
  {
    "sfObjectName":"Name",
    "sfObjectLabel":"Name",
    "createSfObject":false
  },
  {
    "sfObjectName":"NamedCredential",
    "sfObjectLabel":"Named Credential",
    "createSfObject":false
  },
  {
    "sfObjectName":"Note",
    "sfObjectLabel":"Note",
    "createSfObject":false
  },
  {
    "sfObjectName":"NoteAndAttachment",
    "sfObjectLabel":"Note and Attachment",
    "createSfObject":false
  },
  {
    "sfObjectName":"OauthToken",
    "sfObjectLabel":"Oauth Token",
    "createSfObject":false
  },
  {
    "sfObjectName":"ObjectPermissions",
    "sfObjectLabel":"Object Permissions",
    "createSfObject":false
  },
  {
    "sfObjectName":"ObjectTerritory2AssignmentRule",
    "sfObjectLabel":"Object Territory Assignment Rule",
    "createSfObject":false
  },
  {
    "sfObjectName":"ObjectTerritory2AssignmentRuleItem",
    "sfObjectLabel":"Object Territory Assignment Rule Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"ObjectTerritory2Association",
    "sfObjectLabel":"Object Territory Association",
    "createSfObject":false
  },
  {
    "sfObjectName":"Offer__c",
    "sfObjectLabel":"Offer",
    "createSfObject":false
  },
  {
    "sfObjectName":"OldNewProductSourceKeys__c",
    "sfObjectLabel":"OldNewProductSourceKeys",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpenActivity",
    "sfObjectLabel":"Open Activity",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opp_Product_Spe_Field__mdt",
    "sfObjectLabel":"Opp Product Spe Field",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity",
    "sfObjectLabel":"Opportunity",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityCompetitor",
    "sfObjectLabel":"Opportunity: Competitor",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityContactRole",
    "sfObjectLabel":"Opportunity Contact Role",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityFeed",
    "sfObjectLabel":"Opportunity Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityFieldHistory",
    "sfObjectLabel":"Opportunity Field History",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityHistory",
    "sfObjectLabel":"Opportunity History",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityLineItem",
    "sfObjectLabel":"Opportunity Product",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityLineItemSchedule",
    "sfObjectLabel":"Line Item Schedule",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityPartner",
    "sfObjectLabel":"Opportunity Partner",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityShare",
    "sfObjectLabel":"Opportunity Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityStage",
    "sfObjectLabel":"Opportunity Stage",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityStagesPerStatus__c",
    "sfObjectLabel":"OpportunityStagesPerStatus",
    "createSfObject":false
  },
  {
    "sfObjectName":"OpportunityTeamMember",
    "sfObjectLabel":"Opportunity Team Member",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Category__c",
    "sfObjectLabel":"Opportunity Category",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Chain_Placement__History",
    "sfObjectLabel":"History: Opportunity Chain Placement",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Chain_Placement__c",
    "sfObjectLabel":"Opportunity Chain Placement",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Credit_Entry__c",
    "sfObjectLabel":"Opportunity Credit Entry",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Credit_Field_Data__c",
    "sfObjectLabel":"Opportunity Credit Field Data",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Credit__Feed",
    "sfObjectLabel":"Feed: Opportunity Credit",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Credit__Share",
    "sfObjectLabel":"Share: Opportunity Credit",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Credit__c",
    "sfObjectLabel":"Opportunity Credit",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Fields_to_Restrict_on_EDIT__mdt",
    "sfObjectLabel":"Opportunity Fields to Restrict on EDIT",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Junction__c",
    "sfObjectLabel":"Opportunity Hierarchy Association",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Related_List_Visibility__mdt",
    "sfObjectLabel":"Opportunity Related List Visibility",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Team__c",
    "sfObjectLabel":"Opportunity Team",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Trade_Class__c",
    "sfObjectLabel":"Opportunity Trade Class",
    "createSfObject":false
  },
  {
    "sfObjectName":"Opportunity_Type__c",
    "sfObjectLabel":"Opportunity Type",
    "createSfObject":false
  },
  {
    "sfObjectName":"Order",
    "sfObjectLabel":"Order",
    "createSfObject":false
  },
  {
    "sfObjectName":"OrderFeed",
    "sfObjectLabel":"Order Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"OrderHistory",
    "sfObjectLabel":"Order History",
    "createSfObject":false
  },
  {
    "sfObjectName":"OrderItem",
    "sfObjectLabel":"Order Product",
    "createSfObject":false
  },
  {
    "sfObjectName":"OrderItemFeed",
    "sfObjectLabel":"Order Product Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"OrderItemHistory",
    "sfObjectLabel":"Order Product History",
    "createSfObject":false
  },
  {
    "sfObjectName":"OrderShare",
    "sfObjectLabel":"Order Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"OrgWideEmailAddress",
    "sfObjectLabel":"Organization-wide From Email Address",
    "createSfObject":false
  },
  {
    "sfObjectName":"Organization",
    "sfObjectLabel":"Organization",
    "createSfObject":false
  },
  {
    "sfObjectName":"OwnedContentDocument",
    "sfObjectLabel":"User Owned File",
    "createSfObject":false
  },
  {
    "sfObjectName":"OwnerChangeOptionInfo",
    "sfObjectLabel":"Change Owner Option Info",
    "createSfObject":false
  },
  {
    "sfObjectName":"Partner",
    "sfObjectLabel":"Partner",
    "createSfObject":false
  },
  {
    "sfObjectName":"PartnerRole",
    "sfObjectLabel":"Partner Role Value",
    "createSfObject":false
  },
  {
    "sfObjectName":"Percent_Allocation_Data__mdt",
    "sfObjectLabel":"Percent Allocation Data",
    "createSfObject":false
  },
  {
    "sfObjectName":"Period",
    "sfObjectLabel":"Period",
    "createSfObject":false
  },
  {
    "sfObjectName":"PermissionSet",
    "sfObjectLabel":"Permission Set",
    "createSfObject":false
  },
  {
    "sfObjectName":"PermissionSetAssignment",
    "sfObjectLabel":"Permission Set Assignment",
    "createSfObject":false
  },
  {
    "sfObjectName":"PermissionSetLicense",
    "sfObjectLabel":"Permission Set License",
    "createSfObject":false
  },
  {
    "sfObjectName":"PermissionSetLicenseAssign",
    "sfObjectLabel":"Permission Set License Assignment",
    "createSfObject":false
  },
  {
    "sfObjectName":"PicklistValueInfo",
    "sfObjectLabel":"Picklist Value Info",
    "createSfObject":false
  },
  {
    "sfObjectName":"PlatformAction",
    "sfObjectLabel":"Platform Action",
    "createSfObject":false
  },
  {
    "sfObjectName":"PlatformCachePartition",
    "sfObjectLabel":"Platform Cache Partition",
    "createSfObject":false
  },
  {
    "sfObjectName":"PlatformCachePartitionType",
    "sfObjectLabel":"Platform Cache Partition Type",
    "createSfObject":false
  },
  {
    "sfObjectName":"Pricebook2",
    "sfObjectLabel":"Price Book",
    "createSfObject":false
  },
  {
    "sfObjectName":"Pricebook2History",
    "sfObjectLabel":"Price Book History",
    "createSfObject":false
  },
  {
    "sfObjectName":"PricebookEntry",
    "sfObjectLabel":"Price Book Entry",
    "createSfObject":false
  },
  {
    "sfObjectName":"Pricing_Detail__c",
    "sfObjectLabel":"Pricing Detail",
    "createSfObject":false
  },
  {
    "sfObjectName":"ProcessDefinition",
    "sfObjectLabel":"Process Definition",
    "createSfObject":false
  },
  {
    "sfObjectName":"ProcessInstance",
    "sfObjectLabel":"Process Instance",
    "createSfObject":false
  },
  {
    "sfObjectName":"ProcessInstanceHistory",
    "sfObjectLabel":"Process Instance History",
    "createSfObject":false
  },
  {
    "sfObjectName":"ProcessInstanceNode",
    "sfObjectLabel":"Process Instance Node",
    "createSfObject":false
  },
  {
    "sfObjectName":"ProcessInstanceStep",
    "sfObjectLabel":"Process Instance Step",
    "createSfObject":false
  },
  {
    "sfObjectName":"ProcessInstanceWorkitem",
    "sfObjectLabel":"Approval Request",
    "createSfObject":false
  },
  {
    "sfObjectName":"ProcessNode",
    "sfObjectLabel":"Process Node",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product2",
    "sfObjectLabel":"Product and Charge",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product2Feed",
    "sfObjectLabel":"Product Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product2History",
    "sfObjectLabel":"Product History",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product_Component__c",
    "sfObjectLabel":"Product Component",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product_Family_Junction__c",
    "sfObjectLabel":"Product Family Junction",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product_Family__Share",
    "sfObjectLabel":"Share: Product Family",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product_Family__c",
    "sfObjectLabel":"Product Family",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product_Junction__Share",
    "sfObjectLabel":"Share: Product Junction",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product_Junction__c",
    "sfObjectLabel":"Product Junction",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product_Line__Share",
    "sfObjectLabel":"Share: Product Line",
    "createSfObject":false
  },
  {
    "sfObjectName":"Product_Line__c",
    "sfObjectLabel":"Product Line",
    "createSfObject":false
  },
  {
    "sfObjectName":"Profile",
    "sfObjectLabel":"Profile",
    "createSfObject":false
  },
  {
    "sfObjectName":"Profile_To_Group_Mapping__mdt",
    "sfObjectLabel":"Profile To Group Mapping",
    "createSfObject":false
  },
  {
    "sfObjectName":"Publisher",
    "sfObjectLabel":"Publisher",
    "createSfObject":false
  },
  {
    "sfObjectName":"PushTopic",
    "sfObjectLabel":"Push Topic",
    "createSfObject":false
  },
  {
    "sfObjectName":"QueueSobject",
    "sfObjectLabel":"Queue Sobject",
    "createSfObject":false
  },
  {
    "sfObjectName":"Quote",
    "sfObjectLabel":"Loc",
    "createSfObject":false
  },
  {
    "sfObjectName":"QuoteAndProductLineItemFieldMap__c",
    "sfObjectLabel":"QuoteAndProductLineItemFieldMap",
    "createSfObject":false
  },
  {
    "sfObjectName":"QuoteDocument",
    "sfObjectLabel":"Quote PDF",
    "createSfObject":false
  },
  {
    "sfObjectName":"QuoteFeed",
    "sfObjectLabel":"Quote Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"QuoteLineItem",
    "sfObjectLabel":"Quote Line Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"QuoteTemplateRichTextData",
    "sfObjectLabel":"Quote Template Rich Text Data",
    "createSfObject":false
  },
  {
    "sfObjectName":"Rate_Card__Share",
    "sfObjectLabel":"Share: Rate Card",
    "createSfObject":false
  },
  {
    "sfObjectName":"Rate_Card__c",
    "sfObjectLabel":"Rate Card",
    "createSfObject":false
  },
  {
    "sfObjectName":"RecentlyViewed",
    "sfObjectLabel":"Recently Viewed",
    "createSfObject":false
  },
  {
    "sfObjectName":"RecordType",
    "sfObjectLabel":"Record Type",
    "createSfObject":false
  },
  {
    "sfObjectName":"Record_Type_Mapping__mdt",
    "sfObjectLabel":"Product Junction - Approval RT Mapping",
    "createSfObject":false
  },
  {
    "sfObjectName":"RelationshipDomain",
    "sfObjectLabel":"Relationship Domain",
    "createSfObject":false
  },
  {
    "sfObjectName":"RelationshipInfo",
    "sfObjectLabel":"Relationship",
    "createSfObject":false
  },
  {
    "sfObjectName":"Report",
    "sfObjectLabel":"Report",
    "createSfObject":false
  },
  {
    "sfObjectName":"ReportFeed",
    "sfObjectLabel":"Report Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"Reporting_Child_Account_Metada__mdt",
    "sfObjectLabel":"Reporting Child Account",
    "createSfObject":false
  },
  {
    "sfObjectName":"Reporting_Parent_Account__History",
    "sfObjectLabel":"History: Reporting Parent Account",
    "createSfObject":false
  },
  {
    "sfObjectName":"Reporting_Parent_Account__c",
    "sfObjectLabel":"Reporting Parent Account",
    "createSfObject":false
  },
  {
    "sfObjectName":"RuleTerritory2Association",
    "sfObjectLabel":"Rule Territory Association",
    "createSfObject":false
  },
  {
    "sfObjectName":"SSDComponentCAD__c",
    "sfObjectLabel":"SSDComponentCAD",
    "createSfObject":false
  },
  {
    "sfObjectName":"SSDComponentUSD__c",
    "sfObjectLabel":"SSDComponentUSD",
    "createSfObject":false
  },
  {
    "sfObjectName":"Sales_Team_Edit_and_Delete_Profile__c",
    "sfObjectLabel":"Sales Team Edit and Delete Profiles",
    "createSfObject":false
  },
  {
    "sfObjectName":"Sales_Team_View_Profile__c",
    "sfObjectLabel":"SalesTeamViewProfile",
    "createSfObject":false
  },
  {
    "sfObjectName":"Sales_Teams_Profiles__c",
    "sfObjectLabel":"SalesTeamsProfiles",
    "createSfObject":false
  },
  {
    "sfObjectName":"SamlSsoConfig",
    "sfObjectLabel":"SAML Single Sign-On Setting",
    "createSfObject":false
  },
  {
    "sfObjectName":"Scontrol",
    "sfObjectLabel":"Custom S-Control",
    "createSfObject":false
  },
  {
    "sfObjectName":"SearchLayout",
    "sfObjectLabel":"Search Layout",
    "createSfObject":false
  },
  {
    "sfObjectName":"SecureAgentsCluster",
    "sfObjectLabel":"Secure Agent Cluster",
    "createSfObject":false
  },
  {
    "sfObjectName":"SetupAuditTrail",
    "sfObjectLabel":"Setup Audit Trail Entry",
    "createSfObject":false
  },
  {
    "sfObjectName":"SetupEntityAccess",
    "sfObjectLabel":"Setup Entity Access",
    "createSfObject":false
  },
  {
    "sfObjectName":"Site",
    "sfObjectLabel":"Site",
    "createSfObject":false
  },
  {
    "sfObjectName":"SiteFeed",
    "sfObjectLabel":"Site",
    "createSfObject":false
  },
  {
    "sfObjectName":"SiteHistory",
    "sfObjectLabel":"Site History",
    "createSfObject":false
  },
  {
    "sfObjectName":"SocialPersona",
    "sfObjectLabel":"Social Persona",
    "createSfObject":false
  },
  {
    "sfObjectName":"SocialPersonaHistory",
    "sfObjectLabel":"Social Persona History",
    "createSfObject":false
  },
  {
    "sfObjectName":"SocialPost",
    "sfObjectLabel":"Social Post",
    "createSfObject":false
  },
  {
    "sfObjectName":"SocialPostFeed",
    "sfObjectLabel":"Social Post Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"SocialPostHistory",
    "sfObjectLabel":"Social Post History",
    "createSfObject":false
  },
  {
    "sfObjectName":"SocialPostShare",
    "sfObjectLabel":"Social Post Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"Solution",
    "sfObjectLabel":"Solution",
    "createSfObject":false
  },
  {
    "sfObjectName":"SolutionFeed",
    "sfObjectLabel":"Solution Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"SolutionHistory",
    "sfObjectLabel":"Solution History",
    "createSfObject":false
  },
  {
    "sfObjectName":"SolutionStatus",
    "sfObjectLabel":"Solution Status Value",
    "createSfObject":false
  },
  {
    "sfObjectName":"SpecialtyTeamRoles__c",
    "sfObjectLabel":"SpecialtyTeamRoles",
    "createSfObject":false
  },
  {
    "sfObjectName":"StaffTransferFormRecordType__c",
    "sfObjectLabel":"StaffTransferFormRecordTypes",
    "createSfObject":false
  },
  {
    "sfObjectName":"Staff_Transfer_Request__c",
    "sfObjectLabel":"Transfer Request",
    "createSfObject":false
  },
  {
    "sfObjectName":"StaticResource",
    "sfObjectLabel":"Static Resource",
    "createSfObject":false
  },
  {
    "sfObjectName":"Strategy__c",
    "sfObjectLabel":"Strategy",
    "createSfObject":false
  },
  {
    "sfObjectName":"StreamingChannel",
    "sfObjectLabel":"Streaming Channel",
    "createSfObject":false
  },
  {
    "sfObjectName":"StreamingChannelShare",
    "sfObjectLabel":"Streaming Channel Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"TR_Line_Item__History",
    "sfObjectLabel":"History: TR Line Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"TR_Line_Item__c",
    "sfObjectLabel":"TR Line Item",
    "createSfObject":false
  },
  {
    "sfObjectName":"Task",
    "sfObjectLabel":"Task",
    "createSfObject":false
  },
  {
    "sfObjectName":"TaskFeed",
    "sfObjectLabel":"Task Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"TaskPriority",
    "sfObjectLabel":"Task Priority Value",
    "createSfObject":false
  },
  {
    "sfObjectName":"TaskRelation",
    "sfObjectLabel":"Task Relation",
    "createSfObject":false
  },
  {
    "sfObjectName":"TaskStatus",
    "sfObjectLabel":"Task Status Value",
    "createSfObject":false
  },
  {
    "sfObjectName":"TaskWhoRelation",
    "sfObjectLabel":"Task Who Relation",
    "createSfObject":false
  },
  {
    "sfObjectName":"TenantUsageEntitlement",
    "sfObjectLabel":"Tenant Usage Entitlement",
    "createSfObject":false
  },
  {
    "sfObjectName":"Territory2",
    "sfObjectLabel":"Territory",
    "createSfObject":false
  },
  {
    "sfObjectName":"Territory2Model",
    "sfObjectLabel":"Territory Model",
    "createSfObject":false
  },
  {
    "sfObjectName":"Territory2ModelFeed",
    "sfObjectLabel":"Territory Model Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"Territory2ModelHistory",
    "sfObjectLabel":"Territory Model History",
    "createSfObject":false
  },
  {
    "sfObjectName":"Territory2Type",
    "sfObjectLabel":"Territory Type",
    "createSfObject":false
  },
  {
    "sfObjectName":"Territory_Membership_History__c",
    "sfObjectLabel":"Territory Membership History",
    "createSfObject":false
  },
  {
    "sfObjectName":"Territory_Type_Batch__c",
    "sfObjectLabel":"Territory Type Batch",
    "createSfObject":false
  },
  {
    "sfObjectName":"Tertry_Categ_Mapping__mdt",
    "sfObjectLabel":"Territory Categories Mapping",
    "createSfObject":false
  },
  {
    "sfObjectName":"TestSuiteMembership",
    "sfObjectLabel":"Test Suite Membership",
    "createSfObject":false
  },
  {
    "sfObjectName":"ThirdPartyAccountLink",
    "sfObjectLabel":"Third Party Account Link",
    "createSfObject":false
  },
  {
    "sfObjectName":"TitlesToUpdateOppOwner__c",
    "sfObjectLabel":"TitlesToUpdateOppOwner",
    "createSfObject":false
  },
  {
    "sfObjectName":"TodayGoal",
    "sfObjectLabel":"Goal",
    "createSfObject":false
  },
  {
    "sfObjectName":"TodayGoalShare",
    "sfObjectLabel":"Goal Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"Topic",
    "sfObjectLabel":"Topic",
    "createSfObject":false
  },
  {
    "sfObjectName":"TopicAssignment",
    "sfObjectLabel":"Record",
    "createSfObject":false
  },
  {
    "sfObjectName":"TopicFeed",
    "sfObjectLabel":"Topic Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"Tracking_Table__History",
    "sfObjectLabel":"History: Tracking Table",
    "createSfObject":false
  },
  {
    "sfObjectName":"Tracking_Table__c",
    "sfObjectLabel":"Tracking Table",
    "createSfObject":false
  },
  {
    "sfObjectName":"Trade_Class__c",
    "sfObjectLabel":"Trade Class",
    "createSfObject":false
  },
  {
    "sfObjectName":"UUHD__c",
    "sfObjectLabel":"Unique User Hierarchy Detail",
    "createSfObject":false
  },
  {
    "sfObjectName":"UUH__c",
    "sfObjectLabel":"Unique User Hierarchy",
    "createSfObject":false
  },
  {
    "sfObjectName":"UndecidedEventRelation",
    "sfObjectLabel":"Undecided Event Relation",
    "createSfObject":false
  },
  {
    "sfObjectName":"User",
    "sfObjectLabel":"User",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserAccountTeamMember",
    "sfObjectLabel":"User Account Team Member",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserAppMenuCustomization",
    "sfObjectLabel":"UserAppMenuCustomization",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserAppMenuCustomizationShare",
    "sfObjectLabel":"UserAppMenuCustomization Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserAppMenuItem",
    "sfObjectLabel":"Application",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserEntityAccess",
    "sfObjectLabel":"User Entity Access",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserFeed",
    "sfObjectLabel":"User Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserFieldAccess",
    "sfObjectLabel":"User Field Access",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserLicense",
    "sfObjectLabel":"User License",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserListView",
    "sfObjectLabel":"User List View",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserListViewCriterion",
    "sfObjectLabel":"User List View Criteria",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserLogin",
    "sfObjectLabel":"User Login",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserPreference",
    "sfObjectLabel":"User Preference",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserRecordAccess",
    "sfObjectLabel":"User Record Access",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserRole",
    "sfObjectLabel":"Role",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserShare",
    "sfObjectLabel":"User Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserTeamMember",
    "sfObjectLabel":"User Team Member",
    "createSfObject":false
  },
  {
    "sfObjectName":"UserTerritory2Association",
    "sfObjectLabel":"User Territory Association",
    "createSfObject":false
  },
  {
    "sfObjectName":"User_Hierarchy_Association__c",
    "sfObjectLabel":"User Hierarchy Association",
    "createSfObject":false
  },
  {
    "sfObjectName":"User_Hierarchy_Queue__c",
    "sfObjectLabel":"Unique User Hierarchy Queue",
    "createSfObject":false
  },
  {
    "sfObjectName":"User_Team__c",
    "sfObjectLabel":"User Team",
    "createSfObject":false
  },
  {
    "sfObjectName":"Vote",
    "sfObjectLabel":"Vote",
    "createSfObject":false
  },
  {
    "sfObjectName":"WorkAccess",
    "sfObjectLabel":"Access",
    "createSfObject":false
  },
  {
    "sfObjectName":"WorkAccessShare",
    "sfObjectLabel":"Access Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"WorkBadge",
    "sfObjectLabel":"Badge Received",
    "createSfObject":false
  },
  {
    "sfObjectName":"WorkBadgeDefinition",
    "sfObjectLabel":"Badge",
    "createSfObject":false
  },
  {
    "sfObjectName":"WorkBadgeDefinitionFeed",
    "sfObjectLabel":"Badge Feed",
    "createSfObject":false
  },
  {
    "sfObjectName":"WorkBadgeDefinitionHistory",
    "sfObjectLabel":"Badge History",
    "createSfObject":false
  },
  {
    "sfObjectName":"WorkBadgeDefinitionShare",
    "sfObjectLabel":"Badge Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"WorkThanks",
    "sfObjectLabel":"Thanks",
    "createSfObject":false
  },
  {
    "sfObjectName":"WorkThanksShare",
    "sfObjectLabel":"Thanks Share",
    "createSfObject":false
  },
  {
    "sfObjectName":"master_configuration__c",
    "sfObjectLabel":"master configuration",
    "createSfObject":false
  }
];

var res2 = {"INT_GOAL__C":"Field(s) is missing - [IsDeleted, Name]","INT_CONTACT":"Table is missing"};