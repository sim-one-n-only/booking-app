/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("bookingApp");

app.service("bookingService", ["$http", function ($http) {

    return $http.get("/schedule").then(function (response) {
        return response.data;
    })

    this.postBooking = function (newSchedule) {
        return $http.post("/schedule", newSchedule).then(function (response) {
            return response.data;
        })
    }

    this.editBooking = function (schedule) {
        return $http.put("/schedule" + schedule.id).then(function (response) {
            return response.data;
        })
    }

    this.deleteBooking = function (schedule) {
        return $http.delete("/schedule" + schedule.id).then(function (response) {
            return response.data;
        })
    }
}])