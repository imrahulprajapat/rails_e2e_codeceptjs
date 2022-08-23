let Helper = codecept_helper; // eslint-disable-line

class ClickIfVisible extends Helper {
  async clickIfVisible (selector, ...options) {
    const helper = this.helpers['Puppeteer']
    try {
      const numVisible = await helper.grabNumberOfVisibleElements(selector)

      if (numVisible) {
        return helper.click(selector, ...options)
      }
    } catch (err) {
      console.log('Skipping operation as the element is not visible.')
    }
  }
}

module.exports = ClickIfVisible
