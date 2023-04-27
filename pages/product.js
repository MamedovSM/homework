const { I } = inject();
const BUY_PRODUCT = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=47&page=2"
let product_price = '';
let option_price = '';
let total_price = '';
let shipping_price = '';



module.exports = {
  selectButton: {xpath: '//*[@id="product"]/div[1]'},
  selectColour: {xpath: '//a[@rel="76"]'},
  addToCartButton: {xpath: '//button[@id="button-cart"]'},
  productPrice: {xpath: '//div[@class="price"]/span[1]'},
  optionPrice: {xpath:'//div[@id="product"]//a[@class="sbSelector"]'},
  totalPrice: {xpath: '//td[.="Total:"]/following-sibling::td'},
  shippingPrice: {xpath: '//td[.="Flat Shipping Rate:"]/following-sibling::td'},

  productChoice(){
    I.amOnPage(BUY_PRODUCT);
    I.click(this.selectButton);
    I.click(this.selectColour);
    I.click(this.addToCartButton);
  },

  async getProductPrice(){
    const grabProductPrice = await I.grabTextFrom(this.productPrice);
    product_price = await I.parsePrice(grabProductPrice);
  },

  async getOptionPrice(){
    const grabOptionPrice = await I.grabTextFrom(this.optionPrice);
    option_price = await I.parsePrice(grabOptionPrice); 
  },

  async getTotalPrice(){
    const grabTotalPrice = await I.grabTextFrom(this.totalPrice);
    total_price = await I.parsePrice(grabTotalPrice);
  },

  async getShippingPrice(){
    const grabShippingPrice = await I.grabTextFrom(this.shippingPrice);
    shipping_price = await I.parsePrice(grabShippingPrice);
  },

  async priceComparison(){
    await I.assertEqual(product_price + option_price + shipping_price, total_price, "Prices are not in match");
  },


}

