   module.exports = {
     reporters: [
       'default',
       ['jest-junit', {
         outputDirectory: '.',
         outputName: 'test-report.xml',
       }],
     ],
     collectCoverage: true,
     coverageReporters: ['lcov', 'text'],
   }
