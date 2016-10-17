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

        $scope.options = function (option) {

            switch (option){
                case 'אבזר':
                    $scope.abzar.is_abzarem = 1;
                    $scope.abzar.is_atamem_or_mavreshot = 0;
                    break;
                case 'אטמים':
                case 'מברשות':
                    $scope.abzar.is_abzarem = 0;
                    $scope.abzar.is_atamem_or_mavreshot = 1;
                    break;
            }
        };

        $scope.send = function (valid) {

            if (valid){

                for ( i = 0 ; i < Object.keys($scope.abzar.makat).length ; i = i + 1){
                    if ($scope.abzar.company === 'קליל' ){
                        temp[i] = 'http://alom.co.il/images/abzarem/klil/' + $scope.abzar.makat[i] +'.jpg';
                    }
                }

                $scope.abzar.pic = temp;
                
                $http({method: 'POST', url: URL+'/admin/addabzar', data:$scope.abzar})
                    .then( function successCallBack(response){
                        console.log(response);
                    });

            }
        }

    }
})();
