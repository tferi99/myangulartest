//---------------------------------- HttpCtrl ----------------------------------
app.controller('HttpCtrl', function($scope, $log, $http, config) {
    $scope.requestCounter = 0;
    $scope.saveRequestCounter = 0;

    $scope.onRefresh = function(cb) {
        getPersons(function(result) {
            $scope.persons = result;
            $scope.currentPerson = null;
            if (typeof success == 'function') {
                cb(result);
            }
        });
    }

    $scope.onSave = function()
    {
        savePerson($scope.currentPerson);
    }

    $scope.onSelect = function(id)
    {
        var promise = $http.get(config.getRestContext() + '/test/person/' + id);
        promise.success(function(data, status, headers, config) {
            $scope.currentPerson = data;
            /*                $scope.persons.forEach(function(person) {
             if (person.id == id) {
             $scope.currentPerson = person;
             return;
             }*/
        });
    }

    var getPersons = function(success)
    {
        var promise = $http({method:'GET', url:config.getRestContext() + '/test/persons'});
        promise.then(function(resp) {
            //alert('then() - retrieved objects: ' + resp.data.length);$scope.requestCounter++;

        });

        promise.success(function(data, status, headers, config) {
            //alert('success() - retrieved objects: ' + data.length);
            success(data);
        }).error(function(data, status, headers, config) {
            alert('ERROR: ' + headers);
        });
    }

    var savePerson = function(data, success)
    {
        var promise = $http.post(config.getRestContext() + '/test/person', data);
        promise.success(function(data, status, headers, config) {
            $scope.saveRequestCounter++;
            $scope.onRefresh();
            if (typeof success == 'function') {
                success();
            }
        }).error(function(data, status, headers, config) {
            alert('ERROR: ' + headers);
        });
    }

    $scope.onRefresh();
});

//---------------------------------- ResourceCtrl ----------------------------------
app.controller('ResourceCtrl', function($scope, $log, $resource, config) {
    $scope.requestCounter = 0;
    $scope.saveRequestCounter = 0;

    $scope.onRefresh = function(cb) {
        getPersons(function(result) {
            $scope.persons = result;
            $scope.currentPerson = null;
            if (typeof success == 'function') {
                cb(result);
            }
        });
    }

    $scope.onSave = function()
    {
        savePerson($scope.currentPerson);
    }

    $scope.onSelect = function(id)
    {
        var url = config.getRestContext() + '/test/person/' + id;
        var res = $resource(url);
        res.get(function(value, responseHeaders) {
            $scope.currentPerson = value;
        });
    }

    var getPersons = function(success)
    {
        var url = config.getRestContext() + '/test/persons';
        var res = $resource(url);
        res.query(function(value, responseHeaders) {
                $scope.requestCounter++;
                success(value);
            },
            function(httpResponse) {
                $log.error("Error: " + url);
            });
    }

    var savePerson = function(value, success)
    {
        var url = config.getRestContext() + '/test/person';
        var res = $resource(url);
        res.save({}, value, function(httpResponse) {
                $scope.saveRequestCounter++;
                $scope.onRefresh();
                if (typeof success == 'function') {
                    success();
                }
            },
            function(httpResponse) {
                alert('ERROR: ' + httpResponse);
            });
    }

    $scope.onRefresh();
});
