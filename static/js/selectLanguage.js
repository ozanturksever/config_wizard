function SelectLanguageCtrl($scope) {
    $scope.selectedLanguage = 'tr';
    $scope.selectLanguage = function(language) {
        $scope.selectedLanguage=language;
    }
}