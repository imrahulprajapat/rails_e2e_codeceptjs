/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/features',
  output: './output',
  helpers: {
    Puppeteer: {
      show: true,
      windowSize: '1200x900',
      fullPageScreenshots: true,
      uniqueScreenshotNames: true,
      chrome: {
        args: [
          '--no-sandbox',
          '--disable-web-security',
          '--ignore-certificate-errors'
        ]
      }
    },
    ClickIfVisible: {
      require: './helpers/click_if_visible.js'
    },
    REST: {
      endpoint: 'http://localhost:3000'
    }
  },
  gherkin: {
    features: './features/product.feature',
    steps: [
      './step_definations/products/product_creations.js'
    ]
  },
  include: {
    I: './steps_file.js'
  },
  name: 'e2e'
}