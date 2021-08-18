it.only('Ga naar login pagina', function(){
    cy.visit('/login');
})
it.only('Ga naar register pagina', function(){
    cy.visit('/register');
})
it.only('Login test, zichtbaarheid favorieten.', function(){
    cy.visit('/login');
    cy.get('[data-cy=login-button] > .mat-button-wrapper').click()
    cy.get('[routerlink="/tmateriaal"] > .mat-list-item-content');
})
it.only('Regisiter test, zichtbaarheid favorieten.', function(){
    cy.visit('/register');
    cy.get('[data-cy=register-name]');
    cy.get('[data-cy=register-Familienaam]')
    cy.get('.mat-select-placeholder');
    cy.get('[data-cy=register-button] > .mat-button-wrapper').click()
})

