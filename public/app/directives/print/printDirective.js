/**
 * Created by Wesam on 10/24/2016.
 */
(function () {
    'use strict';
    var print = angular.module('alom');
    print.directive('printDirective', printFunction);

    function printFunction($timeout,  $window) {
        return{
            restrict: 'EA',
            scope:{
                printId: '@'
            },
            templateUrl: 'app/directives/print/print.html',
            link: function (scope, elem, attr) {

                scope.print = function (id) {
                    $timeout(function () {
                        $window.print();
                    });
                };

            }
        }

    }
})();
