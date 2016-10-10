/**
 * Created by Wesam on 9/21/2016.
 */

(function () {

    var route = angular.module('alom');

    // MAIN BUTTONS the same array should de in localDataService.js
    var navigationButtons = ["הוספת חלון", "חיתוך לפי חלון", "חיתוך לפי פרופיל", "הזמנת חומר", "הזמנת זכוכית", "הצעות מחיר עם סרטוטים"];

    route.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .otherwise('/home');

        $stateProvider
        /////////////
        /// HOME ///
        ////////////
            .state('home', {
                url: '/home',
                template: '<buttons-directive></buttons-directive><div ui-view></div>',
                controller: 'homeController'
            })
            .state('home.' + navigationButtons[0], {
                url: '/' + navigationButtons[0],
                template: '<add-window-directive></add-window-directive>'
            })
            .state('home.' + navigationButtons[1], {
                url: '/' + navigationButtons[1],
                template: '<cut-by-windows></cut-by-windows>'
            })
            .state('home.' + navigationButtons[2], {
                url: '/' + navigationButtons[2],
                template: '<cute-by-profel></cute-by-profel>'
            })
            /////////////
            /// Auth ///
            ////////////
            .state('login', {
                url: '/login',
                templateUrl: 'app/views/login.html',
                controller: 'loginController'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'app/views/register.html',
                controller: 'registerController'
            })
            /////////////
            /// admin ///
            ////////////
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/admin/views/mainadmin.html',
                controller: 'mainAdminController'
            })
            .state('admin.addwindow',{
                url: '/addwindow',
                templateUrl: 'app/admin/views/adminaddwindow.html',
                controller: 'adminAddWindowController'
            })
            .state('admin.addprofel',{
                url: '/addprofel',
                templateUrl: 'app/admin/views/adminaddprofel.html',
                controller: 'adminAddProfelController'
            })
            .state('admin.addabzarem',{
                url: '/addabzarem',
                templateUrl: 'app/admin/views/adminaddabzarem.html',
                controller: 'adminAddabzaremController'
            })
        ;
    });

    // route.config(function ($routeProvider) {
    //
    //     //var navigationButtons = localDataService.buttonsGroup;
    //
    //     $routeProvider
    //         .when('/'+navigationButtons[0], {
    //             templateUrl: 'app/views/main.html',
    //             controller: 'mainController'
    //         })
    //         .when('/'+navigationButtons[1], {
    //             templateUrl: 'app/views/cutbywindow.html',
    //             controller: 'cutByWindowController'
    //         })
    //         .when('/'+navigationButtons[2], {
    //             templateUrl: 'app/views/cutbyprofel.html',
    //             controller: 'cutByProfilewController'
    //         })
    //         .when('/'+navigationButtons[3], {
    //             templateUrl: 'app/views/order.html'
    //         })
    //         .when('/'+navigationButtons[4], {
    //             templateUrl: 'app/views/glassorder.html'
    //         })
    //         .when('/'+navigationButtons[5], {
    //             templateUrl: 'app/views/orderpricewithdraw.html'
    //         })
    //         .otherwise({
    //             redirectTo: '/'+navigationButtons[0]
    //         });
    // });

})();
