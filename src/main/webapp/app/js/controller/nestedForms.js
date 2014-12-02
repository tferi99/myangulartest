app.controller('NestedFormsController', function($scope, $rootScope) {
    $scope.onSave = function() {
        alert('Saved: ' + $scope.val + " root:" + $rootScope.$id);
    };
});

