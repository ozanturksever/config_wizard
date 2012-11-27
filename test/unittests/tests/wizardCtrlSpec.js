'use strict';

describe('wizard', function () {
    var scope, ctrl, $location, routeRules, $httpBackend;

    beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('wizard.json').respond(
            {
                '/':{
                    'next':'/configFileSelection',
                    'prev':'/'
                },
                '/configFileSelection':{
                    'next':'/passwordSet',
                    'prev':'/'
                },
                '/passwordSet':{
                    'next':'/',
                    'prev':'/configFileSelection'
                }
            }
        );

//        $httpBackend.expectGET(LANGUAGE_DATA_URL).respond(
//            {
//                "tr" : {
//                    "Wellcome to Logsign Configuration Wizard!" : "Logsign Konfigurasyon Sihirbazina Hosgeldiniz!",
//                    "Thank you for using Logsign." : "Logsign'i kullandiginiz icin tesekkur ederiz."
//                },
//                "en" : {
//                    "Wellcome to Logsign Configuration Wizard!" : "Wellcome to Logsign Configuration Wizard!",
//                    "Thank you for using Logsign." : "Thank you for using Logsign."
//                }
//            }
//        );

        scope = $rootScope.$new();
        ctrl = $controller(WizardCtrl, {$scope:scope});
        $httpBackend.flush();
    }));

    beforeEach(inject(function (_$location_) {
        $location = _$location_;
        $location.path('/');
    }));

    it('should go next/prev when called', function () {
        scope.goToNext();
        expect($location.$$path).toBe('/configFileSelection');
        scope.goToPrev();
        expect($location.$$path).toBe('/');
    })

    it('should change to next step', function () {
        scope.goToNext();
        expect($location.$$path).toBe('/configFileSelection');
    });

    it('should go passwordSet when in configFileSelection', function () {
        $location.path('/configFileSelection');
        scope.goToNext();
        expect($location.$$path).toBe('/passwordSet');
    });

    it('should select language as tr',function(){
        $location.path('/');
        scope.changeLanguage('tr');
        expect(scope.configData['language']).toBe('tr');
    });

});