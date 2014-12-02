app.controller('rootScopeCtrl', function($rootScope, $scope) {
    $rootScope.user = {};
    $rootScope.user.name = 'Joe';

});

app.controller('rootScopeChildCtrl1', function($rootScope, $scope) {
});

app.controller('rootScopeChildCtrl2', function($rootScope, $scope) {
    $scope.whoAreYou = "?";

    $scope.$watch('user.name', function() {
        $scope.whoAreYou = "You are " + $scope.user.name;
    })
});

