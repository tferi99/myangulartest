app.controller('SearchFilterCtrl', function($scope) {
    $scope.persons = [
        {name: 'Lapos Elemér', email: 'le@test.com', phone: '+36 20 145 3426'},
        {name: 'Végh Béla', email: 'vb@test.com', phone: '+49 2 243 3565'},
        {name: 'John Smith', email: 'js@test.com', phone: '+36 20 145 3424 (123)'},
        {name: 'Jane Doe', email: 'jd@test.com', phone: '+36 30 255 8424'},
        {name: 'Lófasz Józsi', email: 'lj@test.com', phone: '+36 20 145 3425'},
        {name: 'Alma Tivadar', email: 'at@test.com', phone: '+36 30 456 3729'}
    ];

    $scope.escapeRegex = function(txt) {
        if (!txt) {
            return txt;
        }
        return txt.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
});

