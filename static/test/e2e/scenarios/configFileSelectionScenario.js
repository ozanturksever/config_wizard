describe('Config file selection', function () {
    beforeEach(function () {
        browser().navigateTo(url + '#configFileSelection');
    });
    it('should be in url /configFileSelection', function () {
        expect(browser().location().url()).toBe('/configFileSelection')
    });

    it('must not show uploadFrom firsttime', function () {
        expect(element('#uploadForm').css('display')).toBe('none');
    });

    it('when clicked to yes, must show upload form', function () {
        element('#yesBtn').click();
        expect(element('#uploadForm').css('display')).toBe('block');
    });
});