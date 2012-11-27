basePath = '../../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'vendor/js/angular/angular.js',
    'vendor/js/angular/angular-resource.js',
    'vendor/js/angular-e2e/angular-mocks.js',
    'js/*.js',
    'test/unittests/tests/mocks/*.js',
    'test/unittests/tests/*.js'
];

port = 9090;

autoWatch = false;

browsers = ['Chrome'];

junitReporter = {
    outputFile:'test_out/unit.xml',
    suite:'unit'
};
