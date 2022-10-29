//Valid

it('Netflix_Login', () => {
    cy.fixture('Netflix.json').then((user) => {
        for (var index in user) {
            cy.visit('https://www.netflix.com/')
            cy.get('.authLinks').click()
            cy.get('.nfEmailPhoneControls > .input_id > .placeLabel').click().type(user[index].Email)
            cy.get('#id_password').type(user[index].Password)
            cy.get('.btn').click()
                //cy.get(':nth-child(2) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon').click()
                //cy.get('.account-dropdown-button').click()
                //cy.get('.sign-out-links > .sub-menu-item > .sub-menu-link').click()
        }
    })
});