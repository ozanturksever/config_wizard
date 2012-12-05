'use strict';

describe('wizard', function () {
    var scope, ctrl, $location, routeRules, $httpBackend;

    beforeEach(module('wizard'));
    beforeEach(inject(function ($rootScope, $controller, _$httpBackend_, WIZARD_CONFIG_URL) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET(WIZARD_CONFIG_URL).respond(
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

    it('should select language as tr',function(){
        $location.path('/');
        scope.changeLanguage('tr');
        expect(scope.configData['language']).toBe('tr');
    });

});