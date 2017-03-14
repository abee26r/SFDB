var app = angular.module('routingModule', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './html/home.html'
    })
    .when('/manage', {
        templateUrl : './html/manage.html'
    })
    .when('/synchronize', {
        templateUrl : './html/synchronize.html'
    });
});