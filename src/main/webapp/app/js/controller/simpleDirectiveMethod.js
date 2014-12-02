app.controller('SimpleDirecMethodController', function($scope) {
    $scope.myObject = {a: 'foo', b: 'bar'};

    $scope.result = {};

    $scope.doSomething = function(item){
        $scope.result = item;
        $scope.result.value = $scope.value;
        console.log("Callback called: " + item);
    };
});

app.directive('ngBlur', function() {
    return function( scope, elem, attrs ) {
        elem.bind('blur', function() {
            scope.$apply(attrs.ngBlur);
        });
    };
});
