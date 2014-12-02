app.controller('ProgressbarCtrl', function($scope, $http) {
    $scope.stat = {
        success: 34,
        info: 21,
        warning: 23,
        danger: 11
    };

    $scope.statSuccessStyle = {
        width: $scope.stat.success + '%'
    };
    $scope.statInfoStyle = {
        width: $scope.stat.info + '%'
    };
    $scope.statWarningStyle = {
        width: $scope.stat.warning + '%'
    };
    $scope.statDangerStyle = {
        width: $scope.stat.danger + '%'
    };
});
