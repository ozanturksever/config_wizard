'use strict';

describe('wizard', function () {
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller(WizardCtrl, {$scope: scope});
    }));

    it('should change to next step', function() {
        scope.goToNext()
        expect(scope.currentStep).toBe('selectLanguage');
    });
});