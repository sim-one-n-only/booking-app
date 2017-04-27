var app = angular.module("bookingApp", ["ngRoute", "bookingApp.Auth"]);

app.controller("mainCntrl", ["$scope", function ($scope) {

}])

var app = angular.module("bookingApp");

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeCntrl"
        })

        .when("/bookings", {
            templateUrl: "components/bookings/bookings.html",
            controller: "bookingsCntrl"
        })

        .when("/calendar", {
            templateUrl: "components/calendar/calendar.html",
            controller: "calendarCntrl"
        })

        .otherwise({
            redirectTo: "/home"
        })

}])