'use strict';

var app = angular.module('app', ['ui.bootstrap', 'ngResource', 'ngRoute', 'pascalprecht.translate', 'app.services', 'app.directives', 'ui', 'ngAnimate', 'ui.select2', 'ngAnimate-animate.css', 'ui.highlight', 'ui.bootstrap.modal'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/empty2', {
                templateUrl: 'empty2.html'
            })

            // dynamic route :  /page/:name -> <name>.html
            .when('/page/:name', { template: '', controller: CMSController })

            // default route
            .otherwise({
                redirectTo: '/start'
            });
    })
    .run(function () {

    });

function CMSController($scope, $route, $routeParams, $compile) {
    $route.current.templateUrl = $routeParams.name + ".html";

    $.get($route.current.templateUrl, function (data) {
        console.debug('Dynamic routing to ' + $route.current.templateUrl);
        $scope.$apply(function () {
            $('#dynamicRouteView').html($compile(data)($scope));
        });
    });
}

