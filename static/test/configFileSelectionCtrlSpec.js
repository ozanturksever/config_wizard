xdescribe('Config File Selection tests', function () {
    var scope, ctrl

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        ctrl = $controller(ConfigFileSelectionCtrl, {$scope:scope});

    }))
    it('should show upload form', function () {
        scope.setWillUpload(true);
        expect(scope.will_upload).toBe(true)
    });
});