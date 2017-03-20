angular.module('cusServices', ['ngResource','ui.bootstrap'])
	.constant('domain' , 'http://salesforcedatamanager.cloudhub.io')
    .constant('myOpts', {
        globalObjectsUrl : '/globalObjects',
        diffUrl : '/SfDbObjectStructureDifferenceIdentifier',
        createTblUrl : '/createTable',
        alterTableUrl : '/alterTable',
        SyncSalesforceUrl : '/SyncSalesforce',
    })
    .factory('webServiceFactory', function($resource, domain, myOpts){
    	var factory = {};
    	
    	factory.getObjectsService = function(e_cb){
    		return $resource(domain + myOpts.globalObjectsUrl, null, {
    			'get' :{headers :{'Access-Control-Allow-Origin' : '*'}}
    		}).query(function(){}, e_cb);
    	}
    	
		factory.createTableService = function(data, s_cb, e_cb){
			return $resource(domain + myOpts.createTblUrl).get(data, s_cb, e_cb);	
		}
		
		factory.alterTableResource = function(data, s_cb, e_cb){
			return $resource(domain + myOpts.alterTableUrl).get(data, s_cb, e_cb);
		}		
		
		factory.getDifferenceService = function(e_cb){
			return $resource(domain + myOpts.diffUrl).get(function(){}, e_cb);	
		}
		
		factory.syncDataService = function(s_cb, e_cb){
			return $resource(domain + myOpts.SyncSalesforceUrl).get({}, s_cb, e_cb);
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
            	sText : 'Processing..',
                progressText : '',
                max : 0,
                count : 0,
                progressText2 : '',
                complete : false
            },            
            closeModal : function(){
            	this.progressData = {
            			sText : 'Processing..',
                        progressText : '',
                        max : 0,
                        count : 0,
                        progressText2 : '',
                        complete : false
                    };
                $rootScope.modalWin.close('stfu');
            }
        }        
    })
    .controller('ModalController', ['$scope', 'progressService', function($scope, progressService){
        
        $scope.progressData = progressService.progressData;
//        $scope.$watch(progressService.progressData, function(newVal){
//            $scope.progressData = newVal;
//        }, true);
        $scope.close = function(){
        	$scope.$emit('reloadData', null);
        	progressService.closeModal(); }
        
    }]);

