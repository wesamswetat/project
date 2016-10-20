/**
 * Created by Wesam on 10/2/2016.
 */

(function () {
    'use strict';

    var calculator = angular.module('alom');

    calculator.factory('calculatorService', calculatorServiceFunction);

    function calculatorServiceFunction(temporaryDataService) {

        var calculator = {};

        var
            windowObjectFromMysql = {},
            windowObjectFromLocalAddWindowInfoDirective = {};

        calculator.setWindowObjectFromMysql = function (window) {
            windowObjectFromMysql = window;
        };

        calculator.getWindowObjectFromMysql = function () {
            return windowObjectFromMysql;
        };

        calculator.setWindowObjectFromLocalAddWindowInfoDirective = function (windowHeightWidthAndInfo) {
            windowObjectFromLocalAddWindowInfoDirective = windowHeightWidthAndInfo;
        };

        calculator.calculate = function () {

            if (
                Object.keys(windowObjectFromMysql).length > 0 &&
                Object.keys(windowObjectFromLocalAddWindowInfoDirective).length > 0) {

                windowObjectFromLocalAddWindowInfoDirective.catalogDes = windowObjectFromMysql.des;
                windowObjectFromLocalAddWindowInfoDirective.company = windowObjectFromMysql.company;
                windowObjectFromLocalAddWindowInfoDirective.sedra_name = windowObjectFromMysql.sedra_name;
                windowObjectFromLocalAddWindowInfoDirective.rowds_winds = windowObjectFromMysql.rowds_winds;
                windowObjectFromLocalAddWindowInfoDirective.sedra_num = windowObjectFromMysql.sedra_num;
                windowObjectFromLocalAddWindowInfoDirective.fun_code = windowObjectFromMysql.fun_code;
                windowObjectFromLocalAddWindowInfoDirective.subject = windowObjectFromMysql.subject;
                windowObjectFromLocalAddWindowInfoDirective.indexInArrayOfWindowsAfterCalculatorOfMedot =
                    temporaryDataService.getArrayOfWindowsAfterCalculatorOfMedot(windowObjectFromMysql.fun_code) ?
                        temporaryDataService.getArrayOfWindowsAfterCalculatorOfMedot(windowObjectFromMysql.fun_code).length : 4;
                temporaryDataService.setArrayOfWindowsAddedInAddWindowPage(windowObjectFromLocalAddWindowInfoDirective);

                var
                    i, re,
                    profelNmae = JSON.parse(windowObjectFromMysql.profel_des),
                    profelMakat = JSON.parse(windowObjectFromMysql.profel_makat),
                    profelCuts = JSON.parse(windowObjectFromMysql.profel_cuts),
                    hl = JSON.parse(windowObjectFromMysql.h_l),
                    formolas = windowObjectFromMysql.profel_formela,
                    glassFormolas = windowObjectFromMysql.zegog,
                    glass_amount = JSON.parse(windowObjectFromMysql.glass_amount);


                for (i = hl.h - 1; i >= 0; i = i - 1) {
                    if (i === 0) {
                        re = new RegExp("h", "g");
                    } else {
                        re = new RegExp("h" + i, "g");
                    }
                    formolas = formolas.replace(re, windowObjectFromLocalAddWindowInfoDirective.height[i]);
                    glassFormolas = glassFormolas.replace(re, windowObjectFromLocalAddWindowInfoDirective.height[i]);

                }

                for (i = hl.l - 1; i >= 0; i = i - 1) {
                    if (i === 0) {
                        re = new RegExp("l", "g");
                    } else {
                        re = new RegExp("l" + i, "g");
                    }
                    formolas = formolas.replace(re, windowObjectFromLocalAddWindowInfoDirective.width[i]);
                    glassFormolas = glassFormolas.replace(re, windowObjectFromLocalAddWindowInfoDirective.width[i]);
                }


                // formolas = formolas.replace(/l/g , windowObjectFromLocalAddWindowInfoDirective.width);
                // formolas = formolas.replace(/h/g , windowObjectFromLocalAddWindowInfoDirective.height);

                formolas = JSON.parse(formolas);
                glassFormolas = JSON.parse(glassFormolas);

                for (i = 0; i < Object.keys(formolas).length; i = i + 1) {
                    if (formolas[i] != '+') {
                        formolas[i] = eval(formolas[i]);
                    }

                }

                if (temporaryDataService.getArrayOfWindowsAfterCalculatorOfMedot(windowObjectFromMysql.fun_code)) {
                    temporaryDataService.setArrayOfWindowsAfterCalculatorOfMedot(windowObjectFromMysql.fun_code, formolas);
                } else {
                    temporaryDataService.setArrayOfWindowsAfterCalculatorOfMedot(windowObjectFromMysql.fun_code, formolas, windowObjectFromMysql.des, profelNmae, profelMakat, profelCuts);
                }


                /* ######## Cute By Profelem Calculator ###### */

                temporaryDataService.setArrayOfProfelemToCute(profelMakat, profelCuts, formolas);
                temporaryDataService.setArrayOfAllProfelsOfAllWindowsFullDataFromMysql(profelMakat);
                temporaryDataService.setArrayOfGlassOrder(glassFormolas, glass_amount, windowObjectFromLocalAddWindowInfoDirective);

            }
        };

        return calculator;
    }

})();
