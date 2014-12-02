app.controller('ShowHideController', function($scope) {
    $scope.menuState = [];
    $scope.menuState['file'] = {visible: true, enabled: true};
    $scope.menuState['edit'] = {visible: true, enabled: true};
    $scope.menuState['options'] = {visible: true, enabled: true};
    $scope.menuState['help'] = {visible: true, enabled: true};
});
