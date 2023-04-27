const { I } = inject();
const BUY_PRODUCT = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=47&page=2"

module.exports = {
  selectButton: {xpath: '//*[@id="product"]/div[1]'},
  selectColour: {xpath: '//a[@rel="76"]'},
  addToCartButton: {xpath: '//button[@id="button-cart"]'},
  productPrice: {xpath: '//div[@class="price"]/span[1]'},
  optionPrice: {xpath:'//div[@id="product"]//a[@class="sbSelector"]'},
  
  addProductToCart(){
    I.amOnPage(BUY_PRODUCT);
    I.click(this.selectButton);
    I.click(this.selectColour);
    I.click(this.addToCartButton);
  },

  async getProductPrice(){
    const grabProductPrice = await I.grabTextFrom(this.productPrice);
    return await I.parsePrice(grabProductPrice);
  },

  async getOptionPrice(){
    const grabOptionPrice = await I.grabTextFrom(this.optionPrice);
    return await I.parsePrice(grabOptionPrice); 
  },

  

  


}

