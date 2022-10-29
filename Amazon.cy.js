// Valid Inputs

it('valid', () => {
    cy.fixture('Amazon_Valid.json').then((user) => {
        for (var index in user) {
            cy.visit('https://www.amazon.in/')
            cy.get('#nav-link-accountList > .nav-line-2')
            cy.get('#nav-link-accountList-nav-line-1').click()
            cy.get('#ap_email').type(user[index].Email)
            cy.get('.a-button-inner > #continue').click()
            cy.get('#ap_password').type(user[index].Password)
            cy.get('#signInSubmit').click()
            cy.get('#nav-main > .nav-left').click()
            cy.get(':nth-child(31) > .hmenu-item').click()

        }

    })
});

//Invalid Inputs

it('Invalid', () => {
    cy.fixture('Amazon_Invalid.json').then((user) => {
        for (var index in user) {
            cy.visit('https://www.amazon.in/')
            cy.get('#nav-link-accountList > .nav-line-2')
            cy.get('#nav-link-accountList-nav-line-1').click()
            cy.get('#ap_email').type(user[index].Email).click()
            cy.get('.a-button-inner > #continue').click()


        }
    })
});