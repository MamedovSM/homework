Feature('register');

const NEW_USER = {
    firstName: 'Amonlas',
    lastName: '123789',
    email: Date.now() + '@awr.com',
    mobile: '+380555556677',
    pswd: 'QA04bPrW'
};

Scenario('register user',  ({ I, basePage, registerPage }) => {
    I.openStore();
    basePage.clickMyAccountButton();
    basePage.clickMyRegLink();
    registerPage.verifyRegPage();
    registerPage.fillNewUserForm(NEW_USER);
    registerPage.clickSubscribeYes();
    registerPage.clickPrivacyPolicy();
    registerPage.clickConfirmButton();
    registerPage.verifySuccessRegPage();
    
});


