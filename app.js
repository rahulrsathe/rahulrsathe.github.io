var app = angular.module('LoginApp', ['ngRoute']);

app.config('$routeProvider', function ($routeProvider) {
    $routeProvider
       // .when("/", {
       //     templateUrl : "login.html"
       // })
        .when("/CreateNewClaim", {
            templateUrl : "createNewClaim.html"
        })
        .otherwise({
            templateUrl : "login.html"
        });
});

app.controller('LoginCntrlr', function ($scope) {

    $scope.validatepwd = function () {
        if ($scope.pwd == 'boom') {
            $scope.pwd = "";
            $scope.alertMsg = "Good Work remembering your password!";
        }

        else {
            $scope.pwd = "";
            $scope.alertMsg = "Why do you always forget your password?";
        }
    }

    $scope.reset = function () {
        $scope.pwd = "";
        $scope.alertMsg = "";
        $scope.username = "";
    }

});