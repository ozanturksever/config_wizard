describe('Config File Selection tests', function () {
    var scope, ctrl, $location, routeRules, $httpBackend;

    beforeEach(module('wizard'));
    beforeEach(inject(function($rootScope, $controller, _$httpBackend_, CONFIG_FILE_URL){
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET(CONFIG_FILE_URL).respond(
            {
                "mailConf": {
                    "from": "logsign@logsign.net"
                },
                "sendersConf": {
                    "192.168.1.1": "sonic,sonicwall,generic"
                }
            }
        );

        scope = $rootScope.$new();
        ctrl = $controller(ConfigFileSelectionCtrl, {$scope:scope});
    }));

    beforeEach(inject(function (_$location_) {
        $location = _$location_;
        $location.path('/');
    }));

    it('should show upload form', function () {
        $location.path('/configFileSelection');
        scope.uploadFile();
    });
});