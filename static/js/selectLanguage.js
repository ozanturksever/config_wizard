function SelectLanguageCtrl($scope, $http) {
    $scope.selectedLanguage = 'Turkish';
    $scope.supportedLanguages = [];

    $http.get('/supported_languages').success(function(data) {
        $scope.supportedLanguages = data;
    })
    $scope.selectLanguage = function (language) {
        $scope.selectedLanguage = language;
    }
}