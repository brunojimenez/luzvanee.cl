var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider

    // Main Menu 
    .when("/", {
        templateUrl : "pages/home.html"
    })
    .when("/aboutme", {
        templateUrl : "pages/aboutme.html"
    })
    // General
    .otherwise({
        template : "En construcción!"
    }); 
});