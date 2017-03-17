angular.module('cusServices', ['ngResource','ui.bootstrap'])
    .constant('urls', {
        domain : 'http://salesforcedatamanager.cloudhub.io',
        globalObjectsUrl : this.domain + '/globalObjects',
        diffUrl : + '/SfDbObjectStructureDifferenceIdentifier',
        createTblUrl : this.domain + '/createTable?objectName=:tbl',
        alterTableUrl : this.domain + '/alterTable?objectName=:tbl&alterFields=:fields',
        SyncSalesforceUrl : this.domain + '/SyncSalesforce',
    })
    .factory('globalObjectService', ['urls', function ($resource, urls) {
        return $resource(urls.globalObjectsUrl);
    }])
    .factory('createTableService', ['urls', function ($resource, urls) {
        return $resource(urls.createTblUrl, [{tbl:'@table'}]);
    }])
    .service('getObjects', ['globalObjectService', function(globalObjectService){
        return globalObjectService.query();
    }])
    .service('createTable', ['createTableService', function(createTableService){
        return createTableService.get();
    }])
    .controller('ModalController', ['$scope', 'progressService', function($scope, progressService){
        $scope.stext ='Processing..';
        $scope.progressData = progressService.progressData;
        $scope.$watch(progressService.progressData, function(newVal){
            $scope.progressData = newVal;            
        }, true);
        
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

