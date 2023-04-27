
Feature('purchase');
const USER = {
    email: '7777111@rrr.com',
    pswd: '123789',
    firstName: 'Aragorn',
    lastName: 'son of Arathorn',
    company: 'The Fellowship of the Ring',
    address: '1st King alley',
    city: 'Minas Tirith',
    postCode: '05963',
    

}
Scenario.only ('buy product', async ({ I, basePage, productPage, checkoutPage,  }) => {
    I.login(USER);
    await basePage.removeItem();
    productPage.productChoice();
    await productPage.getProductPrice();
    await productPage.getOptionPrice();
    basePage.clickCartIcon();
    basePage.clickCartCheckout();
    checkoutPage.verifyCheckoutPage();
    I.wait(1);
    if (await I.grabNumberOfVisibleElements(checkoutPage.existingAddressField)){
        console.log('Address already exist!');
    }else if (await I.grabTitle("First Name")){
        await checkoutPage.fillBillingDetails(USER);
        console.log('Address added successfully!!!')}
    checkoutPage.clickContinue();
    checkoutPage.clickContinue();
    checkoutPage.clickContinue();
    checkoutPage.clickContinue();
    checkoutPage.clickContinue();
    checkoutPage.clickAgree();
    checkoutPage.clickContinue();
    await productPage.getShippingPrice();
    await productPage.getTotalPrice();
    await productPage.priceComparison();
    checkoutPage.clickPlaceOrder();
    checkoutPage.verifyPlaceOrderPage();
    
});
    

    //add method to clear cart - .grabNumberOfVisibleElements();+++
    //select size, color. Try to select with .selectOption()+++
    //get product price, get size price?, get color price?, return sum of prices for single product - totalPrice
    //add product to cart++
    //click Cart icon(add method to base page)++
    //click CHECKOUT++
    //complete all steps to purchase product++
    //get "Flat Shipping Rate" price - shippingRate++
    //get total checkout price - checkoutPrice++
    //npm i codeceptjs-chai - install chai, https://www.npmjs.com/package/codeceptjs-chai++
    //I.assertEqual(totalPrice + shippingRate, checkoutPrice, "Prices are not in match");++
    //verify final text "Your order has been placed!";
    



