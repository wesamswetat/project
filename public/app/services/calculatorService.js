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

        calculator.setWindowObjectFromLocalAddWindowInfoDirective = function (windowHeightWidthAndInfo) {
            windowObjectFromLocalAddWindowInfoDirective = windowHeightWidthAndInfo;
        };

        calculator.calculate = function () {

            if (
                Object.keys(windowObjectFromMysql).length > 0 &&
                Object.keys(windowObjectFromLocalAddWindowInfoDirective).length > 0) {

                console.log(windowObjectFromMysql);
                console.log(windowObjectFromLocalAddWindowInfoDirective);
                windowObjectFromLocalAddWindowInfoDirective.catalogDes = windowObjectFromMysql.des;
                windowObjectFromLocalAddWindowInfoDirective.company = windowObjectFromMysql.company;
                windowObjectFromLocalAddWindowInfoDirective.sedra_name = windowObjectFromMysql.sedra_name;
                windowObjectFromLocalAddWindowInfoDirective.rowds_winds = windowObjectFromMysql.rowds_winds;
                windowObjectFromLocalAddWindowInfoDirective.sedra_num = windowObjectFromMysql.sedra_num;
                windowObjectFromLocalAddWindowInfoDirective.fun_code = windowObjectFromMysql.fun_code;
                windowObjectFromLocalAddWindowInfoDirective.indexInArrayOfWindowsAfterCalculatorOfMedot =
                    temporaryDataService.getArrayOfWindowsAfterCalculatorOfMedot(windowObjectFromMysql.fun_code) ?
                        temporaryDataService.getArrayOfWindowsAfterCalculatorOfMedot(windowObjectFromMysql.fun_code).length : 3;
                temporaryDataService.setArrayOfWindowsAddedInAddWindowPage(windowObjectFromLocalAddWindowInfoDirective);

                var
                    i,
                    profelNmae = JSON.parse(windowObjectFromMysql.profel_des),
                    profelMakat = JSON.parse(windowObjectFromMysql.profel_makat),
                    profelCuts = JSON.parse(windowObjectFromMysql.profel_cuts),
                    formolas = windowObjectFromMysql.profel_formela;

                formolas = formolas.replace(/l/g , windowObjectFromLocalAddWindowInfoDirective.width);
                formolas = formolas.replace(/h/g , windowObjectFromLocalAddWindowInfoDirective.height);

                formolas = JSON.parse(formolas);

                for (i = 0 ; i < Object.keys(formolas).length ; i = i + 1){
                    if ( formolas[i] != '+'){
                        formolas[i] = eval(formolas[i]);
                    }
                    console.log(formolas[i]);
                }

                if (temporaryDataService.getArrayOfWindowsAfterCalculatorOfMedot(windowObjectFromMysql.fun_code)){
                    temporaryDataService.setArrayOfWindowsAfterCalculatorOfMedot(windowObjectFromMysql.fun_code, formolas);
                } else {
                    temporaryDataService.setArrayOfWindowsAfterCalculatorOfMedot(windowObjectFromMysql.fun_code ,formolas, windowObjectFromMysql.des, profelNmae, profelMakat, profelCuts);
                }

                console.log(formolas);

                /* ######## Cute By Profelem Calculator ###### */

                temporaryDataService.setArrayOfProfelemToCute(profelMakat, profelCuts, formolas);


            }
        };

        return calculator;
    }

})();
