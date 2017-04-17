/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("bookingApp");

app.controller("bookingServicesCntrl",["$scope", function ($scope) {

}])

app.directive("bookingServices", function () {
    return {
        restrict: "E",
        templateUrl: "services-list.html"
    }
})