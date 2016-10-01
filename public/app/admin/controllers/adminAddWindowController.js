/**
 * Created by Wesam on 9/28/2016.
 */
(function () {

    'use strict';

    var adminAddWindow = angular.module('alom');

    adminAddWindow.controller('adminAddWindowController', adminAddWindowControllerFunction);

    function adminAddWindowControllerFunction($scope, $http, localDataService) {

        var
            URL = localDataService.getUrl();

        $scope.window = {};
        $scope.windowTemp = {};
        $scope.numOfProfels = [];
        $scope.num = 0;

        $scope.applyChange = function (num) {
            // for ng-repeat for number of profels in window
            $scope.numOfProfels = new Array(num);
        };

        $scope.send = function (valid) {

            console.log('send function');

            if (valid) {

                $scope.window.makat = JSON.stringify($scope.windowTemp.makat);
                $scope.window.cuts = JSON.stringify($scope.windowTemp.cuts);
                $scope.window.formola = JSON.stringify($scope.windowTemp.formola);
                $scope.window.profelDes = JSON.stringify($scope.windowTemp.profelDes);
                $scope.window.hl = JSON.stringify($scope.windowTemp.hl);

                $http({method: 'POST', url: URL + '/admin/addwindow', data: $scope.window})
                    .then(function successCallBack(response) {
                        if (response.data === 'true'){
                            alert('Success');
                        }
                        if (response.data === 'false'){
                            alert('Error');
                        }
                    })
            } else {
                console.log('Invalid Form!')
            }
        }

    }

})();
