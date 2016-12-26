/**
 * Created by Wesam on 11/1/2016.
 */
(function () {
    'use strict';
    var client = angular.module('alom');
    client.directive('clientOffer', clientOfferFunction);

    function clientOfferFunction($http, $timeout) {
        return {
            restrict: 'EA',
            templateUrl: 'app/directives/clientoffer/clientoffer.html',
            link: function (scope, elme, attr) {
                scope.selected = '';

            }
        }
    }
})();
