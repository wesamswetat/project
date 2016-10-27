/**
 * Created by Wesam on 10/18/2016.
 */
(function () {
    'use strict';
    var glassOrder = angular.module('alom');
    glassOrder.directive('glassOrder', glassOrderFunction);

    function glassOrderFunction(temporaryDataService) {
        return{
            restrict: 'EA',
            templateUrl: 'app/directives/glassorder/glassorder.html',
            link : function (scope, elmen, atrr) {
                scope.glasses = temporaryDataService.getArrayOfGlassOrder();
                scope.windowsInfo = temporaryDataService.getWindowsFullObjectFromMySql();
                scope.isShow = false;

                if(Object.keys(scope.glasses).length > 0){
                    scope.isShow = true;
                }

                scope.applyChange = function (num) {
                    // for ng-repeat for number of profels to add
                    return new Array(num);
                };
            }
        }
    }
})();
