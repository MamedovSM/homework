/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type basePage = typeof import('./pages/base.js');
type registerPage = typeof import('./pages/register.js');
type productPage = typeof import('./pages/product.js');
type pricePage = typeof import('./pages/price.js');
type checkoutPage = typeof import('./pages/checkout.js');
type ChaiWrapper = import('codeceptjs-chai');
type Parsing = import('./parsing_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, basePage: basePage, registerPage: registerPage, productPage: productPage, pricePage: pricePage, checkoutPage: checkoutPage }
  interface Methods extends Playwright, ChaiWrapper, Parsing {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper>, WithTranslation<Parsing> {}
  namespace Translation {
    interface Actions {}
  }
}
