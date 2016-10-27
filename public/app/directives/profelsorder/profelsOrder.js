/**
 * Created by Wesam on 10/13/2016.
 */

(function () {
    'use strict';

    var profelsOrder = angular.module('alom');

    profelsOrder.directive('profelsOrder', profelsOrderFunction);

    function profelsOrderFunction($http, temporaryDataService) {
        return{
            restrict: 'EA',
            templateUrl: 'app/directives/profelsorder/profelsorder.html',
            link: function (scope, elem, attr) {
                var
                    allProfels, numOfCuts = 0, i, order, item,
                    meskalOfMotot , meshkalOfLessMott;

                scope.order = temporaryDataService.getArrayOfOrder();
                allProfels = temporaryDataService.getArrayOfAllProfelsOfAllWindowsFullDataFromMysql();
                scope.isShow = false;

                for (item in scope.order){
                    if (scope.order.hasOwnProperty(item)){
                        meskalOfMotot = allProfels[item].meshkal * 6 * scope.order[item].motot / 1000;
                        meshkalOfLessMott = (allProfels[item].meshkal *  scope.order[item].lessMott / 100 / 1000);
                        scope.order[item].meshkal = (meskalOfMotot + meshkalOfLessMott).toFixed(2);
                        scope.order[item].profelDes = allProfels[item].des;
                        scope.order[item].company = allProfels[item].company;
                        scope.order[item].pic = allProfels[item].pic;
                    }
                    scope.isShow = true;
                }
                // for (makat in allProfelsWithCuts){
                //     if (allProfelsWithCuts.hasOwnProperty(makat)){
                //         for (meda in allProfelsWithCuts[makat]){
                //             if (allProfelsWithCuts[makat].hasOwnProperty(meda)){
                //                 numOfCuts = allProfelsWithCuts[makat][meda];
                //                 for (i = 0; i < numOfCuts; i = i + 1){
                //
                //                 }
                //             }
                //         }
                //     }
                // }
            }
        }

    }
})();
