import { onCheckoutPage } from "../support/page_objects/checkoutPage"
import { onHomePage } from "../support/page_objects/homePage"
import { onSuccessPage } from "../support/page_objects/successPage"
import { onViewCartPage } from "../support/page_objects/viewCartPage"


describe('Prueba  E2E de OpenCart Page', () => {
  



  it('Verificar el flujo de compras de 2 items', () => {

    cy.visit('http://opencart.abstracta.us/')
      onHomePage.shoppingEmptyCart()
      onHomePage.addTwoItemsInTheShoppingCart()
      onHomePage.clickOnViewCartLink()
      onViewCartPage.clickOnCheckoutButton()
      onCheckoutPage.fillTheCheckoutForm()
      onSuccessPage.verifyOrderSuccess()
  
  })
 
})
