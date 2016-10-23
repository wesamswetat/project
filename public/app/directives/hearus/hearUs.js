/**
 * Created by Wesam on 10/23/2016.
 */
(function () {
    'use strict';
    var hearUs = angular.module('alom');

    hearUs.directive('hearUs', hearUsFunction);
    
    function hearUsFunction() {
        return{
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/directives/hearus/hearUs.html',
            link: function (scope, elme, atrr) {
                
            }
        }
    }
})();
