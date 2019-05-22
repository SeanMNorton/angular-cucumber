// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS', 'PhantomJS_custom'],
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },
    phantomjsLauncher: {
      exitOnResourceError: true
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      'karma-junit-reporter'
    ],
    reporters: ['progress', 'junit'],
    junitReporter: {
      outputDir: '../', // results will be saved as $outputDir/$browserName.xml
      // outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
    },

  });
};
