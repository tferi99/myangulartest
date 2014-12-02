app.controller('ValidationController', function($scope) {
    $scope.onSave = function() {
        alert('Saved:' + $scope.val);
    };

    $scope.onOtherAction = function() {
        alert('Other action called.');
    };

    $scope.onSave2 = function() {
        alert('Saved:' + $scope.val2);
    };

    $scope.test = function() {
        var s = JSON.stringify($scope.frmTest, null, '   ');
        alert(s);
    }
});

