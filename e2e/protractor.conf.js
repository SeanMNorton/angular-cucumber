exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.feature'
  ],
  capabilities: {
    'browserName': 'chrome',
    // chromeOptions: {
    //   args: [ "--headless", "--disable-gpu" ]
    // }
  },
  directConnect: true,

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  cucumberOpts: {
    require: ['./src/**/*.steps.ts'], // loads step definitions
    format: 'json: e2e-output.txt',               // enable console output
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  }
};