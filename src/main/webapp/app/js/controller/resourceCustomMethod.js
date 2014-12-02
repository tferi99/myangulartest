app.service('RestCustMethodSrv', function(config, $resource, $log) {
    return {
        getPersons : function(success) {
            var res = $resource(config.getRestContext() + '/test/persons');

            res.prototype.getFullName = function() {
                return this.firstName + ", " + this.lastName;
            }

            res.query(function(value, responseHeaders) {
                    success(value);
                },
                function(httpResponse) {
                    $log.error("Error: " + url);
                });
        }

    }
});

app.controller('RestCustMethodCtrl', function($scope, RestCustMethodSrv) {
    RestCustMethodSrv.getPersons(function(persons) {
        $scope.persons = persons;
    })
});
