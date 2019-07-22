 let app = angular.module('myApp', ["ngRoute"]);


//var app = angular.module('myApp', [ 'ngRoute', 'LocalStorageModule', 'ngDialog']);


// config routes
app.config( function($routeProvider,$windowProvider)  {
    var $window = $windowProvider.$get();
    if($window.sessionStorage.getItem('vacation-token')){
        loggedIn=true;
    }
    else{
        loggedIn=false;
    }
    $routeProvider
        // homepage
        .when('/', {
            // this is a template
            templateUrl: 'pages/home/home.html'
        })
        // Register
        .when('/register', {
            // this is a template url
            templateUrl: 'pages/register/register.html',
            controller : 'registerController as regCtrl'
        })
        // Login
        .when('/login', {
            templateUrl: 'pages/login/login.html',
            controller : 'loginController as loginCtrl'
        })
        // poi
        .when('/poi', {
            templateUrl: 'pages/poi/poi.html',
            controller : 'poiController as poiCtrl'
        })
        // about
        .when('/about', {
            // this is a template url
            templateUrl: 'pages/about/about.html',
            //controller : 'aboutController as abtCtrl'
        })
        .when('/httpRequest', {
            templateUrl: 'pages/http/request.html',
            controller : 'httpController as httpCtrl'
        })
        // other
        .otherwise({ redirectTo: '/' });
    });