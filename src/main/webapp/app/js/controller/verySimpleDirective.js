app.controller(function() {
    $scope.replace = false;
});

app.directive('mostSimple', function() {
    var ret = {
        restrict: 'E',
        template: '<div>Hi there</div>',
        replace: true
    };
    return ret;
});

app.directive('mostSimpleNoReplace', function() {
    var ret = {
        restrict: 'E',
        template: '<div>Hi there 2</div>',
        replace: false
    };
    return ret;
});

app.directive('mostSimpleTransclude', function() {
    var ret = {
        restrict: 'E',
        template: '<div>Original content will be inserted here: <span style="background-color: green" ng-transclude></span><div>',
        replace: true,
        transclude: true
    };
    return ret;
});

