app.controller("TabsParentController", function ($scope) {
    var setAllInactive = function() {
        angular.forEach($scope.workspaces, function(workspace) {
            workspace.active = false;
        });
    };

    var addNewWorkspace = function() {
        var id = $scope.workspaces.length + 1;
        $scope.workspaces.push({
            id: id,
            name: "Workspace " + id,
            active: true
        });
    };

    $scope.workspaces =
        [
            { id: 1, name: "Workspace 1", active:true  },
            { id: 2, name: "Workspace 2", active:false }
        ];

    $scope.addWorkspace = function () {
        setAllInactive();
        addNewWorkspace();
    };

});


app.controller("TabsChildController", function ($scope) {
});


app.controller("TabsDynamicController", function ($scope) {
    $scope.loaded = {};

    $scope.tabs = [
        {id:1, heading:'First'},
        {id:2, heading:'Second'},
        {id:3, heading:'Thirst'},
        {id:4, heading:'Fourth'}
    ];
});

app.controller("TabContentController", function ($scope, $log) {
    $scope.init = function(id) {
        $log.info("Controller[" + id + "] initialized");
    }
});
