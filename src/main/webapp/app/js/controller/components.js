app.controller('CompController', function($scope) {
        $scope.cities = [
            {id:0, name: 'Seattle'},
            {id:1, name: 'San Francisco'},
            {id:2, name: 'Chicago'},
            {id:3, name: 'New York'},
            {id:4, name: 'Boston'}
        ];
        $scope.animals = [
            {name: 'cat', type: 'domestic'},
            {name: 'lion', type: 'wild'},
            {name: 'dog', type: 'domestic'},
            {name: 'wolf', type: 'wild'},
            {name: 'pig', type: 'domestic'},
        ];

        $scope.onChangeCity = function() {
            if ($scope.city) {
                console.log("Current city: " + $scope.city.name);
            }
        }

        $scope.$watch('animal', function(newVal, oldVal) {
            var oldName = "?";
            var newName = "?";
            if (oldVal) {
                oldName = oldVal.name;
            }
            if (newVal) {
                newName = newVal.name;
            }
            console.log("Animal changed from " + oldName + " to " + newName);
        });

        $scope.animal = $scope.animals[2];
        $scope.city = $scope.cities[3];    //{id:2, name: 'Chicago'};
    }
);
