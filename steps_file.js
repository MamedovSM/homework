const base = require("./pages/base");
const STORE_URL = "http://opencart.qatestlab.net/index.php"

module.exports = function() {
  const signButton = {xpath: '//a[text()="Sign In"]'};
  const emailField = {xpath: '//*[@id="input-email"]'};
  const pswdField = {xpath: '//*[@id="input-password"]'};
  
  
  return actor({
    
    openStore() {
      this.amOnPage(STORE_URL);
    },

    login(user) {
      this.openStore();
      this.click(signButton);
      this.fillField(emailField, user.email);
      this.fillField(pswdField, user.pswd);
      base.clickLogin();
      this.see("My Orders");
    },  
  });
}
