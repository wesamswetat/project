/**
 * Created by Wesam on 10/23/2016.
 */
(function () {
    'use strict';

    var userRequest = angular.module('alom');

    userRequest.directive('userRequest', userRequestFunction);

    function userRequestFunction() {
        return{
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/directives/userrequset/request.html',
            link: function (scope, alem, attr) {

            }
        }
    }
})();
