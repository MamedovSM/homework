const { I } = inject();

module.exports = {
  myAccButton: {xpath: '//span[@class="toggle"]/span'},
  regLink: {xpath: '//ul[@style="display: block;"]/li[1]'},
  loginButton: {xpath: '//input[@value="Login"]'},
  cartIcon: {xpath: '//span [@id="cart-total2"]'},

  clickMyAccountButton(){
    I.click(this.myAccButton);
  },

  clickMyRegLink(){
    I.click(this.regLink);
  },

  clickLogin(){
    I.click(this.loginButton);
  },

  clickCartChechout(){
    I.click(this.cartIcon);
  },

}