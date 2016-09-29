/**
 * Created by Wesam on 9/28/2016.
 */
(function () {

    var adminAddWindow = angular.module('alom');

    adminAddWindow.controller('adminAddWindowController', adminAddWindowControllerFunction);

    function adminAddWindowControllerFunction($scope, $http, localDataService) {

        var
            URL = localDataService.getUrl();

        $scope.window = {};
        $scope.numOfProfels = [];
        $scope.num = 0;

        $scope.applyChange = function (num) {
            // for ng-repeat for number of profels in window
            $scope.numOfProfels = new Array(num);
        };

        $scope.send = function (valid) {

            console.log('send function');

            var
                makatTemp = '',
                cutsTemp = '',
                formolaTemp = '',
                profelDesTemp = '',
                i;

            if (valid) {

                for (i = 0; i < Object.keys($scope.window.makat).length; i = i + 1) {
                    if (i === Object.keys($scope.window.makat).length - 1) {
                        makatTemp = makatTemp + $scope.window.makat[i];
                        cutsTemp = cutsTemp + $scope.window.cuts[i];
                        formolaTemp = formolaTemp + $scope.window.formola[i];
                        profelDesTemp = profelDesTemp + $scope.window.profelDes[i];
                    } else {
                        makatTemp = makatTemp + $scope.window.makat[i] + '&';
                        cutsTemp = cutsTemp + $scope.window.cuts[i] + '&';
                        formolaTemp = formolaTemp + $scope.window.formola[i] + '&';
                        profelDesTemp = profelDesTemp + $scope.window.profelDes[i] + '&';
                    }
                }

                $scope.window.makatTemp = makatTemp;
                $scope.window.cutsTemp = cutsTemp;
                $scope.window.formolaTemp = formolaTemp;
                $scope.window.profelDesTemp = profelDesTemp;

                $http({method: 'POST', url: URL + '/admin/addwindow', data: $scope.window})
                    .then(function successCallBack(response) {
                        console.log(response.data);
                    })
            } else {
                console.log('Invalid Form!')
            }


        }

    }

})();
