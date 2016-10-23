/**
 * Created by Wesam on 10/2/2016.
 */

(function () {
    'use strict';

    var windowInfo = angular.module('alom');

    windowInfo.directive('addWindowInfo', addWindowInfoFunction);

    function addWindowInfoFunction(calculatorService, temporaryDataService, $timeout) {
        return{
            restrict: 'EA',
            scope: {
                window: '='
            },
            replace: true,
            templateUrl: 'app/directives/addwindowinfo/addWindowInfo1.html',
            link: function (scope, elme, attr) {
                var i, temp = 0, isValed = true;
                scope.error = '';
                scope.windowHeightWidthAndInfo = {};
                scope.windowFromMysql = calculatorService.getWindowObjectFromMysql();

                scope.getTimes=function(n){
                    return new Array(n);
                };

                $timeout(function () {
                    console.log(scope.window);
                    scope.hl = (scope.window.h_l) ;
                    scope.l = (scope.window.l_des) ;
                    scope.h = (scope.window.h_des) ;
                    console.log(scope.hl);
                    console.log(scope.h);
                    console.log(scope.l);

                });

                scope.onSubmit = function () {
                    scope.windowHeightWidthAndInfo.price =
                        scope.windowHeightWidthAndInfo.cost * scope.windowHeightWidthAndInfo.height[0] / 100 *
                        scope.windowHeightWidthAndInfo.width[0] / 100 ;

                    console.log(scope.windowHeightWidthAndInfo.height[0]);
                    if (scope.hl.h > 1){
                        temp = 0;
                        for (i = 1 ; i < scope.hl.h ; i = i + 1){
                            temp = temp + scope.windowHeightWidthAndInfo.height[i];
                            console.log(i);
                        }
                       if (temp > scope.windowHeightWidthAndInfo.height[0]){
                           scope.error = 'פתח גובה קטן מסך כל שאר הפתחים';
                           isValed = false;
                       } else {
                           scope.error = '';
                           isValed = true;
                       }
                    }

                    if (scope.hl.l > 1){
                        for (i = 1 ; i < scope.hl.l ; i = i + 1){
                            temp = temp + scope.windowHeightWidthAndInfo.width[i]
                        }
                        if (temp > scope.windowHeightWidthAndInfo.width[0]){
                            scope.error = 'פתח רוחב קטן מסך כל שאר הפתחים';
                            isValed = false;
                        } else {
                            scope.error = '';
                            isValed = true;
                        }
                    }

                    if (isValed){
                        calculatorService.setWindowObjectFromLocalAddWindowInfoDirective(scope.windowHeightWidthAndInfo);
                        calculatorService.calculate();
                    }
                }
            }

        }
    }
})();
