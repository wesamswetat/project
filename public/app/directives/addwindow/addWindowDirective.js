/**
 * Created by Wesam on 9/18/2016.
 */

(function () {

    var addWindow = angular.module('alom');

    addWindow.directive('addWindowDirective', addWindowDirectiveFunction);

    function addWindowDirectiveFunction($http) {
        return {
            restrict: 'EA',
            templateUrl: 'app/directives/addwindow/addwindow.html',
            link: function (scope, elme, attr) {
                scope.companyNames = ["קליל", "טקסתיל", "אלובין"];
                scope.companySerials = [];
                scope.serialWindows = [];
                scope.windowInfoModel = {};

                scope.select = function (from, value) {

                    switch (from) {
                        case 'company':
                            scope.companySerials = []; // zero the serials array
                            scope.windowInfoModel.serial = ''; // zero the select from data binding from the selectHTML

                            break;
                        case 'serial':

                            break;
                        case 'window':

                            break;
                        default :
                            console.log('default');
                    }
                };

                function getData(array, url) {
                    $http({
                        request: 'GET',
                        url: url
                    })
                }
            }
        }
    }

})();
