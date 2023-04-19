const { I } = inject();

module.exports = {

  firstNameField: {xpath: '//*[@id="input-firstname"]'},
  lastNameField: {xpath: '//*[@id="input-lastname"]'},
  emailField: {xpath: '//*[@id="input-email"]'},
  telephoneField: {xpath: '//*[@id="input-telephone"]'},
  pswdField: {xpath: '//*[@id="input-password"]'},
  pswdConfirmField: {xpath: '//*[@id="input-confirm"]'},
  subscribeYesButton: {xpath: '//*[@id="content"]/form/fieldset[3]/div/div/label[1]'},
  subscribeNoButton: {xpath: '//*[@id="content"]/form/fieldset[3]//div/label[2]'},
  agreePrivacyPolicy: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
  confirmButton: {xpath: '//*[@id="content"]/form//div/input[2]'},
  
  verifyRegPage() {
    I.see('Register Account');
  },

  fillNewUserForm(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.telephoneField, user.mobile);
    I.fillField(this.pswdField, user.pswd);
    I.fillField(this.pswdConfirmField, user.pswd);
  },

  clickSubscribeNo() {
    I.click(this.subscribeNoButton);
  },

  clickSubscribeYes() {
    I.click(this.subscribeYesButton);
  },

  clickConfirmButton() {
    I.click(this.confirmButton);
  },

  clickPrivacyPolicy() {
    I.click(this.agreePrivacyPolicy);
  },

  verifySuccessRegPage() {
    I.see('Your Account Has Been Created!');
  },
  
}


