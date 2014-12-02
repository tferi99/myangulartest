

app.controller('StyleController', function($scope) {
    $scope.createEnabled = false;
    $scope.readEnabled = false;
    $scope.deleteEnabled = false;

    $scope.createError = false;
    $scope.readError = false;
    $scope.deleteError = false;

    $scope.isImportant = true;
    $scope.isWarn = true;

    $scope.readEnabledClass;
    $scope.readErrorClass;

    $scope.otherTestClasses = ['important', 'warn'];

    $scope.$watch("readEnabled", function() {
        if ($scope.readEnabled) {
            $scope.readEnabledClass = "enabled";
        }
        else {
            $scope.readEnabledClass = "disabled";
        }
    });

    $scope.$watch("readError", function() {
        if ($scope.readError) {
            $scope.readErrorClass = "err";
        }
        else {
            $scope.readErrorClass = "";
        }
    });

    function init() {
        $scope.createEnabled = false;
        $scope.readEnabled = true;
        $scope.deleteEnabled = false;

        $scope.createError = false;
        $scope.readError = false;
        $scope.deleteError = true;
    }

    init();
});
