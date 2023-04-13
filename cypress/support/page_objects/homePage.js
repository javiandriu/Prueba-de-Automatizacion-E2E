export class homePage {
    shoppingEmptyCart(){
        cy.contains("[id='logo']", "Your Store")
        cy.contains('[data-toggle="dropdown"]','0 item(s)')
    }
    addTwoItemsInTheShoppingCart(){
        cy.contains("h3", "Featured")

        cy.get('[class="product-thumb transition"]')
            .first()
            .find(".button-group")
            .find('[type="button"]')
            .eq(0)
            .click({force: true})
            .wait(5000)
        cy.contains('[data-toggle="dropdown"]','1 item(s)')

        cy.get('[class="product-thumb transition"]')
            .eq(1)
            .find(".button-group")
            .find('[type="button"]')
            .eq(0)
            .click({force: true})
            .wait(5000)
        cy.contains('[data-toggle="dropdown"]','2 item(s)')
    }

    clickOnViewCartLink(){
        cy.get("#cart").click()
        cy.contains("strong", "Checkout")
        cy.contains("strong", "View Cart").click()
        cy.wait(5000)
    }
}

export const onHomePage = new homePage()