(function () {

    "use strict";

    var navBar = angular.module('alom');

    navBar.directive('navBar', function ($http, $state, localDataService) {
        return {
            restrict: 'EA',
            templateUrl: 'app/directives/navbar/navbar.html',
            link: function (scope, elme, attr) {

                var
                    URL = localDataService.getUrl(),
                    buttonGrop = localDataService.buttonsGroup[0];

                scope.user = localDataService.getUser();

                scope.auth = function (to) {

                    switch (to) {
                        case 'logout':
                            $http({method: 'GET', url: URL+'/logout'})
                                .then(function successCallBack(response) {
                                    $state.go('home');
                                });
                            localDataService.setUser({});
                            break;
                    }
                }
            }
        }
    });

})();