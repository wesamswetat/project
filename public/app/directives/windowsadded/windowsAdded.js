/**
 * Created by Wesam on 10/3/2016.
 */

(function () {
    'use strict';
    
    var windowsAdded = angular.module('alom');
    
    windowsAdded.directive('windowsAdded', windowsAddedFunction);
    
    function windowsAddedFunction(temporaryDataService, calculatorService) {
        return{
            restrict: 'EA',
            templateUrl: 'app/directives/windowsadded/windowsAdded.html',
            link: function (scope, elme, attr) {

                scope.windows = temporaryDataService.getArrayOfWindowsAddedInAddWindowPage();
                scope.remove = function (index) {
                    console.log(temporaryDataService.getArrayOfWindowsAddedInAddWindowPage());
                    console.log(temporaryDataService.getArrayOfWindowsAfterCalculatorOfMedot());
                    console.log(temporaryDataService.getArrayOfProfelemToCute());
                    console.log(temporaryDataService.getArrayOfOrder());
                    console.log(temporaryDataService.getArrayOfGlassOrder());
                    temporaryDataService.removeFromArrayOfGlassOrder(scope.windows[index]);
                }

            }
        }
    }
    
    
})();
