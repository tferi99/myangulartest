app.controller('AnimateCallbackCtrl', function($scope) {
    $scope.enterAnimDone = function() {
        alert('xxxx');
    }

    $scope.done = function() {
        alert('DONE');
    }

});

/*
app.directive('enterOnClick', function($animate, $log) {
    return {
        scope: {
            'enterOnClick': '&'
        },
        link: function (scope, element) {
            scope.enterOnClick = scope.enterOnClick || (function() {});
            element.on('click', function() {
                scope.$apply(function() {
                    $log.debug("CLICKED");
                    $animate.enter(element, scope.enterOnClick);
                });
            });
        }
    };
});
*/

app.directive('leaveOnClick', function($animate) {
    return {
        scope: {
            'leaveOnClick': '&'
        },
        link: function (scope, element) {
            scope.leaveOnClick = scope.leaveOnClick || (function() {});
            element.on('click', function() {
                scope.$apply(function() {
                    $animate.leave(element, scope.leaveOnClick);
                });
            });
        }
    };
});
