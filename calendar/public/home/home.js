var app = angular.module("bookingApp");

app.controller("homeCntrl", ["$scope", "$location", function ($scope, $location) {
    $scope.enter = function () {
        $location.path("/list-view")
    }
}])

app.directive("home", function () {
    return {
        restrict: 'E',
        template: "<h1>BookMyBiz</h1><div class='row'><div class='col-xs-8'><img class='img-responseive' src='https://near.biz/wp-content/themes/dazzling/images/telephone_number.png'></div></div><button ng-click='enter()'>ENTER</button>"
    }
})