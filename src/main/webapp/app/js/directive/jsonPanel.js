angular.module('app')

.directive('jsonPanel', function () {
    var dontShowAll = '<pre ng-if="!isAll()" class="jsonPanelData">{{data | json}}</pre>';
    var showAll = '<pre ng-if="isAll()" class="jsonPanelData">{{data | jsonAll}}</pre>';
    var dontShowAll2 = '<pre ng-if="!isAll()" class="dropdown-menu jsonPanelData">{{data | json}}</pre>';
    var showAll2 = '<pre ng-if="isAll()" class="dropdown-menu jsonPanelData">{{data | jsonAll}}</pre>';
    var temp = '<button ng-if="isShowToggleAll()" ng-click="toggleAll()">$</button><span ng-if="!isCompact()">' + dontShowAll + showAll + '</span><span ng-if="isCompact()" class="btn-group"><button class="dropdown-toggle" data-toggle="dropdown">{{label}}</button>' + dontShowAll2 + showAll2 + '</div>';

    var d = {
        restrict: 'E',
        scope: {
            data: '=',
            label: '@',
            compact: '@',
            all: '@',
            showToggleAll: '@'
        },
        template: temp,
        link: function(scope, element, attrs) {
            attrs.$observe('label', function(val) {
                if (!angular.isDefined(val) ) {
                    scope.label = 'json';
                }
            });
            attrs.$observe('compact', function(val) {
                if (!angular.isDefined(val) ) {
                    scope.compact = "false";
                }
            });
            attrs.$observe('all', function(val) {
                if (!angular.isDefined(val) ) {
                    scope.all = "false";
                }
            });
            attrs.$observe('showToggleAll', function(val) {
                if (!angular.isDefined(val) ) {
                    scope.showToggleAll = "false";
                }
            });
        },
        controller: function($scope) {
            $scope.isCompact = function() {
                return $scope.compact == 'true';
            }
            $scope.isShowToggleAll = function() {
                return $scope.showToggleAll == 'true';
            }
            $scope.isAll = function() {
                return $scope.all == 'true';
            }
            $scope.toggleAll = function() {
                if ($scope.all == 'true') {
                    $scope.all = 'false';
                }
                else {
                    $scope.all = 'true';
                }
            };
        }
    }
    return d;
});
