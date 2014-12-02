app.config(function($translateProvider, REST_CONTEXT_PATH) {
    /*
     // static
     $translateProvider.translations('en', {
     test_headline: 'Hello there, This is my awesome app!',
     test_introText: 'And it has i18n support!'
     })
     .translations('de', {
     test_headline: 'Hey, das ist meine großartige App!',
     test_introText: 'Und sie untersützt mehrere Sprachen!'
     });
     */

    // loading asynchronously
    $translateProvider.useUrlLoader(REST_CONTEXT_PATH + "/textResource");

    $translateProvider.preferredLanguage('en');
}).run(function($translate) {
});


app.controller('TranslateController', function($scope, $translate, $log) {
    $scope.currentLanguage = "en";
    $scope.txtKey = "test.text2";

    $scope.onChangeLanguage = function(lang) {
        $scope.currentLanguage = lang;
        $translate.uses(lang);
    }

    $scope.comboItems = [
        {label:'combo.item1', value: 1},
        {label:'combo.item2', value: 2},
        {label:'combo.item3', value: 3}
    ];

    $scope.selectedcomboItem = $scope.comboItems[1];

    $scope.init = function() {
        $scope.comboItems.forEach(function(item) {
            var t = $translate(item.label);
            item.translatedLabel = t;
        });
    }

    $scope.init();
    var a = 65;
});
