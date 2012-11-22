var app = angular.module('wizard', []);

app.filter('i18n', ['$rootScope', function ($rootScope) {
    return function (input) {
        try {
//            console.log('ss', $rootScope.configData['language']);
            var currentLanguage = $rootScope.configData['language'];
            return $rootScope.msgIds[currentLanguage][input];
        } catch (err) {
        }
    }
}]);

app.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl:"steps/entry.html",
            resolve:WizardCtrl.resolve
        }
    ).
        when('/configFileSelection', {templateUrl:"steps/config_file_selection.html"}).
        when('/passwordSet', {templateUrl:"steps/password_set.html"}).
        otherwise({redirectTo:'/'})
})
;

function WizardCtrl($rootScope, $scope, $location, $http) {
    $rootScope.configData = {};
//    $rootScope.msgIds = msgIds;
//    $scope.msgIdService = msgIdService
    $scope.header = 'Welcome.';

    $scope.changeLanguage = function (lang) {
//        $rootScope.currentLanguage = lang;
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
WizardCtrl.resolve = {
    msgIds:function loadMsgId($rootScope, $q, $http) {
        var deffer = $q.defer();
        var success = function (data) {
            deffer.resolve(data);
            $rootScope.msgIds = data;
        };
        $http.get('/get_msg_ids').success(success);
        return deffer.promise;
    }
}
//WizardCtrl.$inject = ['msgIdService'];