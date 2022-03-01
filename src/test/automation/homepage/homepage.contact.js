const {Builder, By } = require('selenium-webdriver');

// notes make sure your webdriver version samewith your chrome version

module.exports = async function LoginTest() {
  const driver = await new Builder().forBrowser('chrome').build();
  let resultUrl = null;
  try {
    await driver.get('http://localhost:3000');
    await driver.findElement(By.id('CONTACT')).click();
    resultUrl = await driver.getCurrentUrl();

  } catch (error) {
    return new Error(error);
  } finally {

    return resultUrl;
    // await driver.quit();
  }
};
