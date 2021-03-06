describe('Entry', function () {
    beforeEach(function () {
        browser().navigateTo(url)
    });

    it('should be in url /', function () {
        expect(browser().location().url()).toBe('/');
    })

    it('can select english', function () {
        element('#select_en_button').click();
        expect(binding('"Thank you for using Logsign." | i18n')).toBe('Thank you for using Logsign.');
    })

    it('can select turkish', function () {
        element('#select_tr_button').click();
        expect(binding('"Next" | i18n')).toBe('Sonraki');
    })

    it('should go to next step', function () {
        element('button#goToNextStep').click();
        expect(browser().location().url()).toBe('/configFileSelection');
    });

    it('should go to config file selection when in select language', function() {
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
