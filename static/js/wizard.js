var app = angular.module('wizard', [])
    .filter('i18n', ['$rootScope', function($rootScope) {
        return function (input) {
            var translations = {
                "tr" : {
                    "Wellcome to Logsign Configuration Wizard!" : "Logsign Konfigurasyon Sihirbazina Hosgeldiniz!",
                    "Thank you for using Logsign." : "Logsign'i kullandiginiz icin tesekkur ederiz.",
                    "Here are the steps that what you need to specify." : "Iste belirlemeniz gereken adimlar.",
                    "Turkish" : "Turkish",
                    "English" : "English",
                    "Configuration Management" : "Konfigurasyon Yonetimi",
                    "Passwords" : "Sifreler",
                    "Check Internet Connection" : "Internet Baglantisi Kontrolu",
                    "License" : "Lisans",
                    "Mail/SMS Settings" : "Mail/SMS Ayarlari",
                    "Sender Configuration" : "Kaynak Konfigurasyonlari",
                    "Welcome to Logsign." : "Logsign'a Hosgeldiniz."

                },
                "en" : {
                    "Wellcome to Logsign Configuration Wizard!" : "Wellcome to Logsign Configuration Wizard!",
                    "Thank you for using Logsign." : "Thank you for using Logsign.",
                    "Here are the steps that what you need to specify." : "Here are the steps that what you need to specify.",
                    "Turkish" : "Turkish",
                    "English" : "English",
                    "Configuration Management" : "Configuration Management",
                    "Passwords" : "Passwords",
                    "Check Internet Connection" : "Check Internet Connection",
                    "License" : "License",
                    "Mail/SMS Settings" : "Mail/SMS Settings",
                    "Sender Configuration" : "Sender Configuration",
                    "Welcome to Logsign." : "Welcome to Logsign."
                }
            },
            currentLanguage = $rootScope.currentLanguage || 'en';
            return translations[currentLanguage][input];
        }
    }]);

    app.config(function ($routeProvider) {
        $routeProvider.
            when('/', {templateUrl:"steps/entry.html"}).
            when('/selectLanguage', {templateUrl:"steps/select_language.html"}).
            when('/configFileSelection', {templateUrl:"steps/config_file_selection.html"}).
            when('/passwordSet', {templateUrl:"steps/password_set.html"}).
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

