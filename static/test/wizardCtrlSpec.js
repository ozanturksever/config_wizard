'use strict';

describe('wizard', function () {
    var scope, ctrl, $location, routeRules, $httpBackend;

    beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
        $httpBackend = _$httpBackend_
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
});