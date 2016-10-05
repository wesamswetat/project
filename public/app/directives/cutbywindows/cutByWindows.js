/**
 * Created by Wesam on 10/4/2016.
 */

(function () {
    'use strict';

    var cutByWindows = angular.module('alom');

    cutByWindows.directive('cutByWindows', cutByWindowsFunction);

    function cutByWindowsFunction(temporaryDataService) {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/directives/cutbywindows/cutbywindows.html',
            link: function (scope, elem, attr) {
                scope.windowsTable = temporaryDataService.getArrayOfWindowsAfterCalculatorOfMedot();

                scope.toPdf = function (funcode) {

                }
            }
        }

    }
})();
