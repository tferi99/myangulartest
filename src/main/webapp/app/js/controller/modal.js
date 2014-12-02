app.controller('ModalTestCtrl', function($scope, $log, $modal) {
    $scope.currentPerson = {
        name: 'John Smith',
        email: 'js@test.com'
    };

    $scope.personName = 'Joci';

    $scope.openDialog = function(size) {
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            //templateUrl: 'js/directive/modalTemp.html',
            controller: 'ModalCtrl',
            size: size,
            resolve: {
                person: function () {
                    // don't edit original object, otherwise you cannot cancel
                    return angular.copy($scope.currentPerson);

                    // direct data-bind - wrong pattern!!!
                    //return $scope.currentPerson;
                }
            }
        });

        modalInstance.result.then(function (person) {
            // copy modified data from shadow object
            //angular.copy(person, $scope.currentPerson);
            $scope.currentPerson = person;
        }, function () {
            $log.info('Modal cancelled at: ' + new Date());
        });
    };
});

app.controller('ModalCtrl', function($scope, $modalInstance, person) {
    $scope.person = person;

    $scope.ok = function () {
        $modalInstance.close($scope.person);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
