describe('Password set', function () {
    beforeEach(function () {
        browser().navigateTo(url + '#passwordSet');
    });
    it('should be in url /passwordSet', function () {
        expect(browser().location().url()).toBe('/passwordSet')
    });
    it('when clicked to save , passwords must save', function(){
        input('user.syspassword').enter('123123');
        input('user.syspassword2').enter('123123');
        input('user.password').enter('123123');
        input('user.password2').enter('123123');
        element(':button').click();
        expect(binding('changePasswordMessage')).toEqual('Ok');
    });

});