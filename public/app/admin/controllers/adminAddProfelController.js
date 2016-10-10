/**
 * Created by Wesam on 10/8/2016.
 */

(function () {
    'use strict';

    var adminAddProfel = angular.module('alom');

    adminAddProfel.controller('adminAddProfelController', adminAddProfelControllerFunction);

    function adminAddProfelControllerFunction($scope, $http, localDataService) {

        var
            i,temp = {},
            URL = localDataService.getUrl();

        $scope.profel = {};
        $scope.numOfProfels = [];
        $scope.num = 0;

        $scope.applyChange = function (num) {
            // for ng-repeat for number of profels to add
            $scope.numOfProfels = new Array(num);
        };

        $scope.send = function (valid) {

            if (valid){

                for ( i = 0 ; i < Object.keys($scope.profel.makat).length ; i = i + 1){
                    temp[i] = 'http://alom.co.il/images/' + $scope.profel.sedraNum + '/' + $scope.profel.makat[i] +'.jpg';
                }
                $scope.profel.pic = temp;
            }
        }
    }
})();
