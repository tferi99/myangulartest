app.controller('SimpleDirecController', function($scope) {
    $scope.person1 = {};
    $scope.person1.name = 'John Smith';
    $scope.person1.email = 'js@test.com';
    $scope.color1 = 'red';

    $scope.onCall1 = function(v1, v2, fn) {
        alert(v1 + ','  + v2 + ',' + fn);

        alert($scope.onCall1.toString());
    }

    $scope.person2 = {};
    $scope.person2.name = 'Jane Doe';
    $scope.person2.email = 'jd@test.com';
    $scope.color2 = 'yellow';

    $scope.person3 = {};
    $scope.person3.name = 'Lofasz Jozsi';
    $scope.person3.email = 'lj@test.com';
    $scope.color3 = 'green';
})

app.directive('myPerson', function() {
    var ret = {
        restrict: 'E',
        scope: {
            person: '=person',      // bound a scope property to an incoming attribute
            color: '=',             // it a shorthand if attribute name and scope variable have the same name
            company: '@',           // filled with attribute value directly
            callback: '&'           // bound a function with an attribute filled from the scope parent scope
        },
        template: '<div style="background: {{color}}">Hello {{person.name}}! Your email is: {{person.email}} Works here: {{company}} ' +
            '<button ng-show="hasCallback()" ng-click="callback(1, 2, 3)">Call</button>' +
            '<button ng-click="test()">Test</button> </div>',
        controller: function($scope) {
            $scope.hasCallback = function() {
                var t = typeof $scope.callback;
                return t == 'function';
            }
            $scope.test = function() {
                var res = $scope.callback();
                alert("Result: " + res);
                alert($scope.callback.toString());
            }
        },
        link: function(scope, elm, attrs) {
        }
    };
    return ret;
});
