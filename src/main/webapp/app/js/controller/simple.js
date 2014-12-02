app.controller('SimpleController', function($scope) {
    $scope.greeting = { text: 'Hello' };
    $scope.someTextToOut = "Sample output text...";
    $scope.someTextToOut2 = "... yet another text";

    $scope.dummy = function()
    {
        // to call JS debugger
        var i = 1;
        i++;
    }
});

