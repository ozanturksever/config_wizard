describe('Password set', function () {
    beforeEach(function () {
        browser().navigateTo(url + '#passwordSet');
    });
    it('should be in url /passwordSet', function () {
        expect(browser().location().url()).toBe('/passwordSet')
    });

});