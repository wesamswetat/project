/**
 * Created by Wesam on 11/1/2016.
 */
(function () {
    'use strict';
    var client = angular.module('alom');
    client.directive('clientOffer', clientOfferFunction);

    function clientOfferFunction($http) {
        return{
            restrict: 'EA',
            templateUrl: 'app/directives/clientoffer/clientoffer.html',
            link: function (scope, elme, attr) {

                scope.city = function (query) {
                    var data = {
                         // the resource id
                        limit: 5, // get 5 results
                        q: 'ע' // query for 'jones'
                    };
                    $http({method: 'GET', url:'https://data.gov.il/api/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab&limit=1270'})
                        .then(function successCallBack(response) {
                            console.log(response);
                        })
                }
            }
        }
    }
})();
