/**
 * Created by Wesam on 10/2/2016.
 */

(function () {

    var temporaryData = angular.module('alom');

    temporaryData.factory('temporaryDataService', temporaryDataServiceFunction);

    function temporaryDataServiceFunction() {

        var tempData = {};

        var
            companySedrot = {},
            windowsDesAndFuncode = {},
            windowsFullObjectFromMySql = {},
            arrayOfWindowsAddedInAddWindowPage = [],
            arrayOfWindowsAfterCalculatorOfMedot = {},
            arrayOfProfelemToCute = {};

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

            if (angular.isNumber(windowOrWindowIdToDelet)){
                arrayOfWindowsAddedInAddWindowPage.splice(windowOrWindowIdToDelet, 1);
            } else if (angular.isObject(windowOrWindowIdToDelet)){
                var temp = {} ;
                angular.copy(windowOrWindowIdToDelet, temp);
                arrayOfWindowsAddedInAddWindowPage.push(temp);
            }
        };

        tempData.getArrayOfWindowsAddedInAddWindowPage = function () {
            return arrayOfWindowsAddedInAddWindowPage;
        };

        tempData.setArrayOfWindowsAfterCalculatorOfMedot = function (funcode, formolas, des, profelNmae, profelMakat, profelCuts) {
            if (arrayOfWindowsAfterCalculatorOfMedot[funcode]){
                arrayOfWindowsAfterCalculatorOfMedot[funcode].push(formolas);
            } else {
                arrayOfWindowsAfterCalculatorOfMedot[funcode] = [ des, profelNmae, profelMakat, profelCuts, formolas]
            }
            console.log('arrayOfWindowsAfterCalculatorOfMedot');
            console.log(arrayOfWindowsAfterCalculatorOfMedot);
        };

        tempData.getArrayOfWindowsAfterCalculatorOfMedot = function (funcode) {
            return funcode ? arrayOfWindowsAfterCalculatorOfMedot[funcode] : arrayOfWindowsAfterCalculatorOfMedot;
        };

        tempData.setArrayOfProfelemToCute = function (profelemObject, numToCutObject, medotObject) {



            for (var key in profelemObject){
                var
                    tempToAdd,tempKey = {};

                if (profelemObject.hasOwnProperty(key)){
                    if (profelemObject[key] in arrayOfProfelemToCute){
                        if(medotObject[key] in arrayOfProfelemToCute[profelemObject[key]]){
                            if (numToCutObject[key] != '+'){
                                tempToAdd = arrayOfProfelemToCute[profelemObject[key]];
                                tempToAdd[medotObject[key]] = eval(tempToAdd[medotObject[key]]) + eval(numToCutObject[key]);
                            }
                        } else {
                            tempKey[medotObject[key]] = numToCutObject[key];
                            tempToAdd = arrayOfProfelemToCute[profelemObject[key]];
                            tempToAdd[medotObject[key]] =  numToCutObject[key] ;
                        }
                    } else {
                        tempKey[medotObject[key]] = numToCutObject[key];
                        arrayOfProfelemToCute[profelemObject[key]] =  tempKey ;
                    }
                }
            }
        };

        tempData.getArrayOfProfelemToCute = function () {
            return arrayOfProfelemToCute;
        };

        return tempData;
    }

})();
