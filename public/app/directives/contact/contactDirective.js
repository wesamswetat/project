/**
 * Created by Wesam on 10/23/2016.
 */
(function () {
    'use strict';
    var contact = angular.module('alom');

    contact.directive('contactUs', contactDirectiveFunction);

    function contactDirectiveFunction($http, localDataService) {
        return{
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/directives/contact/contact.html',
            link: function (scope, elme, attr) {
                var URL = localDataService.getUrl();
                scope.message = {};
                scope.shoSuccessMessage = false;

                scope.onSubmit = function (messageForm) {
                    if (messageForm.$valid) {
                        $http({method: 'POST', url: URL + '/contacts', data: scope.message})
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
