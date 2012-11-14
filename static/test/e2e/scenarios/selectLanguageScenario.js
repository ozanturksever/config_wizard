describe('Select Language Step', function () {
    beforeEach(function () {
        browser().navigateTo(url + '#selectLanguage');
    });

    it('should be in url /select_language', function () {
        expect(browser().location().url()).toBe('/selectLanguage');
    });

    it('can select turkish', function () {
        element('#select_turkish_btn').click()
        expect(element('#selectedLanguage').text()).toBe('tr');
    });

});