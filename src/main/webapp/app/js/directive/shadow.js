angular.module('app')

.directive('shadow', function() {
    return {
        scope: {
            target: '=shadow'
        },
        link: function(scope, el, att) {
            scope[att.shadow] = angular.copy(scope.target);

            scope.commit = function() {
                scope.target = scope[att.shadow];
            };
        }
    };
});