/**
 * Created by Wesam on 9/29/2016.
 */

(function () {

    var register = angular.module('alom');

    register.controller('registerController', registerControllerFunction);

    function registerControllerFunction($scope, $http) {

        $scope.newUser = {};

        $scope.register = function(valid){

            console.log('from register')
        }
    }

})();
