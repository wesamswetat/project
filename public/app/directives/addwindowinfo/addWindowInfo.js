/**
 * Created by Wesam on 10/2/2016.
 */

(function () {
    'use strict';

    var windowInfo = angular.module('alom');

    windowInfo.directive('addWindowInfo', addWindowInfoFunction);

    function addWindowInfoFunction(calculatorService) {
        return{
            restrict: 'EA',
            replce: true,
            scope: {},
            templateUrl: 'app/directives/addwindowinfo/addWindowInfo.html',
            link: function (scope, elme, attr) {
                scope.windowHeightWidthAndInfo = {};

                scope.onSubmit = function () {
                    calculatorService.setWindowObjectFromLocalAddWindowInfoDirective(scope.windowHeightWidthAndInfo);
                    calculatorService.calculate();
                }
            }

        }
    }
})();
