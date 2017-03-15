angular.module('cusServices', ['ngResource'])
    .factory('globalObjectService', function ($resource) {
        return $resource('http://salesforcedatamanager.cloudhub.io/globalObjects');
    })
    .service('getObjects', function(){
        return globalObjectService.query();
    });

