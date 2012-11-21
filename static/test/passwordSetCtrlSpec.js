xdescribe('Password set tests', function () {
    var scope, ctrl

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        ctrl = $controller(PasswordSetCtrl, {$scope:scope});

    }))
    it('should show password form', function () {
        //scope.setWillUpload(true);
        //expect(scope.will_upload).toBe(true)
    });
});