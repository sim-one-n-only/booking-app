/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("bookingApp");

app.controller("bookingServicesCntrl",["$scope", "scheduleService", "$location", "$filter", "MaterialCalendarData", function ($scope, scheduleService, $location, $filter, MaterialCalendarData) {

    $scope.bookings = [];

    scheduleService.getBookings().then(function (response) {
        $scope.bookings = response;
    })

    $scope.post = function (newSchedule) {
        scheduleService.postBooking(newSchedule).then(function () {
            $scope.bookings.push(newSchedule);
            location.href = "#/detail-view";
            $location.path("/calendar-detail-view");

        })

        $scope.newSchedule = {};
    }

    $scope.delete = function (schedule, index) {
        var deletedBooking = $scope.bookings.splice(index, 1);
        console.log(deletedBooking);
        scheduleService.deleteBooking(schedule).then(function (response) {
            bookings = response;
        })
    }

    // $scope.edit = function (schedule, index) {
    //     scheduleService.editBooking(schedule).then(function (response) {
    //         console.log(schedule);
    //     })
    // }

    $scope.dayFormat = "d";

    $scope.selectedDate = null;

    $scope. selectedDate = [];

    $scope.firstDayOfWeek = 0;

    $scope.setDirection = function (direction) {
        $scope.direction = direction;
        $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    }

    $scope.dayClick = function (date) {
        $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
    }

    $scope.prevMonth = function (data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    }

    $scope.nextMonth = function (data) {
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    }

    $scope.tooltips = true;

    $scope.setDayContent = function (date, content) {
        if(!content) {
            content = "<p></p>";
        }

        date = new Date(date)
        date = date.toString()
        console.log(date)
        console.log(typeof date)

        return scheduleService.getScheduleContent("/schedule/content?date=" + date).then(function (response) {
            if(!response.data) {
                return '<p>'
            }
            return '<p>${response.data}</p>'
        })
    }


}])

app.directive("bookingServices", function () {
    return {
        restrict: "E",
        templateUrl: "service-list.html"
    }
})