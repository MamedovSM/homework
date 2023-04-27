const { I } = inject();
const cartCheckout = 'http://opencart.qatestlab.net/index.php?route=checkout/cart'

module.exports = {
  myAccButton: {xpath: '//span[@class="toggle"]/span'},
  regLink: {xpath: '//ul[@style="display: block;"]/li[1]'},
  loginButton: {xpath: '//input[@value="Login"]'},
  cartIcon: {xpath: '//span [@id="cart-total2"]'},
  removeButton: {xpath: '(//button [@class="btn btn-danger"])[1]'},
  checkoutButton: {xpath: '//a[@class="btn-primary btn-r"]'},
  
  clickMyAccountButton(){
    I.click(this.myAccButton);
  },

  clickMyRegLink(){
    I.click(this.regLink);
  },

  clickLogin(){
    I.click(this.loginButton);
  },

  clickCartIcon(){
    I.click(this.cartIcon);
  },

  async removeItem(){
    I.amOnPage(cartCheckout);
    I.wait(1);
    
    if (await I.grabNumberOfVisibleElements(this.removeButton)){
      while (await I.grabNumberOfVisibleElements(this.removeButton)) {
        I.click(this.removeButton);
        I.wait(1);
      }
    }else if (await I.grabTitle('Your shopping cart is empty!')){
      console.log('Your shopping cart is empty!')
    }
  },
  
  clickCartCheckout () {
    I.click(this.checkoutButton);
  },
}