/**
 * Created by Wesam on 9/30/2016.
 */

(function () {
    'use strict';

    var homeController = angular.module('alom');

    homeController.controller('homeController', homeControllerFunction);

    function homeControllerFunction($http, $timeout, $state, localDataService) {

        var
            user = localDataService.getUser(),
            URL = localDataService.getUrl();
        
        if (! user.name){
            $timeout(function () {
                $http({method: 'GET', url: URL + '/checkuser'})
                    .then(function successCallBack(response) {
                        //angular.copy(response.data, user)
                        localDataService.setUser(response.data);
                    });
            });
        }
    }

})();
