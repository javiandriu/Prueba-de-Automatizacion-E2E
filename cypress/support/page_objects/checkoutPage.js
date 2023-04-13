
export class checkoutPage {
    
    fillTheCheckoutForm(){
    cy.origin('https://opencart.abstracta.us', () => {
        cy.visit("/index.php?route=checkout/checkout")
        cy.wait(5000)
        cy.url().should('contain', 'route=checkout/checkout')
         cy.get('[id="button-account"]')
            .parent('[class="col-sm-6"]')
            .find('[type="radio"]')
            .eq(1)
            .click()
        cy.get('[id="button-account"]').click()
        cy.get("legend").parent('#account').then(form => {
            cy.fixture('userData.json').then((userData) => {
                cy.wrap(form).find('[placeholder="First Name"]').type(userData.name)
                cy.wrap(form).find('[id="input-payment-lastname"]').type(userData.lastName)
                cy.wrap(form).find('[id="input-payment-email"]').type(userData.email)
                cy.wrap(form).find('[id="input-payment-telephone"]').type(userData.telephone)
            })
            
        })
        
        cy.get("legend").parent('#address').then(form =>{
            cy.fixture('addressData.json').then((addressData) => {
                cy.wrap(form).find('[id="input-payment-company"]').type(addressData.company)
                cy.wrap(form).find('[id="input-payment-address-1"]').type(addressData.address1)
                cy.wrap(form).find('[id="input-payment-city"]').type(addressData.city)
                cy.wrap(form).find('[id="input-payment-postcode"]').type(addressData.postcode)
            })
        })
        
        cy.get('[id="input-payment-country"]').select("Ecuador")
        cy.get('[id="input-payment-zone"]').select("Guayas")
        cy.get('[id="button-guest"]').click()

        cy.get('[id="collapse-shipping-method"]').find('[id="button-shipping-method"]').click()
        
        cy.get('[id="collapse-payment-method"]')
        .find('[type="checkbox"]').check()

        cy.get('[id="collapse-payment-method"]')
        .find('[id="button-payment-method"]').click()

        cy.get('[id="collapse-checkout-confirm"]')
        .find('[id="button-confirm"]').click()
        .wait(5000)
    
    
    })
 }
}
export const onCheckoutPage = new checkoutPage()