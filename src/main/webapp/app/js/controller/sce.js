app.controller('SceController', ['$rootScope', '$scope', '$sce', function($rootScope, $scope, $sce) {
    $scope.txt = "Hello World";
    $scope.whatIsImportant = "World";
    $scope.html1 = "Hello <b>cica</b> !";
    $scope.html2 = "<button onclick='alert(\"Hello!\")'>Hello</button>";

    $scope.who = "John Smith";

    $scope.renderHtml = function(html_code)
    {
        return $sce.trustAsHtml(html_code);
    };

    $scope.message = function(msg) {
        alert(msg);
    }
}]);

app.filter('safeHtml', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);

app.directive('safeHtml', function() {
    function link(scope, element, attrs) {

        var update = function() {
            element.html(scope.html);
        }

        attrs.$observe('html', function(value) {
            update();
        });
    }

    return {
        link: link,
        scope:  {
            html:   '=safeHtml'
        }
    };
});

app.filter('highlight', function () {
    return function (text, search, caseSensitive) {
        if (search || angular.isNumber(search)) {
            text = text.toString();
            search = search.toString();
            if (caseSensitive) {
                return text.split(search).join('<span class="ui-highlight-match">' + search + '</span>');
            } else {
                return text.replace(new RegExp(search, 'gi'), '<span class="ui-highlight-match">$&</span>');
            }
        } else {
            return text;
        }
    };
});

