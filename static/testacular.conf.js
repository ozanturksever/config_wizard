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

port = 8088;

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
    outputFile:'test_out/unit.xml',
    suite:'unit'
};
