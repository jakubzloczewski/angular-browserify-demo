module.exports = function(karma){
    karma.set({

        basePath : './',
        frameworks: ['browserify', 'jasmine'],
        files : [
            'bower_components/angular/angular.js',
            'app/js/**/*_test.js'
        ],
        browserify: {
            plugin: [ 'stringify' ]
        },
        autoWatch : true,
        preprocessors: {
            'app/js/**/*_test.js': [ 'browserify' ]
        },
        browsers : ['Chrome'],

        plugins : [
            'karma-browserify',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
