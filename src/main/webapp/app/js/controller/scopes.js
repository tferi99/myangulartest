

// controllers
app.controller('scopesController1', function($rootScope, $scope) {
    $rootScope.myName = "John Smith";

    $scope.color = "red";
    $scope.myName = "John Smith (overridden)";

    $scope.info = {};
    $scope.info.color = "yellow";
});

app.controller('scopesController2', function($scope) {
});

app.controller('scopesParent', function($scope) {
    $scope.color = 'red';
});

app.controller('scopesChild1', function($scope) {
    $scope.size = 5;
});

