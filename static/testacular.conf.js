basePath = '';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'lib/underscore-min.js',
    'lib/angular/angular.js',
    'lib/angular/angular-*.js',
    'test/e2e/angular/angular-mocks.js',
    'js/*.js',
    'test/*.js'
];

port = 9090;

autoWatch = false;

browsers = ['Firefox'];

junitReporter = {
    outputFile:'test_out/unit.xml',
    suite:'unit'
};
