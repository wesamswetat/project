/**
 * Created by Wesam on 10/24/2016.
 */
(function () {
    'use strict';
    var pdf = angular.module('alom');

    pdf.directive('pdf', pdfFunction);

    function pdfFunction($http, localDataService) {
        return{
            restrict: 'EA',
            templateUrl: 'app/directives/pdf/pdf.html',
            link: function (scope, aleme, attr) {

                var
                    data = {name: '<div>wesam</div>', age: 32},
                    URL = localDataService.getUrl();

                scope.htmlToPdf = function () {
                    $http({method: 'POST', url: URL + '/pdf', data: data})
                        .then(function successCallBack(response) {
                            console.log(response.data);
                            window.location= URL + '/pdf';
                            //document.write(response.data);
                        })
                }
            }
        }
    }
})();
