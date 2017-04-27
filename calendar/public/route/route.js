/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("bookingApp");

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeCntrl"
        })

    .when("/list-view", {
        templateUrl: "list-view/service-list.html",
        controller: "bookingServicesCntrl"
    })

    .when("/detail-view", {
        templateUrl: "detail-view/calendar-detail-view.html",
        controller: "calendarCntrl"
    })

    .otherwise({
        redirectTo: "/home"
    })
}])