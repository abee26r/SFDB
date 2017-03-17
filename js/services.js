angular.module('cusServices', ['ngResource','ui.bootstrap'])
    .constant('myOpts', {
        domain : 'http://salesforcedatamanager.cloudhub.io',
        globalObjectsUrl : this.domain + '/globalObjects',
        diffUrl : this.domain + '/SfDbObjectStructureDifferenceIdentifier',
        createTblUrl : this.domain + '/createTable',
        alterTableUrl : this.domain + '/alterTable?objectName=:tbl&alterFields=:fields',
        SyncSalesforceUrl : this.domain + '/SyncSalesforce',
    })
    .factory('webServiceFactory', function($resource, myOpts){
    	var factory = {};
    	
    	factory.getObjectsService = function(){
    		return $resource(myOpts.globalObjectsUrl).query();
    	}
    	
		factory.createTableService = function(data, s_cb, e_cb){
			console.log(data);
			return $resource(myOpts.createTblUrl).get(data, s_cb, e_cb);	
		}
		
		factory.alterTableResource = function(){
			return $resource(myOpts.alterTableUrl);
		}		
		
		factory.getDifferenceService = function(){
			return $resource(myOpts.createTblUrl);	
		}
		
		factory.syncDataResource = function(){
			return $resource(myOpts.createTblUrl);
		}
		
		return factory;
    })
    .service('progressService', function($uibModal, $rootScope){
    	
        return {
            openModal : function(){
	                $rootScope.modalWin = $uibModal.open({
	                    keyboard:false,
	                    backdrop: 'static',
	                    templateUrl: './html/progress.html',
	                    controller:'ModalController',
	                    controllerAs: '$ctrl',
	            });                    
            },            
            progressData : {
                progressText : '',
                max : 0,
                count : 0,
                complete : false
            },            
            closeModal : function(){
            	this.progressData = {
                        progressText : '',
                        max : 0,
                        count : 0,
                        complete : false
                    };
                $rootScope.modalWin.close('stfu');
            }
        }        
    })
    .controller('ModalController', ['$scope', 'progressService', function($scope, progressService){
        $scope.stext ='Processing..';
        $scope.progressData = progressService.progressData;
        $scope.$watch(progressService.progressData, function(newVal){
            $scope.progressData = newVal;
        }, true);
        $scope.close = function(){progressService.closeModal(); }
        
    }]);

