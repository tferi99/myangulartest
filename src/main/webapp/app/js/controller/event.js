app.controller('EventTestController', function($scope) {
    console.log("Constructor START");

    var DEFAULT_ESTIMATION = 50;

    $scope.onClick = function() {
        alert("Click!");
    }
    $scope.onChangeColor = function() {
        console.log("Color:" + $scope.color + " saved.");
    }
    $scope.color = "yellow";
    $scope.otherColor = "gray";

    $scope.estimation = DEFAULT_ESTIMATION;
    $scope.needed;      // managed by ng-change
    $scope.needed2;     // managed by watch (better!)

    $scope.onRecalcNeeded = function() {
        $scope.needed = $scope.estimation * 10;
        console.log("Estimation has been changed:" + $scope.estimation + " needed:" + $scope.needed);
    }
    onRecalcNeeded2 = function() {
        $scope.needed2 = $scope.estimation * 10;
        //console.log("Estimation has been changed (2):" + $scope.estimation + " needed2:" + $scope.needed);
    }
    $scope.onResetEstimation  = function() {
        $scope.estimation = DEFAULT_ESTIMATION;
    }

    $scope.onRecalcNeeded();

    // wathes
    $scope.$watch("estimation", function(newVal, oldVal) {
        console.log("WATCH:" + oldVal + ", " + newVal);
        $scope.needed2 = $scope.estimation * 15;
        console.log("Estimation has been changed:" + $scope.estimation + " needed:" + $scope.needed);
    });

    console.log("Constructor END");
});

