const base = require("./pages/base");
const STORE_URL = "http://opencart.qatestlab.net/index.php"
const BUY_PRODUCT = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=47&page=2"
const cartCheckout = 'http://opencart.qatestlab.net/index.php?route=checkout/cart'

module.exports = function() {
  const signButton = {xpath: '//a[text()="Sign In"]'};
  const emailField = {xpath: '//*[@id="input-email"]'};
  const pswdField = {xpath: '//*[@id="input-password"]'};
  const selectButton = {xpath: '//*[@id="product"]/div[1]'};
  const selectColour = {xpath: '//a[@rel="76"]'};
  const addToCartButton = {xpath: '//button[@id="button-cart"]'};
  const removeButton = {xpath: '//button [@class="btn btn-danger"]'};
  
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

    productChoice() {
      this.amOnPage(BUY_PRODUCT);
      this.click(selectButton);
      this.click(selectColour);
      this.click(addToCartButton);
    },

    async removeItem(){
      this.amOnPage(cartCheckout);
      
      while (await this.grabNumberOfVisibleElements(removeButton)) {
        this.click(removeButton);
        count--

      }
    },

    
  
      


    
    
  });
}
