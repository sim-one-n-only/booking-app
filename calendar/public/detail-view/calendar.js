/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("bookingApp");

app.controller("calendarCntrl", ["$scope", "scheduleService", "$filter", function ($scope, scheduleService, $filter) {

    $scope.selectedDate = [];

    $scope.allEvents = [];

    $scope.daysEvents = [];

    scheduleService.getBookings().then(function (response) {
        console.log(response);
        // $scope.allEvents = response;
        for(var i = 0; i < response.length; i++){
            $scope.selectedDate.push(new Date(response[i].date));
            $scope.allEvents.push(response[i]);
            console.log($scope.selectedDate);
            console.log($scope.allEvents);

        }
    })



    $scope.dayFormat = "d";

    $scope.firstDayofWeek = 0;

    $scope.setDirection = function (direction) {
        $scope.direction = direction;
        $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    };
    //



    $scope.dayClick = function (date) {
        $scope.selectedDate = date

}




    $scope.setDayContent = function(date) {

        }



    // $scope.setDirection();
    //
    // $
    //
    // $scope.setDayContent = function (date) {
    //     return scheduleService.getContent(date).then(function (response) {
    //         return response;
    //     })
    //
    //
    //
    // };




    // $scope.setDayContent = function (date, content) {
    //     if(!content) {
    //         content = "<p class='calendarDate'>T</p>"
    //     }
    // }
}])

app.directive("calendar", function () {
    return {
        restrict: "E",
        templateUrl: "calendar-detail-view.html"
    }
})