/**
 * Created by Wesam on 9/26/2016.
 */

(function () {

    var admin = angular.module('alom');

    admin.factory('adminService', adminServiceFunction);

    function adminServiceFunction($http) {

        var
            admin = {};


        return admin;
    }

})();
