/**
 * Created by Wesam on 10/2/2016.
 */

(function () {
    'use strict';

    var temporaryData = angular.module('alom');

    temporaryData.factory('temporaryDataService', temporaryDataServiceFunction);

    function temporaryDataServiceFunction($http, localDataService) {

        var tempData = {};

        var
            URL = localDataService.getUrl(),
            companySedrot = {},
            windowsDesAndFuncode = {},
            windowsFullObjectFromMySql = {},
            arrayOfWindowsAddedInAddWindowPage = [],
            arrayOfWindowsAfterCalculatorOfMedot = {},
            arrayOfProfelemToCute = {},
            arrayOfAllProfelsOfAllWindowsFullDataFromMysql = {},
            arrayOfOrder = {},
            arrayOfGlassOrder = {};

        tempData.setCompanySedrot = function (company, sedrot) {
            companySedrot[company] = sedrot;
        };

        tempData.getCompanySedrot = function (company) {
            return companySedrot[company];
        };

        tempData.setWindowsDesAndFuncode = function (companyAndSedra, windows) {
            windowsDesAndFuncode[companyAndSedra] = windows;
        };

        tempData.getWindowsDesAndFuncode = function (companyAndSedra) {
            return windowsDesAndFuncode[companyAndSedra];
        };

        tempData.setWindowsFullObjectFromMySql = function (funCode, window) {
            window.abzarem_num_in_srtot = JSON.parse(window.abzarem_num_in_srtot);
            window.abzarem_kamot = JSON.parse(window.abzarem_kamot);
            window.abzarem_makat = JSON.parse(window.abzarem_makat);
            window.atmem_mbrashot_makat = JSON.parse(window.atmem_mbrashot_makat);
            window.atmem_mbrashot_num_in_srtot = JSON.parse(window.atmem_mbrashot_num_in_srtot);
            window.glass_amount = JSON.parse(window.glass_amount);
            window.h_des = JSON.parse(window.h_des);
            window.h_l = JSON.parse(window.h_l);
            window.l_des = JSON.parse(window.l_des);
            window.profel_makat = JSON.parse(window.profel_makat);
            window.profel_cuts = JSON.parse(window.profel_cuts);
            window.profel_des = JSON.parse(window.profel_des);
            window.profel_formela = JSON.parse(window.profel_formela);
            window.zegog = JSON.parse(window.zegog);
            windowsFullObjectFromMySql[funCode] = window;
        };

        tempData.getWindowsFullObjectFromMySql = function (funCode) {
            if(funCode){
                return windowsFullObjectFromMySql[funCode];
            } else {
                return windowsFullObjectFromMySql;
            }
        };

        tempData.setArrayOfWindowsAddedInAddWindowPage = function (windowOrWindowIdToDelet) {

            if (angular.isNumber(windowOrWindowIdToDelet)) {
                arrayOfWindowsAddedInAddWindowPage.splice(windowOrWindowIdToDelet, 1);
            } else if (angular.isObject(windowOrWindowIdToDelet)) {
                var temp = {};
                angular.copy(windowOrWindowIdToDelet, temp);
                arrayOfWindowsAddedInAddWindowPage.push(temp);
            }
        };

        tempData.removeFromArrayOfWindowsAddedInAddWindowPage = function (index) {
            arrayOfWindowsAddedInAddWindowPage.splice(index, 1);
        };

        tempData.getArrayOfWindowsAddedInAddWindowPage = function () {
            return arrayOfWindowsAddedInAddWindowPage;
        };

        tempData.setArrayOfWindowsAfterCalculatorOfMedot = function (funcode, id, formolas) {

            if (arrayOfWindowsAfterCalculatorOfMedot[funcode]) {
                arrayOfWindowsAfterCalculatorOfMedot[funcode][id] = formolas;
            } else {
                arrayOfWindowsAfterCalculatorOfMedot[funcode] = {};
                arrayOfWindowsAfterCalculatorOfMedot[funcode][id] = formolas;
            }
        };

        tempData.removeFromArrayOfWindowsAfterCalculatorOfMedot = function (funCode, id) {
            if (arrayOfWindowsAfterCalculatorOfMedot.hasOwnProperty(funCode)){
                if (arrayOfWindowsAfterCalculatorOfMedot[funCode].hasOwnProperty(id)){
                    delete arrayOfWindowsAfterCalculatorOfMedot[funCode][id];
                }
                if (Object.keys(arrayOfWindowsAfterCalculatorOfMedot[funCode]).length === 0){
                    delete arrayOfWindowsAfterCalculatorOfMedot[funCode];
                }
            }
        };

        tempData.getArrayOfWindowsAfterCalculatorOfMedot = function (funcode) {
            return funcode ? arrayOfWindowsAfterCalculatorOfMedot[funcode] : arrayOfWindowsAfterCalculatorOfMedot;
        };

        tempData.setArrayOfProfelemToCute = function (profelemObject, numToCutObject, medotObject) {
            var
                i, temp, profelTemp;

            for (i = 0; i < Object.keys(profelemObject).length; i = i + 1) {
                profelTemp = profelemObject[i].replace(/\*/g, '');
                profelTemp = profelTemp.split(' ');
                profelTemp = profelTemp[0];
                if (profelTemp in arrayOfProfelemToCute) {
                    if (medotObject[i] in arrayOfProfelemToCute[profelTemp]) {

                        arrayOfProfelemToCute[profelTemp][medotObject[i]] =
                            eval(arrayOfProfelemToCute[profelTemp][medotObject[i]])
                            + eval(numToCutObject[i]);

                    } else {
                        arrayOfProfelemToCute[profelTemp][medotObject[i]] = numToCutObject[i];
                    }
                } else {
                    arrayOfProfelemToCute[profelTemp] = {};
                    temp = arrayOfProfelemToCute[profelTemp];
                    temp[medotObject[i]] = numToCutObject[i];
                }
            }
            setArrayOfOrder();
        };

        tempData.removeFromArrayOfProfelemToCute = function (funCode, id) {

            var
                key,
                makatem = (windowsFullObjectFromMySql[funCode].profel_makat),
                kamot = (windowsFullObjectFromMySql[funCode].profel_cuts),
                medot = arrayOfWindowsAfterCalculatorOfMedot[funCode][id];

            for (key in makatem) {

                if (makatem.hasOwnProperty(key)) {
                    if (angular.isString(arrayOfProfelemToCute[makatem[key]][medot[key]])) {
                        delete arrayOfProfelemToCute[makatem[key]][medot[key]];
                    } else {
                        arrayOfProfelemToCute[makatem[key]][medot[key]] = arrayOfProfelemToCute[makatem[key]][medot[key]] - eval(kamot[key]);
                        if (arrayOfProfelemToCute[makatem[key]][medot[key]] === 0) {
                            delete arrayOfProfelemToCute[makatem[key]][medot[key]];
                        }
                    }
                    if (Object.keys(arrayOfProfelemToCute[makatem[key]]).length === 0) {
                        delete arrayOfProfelemToCute[makatem[key]];
                    }
                } else {

                }
            }
            setArrayOfOrder();
        };

        tempData.getArrayOfProfelemToCute = function () {
            return arrayOfProfelemToCute;
        };

        tempData.setArrayOfAllProfelsOfAllWindowsFullDataFromMysql = function (profelMakat) {

            var i, j = 0, makats = new Set(), temp = {}, profelTemp;
            temp.data = {};

            for (i = 0; i < Object.keys(profelMakat).length; i = i + 1) {
                profelTemp = profelMakat[i].replace(/\*/g, '');
                profelTemp = profelTemp.split(' ');
                if (!arrayOfAllProfelsOfAllWindowsFullDataFromMysql.hasOwnProperty(profelTemp[0])) {
                    if (makats.has(profelTemp[0])) {

                    } else {
                        makats.add(profelTemp[0]);
                        temp.data[j] = profelTemp[0];
                        j = j + 1;
                    }
                }
            }

            if (Object.keys(temp.data).length > 0) {
                $http({method: 'POST', url: URL + '/profels', data: temp})
                    .then(function successCallBack(response) {
                        for (i = 0; i < response.data.length; i = i + 1) {
                            arrayOfAllProfelsOfAllWindowsFullDataFromMysql[response.data[i][0].makat] = response.data[i][0];
                        }
                    });
            }
        };

        tempData.getArrayOfAllProfelsOfAllWindowsFullDataFromMysql = function () {
            return arrayOfAllProfelsOfAllWindowsFullDataFromMysql;
        };

        function setArrayOfOrder() {

            arrayOfOrder = {};

            var
                makat, meda, i, j, arrayOfMakats = [], ifContinue = false,
                arrayOfMedot = [], tempArrayOfMedot = [], motot, mototTemp, order;

            for (makat in arrayOfProfelemToCute) {
                arrayOfMakats.push(makat);
            }

            for (i = 0; i < arrayOfMakats.length; i = i + 1) {
                arrayOfMedot = [];
                for (meda in arrayOfProfelemToCute[arrayOfMakats[i]]) {
                    arrayOfOrder[arrayOfMakats[i]] = {};
                    if (arrayOfProfelemToCute[arrayOfMakats[i]][meda] != '+') {
                        if (meda != '+') {
                            meda = eval(meda);
                        }
                        tempArrayOfMedot = Array(eval(arrayOfProfelemToCute[arrayOfMakats[i]][meda])).fill(meda);
                        arrayOfMedot = arrayOfMedot.concat(tempArrayOfMedot);
                    } else {
                        arrayOfMedot = ['+'];
                    }
                }
                tempArrayOfMedot = [];
                angular.copy(arrayOfMedot, tempArrayOfMedot);
                arrayOfOrder[arrayOfMakats[i]].medot = tempArrayOfMedot;


                arrayOfMedot.sort(function (a, b) {
                    return b - a
                });
                motot = 0;
                mototTemp = 0;
                ifContinue = false;
                for (j = 0; j < arrayOfMedot.length; j = j + 1) {

                    if (j === (arrayOfMedot.length - 1) && ifContinue) {
                        if (mototTemp + arrayOfMedot[j] < 600) {
                            mototTemp = mototTemp + arrayOfMedot[j] + 0.5;
                            arrayOfMedot[j] = 0;
                        }
                        ifContinue = false;
                        motot = motot + 1;
                        mototTemp = 0;
                        j = 0;
                    }

                    if (mototTemp + arrayOfMedot[j] >= 600) {
                        ifContinue = true;
                        continue
                    }

                    if (arrayOfMedot[j] > 0) {
                        mototTemp = mototTemp + arrayOfMedot[j] + 0.5;
                    }
                    arrayOfMedot[j] = 0;
                }
                arrayOfOrder[arrayOfMakats[i]].motot = motot;
                arrayOfOrder[arrayOfMakats[i]].lessMott = mototTemp.toFixed(2);

            }
        }

        tempData.getArrayOfOrder = function () {
            return arrayOfOrder;
        };

        tempData.setArrayOfGlassOrder = function (glassFormolas, glassAmount, windowInfo) {
            var
                key, temp;

            for (key in glassFormolas) {
                if (glassFormolas.hasOwnProperty(key)) {
                    temp = glassFormolas[key].split('x');
                    temp = eval(temp[0]).toFixed(2) + ' X ' + eval(temp[1]).toFixed(2) + ' X  ' + glassAmount[key];

                    if (arrayOfGlassOrder.hasOwnProperty(windowInfo.fun_code)) {
                        if (arrayOfGlassOrder[windowInfo.fun_code].hasOwnProperty(windowInfo.id)) {
                            arrayOfGlassOrder[windowInfo.fun_code][windowInfo.id][key] = temp;
                        } else {
                            arrayOfGlassOrder[windowInfo.fun_code][windowInfo.id] = {};
                            arrayOfGlassOrder[windowInfo.fun_code][windowInfo.id][key] = temp;
                        }
                    } else {
                        arrayOfGlassOrder[windowInfo.fun_code] = {};
                        arrayOfGlassOrder[windowInfo.fun_code][windowInfo.id] = {};
                        arrayOfGlassOrder[windowInfo.fun_code][windowInfo.id][key] = temp;
                    }
                }
            }
        };

        tempData.removeFromArrayOfGlassOrder = function (funCode, id) {

            if (arrayOfGlassOrder.hasOwnProperty(funCode)){
                if (arrayOfGlassOrder[funCode].hasOwnProperty(id)){
                    delete arrayOfGlassOrder[funCode][id];
                }
                if (Object.keys(arrayOfGlassOrder[funCode]).length === 0){
                    delete arrayOfGlassOrder[funCode];
                }
            }
        };

        tempData.getArrayOfGlassOrder = function () {
            return arrayOfGlassOrder;
        };


        return tempData;
    }

})();
