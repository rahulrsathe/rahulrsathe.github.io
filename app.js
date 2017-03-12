var app = angular.module('LoginApp', []);
app.controller('LoginCntrlr', function ($scope) {
 
    $scope.validatepwd = function() {
        if ($scope.pwd == 'boom') {
            $scope.pwd = "";
            $scope.alertMsg = "Good Work remembering your password!";
        }

        else {
            $scope.pwd = "";
            $scope.alertMsg = "Why do you always forget your password?";
        }
    }

    $scope.reset = function() {
            $scope.pwd = "";
            $scope.alertMsg = "";
            $scope.username = "";
    }

});
 
  