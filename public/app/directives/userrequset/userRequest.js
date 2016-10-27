/**
 * Created by Wesam on 10/23/2016.
 */
(function () {
    'use strict';

    var userRequest = angular.module('alom');

    userRequest.directive('userRequest', userRequestFunction);

    function userRequestFunction($http, localDataService) {
        return{
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/directives/userrequset/request.html',
            link: function (scope, alem, attr) {
                var URL = localDataService.getUrl();
                scope.message = {};
                scope.shoSuccessMessage = false;

                scope.onSubmit = function (messageForm) {
                    if (messageForm.$valid) {
                        $http({method: 'POST', url: URL + '/hearustoadd', data: scope.message})
                            .then(function successCallBack(response) {
                                if (response.data === 'true') {
                                    messageForm.$setPristine(true);
                                    scope.message = {};
                                    scope.shoSuccessMessage = true;
                                }
                            })
                    }
                }
            }
        }
    }
})();
