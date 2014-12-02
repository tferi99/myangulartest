var app = angular.module('app', []);

app.controller('TestCtrl', function($scope, $log) {
    $scope.searching = false;

    $scope.go = function() {
        $scope.searching = true;

        setTimeout(function() {
            $scope.searching = false;
            $scope.$apply();
        }, 2000);
    }
});

