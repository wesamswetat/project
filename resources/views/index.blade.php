<!DOCTYPE html>
<html lang="en" ng-app="alom">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title> אלום </title>

    <!-- LIBRARYS OF  stylesheet -->
    <link rel="stylesheet" href="{{asset('css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/bootstrap-rtl.min.css')}}">

    <!-- MY  stylesheet -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}">


    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>


<nav-bar></nav-bar>
<ui-view></ui-view>

<!-- Angular JS AND LIBRARYS-->
<script src="{{asset('js/angular.min.js')}}"></script>
<script src="{{asset('js/angular-ui-router.min.js')}}"></script>
<script src="{{asset('js/angular-animate.min.js')}}"></script>
<script src="{{asset('js/jquery-1.9.1.min.js')}}"></script>
<script src="{{asset('js/bootstrap-rtl.min.js')}}"></script>
<script src="{{asset('js/jcs-auto-validate.min.js')}}"></script>

<!-- MY App -->
<script src="{{asset('app/app.js')}}"></script>

<!-- ROUTE -->
<script src="{{asset('app/route.js')}}"></script>

<!-- MY Services -->
<script src="{{asset('app/services/adminService.js')}}"></script>
<script src="{{asset('app/services/localDataServeice.js')}}"></script>

<!-- App Controller -->
<script src="{{asset('app/controllers/mainController.js')}}"></script>
<script src="{{asset('app/controllers/CutByWindowController.js')}}"></script>
<script src="{{asset('app/controllers/CutByProfileController.js')}}"></script>
<script src="{{asset('app/controllers/loginController.js')}}"></script>
<script src="{{asset('app/controllers/registerController.js')}}"></script>
<script src="{{asset('app/admin/controllers/adminAddWindowController.js')}}"></script>
<script src="{{asset('app/admin/controllers/mainAdminController.js')}}"></script>


<!-- App Directives -->
<script src="{{asset('app/directives/navbar/navBarDirective.js')}}"></script>
<script src="{{asset('app/directives/buttongrope/buttonGroupDirective.js')}}"></script>
<script src="{{asset('app/directives/addwindow/addWindowDirective.js')}}"></script>
</body>
</html>
