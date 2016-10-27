/**
 * Created by Wesam on 10/6/2016.
 */

(function () {
    'use strict'

    var cutByProfel = angular.module('alom');

    cutByProfel.directive('cuteByProfel', cutByProfelFunction);

    function cutByProfelFunction(temporaryDataService) {
        return{
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/directives/cutbyprofel/cutebyprofel.html',
            link: function (scope, elme, attr) {
                scope.cutsByProfel = temporaryDataService.getArrayOfProfelemToCute();
                scope.isShow = false;

                if (Object.keys(scope.cutsByProfel).length > 0){
                    scope.isShow = true;
                }
            }
        }
    }
})();
