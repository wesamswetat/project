/**
 * Created by Wesam on 10/23/2016.
 */
(function () {
    'use strict';
    var contact = angular.module('alom');

    contact.directive('contactUs', contactDirectiveFunction);

    function contactDirectiveFunction() {
        return{
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/directives/contact/contact.html',
            link: function (scope, elme, attr) {
                scope.message = {};

                scope.onSubmit = function (valid) {
                    if (valid){

                    }
                }

            }
        }
    }
})();
