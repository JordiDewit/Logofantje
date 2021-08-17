it('mock materiaal get', function(){
    cy.server({ delay: 2000 });
    cy.route({
        method: 'GET',
        url: '/api/Materiaal',
        status: 200,
        response: 'fixture:materiaal.json'
    });

    cy.visit('/tmateriaal');
    cy.get('[data-cy=materiaalcard').should('have.length', 11);
})

it('Bij een error toont boodschap', function(){
    cy.server();
    cy.route({
        method: 'GET',
        url: '/api/Materiaal',
        status: 500,
        response: 'ERROR'
    });
    cy.visit('/tmateriaal');
    cy.get('[data-cy=loadingError]').should('be.visible');
});

it('Bij toegevoegd aan favorieten krijgt men een boodschap'), function(){
    cy.server();
    cy.route({
        method: 'POST',
        url: '/api/User/1',
        status: 200
    });

    cy.visit('/tmateriaal');
    cy.get('[data-cy=loadingError]').should('be.visible');
}

it('Bij verwijderen krijgt men een boodschap'), function(){
    cy.server();
    cy.route({
        method: 'PUT',
        url: '/api/Materiaal/1',
        status: 200
    });
    cy.visit('/tmateriaal');
    cy.get('data-cy=deleted').should('be.visible');
}