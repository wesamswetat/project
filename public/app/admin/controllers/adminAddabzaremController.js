/**
 * Created by Wesam on 10/9/2016.
 */

(function () {
    'use strict';

    var addAbzarem = angular.module('alom');

    addAbzarem.controller('adminAddabzaremController', adminAddabzaremControllerFunction);

    function adminAddabzaremControllerFunction($scope, $http, localDataService) {

        var
            i,temp = {},
            URL = localDataService.getUrl();

        $scope.abzar = {};
        $scope.numOfAbzar = [];
        $scope.num = 0;


        $scope.applyChange = function (num) {
            // for ng-repeat for number of profels to add
            $scope.numOfAbzar = new Array(num);
        };

        $scope.send = function (valid) {

            if (valid){

                for ( i = 0 ; i < Object.keys($scope.abzar.makat).length ; i = i + 1){
                    temp[i] = 'http://alom.co.il/images/abzarem/' + $scope.abzar.company + '/' + $scope.abzar.makat[i] +'.jpg';
                }

                $scope.abzar.pic = temp;
            }
        }

    }
})();
