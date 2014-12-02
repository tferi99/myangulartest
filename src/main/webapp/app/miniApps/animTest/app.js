var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        // normal routes
        .when('/page1', {
            templateUrl: 'page1.html'
        })
        .when('/page2', {
            templateUrl: 'page2.html'
        })
        // dynamic route :  /page/:name -> <name>.html
        .when('/pages/:name', { template: '', controller: CMSController })

        // default route
        .otherwise({
            redirectTo: '/page1'
        });
    });

function CMSController($scope, $route, $routeParams, $compile) {
    $route.current.templateUrl = $routeParams.name + ".html";

    $.get($route.current.templateUrl, function (data) {
        $scope.$apply(function () {
            $('#dynamicRouteView').html($compile(data)($scope));
        });
    });
}



