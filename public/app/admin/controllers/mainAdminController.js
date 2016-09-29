/**
 * Created by Wesam on 9/28/2016.
 */

(function () {

    var admin = angular.module('alom');

    admin.controller('mainAdminController', mainAdminControllerFunction);

    function mainAdminControllerFunction($scope, $location, $state, localDataService) {

        var user = localDataService.getUser();

        console.log(user.isAdmin);
        if (!user.isAdmin) {
            $state.go('home');
        }
    }

})();
