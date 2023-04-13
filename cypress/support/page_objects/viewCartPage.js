export class viewCartPage {
    
    clickOnCheckoutButton(){
        cy.origin("https://opencart.abstracta.us", () => {
            cy.visit("/index.php?route=checkout/cart")
            cy.url().should('contain', 'route=checkout/cart')
            cy.get('[class="pull-right"]').contains("a", "Checkout").click()
            cy.wait(5000)
        })
    }
}
export const onViewCartPage = new viewCartPage()