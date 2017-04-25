/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("bookingApp");

app.service("scheduleService", ["$http", function ($http) {

    this.getBookings = function () {
        return $http.get("/schedule").then(function (response) {
            return response.data;
        })
    }

    this.postBooking = function (newSchedule) {
        return $http.post("/schedule/", newSchedule).then(function (response) {
            return response.data;
        })
    }

    this.editBooking = function (schedule) {
        return $http.put("/schedule/" + schedule._id).then(function (response) {
            return response.data;
        })
    }

    this.deleteBooking = function (schedule) {
        return $http.delete("/schedule/" + schedule._id).then(function (response) {
            return response.data;
        })
    }

    this.getContent = function (date) {
        return $http.get("/schedule/content/" + date).then(function (response) {
            return response.data;
        })
    }


}])