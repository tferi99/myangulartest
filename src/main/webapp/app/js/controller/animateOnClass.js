app.controller('AnimateOnClassCtrl', function($scope) {
    $scope.btnAnim = true;

    $scope.animateMe = function() {
        if ($scope.btnAnim) {
            $scope.btnAnim = false;
        }
        else {
            $scope.btnAnim = true;
        }
    }
});
