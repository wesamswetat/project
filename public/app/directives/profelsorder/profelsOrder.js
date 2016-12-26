/**
 * Created by Wesam on 10/13/2016.
 */

(function () {
    'use strict';

    var profelsOrder = angular.module('alom');

    profelsOrder.directive('profelsOrder', profelsOrderFunction);

    function profelsOrderFunction($state, temporaryDataService) {
        return{
            restrict: 'EA',
            templateUrl: 'app/directives/profelsorder/profelsorder.html',
            link: function (scope, elem, attr) {
                var
                    allProfels, numOfCuts = 0, i, order, item,
                    meskalOfMotot , meshkalOfLessMott;

                scope.order = temporaryDataService.getArrayOfOrder();
                allProfels = temporaryDataService.getArrayOfAllProfelsOfAllWindowsFullDataFromMysql();
                scope.allMeshkal = 0;
                scope.isShow = false;

                for (item in scope.order){
                    if (scope.order.hasOwnProperty(item)){
                        meskalOfMotot = allProfels[item].meshkal * 6 * scope.order[item].motot / 1000;
                        meshkalOfLessMott = (allProfels[item].meshkal *  scope.order[item].lessMott / 100 / 1000);
                        scope.order[item].meshkal = (meskalOfMotot + meshkalOfLessMott).toFixed(2);
                        scope.order[item].profelDes = allProfels[item].des;
                        scope.order[item].company = allProfels[item].company;
                        scope.order[item].pic = allProfels[item].pic;
                        scope.allMeshkal = (Number(scope.allMeshkal) + Number(scope.order[item].meshkal)).toFixed(2);
                    }
                    scope.isShow = true;
                }


            }
        }

    }
})();
