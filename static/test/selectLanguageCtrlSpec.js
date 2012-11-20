describe('Language Selection Test', function () {
    var scope, ctrl, $httpBackend

    beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_
        $httpBackend.expectGET('/supported_languages').respond([
            {text:'Turkish'},
            {text:'English'}
        ]);
        ctrl = $controller(SelectLanguageCtrl,{$scope:scope});
    }));

    it('shoud have language controler', function () {
        expect(ctrl).toBeDefined()
    });

    it('can select language', function () {
        scope.selectLanguage('Turkish')
        expect(scope.selectedLanguage).toBe('Turkish')
    });

    it('defatuls to tr', function(){
        expect(scope.selectedLanguage).toBe('Turkish')
    });

})
