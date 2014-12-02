app.controller('WatchController', ['$scope', '$log', function($scope, $log) {
    function init() {
        $scope.person = {
            name: "John Smith",
            car: {
                type: 'Mercedes',
                year: '2012'
            }
        }
    }

    $scope.shadow = {};

    $scope.$watch('person', function(newValue, oldValue, scope) {
        $log.debug("LISTENING BY REFERENCE : person changed");
    });

    $scope.$watch('person', function(newValue, oldValue, scope) {
        $log.debug("LISTENING BY EQUALITY: person changed");
    }, true);

    $scope.onInit = function() {
        init();
    }

    init();
}]);

