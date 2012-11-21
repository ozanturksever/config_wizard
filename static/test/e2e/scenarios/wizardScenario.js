describe('Entry', function () {
    beforeEach(function () {
        browser().navigateTo(url)
    });

    it('should be in url /', function () {
        expect(browser().location().url()).toBe('/');
    })

    it('should go to next step', function () {
        element('button#goToNextStep').click();
        expect(browser().location().url()).toBe('/configFileSelection');
    });

    xit('should go to config file selection when in select language', function() {
        browser().navigateTo(url+'#/selectLanguage');
        element('#goToNextStep').click();
        expect(browser().location().url()).toBe('/configFileSelection');
    });

    it('should go to prev step', function() {
        browser().navigateTo(url+'#/configFileSelection');
        element('#goToPrevStep').click();
        expect(browser().location().url()).toBe('/');
    });
});
