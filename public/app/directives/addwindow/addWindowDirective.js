/**
 * Created by Wesam on 9/18/2016.
 */

(function () {

    'use strict';

    var addWindow = angular.module('alom');

    addWindow.directive('addWindowDirective', addWindowDirectiveFunction);

    function addWindowDirectiveFunction($http, localDataService, temporaryDataService, calculatorService) {
        return {
            restrict: 'EA',
            scope: {},
            replace: true,
            templateUrl: 'app/directives/addwindow/addwindow.html',
            link: function (scope, elme, attr) {
                var
                    URL = localDataService.getUrl();

                scope.companyNames = ["קליל", "טקסתיל", "אלובין"];
                scope.companySerials = [];
                scope.WindowsDesAndFuncode = [];
                scope.windowInfoModel = {};
                scope.windowSelected = {};
                scope.showWindowInputs = false;

                scope.select = function (from, value) {

                    switch (from) {
                        case 'company':
                            scope.companySerials = temporaryDataService.getCompanySedrot(value) ||
                                $http({method: 'GET', url: URL + '/company/' + value})
                                    .then(function successCallBack(response) {
                                        console.log(response.data);
                                        scope.companySerials = response.data;
                                        temporaryDataService.setCompanySedrot(value, scope.companySerials);
                                    });
                            break;
                        // end case company
                        case 'serial':

                            var companyAndSedra = scope.windowInfoModel.serial.company_name + scope.windowInfoModel.serial.sedra_num;

                            scope.WindowsDesAndFuncode = temporaryDataService.getWindowsDesAndFuncode(companyAndSedra) ||

                                $http({
                                    method: 'GET', url: URL + '/company/windows/'
                                    + scope.windowInfoModel.serial.company_name + '/'
                                    + scope.windowInfoModel.serial.sedra_num
                                })
                                    .then(function successCallBack(response) {
                                        scope.WindowsDesAndFuncode = response.data;
                                        temporaryDataService
                                            .setWindowsDesAndFuncode
                                            (
                                                scope.windowInfoModel.serial.company_name
                                                + scope.windowInfoModel.serial.sedra_num
                                                ,
                                                scope.WindowsDesAndFuncode
                                            )
                                    });
                            break;
                        // end case serial
                        case 'window':
                            if (value != undefined) {
                                if (temporaryDataService.getWindowsFullObjectFromMySql(value)) {
                                    scope.windowSelected = temporaryDataService.getWindowsFullObjectFromMySql(value);
                                    temporaryDataService.setWindowsFullObjectFromMySql(value, scope.windowSelected);
                                    calculatorService.setWindowObjectFromMysql(scope.windowSelected[0]);
                                } else {
                                    $http({method: 'GET', url: URL + '/window/' + value})
                                        .then(function successCallBack(response) {
                                            scope.windowSelected = response.data;
                                            temporaryDataService.setWindowsFullObjectFromMySql(value, scope.windowSelected);
                                            calculatorService.setWindowObjectFromMysql(scope.windowSelected[0]);
                                        });
                                }
                            }
                            scope.showWindowInputs = true;
                            break;
                        // end case window
                        default :
                            console.log('default');
                    }
                };
            }
        }
    }

})();
