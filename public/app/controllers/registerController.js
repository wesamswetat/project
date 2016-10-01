/**
 * Created by Wesam on 9/29/2016.
 */

(function () {

    var register = angular.module('alom');

    register.controller('registerController', registerControllerFunction);

    function registerControllerFunction($scope, $http, $state, localDataService) {

        var
            URL = localDataService.getUrl();

        $scope.newUser = {};
        $scope.errorMesseg = '';

        $scope.register = function (valid) {

            if (valid) {
                $http({method: 'POST', url: URL + '/register', data: $scope.newUser})
                    .then(successCallback , errorCallBack);
                function successCallback(response) {
                    console.log(response.data);
                    $state.go('home');
                }
                function errorCallBack(response) {
                    console.log(response.data);
                   if (angular.isObject(response.data)){
                       if (response.data.hasOwnProperty('email')){
                          if (response.data.email[0] === 'The email has already been taken.'){
                              $scope.errorMesseg = 'אמייל כבר בשימוש';
                          }
                           if (response.data.email[0] === 'The email must be a valid email address.'){
                               $scope.errorMesseg = 'אמייל לא חוקי';
                           }
                       }
                       if (response.data.hasOwnProperty('password')){
                           if (response.data.password[0] === 'The password confirmation does not match.'){
                               $scope.errorMesseg = 'סיסמא ואימות סיסמה לא נכונים';
                           }
                       }
                   }
                }
            } else {
                console.log('from register')
            }

        }
    }

})();
