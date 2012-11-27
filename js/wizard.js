var app = angular.module('wizard', ['config']);

app.factory('load_language',
    function ($rootScope, $q, $http, $timeout, LANGUAGE_DATA_URL) {
        var deffer = $q.defer();
        var success = function (data) {
            $rootScope.msgIds = data;
            deffer.resolve(data);
        };
        $http.get(LANGUAGE_DATA_URL).success(success);

        return deffer.promise;
    });

app.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl:"html/main.html",
            resolve:{ msgIds:'load_language' }
        }).
        when('/configFileSelection', {
            templateUrl:"html/config_file_selection.html",
            resolve:{ msgIds:'load_language' }
        }).
        when('/passwordSet', {
            templateUrl:"html/about.html",
            resolve:{ msgIds:'load_language' }
        }).
        otherwise({redirectTo:'/'})
});

app.filter('i18n', ['$rootScope', function ($rootScope) {
    return function (input) {
        if ($rootScope.msgIds == undefined) {
            return
        }
        var currentLanguage = $rootScope.configData['language'] || 'en';
        return $rootScope.msgIds[currentLanguage][input];
    }
}]);

function WizardCtrl($rootScope, $scope, $location, $http, WIZARD_CONFIG_URL) {
    $rootScope.configData = {'language':'en'};
    $scope.header = 'Welcome.';

    $scope.changeLanguage = function (lang) {
        $rootScope.configData['language'] = lang;
    }

    $scope.routeRules = {};

    $http.get(WIZARD_CONFIG_URL).success(function (data) {
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
