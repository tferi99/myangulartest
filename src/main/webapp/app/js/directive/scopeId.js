angular.module('app')

.directive('scopeId', function () {
    var d = {
        restrict: 'E',
        scope: false,
        template: '<span style="background-color: #ffff00; border: 1px solid blue; padding-left: 3px; padding-right: 3px">{{$id}} (-&gt;{{$parent.$id}})</span>',
        replace: true
    }
    return d;
});
