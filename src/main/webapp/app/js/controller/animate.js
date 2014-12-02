app.controller('AnimateCtrl', function($scope) {
    $scope.names = ['Igor Minar', 'Brad Green', 'Dave Geddes', 'Naomi Black', 'Greg Weber', 'Dean Sofer', 'Wes Alvaro', 'John Scott', 'Daniel Nadasi'];

    $scope.showNames = true;

    $scope.toggleNames = function() {
        $scope.showNames = !$scope.showNames;
    }
});
