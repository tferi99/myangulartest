'use strict';

angular.module('app')

.filter('jsonAll', function ($sce) {
    return function (val) {
        return JSON.stringify(val, null, '  ');
    };
});
