const { I } = inject();

module.exports = {
  continueButton: {xpath: '(//input[@value="Continue"])[last()]'},
  existingAddressField: {xpath: '//label[@for="payment_addressexisting0"]'},
  agreeButton: {xpath: '//input [@type="checkbox"]'},
  confirmOrderButton: {xpath: '//input[@value="Confirm Order"]'},
  firstNameField: {xpath: '//input[@name="firstname"]'},
  lastNameField: {xpath: '//input[@name="lastname"]'},
  companyField: {xpath: '//input[@name="company"]'},
  addressField: {xpath: '//input[@name="address_1"]'},
  cityField: {xpath: '//input[@name="city"]'},
  postCodeField: {xpath: '//input[@name="postcode"]'},
  countryField: {xpath: '(//div[@class="sbHolder"])[1]'},
  country: {xpath: '//a[@rel="220"]'},
  regionField: {xpath: '(//div[@class="sbHolder"])[2]'},
  region: {xpath: '//a[@rel="3505"]'},
  shippingPrice: {xpath: '//td[.="Flat Shipping Rate:"]/following-sibling::td'},
  totalPrice: {xpath: '//td[.="Total:"]/following-sibling::td'},

  verifyCheckoutPage() {
    I.see('Checkout');
  },

  verifyPlaceOrderPage() {
    I.see('Your order has been placed!')
  },
  clickPlaceOrder() {
    I.click(this.confirmOrderButton);
  },
  clickContinue(){
    I.click(this.continueButton);
  },
  
  fillBillingDetails(user){
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.companyField, user.company);
    I.fillField(this.addressField, user.address);
    I.fillField(this.cityField, user.city);
    I.fillField(this.postCodeField, user.postCode);
    I.click(this.countryField);
    I.click(this.country);
    I.click(this.regionField);
    I.click(this.region);
  },
  clickAgree(){
    I.click(this.agreeButton);
  },

  async getShippingPrice(){
    const grabShippingPrice = await I.grabTextFrom(this.shippingPrice);
    return await I.parsePrice(grabShippingPrice);
  },

  async getTotalPrice(){
    const grabTotalPrice = await I.grabTextFrom(this.totalPrice);
    return await I.parsePrice(grabTotalPrice);
  },
  // insert your locators and methods here
}
