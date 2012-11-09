angular.module('wizard', []).
    config(function ($routeProvider) {
        $routeProvider.
            when('/', {templateUrl:"steps/entry.html"}).
            when('/selectLanguage', {templateUrl:"steps/select_language.html"}).
            when('/configFileSelection', {templateUrl:"steps/config_file_selection.html"}).
            otherwise({redirectTo:'/'})
    });

function WizardCtrl($scope, $location) {
    $scope.currentStep = 'entry';
    $scope.loc = $location;

    var wizardConfig = {
        'entry':{'next':'selectLanguage', 'before':'entry'},
        'entrySkip':{'next':'configFileSelection', 'before':'entry'},
        'entryNoConfig':{'next':'configFileSelection', 'before':'entry'},
        'selectLanguage':{'next':'configFileSelection', 'before':'entry'}
    }

    $scope.goToNext = function () {
        if ($scope.currentStep == 'entry') {
            $scope.currentStep = 'selectLanguage';
            $location.path('/selectLanguage');
        }
    }
}