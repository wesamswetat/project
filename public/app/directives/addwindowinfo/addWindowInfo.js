/**
 * Created by Wesam on 10/2/2016.
 */

(function () {
    'use strict';

    var windowInfo = angular.module('alom');

    windowInfo.directive('addWindowInfo', addWindowInfoFunction);

    function addWindowInfoFunction(calculatorService, temporaryDataService) {
        return{
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/directives/addwindowinfo/addWindowInfo.html',
            link: function (scope, elme, attr) {
                scope.windowHeightWidthAndInfo = {};

                scope.onSubmit = function () {
                    scope.windowHeightWidthAndInfo.price =
                        scope.windowHeightWidthAndInfo.cost * scope.windowHeightWidthAndInfo.height / 100 *
                        scope.windowHeightWidthAndInfo.width / 100 ;

                    calculatorService.setWindowObjectFromLocalAddWindowInfoDirective(scope.windowHeightWidthAndInfo);
                    calculatorService.calculate();
                }
            }

        }
    }
})();
