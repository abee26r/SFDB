
(function(){
    var home = angular.module('sfdbApp', ['routingModule']);
    
    home.controller('HomeController', [ '$scope', function($scope){
        $scope.abc = 'Abee';
    }]);

    home.directive('topNav', function(){
        return {
            templateUrl: './html/nav.html'
        };
    });

    home.directive('footerCts', function(){
        return {
            templateUrl: './html/footer.html'
        };
    });
})();

function HomeController($scope){
    $scope.abc = 'abee';
}