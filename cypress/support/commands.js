// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('postContacts', (credenciaisData, postData) => {
    cy.request({
        url: Cypress.env('apiUri') + '/Contacts',
        method: 'POST',
        body: postData,
        headers: credenciaisData.api
    }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.value[0].Name).to.eq(postData.Name)
        expect(response.body.value[0].Register).to.eq(postData.Register)
        cy.writeFile('cypress/fixtures/cliente.json', response.body.value[0])
        cy.log('Id do novo cliente:' + response.body.value[0].Id)
    })
})

Cypress.Commands.add('patchContacts', (credenciaisData, id, name) => {
    cy.request({
        url: Cypress.env('apiUri') + '/Contacts(' + id + ')',
        method: 'PATCH',
        body: { Name: name},
        headers: credenciaisData.api
    }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.value[0].Name).to.eq(name)
        expect(response.body.value[0].Id).to.eq(id)
    })
})

Cypress.Commands.add('deleteContacts', (credenciaisData, id) => {
    cy.request({
        url: Cypress.env('apiUri') + '/Contacts(' + id + ')',
        method: 'DELETE',
        headers: credenciaisData.api
    }).then(response => {
        expect(response.status).to.eq(200)
    })
})

Cypress.Commands.add('getContacts', (credenciaisData) => {
    cy.request({
        url: Cypress.env('apiUri') + '/Contacts',
        method: 'GET',
        headers: credenciaisData.api
    }).then(response => {
        expect(response.status).to.eq(200)
    })
})

Cypress.Commands.add('postDeals', (credenciaisData, postData) => {
    cy.request({
        url: Cypress.env('apiUri') + '/Deals',
        method: 'POST',
        body: postData,
        headers: credenciaisData.api
    }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.value[0].Title).to.eq(postData.Title)
        cy.writeFile('cypress/fixtures/negocio.json', response.body.value[0])
        cy.log('Id do novo negocio:' + response.body.value[0].Id)
    })
})

Cypress.Commands.add('patchDeals', (credenciaisData, id, title) => {
    cy.request({
        url: Cypress.env('apiUri') + '/Deals(' + id + ')',
        method: 'PATCH',
        body: { Title: title},
        headers: credenciaisData.api
    }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.value[0].Title).to.eq(title)
        expect(response.body.value[0].Id).to.eq(id)
    })
})

Cypress.Commands.add('deleteDeals', (credenciaisData, id) => {
    cy.request({
        url: Cypress.env('apiUri') + '/Deals(' + id + ')',
        method: 'DELETE',
        headers: credenciaisData.api
    }).then(response => {
        expect(response.status).to.eq(200)
    })
})

Cypress.Commands.add('getDeals', (credenciaisData) => {
    cy.request({
        url: Cypress.env('apiUri') + '/Deals',
        method: 'GET',
        headers: credenciaisData.api
    }).then(response => {
        expect(response.status).to.eq(200)
    })
})