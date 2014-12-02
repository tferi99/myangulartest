'use strict';

var services = angular.module('app.services', []).config(function($provide) {
    $provide.constant("REST_CONTEXT_PATH", "/myangulartest/rest");
});

/*
 * General App configuration data
 */
services.factory('config', function (REST_CONTEXT_PATH) {
    var mockRESTApi = true;

    // Public API here
    return {

        mockRESTApi: function () {
            return mockRESTApi;
        },

        getRestContext: function() {
            return REST_CONTEXT_PATH;
        }
    };
});

services.factory('personService', function (config, $http) {
    return {
        getPersons: function(successCb) {
            $http.get(config.getRestContext() + '/test/persons')
                .success(function(data, status, headers, config) {
                    successCb(data);
                });
        },

        getPerson: function(id, successCb) {
            $http.get(config.getRestContext() + '/test/person/' + id).success(function(data, status, headers, config) {
                successCb(data);
            });
        },

        savePerson: function(person, successCb) {
            $http.post(config.getRestContext() + '/test/person', person).success(function(data, status, headers, config) {
                successCb(data);
            });
        }
    };
});

services.factory('textResourceService', function (config, $http) {
    return {
        getTextResource: function(languageId, successCb) {
            $http.get(config.getRestContext() + '/textResource2/' + languageId)
                .success(function(data, status, headers, config) {
                    successCb(data);
                })
                .error(function(data, status, headers, config) {
                    console.log("ERROR");
                });
        }
    };
});

services.factory('carService', function() {
    var cars = [
        {id:'0', type: 'Lada'},
        {id:'1', type: 'Skoda'},
        {id:'2', type: 'Trabant'},
    ];
    return {
        getAll: function() {
            return cars;
        },

        get: function(id) {
            for(var i in cars) {
                var car = cars[i];
                if (id == car.id) {
                    return car;
                }
            };
            return null;
        }
    };
});