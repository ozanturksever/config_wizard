describe('Language Selection Test', function () {
    var scope, ctrl

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller(SelectLanguageCtrl,{$scope:scope});
    }));

    it('shoud have language controler', function () {
        expect(ctrl).toBeDefined()
    });

    it('can select language', function () {
        scope.selectLanguage('tr')
        expect(scope.selectedLanguage).toBe('tr')
    });

    it('defatuls to tr', function(){
        expect(scope.selectedLanguage).toBe('tr')
    });

})
