'use strict';

describe('wizard', function () {
    var scope, ctrl, $location, routeRules, $httpBackend;

    beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
        $httpBackend = _$httpBackend_
        $httpBackend.expectGET('wizard.json').respond(
            {
                '/':{
                    'next':'/selectLanguage',
                    'prev':'/'
                },
                '/selectLanguage':{
                    'next':'/configFileSelection',
                    'prev':'/'
                }
            }
        );

        scope = $rootScope.$new();
        ctrl = $controller(WizardCtrl, {$scope:scope});
        $httpBackend.flush();
    }));

    beforeEach(inject(function (_$location_) {
        $location = _$location_;
        $location.path('/');
    }));

    it('should go next/prev when called', function () {
        scope.goToNext()
        expect($location.$$path).toBe('/selectLanguage')
        scope.goToPrev()
        expect($location.$$path).toBe('/')
    })

    it('should change to next step', function () {
        scope.goToNext();
        expect($location.$$path).toBe('/selectLanguage');
    });

    it('should go configFileSelection when in selectLanguage', function () {
        $location.path('/selectLanguage')
        scope.goToNext();
        expect($location.$$path).toBe('/configFileSelection');
    });
});