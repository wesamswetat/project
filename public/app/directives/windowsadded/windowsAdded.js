/**
 * Created by Wesam on 10/3/2016.
 */

(function () {
    'use strict';

    var windowsAdded = angular.module('alom');

    windowsAdded.directive('windowsAdded', windowsAddedFunction);

    function windowsAddedFunction(temporaryDataService, $timeout) {
        return {
            restrict: 'EA',
            templateUrl: 'app/directives/windowsadded/windowsAdded.html',
            link: function (scope, elme, attr) {

                scope.windows = temporaryDataService.getArrayOfWindowsAddedInAddWindowPage();

                scope.allPrice = function () {
                    var count = 0,i;
                    for (i = 0 ; i < scope.windows.length; i = i + 1){
                        count = count + scope.windows[i].price;
                    }
                    return count;
                };

                scope.remove = function (index) {

                    temporaryDataService.removeFromArrayOfGlassOrder(scope.windows[index].fun_code, scope.windows[index].id);
                    temporaryDataService.removeFromArrayOfProfelemToCute(scope.windows[index].fun_code, scope.windows[index].id);
                    temporaryDataService.removeFromArrayOfWindowsAfterCalculatorOfMedot(scope.windows[index].fun_code, scope.windows[index].id);
                    temporaryDataService.removeFromArrayOfWindowsAddedInAddWindowPage(index);
                };




            }
        }
    }


})();
