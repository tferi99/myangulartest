app.controller('InterControllerEventCtrl', function($scope, $log) {
    $scope.name = 'N.A.';
    $scope.onEmit = function() {
        $scope.$emit('EmittedEvent', $scope.name);
    };
    $scope.onBroadcast = function() {
        $scope.$broadcast('BroadcastedEvent', $scope.name);
    };

    $scope.$on('EmittedEvent', function(event, source) {
        $log.info('EmittedEvent[' + source + '] -> [' + $scope.name + ']');
    });

    $scope.$on('BroadcastedEvent', function(event, source) {
        $log.info('BroadcastedEvent[' + source + '] -> [' + $scope.name + ']');
    });
});

app.directive('scopeTestForm', function() {
    return {
        scope: false,
        replace: false,
        template: '<button ng-click="onEmit()">Emit</button><button ng-click="onBroadcast()">Broadcast</button>',
        link: function(scope, element, attrs) {
            scope.name = attrs.title;
            // put legend into fieldset
            if (element[0].tagName == 'FIELDSET') {
                element.name = 'FS_' + attrs.title;
                element.prepend('<legend>' + attrs.title + '</legend>');
            }

            var template = angular.element(template);
            element.append(template);
        }
    };
});
