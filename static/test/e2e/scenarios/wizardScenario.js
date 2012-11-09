describe('Entry', function () {
    beforeEach(function () {
        browser().navigateTo(url)
    });

    it('should see index page', function () {
        expect(element('#content').html()).toContain('welcome');
    });

    it('should be in url /', function () {
        expect(browser().location().url()).toBe('/');
    })

    it('should go to next step', function () {
        element('#goToNextStep').click();
        expect(browser().location().url()).toBe('/selectLanguage');
    });
});
