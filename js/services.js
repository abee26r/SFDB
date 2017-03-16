angular.module('cusServices', ['ngResource'])
    .factory('globalObjectService', function ($resource) {
        return $resource('http://salesforcedatamanager.cloudhub.io/globalObjects');
    })
    .factory('createTableService', function ($resource) {
        return $resource('http://salesforcedatamanager.cloudhub.io/:verb', [{verb:'createTable',objectName:'@tempObj'}]);
    })
    .service('getObjects', ['globalObjectService', function(globalObjectService){
        return globalObjectService.query();
    }])
    .service('createTable', ['createTableService', function(createTableService){
        return createTableService.get();
    }])
    ;

