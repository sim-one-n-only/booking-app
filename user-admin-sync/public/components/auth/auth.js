/**
 * Created by sim_one_n_only on 4/26/17.
 */
var app = angular.module("bookingApp.Auth", []);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "signupCntrl"
        })

        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "loginCntrl"
        })

        .when("/logout", {
            templateUrl: "components/auth/logout/logout.html",
            controller: "logoutCntrl"
        })
}]);

app.service("tokenService", [function () {
    var userToken = "token";

    this.setToken = function (token) {
        localStorage[userToken] = token;
    };

    this.getToken = function (token) {
        return localStorage[userToken];
    };

    this.removeToken = function () {
        localStorage.removeItem(userToken);
    }
}]);

app.service("userService", ["$http", "$location", "tokenService", function ($http, $location, tokenService) {
    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };

    this.login = function (user) {
        return $http.post("/auth/login", user).then(function (response) {
            tokenService.setToken(response.data.token);
            return response;
        })
    };

    this.logout = function () {
        tokenService.removeToken();
        $location.path("/");
    };

    this.isAuthenticated = function () {
        return !!tokenService.getToken();
    }
}])