const { baseUrls } = require('../config')
const { httpRedirection } = require('../config')
const { I } = inject()

// eslint-disable-next-line no-undef
Before(test => test.retries(2))

Given(/I am on product creation page/, () => {
  prefix = httpRedirection === 'no' ? 'http' : 'https'
  I.amOnPage(`${prefix}://${baseUrls}/products/new`)
  I.seeInCurrentUrl(`/products/new`)
})

Then(/I fill up product details/, () => {
  I.wait(5)

  I.fillField('#product_name', 'test')
  I.fillField('#product_desc', 'test user')
  I.click('Create Product')
})

Then(/I should redirect to product details page/, () => {
  I.wait(5)
  I.seeInCurrentUrl(`/products/`)
  I.see('test');
})