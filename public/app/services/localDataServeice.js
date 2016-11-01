/**
 * Created by Wesam on 9/16/2016.
 */

(function () {

    var localDataService = angular.module('alom');

    localDataService.factory('localDataService', localDataServiceFunction);

    function localDataServiceFunction($http) {


        var
            data = {},
            url = 'http://localhost/alom2/public',// SITE URL
            user = {}, // user name AND mail
            communities = {};

        // MAIN BUTTONS the same array should de in app.js
        data.buttonsGroup = ["הוספת חלון", "חיתוך לפי חלון", "חיתוך לפי פרופיל", "הזמנת פרופילים", "הזמנת זכוכית", "הצעות מחיר עם סרטוטים"];

        /* ############# if user already exit ############# */
        // $http({method: 'GET', url: url + '/checkuser'})
        //     .then(function successCallBack(response) {
        //         angular.copy(response.data, user)
        //     });

        angular.element(document).ready(function () {

            /* ############# if user already exit ############# */
            $http({method: 'GET', url: url + '/checkuser'})
                .then(function successCallBack(response) {
                    angular.copy(response.data, user)
                });
            /* ############# get communities json file ############# */
            $http({method: 'GET', url: url + '/app/communities.json'})
                .then(function successCallBack(response) {
                    angular.copy(response.data, communities);
                    console.log(communities);
                });
        });

        /* ############# URL getter ############# */
        data.getUrl = function () {
            //return the url
            return url;
        };

        /* ############# USER getter/sitter  ############# */
        data.setUser = function (userTo) {
            angular.copy(userTo, user)
        };

        data.getUser = function () {
            return user;
        };


        return data;
    }

})();
