app.controller('IntoScopeVarController', function($scope) {
    this.num1 = 1;
    this.num2 = 2;

    this.onSave = function() {
        alert('Saved');
    };
});
