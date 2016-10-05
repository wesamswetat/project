/**
 * Created by Wesam on 9/5/2016.
 */

(function () {

    var buttonsD = angular.module('alom');

    buttonsD.directive('buttonsDirective', function ($state, localDataService) {
        return {
            restrict: 'EA',
            templateUrl: 'app/directives/buttongrope/buttongroup.html',
            link: function (scope, elme, attr) {
                scope.navigationButtons = localDataService.buttonsGroup;
                scope.btnDanger = '';
                scope.button = scope.navigationButtons[0];
                scope.active = function (index) {
                    console.log(index);
                    console.log(scope.navigationButtons[index]);
                    scope.button = scope.navigationButtons[index];
                    $state.go('home.'+scope.button);
                }
            }
        };
    });

})();