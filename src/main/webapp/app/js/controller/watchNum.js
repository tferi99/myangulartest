app.controller('WatchNumController', ['$scope', '$log', function($scope, $log) {
    $scope.dumpWatches = function() {
        (function () {
            var root = $(document.getElementsByTagName('body'));
            var watchers = [];

            var elemIdx  = 0;
            var f = function (element) {
                console.log('Element[' + elemIdx + '] ');
                if (element.data().hasOwnProperty('$scope')) {
                    console.log('    - scope[' + $scope.id + ']');
                    var watchIdx  = 0;
                    angular.forEach(element.data().$scope.$$watchers, function (watcher) {
                        console.log('        - watcher[' + watchIdx + ']');
                        watchers.push(watcher);
                        watchIdx++;
                    });
                }

                angular.forEach(element.children(), function (childElement) {
                    f($(childElement));
                });
                elemIdx++;
            };

            f(root);

            console.log('WATCHERS: ' + watchers.length);
        })();
    }
}]);

