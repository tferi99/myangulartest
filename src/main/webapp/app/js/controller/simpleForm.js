app.controller('SimpleFormController', function($scope) {
        $scope.data = {
            txt : "hello",
            active : true
        };

        $scope.onChangeActive = function() {
            alert("Changed active:" + $scope.data.active);
        };
        $scope.onSave = function() {
            alert("Saving - txt:" + $scope.data.txt + " active:" + $scope.data.active);
        };
        $scope.onActivate = function() {
            $scope.data.active = true;
        };
        $scope.onDeactivate = function() {
            $scope.data.active = false;
        };
    }
);