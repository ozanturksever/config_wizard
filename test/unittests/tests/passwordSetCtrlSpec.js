describe('Password set tests', function () {
    var scope, ctrl,$httpBackend;
    beforeEach(module('wizard'));
    beforeEach(inject(function($rootScope, $controller,_$httpBackend_,CHANGE_PASSWORD_URL){
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET(CHANGE_PASSWORD_URL).respond(
            {
                "success": true,
                "message": "OK"
            }
        );

        scope = $rootScope.$new();
        ctrl = $controller(PasswordSetCtrl, {$scope:scope});
    }))
    it('when clicked save button, should show complete message', function () {
        var obj = new Object();
        obj.password = 'dsa';
        obj.pass2 = 'aaa';
        scope.submitPasswords(obj);
    });
});