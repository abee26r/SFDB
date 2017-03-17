angular.module('cusServices', ['ngResource','ui.bootstrap'])
    .constant('myOpts', {
        domain : 'http://salesforcedatamanager.cloudhub.io',
        globalObjectsUrl : this.domain + '/globalObjects',
        diffUrl : this.domain + '/SfDbObjectStructureDifferenceIdentifier',
        createTblUrl : this.domain + '/createTable?objectName=:tbl',
        alterTableUrl : this.domain + '/alterTable?objectName=:tbl&alterFields=:fields',
        SyncSalesforceUrl : this.domain + '/SyncSalesforce',
    }).controller('ModalController', ['$scope', 'progressService', function($scope, progressService){
        $scope.stext ='Processing..';
        $scope.progressData = progressService.progressData;
        $scope.$watch(progressService.progressData, function(newVal){
            $scope.progressData = newVal;            
        }, true);
        
    }])
    .factory('globalObjectResource', function ($resource, myOpts) {
        return $resource(myOpts.globalObjectsUrl);
    })
    .factory('createTableResource', function ($resource, myOpts) {
        return $resource(myOpts.createTblUrl);
    })
    .factory('alterTableResource', function ($resource, myOpts) {
        return $resource(myOpts.alterTableUrl);
    })
    .factory('syncDataResource', function ($resource, myOpts) {
        return $resource(myOpts.createTblUrl);
    })
    .service('getObjectsService', ['globalObjectResource', function(globalObjectResource){
        return globalObjectResource.query();
    }])
    .service('createTableService', ['createTableResource', function(createTableResource, data){
        return createTableResource.get({},data);
    }])
    .service('alterTableService', ['alterTableResource', function(alterTableResource, data){
        return alterTableResource.get({}, data);
    }])
    .service('syncDataService', ['syncDataResource', function(syncDataResource){
        return syncDataResource.get();
    }])    
    .service('progressService', function($uibModal, $rootScope){
        return {
            openModal : function(val){
                if(val){
                        $rootScope.modalWin = $uibModal.open({
                            keyboard:false,
                            backdrop: 'static',
                            templateUrl: './html/progress.html',
                            controller:'ModalController',
                            controllerAs: '$ctrl',
                    });                    
                }
            },            
            progressData : {
                progressText : '',
                max : 0,
                count : 0,                
            },            
            closeModal : function(){
                $rootScope.modalWin.close('stfu');
            }
        }        
    });

