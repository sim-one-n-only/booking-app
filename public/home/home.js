var app = angular.module("bookingApp");

app.controller("homeCntrl", ["$scope", "$location", function ($scope, $location) {
    $scope.enter = function () {
        $location.path("/list-view")
    }
}])

app.directive("home", function () {
    return {
        restrict: 'E',
        template: "<h1>BookMyBiz</h1><button ng-click='enter()'>ENTER</button>"
    }
})