(function(){
    var app = angular.module('sfdbApp', ['ngRoute', 'cusServices']);

    app.controller('HomeController', [ '$scope', function($scope){
        $scope.abc = 'Abee';
    }]);

    app.controller('ManageObjController', ['$scope', function($scope){
        $scope.objs = globalObjectService.get();
    }]);

    app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './html/home.html',
            controller : 'HomeController'
        })
        .when('/manage', {
            templateUrl : './html/manage.html',
            controller : 'ManageObjController'
        })
        .when('/synchronize', {
            templateUrl : './html/synchronize.html',
            controller : 'HomeController'
        });
    });
    app.directive('topNav', function(){
        return {
            templateUrl: './html/nav.html'
        };
    });

    app.directive('footerCts', function(){
        return {
            templateUrl: './html/footer.html'
        };
    });


    
})();
