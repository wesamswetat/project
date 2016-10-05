/**
 * Created by Wesam on 10/3/2016.
 */

(function () {
    'use strict';
    
    var windowsAdded = angular.module('alom');
    
    windowsAdded.directive('windowsAdded', windowsAddedFunction);
    
    function windowsAddedFunction(temporaryDataService) {
        return{
            restrict: 'EA',
            templateUrl: 'app/directives/windowsadded/windowsAdded.html',
            link: function (scope, elme, attr) {

                scope.windows = temporaryDataService.getArrayOfWindowsAddedInAddWindowPage();

            }
        }
    }
    
    
})();
