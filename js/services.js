angular.app('Services', ['ngResource'])
    .service('getObjects', getObjects)
    .factory('globalObjectService', function ($resource) {
        return $resource('http://salesforcedatamanager.cloudhub.io/globalObjects');
    });

function getObjects(){
    return globalObjectService.query();
}