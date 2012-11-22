var app = angular.module('wizard', []);

app.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            resolve:{
                msgIds:function ($q, $http,$timeout) {
                    var deffer = $q.defer();
                    var success = function (data) {
                        deffer.resolve(data);
                    };
                    $http.get('/get_msg_ids').success(success);

                    return deffer.promise;
                }
            },
            templateUrl:"steps/entry.html",
            controller:function ($rootScope, msgIds) {
                $rootScope.msgIds = msgIds;
            }
        }
    ).
        when('/configFileSelection', {templateUrl:"steps/config_file_selection.html"}).
        when('/passwordSet', {templateUrl:"steps/password_set.html"}).
        otherwise({redirectTo:'/'})
});

app.filter('i18n', ['$rootScope', function ($rootScope) {
    return function (input) {
        if ($rootScope.msgIds == undefined ) {
            return
        }
        var currentLanguage = $rootScope.configData['language'] || 'en';
        return $rootScope.msgIds[currentLanguage][input];
    }
}]);

function WizardCtrl($rootScope, $scope, $location, $http) {
    $rootScope.configData = {'language':'en'};
    $scope.header = 'Welcome.';

    $scope.changeLanguage = function (lang) {
        $rootScope.configData['language'] = lang;
    }

    $scope.routeRules = {};

    $http.get('wizard.json').success(function (data) {
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
