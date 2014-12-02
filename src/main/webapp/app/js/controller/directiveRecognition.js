app.controller('DirRecogController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.person = {};
    $scope.person.name = 'John Smith';
    $scope.person.email = 'js@test.com';

    $scope.onSave = function() {
        alert("Hello " + $scope.person.name + ", I hope I can access you here: " + $scope.person.email)
    }
}]);
