/**
 * Created by Wesam on 10/23/2016.
 */
(function () {
    'use strict';
    var hearUs = angular.module('alom');

    hearUs.directive('hearUs', hearUsFunction);

    function hearUsFunction($http, localDataService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/directives/hearus/hearUs.html',
            link: function (scope, elme, atrr) {
                var URL = localDataService.getUrl();
                scope.message = {};
                scope.shoSuccessMessage = false;

                scope.onSubmit = function (messageForm) {
                    if (messageForm.$valid) {
                        $http({method: 'POST', url: URL + '/hearus', data: scope.message})
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
