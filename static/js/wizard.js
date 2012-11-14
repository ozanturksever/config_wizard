angular.module('wizard', []).
    config(function ($routeProvider) {
        $routeProvider.
            when('/', {templateUrl:"steps/entry.html"}).
            when('/selectLanguage', {templateUrl:"steps/select_language.html"}).
            when('/configFileSelection', {templateUrl:"steps/config_file_selection.html"}).
            otherwise({redirectTo:'/'})
    });

function WizardCtrl($scope, $location, $http) {
    $scope.routeRules = {};

    $http.get('wizard.json').success(function(data) {
        $scope.routeRules = data;
    });

    $scope.goToNext = function () {
        rule = _loadRule($location.$$path)
        $location.path(rule['next']);
    }

    $scope.goToPrev = function () {
        rule = _loadRule($location.$$path)
        $location.path(rule['prev']);
    }

    function _loadRule(path) {
        try {
            routeRule = $scope.routeRules[path]
            next = routeRule['next']
            prev = routeRule['prev']
        } catch (err) {
            return {'next':'/', 'prev':'/'}
        }
        return {'next':next, 'prev':prev}
    }
}