const { I } = inject();

module.exports = {
  myAccButton: {xpath: '//*[@id="top-links"]/ul/li/span/span'},
  regLink: {xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a'},

  clickMyAccountButton(){
    I.click(this.myAccButton);
  },

  clickMyRegLink(){
    I.click(this.regLink);
  },
  
  

  // insert your locators and methods here
}
