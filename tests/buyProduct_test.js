
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



