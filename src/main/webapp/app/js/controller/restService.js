app.controller('PersonEditDialogCtrl', function($scope, $modalInstance) {
    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

app.controller('SimpleRestController', ['$scope', 'personService', '$log', function($scope, personService, $log) {
    $scope.get = function() {
        personService.getPerson($scope.currentPersonId, function(data) {
            $scope.item = data;
        });
    }

    $scope.edit = function(personId) {
        personService.getPerson(personId, function(data) {
            $scope.editedItem = data;

        });
    }

    // startup
    $scope.currentPersonId = 3;

    personService.getPersons(function(items) {
        $scope.items = items;
    });

    $scope.getPerson();
}]);
