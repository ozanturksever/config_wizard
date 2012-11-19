function SelectLanguageCtrl($scope, $http) {
    $scope.selectedLanguage = 'tr';
    $scope.supportedLanguages = [];
    $http.get('/supported_languages').success(function(data) {
        $scope.supportedLanguages = data;
    })
    $scope.selectLanguage = function (language) {
        $scope.selectedLanguage = language;
    }
}