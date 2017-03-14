angular.module('manageModule',['Services'])
    .controller('ManageObjController', ['$scope', ManageObjController]);


function ManageObjController($scope){
    $scope.objs = globalObjectService.get();
}