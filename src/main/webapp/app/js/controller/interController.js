app.controller('InterController1', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.ev = {recipient : "?"};

    $scope.onSend = function() {
        $rootScope.$broadcast('customGlobalMessage', 'Hello', 'controller1', $scope.ev.recipient);
    }
}]);

app.controller('InterController2', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.$on('customGlobalMessage', function(event, msg, sender, recip) {
        //alert("msg:" + msg + " sender:" + sender + " recip:" + recip);
        $scope.message = "" + msg + " sender:" + sender + " recip:" + recip;
    });
}]);
