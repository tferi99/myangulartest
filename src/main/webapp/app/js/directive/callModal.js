angular.module('app')

.directive('callModal', function () {
        var d = {
            restrict: 'A',
            scope: {
                data: '=',
                onOk: '&',
                onCancel: '&',
                modalBodyTemplate: '@'
            },

});