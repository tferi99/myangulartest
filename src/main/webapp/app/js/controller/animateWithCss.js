app.controller('AnimateWithCssCtrl', function($scope) {
    $scope.d2x = 0;
    $scope.d2XStyle = {};
    function initD2XStyle() {
        $scope.d2XStyle = {
            left: $scope.d2x + 'px'
        };
    }

    $scope.$watch('d2x', function() {
        initD2XStyle();
    });

    initD2XStyle();

});

