/**
 * Created by Wesam on 9/5/2016.
 */

(function () {

    var buttonsD = angular.module('alom');

    buttonsD.directive('buttonsDirective', function ($state, localDataService, $location) {
        return {
            restrict: 'EA',
            templateUrl: 'app/directives/buttongrope/buttongroup.html',
            link: function (scope, elme, attr) {
                scope.navigationButtons = localDataService.buttonsGroup;
                scope.btnDanger = '';
                var temp = $location.path();
                temp = temp.replace('/home/', '');
                scope.button = temp;
                console.log(temp);
                scope.active = function (index) {
                    scope.button = scope.navigationButtons[index];
                    $state.go('home.'+scope.button);
                };

                scope.$on('someEvent', function(event, mass) { scope.button = scope.navigationButtons[0]; });
            }
        };
    });

})();