export class successPage {
    verifyOrderSuccess(){
        cy.origin('https://opencart.abstracta.us', () => {
            cy.visit("/index.php?route=checkout/success")
            cy.wait(5000)
            cy.url().should('contain', 'route=checkout/success')
            cy.get('[id="content"]')
                .contains("h1", "Your order has been placed!")
        })
}
    }
    

export const onSuccessPage = new successPage()