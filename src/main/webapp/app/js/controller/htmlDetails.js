//---------------------------------- HttpCtrl ----------------------------------
app.controller('HtmlDetailsCtrl', function($scope, $log, $http, config, $cacheFactory) {
    $scope.requestCounter = 0;
    $scope.saveRequestCounter = 0;
    $scope.httpResult = {};
    $scope.url = config.getRestContext() + '/test/person/1';
    $scope.errorFound = false;

    $scope.caching = {
        enabled: false,
        withLru: false,
        info: {},
        lru: 0
    };

    $scope.cache = false;

    var lastCacheLru = 0;

    $scope.onSelect = function()
    {
        if ($scope.caching.enabled) {
            if (!$scope.caching.withLru) {
                $scope.caching.info = {};
                $scope.caching.lru = 0;
                $scope.cache = true;
            }
            else {
                if ($scope.caching.lru == 0) {
                    $scope.cache = true;
                    $scope.caching.info = {};
                }
                else {
                    if (lastCacheLru != $scope.caching.lru) {
                        var c = $cacheFactory.get('lru');
                        if (c) {
                            c.destroy();
                        }
                        $scope.cache = $cacheFactory('lru', {
                            capacity: $scope.caching.lru
                        });
                        $scope.caching.info = $scope.cache.info();
                        $log.debug('Cache created: ' + $scope.cache.info());
                    }
                    console.log('CACHE: ');
                    console.log($scope.cache.info());
                }
                lastCacheLru = $scope.caching.lru;
            }
        }
        else {
            $scope.cache = false;
        }

        var promise = $http({
            method: 'GET',
            url: $scope.url,
            cache: $scope.cache
        });


        promise.then(
            function(result) {
                // success
                $log.debug('success');
                $log.debug(result.data.firstName);
                $log.debug(result.status);
            },
            function() {
                // err
                $log.debug('error');
            },
            function() {
                // progress
                $log.debug('progress');
            }
        )

        promise.success(function(data, status, headers, config) {
            $scope.currentPerson = data;
            $scope.httpResult.status = status;
            $scope.httpResult.headers = headers;
            $scope.httpResult.config = config;

            $scope.errorFound = false;
        })
        .error(function(data, status, headers, config) {
            $scope.currentPerson = data;
            $scope.httpResult.status = status;
            $scope.httpResult.headers = headers;
            $scope.httpResult.config = config;

            $scope.errorFound = true;
        });
    }
});
