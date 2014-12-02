app.controller('DomModDirectiveCtrl', function($scope) {
    $scope.someText = "And this is written by directive."
})

app.directive('myContent', function() {
    function link(scope, element, attrs) {
        function update()
        {
            element.text(scope.txt);
        }

        update();
    }

    return {
        scope: {
            txt: '=myContent'
        },
        link: link
    };
});

