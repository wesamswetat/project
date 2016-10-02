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
            windowsFullObjectFromMySql = {};

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
            windowsFullObjectFromMySql[funCode] = window
        };

        tempData.getWindowsFullObjectFromMySql = function (funCode) {
            return windowsFullObjectFromMySql[funCode];
        };

        return tempData;
    }

})();
