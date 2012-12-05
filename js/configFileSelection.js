function ConfigFileSelectionCtrl($scope, $http, CONFIG_FILE_URL) {
    $scope.setFiles = function (element) {
        $scope.$apply(function($scope){
            $scope.file = [];
            $scope.file = element.files[0];
        });
    }
    $scope.uploadFile = function () {
        var formData = new FormData();
        formData.append("uploadedFile", $scope.file);

        $http({
            method: 'GET', //when server must POST
            url: CONFIG_FILE_URL,
            data: formData,
            headers: {'Content-Type': 'Content-Type: application/json'}
        }).success(function(data, status){
            $scope.confData = data;
        }).error(function(data, status){
            $scope.confData = [];
        });
    }
};