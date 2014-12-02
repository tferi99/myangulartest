app.controller('DiCtrl', ['$scope', 'carService', function($scope, carService) {
    $scope.get = function(id) {
        return carService.get(id);
    }
    $scope.getAll = function() {
        return carService.getAll();
    }
}]);


// controller with explicit annotation
var explControllerFactory = function($scope, carService)
{
    $scope.get = function(id) {
        //return {id: 1, type:'abc'};
        var car = carService.get(id + 1);
        return car;
    }
};
var ctrl2 = app.controller('DiCtrlExpl', explControllerFactory);

