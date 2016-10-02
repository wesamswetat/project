/**
 * Created by Wesam on 10/2/2016.
 */

(function () {
    'use strict';

    var calculator = angular.module('alom');

    calculator.factory('calculatorService', calculatorServiceFunction);

    function calculatorServiceFunction() {

        var calculator = {};

        var
            windowObjectFromMysql = {},
            windowObjectFromLocalAddWindowInfoDirective = {};

        calculator.setWindowObjectFromMysql = function (window) {
            windowObjectFromMysql = window;
        };

        calculator.setWindowObjectFromLocalAddWindowInfoDirective = function (windowHeightWidthAndInfo) {
            windowObjectFromLocalAddWindowInfoDirective = windowHeightWidthAndInfo;
        };

        calculator.calculate = function () {

            if (
                Object.keys(windowObjectFromMysql).length > 0 &&
                Object.keys(windowObjectFromLocalAddWindowInfoDirective).length > 0) {

                console.log(windowObjectFromMysql);
                console.log(windowObjectFromLocalAddWindowInfoDirective);


            }
        };

        return calculator;
    }

})();
