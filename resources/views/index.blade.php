<!DOCTYPE html>
<html lang="en" ng-app="alom">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title> אלום - תוכנה לחישוב אלומיניום </title>

    <!-- LIBRARYS OF  stylesheet -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('css/bootstrap-rtl.min.css')}}">





    <!-- MY  stylesheet -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link href="{{asset('css/print.css')}}" rel="stylesheet" media="print" type="text/css" />


    <!-- Scripts -->
    <script>
        window.Laravel =<?php echo json_encode([
                'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body ng-controller="mainController">


<nav-bar></nav-bar>
<section class="container">
    <div class="row">
        <div class="col-md-2" ui-view="right"></div>
        <div class="col-md-8" ui-view="main"></div>
        <div class="col-md-2" ui-view="left"></div>
    </div>
</section>

<footer class="footer bg-success">
    <div class="container">
        <div class="row">
            <div ng-click="input('hearUs')" class="col-md-3 footer-item">
                <h5>האתר בהרצה נשמח לשמוע את דעתך</h5>
            </div>
            <div ng-click="input('request')" class="col-md-3 footer-item">
                <h5>בקשה להוספת חלון/דלת</h5>
            </div>
            <div class="col-md-3">
                <h5></h5>
            </div>
            <div ng-click="input('contact')"  class="col-md-2 footer-item">
                <h5 >צור קשר</h5>
            </div>
        </div>
    </div>
</footer>
<!-- Angular JS AND LIBRARYS-->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="{{asset('js/angular-ui-router.min.js')}}"></script>
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="{{asset('js/bootstrap-rtl.min.js')}}"></script>
<script src="{{asset('js/jcs-auto-validate.min.js')}}"></script>


<!-- MY App -->
<script src="{{asset('app/app.js')}}"></script>
<script src="{{asset('app/run.js')}}"></script>

<!-- ROUTE -->
<script src="{{asset('app/route.js')}}"></script>

<!-- MY Services -->
<script src="{{asset('app/services/adminService.js')}}"></script>
<script src="{{asset('app/services/localDataServeice.js')}}"></script>
<script src="{{asset('app/services/temporaryDataService.js')}}"></script>
<script src="{{asset('app/services/calculatorService.js')}}"></script>

<!-- App Controller -->
<script src="{{asset('app/controllers/mainController.js')}}"></script>
<script src="{{asset('app/controllers/homeController.js')}}"></script>
<script src="{{asset('app/controllers/cutByWindowController.js')}}"></script>
<script src="{{asset('app/controllers/cutByProfileController.js')}}"></script>
<script src="{{asset('app/controllers/loginController.js')}}"></script>
<script src="{{asset('app/controllers/registerController.js')}}"></script>
<script src="{{asset('app/admin/controllers/adminAddWindowController.js')}}"></script>
<script src="{{asset('app/admin/controllers/mainAdminController.js')}}"></script>
<script src="{{asset('app/admin/controllers/adminAddProfelController.js')}}"></script>
<script src="{{asset('app/admin/controllers/adminAddabzaremController.js')}}"></script>


<!-- App Directives -->
<script src="{{asset('app/directives/navbar/navBarDirective.js')}}"></script>
<script src="{{asset('app/directives/buttongrope/buttonGroupDirective.js')}}"></script>
<script src="{{asset('app/directives/addwindow/addWindowDirective.js')}}"></script>
<script src="{{asset('app/directives/addwindowinfo/addWindowInfo.js')}}"></script>
<script src="{{asset('app/directives/windowsadded/windowsAdded.js')}}"></script>
<script src="{{asset('app/directives/cutbywindows/cutByWindows.js')}}"></script>
<script src="{{asset('app/directives/cutbyprofel/cuteByProfel.js')}}"></script>
<script src="{{asset('app/directives/profelsorder/profelsOrder.js')}}"></script>
<script src="{{asset('app/directives/glassorder/glassOrder.js')}}"></script>
<script src="{{asset('app/directives/contact/contactDirective.js')}}"></script>
<script src="{{asset('app/directives/userrequset/userRequest.js')}}"></script>
<script src="{{asset('app/directives/hearus/hearUs.js')}}"></script>
<script src="{{asset('app/directives/pdf/pdfDirective.js')}}"></script>
<script src="{{asset('app/directives/print/printDirective.js')}}"></script>
<script src="{{asset('app/directives/clientoffer/clientOffer.js')}}"></script>
</body>
</html>
