it('mock materiaal get', function(){
    cy.server();
    cy.route({
        method: 'GET',
        url: '/api/Materiaal',
        status: 200,
        response: 'fixture:materiaal.json'
    });

    cy.visit('/tmateriaal');
    cy.get('[data-cy=materiaalcard]').should('have.length', 11);
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

it('Bekijk het materiaal', function(){
    cy.visit('/tmateriaal');
})