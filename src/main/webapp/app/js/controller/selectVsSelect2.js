app.controller('SelectController', function($rootScope, $scope) {
    $scope.items = [
        {value:"1", label:'item 1'},
        {value:"2", label:'item 2'},
        {value:"3", label:'item 3'}
    ];

    $scope.currentItem = $scope.items[1];
    $scope.currentItemValue = 2;

    $scope.currentItem2 = $scope.items[1];
    $scope.currentItemValue2 = 2;

    //-----------------------------------------------------------------------------
    $scope.items2 = [ { id: "1", name: "text1"}, { id: "2", name: "text2" } ];

    $scope.choose1 = function() {
        console.log("1 choosen");
        $scope.selectedItem = "1";
    };

    $scope.choose2 = function() {
        console.log("2 choosen");
        $scope.selectedItem = "2";
    };
});
