/**
 * Created by Wesam on 9/25/2016.
 */

(function () {

    var login = angular.module('alom');

    login.controller('loginController', loginControllerFunction);

    function loginControllerFunction($scope, $http, $state, localDataService) {

        $scope.email = '';
        $scope.pass = '';
        $scope.remember = 'of';
        $scope.showErrorMessage = false;
        var
            URL = localDataService.getUrl(),
            data = {};

        $scope.login = function (valid) {

            data.email = $scope.email;
            data.password = $scope.pass;

            if ($scope.showErrorMessage){
               data.remember = $scope.showErrorMessage;
            }

            $http({method: 'POST', url: URL + '/login', data: data})
                .then(function successCallBack(response) {

                    if (angular.isObject(response.data)){
                        localDataService.setUser(response.data);
                        $state.go('home.הוספת חלון');
                    }else if (response.data === 'false'){
                        $scope.showErrorMessage = true;
                    }
                });
        }
    }

})();
