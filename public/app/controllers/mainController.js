/**
 * Created by Wesam on 9/17/2016.
 */

(function () {

    var mainController = angular.module('alom');

    mainController.controller('mainController', mainControllerFunction);

    function mainControllerFunction($scope, $state) {

        $scope.input = function (value) {

            switch (value){
                case 'contact':
                    $state.go('contact');
                    break;
                case 'request':
                    $state.go('request');
                    break;
                case 'hearUs':
                    $state.go('hearUs');
            }

        };
    }

})();