app.controller('SimpleDirectiveMethodWithParamCtrl', function($scope) {
    $scope.data = 'default value';
    $scope.doSomething = function(u, ud) {
        alert('CALLBACK - user:' + u + " data:" + ud);
    }
})

app.directive('myDirective', function() {
    var ret = {
        restrict: 'E',
        scope: {
            userData: '=',
            ud: '=',
            user: '@',
            callback: '&'       // bound a function from the scope
        },
        template: '<div>Hello [{{user}}] data: [{{userData}}] <button ng-show="hasCallback()" ng-click="callback({user: user, userData: userData})">Callback</button>',
        link: function(scope,elem,attrs) {

            scope.hasCallback = function() {
                return angular.isDefined(attrs.callback);
            }
        }
    };
    return ret;
});
