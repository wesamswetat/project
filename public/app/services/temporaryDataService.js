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
            arrayOfOrder = {};

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
            windowsFullObjectFromMySql[funCode] = window;
        };

        tempData.getWindowsFullObjectFromMySql = function (funCode) {
            return windowsFullObjectFromMySql[funCode];
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

        tempData.getArrayOfWindowsAddedInAddWindowPage = function () {
            return arrayOfWindowsAddedInAddWindowPage;
        };

        tempData.setArrayOfWindowsAfterCalculatorOfMedot = function (funcode, formolas, des, profelNmae, profelMakat, profelCuts) {
            if (arrayOfWindowsAfterCalculatorOfMedot[funcode]) {
                arrayOfWindowsAfterCalculatorOfMedot[funcode].push(formolas);
            } else {
                arrayOfWindowsAfterCalculatorOfMedot[funcode] = [des, profelNmae, profelMakat, profelCuts, formolas]
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
                        if (numToCutObject[i] != '+' && medotObject[i] != '+') {
                            arrayOfProfelemToCute[profelTemp][medotObject[i]] =
                                eval(arrayOfProfelemToCute[profelTemp][medotObject[i]])
                                + eval(numToCutObject[i]);
                        } else {
                            arrayOfProfelemToCute[profelTemp][medotObject[i]] =
                                (arrayOfProfelemToCute[profelTemp][medotObject[i]])
                                + '+' + (numToCutObject[i]);
                        }
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
                console.log(arrayOfMedot);
                motot = 0;
                mototTemp = 0;
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


        return tempData;
    }

})();
