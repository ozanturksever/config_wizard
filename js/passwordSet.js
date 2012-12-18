function PasswordSetCtrl($scope,$http,CHANGE_PASSWORD_URL) {
//    $scope.submitPasswords = function(user){
//        var params = $.param(user); //when server, method must change POST and attach params
//        $http.get(CHANGE_PASSWORD_URL).success(function (data){
//            $scope.changePasswordMessage = data['message'];
//        });
//    }
    $scope.submitPasswords = function(user) {
        $http({
            method: 'GET',
            url: CHANGE_PASSWORD_URL,
            data: user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data) {
                $scope.data = data;
                $scope.changePasswordMessage = data.message;
            }).error(function(data) {
                $scope.data = data || "Request failed";
            });
        return false;
    };
}