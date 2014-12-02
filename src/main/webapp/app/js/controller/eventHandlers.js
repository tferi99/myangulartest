app.controller('EvHandlerController', function($rootScope, $scope, $log) {
    $scope.onFireEvent = function() {
        $scope.$emit('myEvent');
    }

    $scope.onRegisterEvent = function() {
        $rootScope.$on('myEvent', function() {
            $log.debug('event fired from scope[' + $scope.$id + ']');
        });
    }

    $scope.showListeners = function() {
        $log.debug('listeners on root scope: ' + $rootScope.$$listenerCount.myEvent);
        debugger;
    }
});

