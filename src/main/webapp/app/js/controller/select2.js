app.controller('Select2Controller', function($scope, $http) {
    //-------------------- common private --------------------
    this.items = [
        {
            "id" : 1,
            "text" : "First"
        },
        {
            "id" : 2,
            "text" : "Second",
            "color" : "red"
        },
        {
            "id" : 3,
            "text" : "Third",
            "color" : "orange"
        },
        {
            "id" : 4,
            "text" : "Fourth",
            "color" : "red"
        }
    ];

    this.items2 = [
        {
            "id" : 1,
            "text" : "Cica",
            "color" : "cirmos"
        },
        {
            "id" : 2,
            "text" : "Kutya",
            "color" : "black"
        }
    ];

    this.formatResult = function (data) {
        var icon;
        if (data.id == 1) {
            icon = "fa-hdd-o";
        }
        else {
            icon  = "fa-arrow-circle-o-right";
        }
        return "<i class=\"fa " + icon + "\"></i> " + data.text;
    };

    this.formatSelection = function (data) {
        return "<b>" + this.formatResult(data) + "</b>";
    };

    this.escapeMarkup = function (m) {
        return m;
    }

    this.tempConfigWithData = {
        multiple: false,
        data: this.items2,
        formatResult: this.formatResult,
        formatSelection: this.formatSelection,
        dropdownCssClass: "bigdrop",
        escapeMarkup: this.escapeMarkup
    };

    this.tempConfigWithoutData = {
        multiple: false,
        formatResult: this.formatResult,
        formatSelection: this.formatSelection,
        dropdownCssClass: "bigdrop",
        escapeMarkup: this.escapeMarkup,
/*        query: function(options) {
            var a = 5;
        }*/
    };

    //---------------------- scope -----------------------
    $scope.items = this.items;
    $scope.selObjId = 2;

    $scope.items2 = this.items2;
    //$scope.selObj = $scope.items2[1];

    $scope.m3aConfig = this.tempConfigWithData;
    $scope.m3bConfig = this.tempConfigWithoutData;
    $scope.selObjM3b = $scope.items2[1];

    $scope.directJQueryTemp = function() {
        $("#temp").select2(                        {
            formatResult: format,
            formatSelection: format,
            escapeMarkup: function(m) {
                var fasz = 1;
                return m;
            }
        });
    }

    $scope.$watch('selObjM3b', function(newVal, oldVal) {
        var a = 5;
    })
});

function format(state) {
    var originalOption = state.element;

    return "<i class=\"fa fa-hdd-o\"></i> " + state.text;
}

