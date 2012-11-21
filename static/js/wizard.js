var app = angular.module('wizard', [])
    .filter('i18n', ['$rootScope', '$http', function($rootScope,$http) {
        var msgIds ={};
        $http.get('/get_msg_ids').success(function(data) {
            msgIds = data;
        })
        return function (input) {
            try {
                var currentLanguage = $rootScope.currentLanguage || 'en';
                return msgIds[currentLanguage][input];
            }catch (err) {
            }
        }
    }]);

    app.config(function ($routeProvider) {
        $routeProvider.
            when('/', {templateUrl:"steps/entry.html"}).
            when('/selectLanguage', {templateUrl:"steps/select_language.html"}).
            when('/configFileSelection', {templateUrl:"steps/config_file_selection.html"}).
            otherwise({redirectTo:'/'})
    });


function WizardCtrl($rootScope,$scope, $location, $http) {
    $scope.changeLanguage = function (lang) {
        $rootScope.currentLanguage = lang;
    }

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

