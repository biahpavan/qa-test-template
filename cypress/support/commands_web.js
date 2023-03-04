Cypress.Commands.add('login', (credenciaisData) => {
    cy.visit('https://app10.ploomes.com/login')
    Cypress.on('uncaught:exception', () => false)
    cy.get('#email').type(credenciaisData.web.email)
    cy.get('#password').type(credenciaisData.web.password)
    cy.contains('span', 'Entrar').click()
    cy.contains('span', credenciaisData.web.nome, { timeout: 8000 })
        .should('be.visible')
    cy.log('Login realizado com o usuário: ' + credenciaisData.web.nome)
})

Cypress.Commands.add('cadastraNovoCliente', (nameContact) => {
    cy.contains('span', 'Clientes').click()
    cy.get('#filter-list').click()
    cy.contains('aside', 'Pessoa').click()
    cy.get('input[name=contact_name]').type(nameContact)
    cy.contains('button', 'Salvar').click()
    cy.get('div[class="font-very-big"]')
        .should('be.visible')
        .should('have.text', nameContact)
    cy.log('Novo cliente criado ' + nameContact)
})

Cypress.Commands.add('editaCliente', (nameContact) => {
    cy.get('a[class="button button-white-light-border dropdown-toggle nowrap"]').click()
    cy.contains('aside', 'Editar cliente').click()
    cy.get('input[name=contact_name]').type(' Edit')
    cy.contains('button', 'Salvar').click()
    cy.get('div[class="font-very-big"]')
        .should('be.visible')
        .should('have.text', nameContact + ' Edit')
    cy.log('Nome do cliente editado: ' + nameContact + ' Edit')
})

Cypress.Commands.add('consultaClienteNome', (nameContact) => {
    cy.contains('span', 'Clientes').click()
    cy.get('input[placeholder="Busca por nome, e-mail, razão social, CNPJ"]').type(nameContact)
    cy.get('a[class="btn button button-neutral-gray special-search-button"]').click()
})

Cypress.Commands.add('excluiCliente', (nameContact) => {
    cy.get('a[class="button button-white-light-border dropdown-toggle nowrap"]').click()
    cy.contains('aside', 'Excluir cliente').click()
    cy.contains('a', 'Confirmar').click()
    cy.consultaClienteNome(nameContact)
    cy.contains('span', 'Nenhum item encontrado', { timeout: 8000 })
        .should('be.visible')
    cy.log('Nome do cliente excluído: ' + nameContact)
})

Cypress.Commands.add('cadastraNovoNegocio', (nameDeal) => {
    cy.contains('span', 'Negócios').click()
    cy.get('a[class="button button-action pull-right nowrap"]').click()
    cy.get('input[name=deal_title]').type(nameDeal)
    cy.contains('button', 'Salvar').click()
    cy.get('div[class="font-very-big"]')
        .should('be.visible')
        .should('have.text', nameDeal)
    cy.log('Novo negócio cadastrado ' + nameDeal)
})

Cypress.Commands.add('editaNegocio', (nameDeal) => {
    cy.get('a[class="button button-white-light-border dropdown-toggle nowrap"]').click()
    cy.contains('aside', 'Editar negócio').click()
    cy.get('input[name=deal_title]').type(' Edit')
    cy.contains('button', 'Salvar').click()
    cy.get('div[class="font-very-big"]')
        .should('be.visible')
        .should('have.text', nameDeal + ' Edit')
    cy.log('Título do negócio editado: ' + nameDeal + ' Edit')
})

Cypress.Commands.add('consultaNegocioTitulo', (nameDeal) => {
    cy.contains('span', 'Negócios').click()
    cy.get('input[placeholder="Pesquise título ou pelo nome do cliente"]').type(nameDeal)
    cy.get('a[class="btn button button-neutral-gray special-search-button"]').click()
})

Cypress.Commands.add('excluiNegocio', (nameDeal) => {
    cy.get('a[class="button button-white-light-border dropdown-toggle nowrap"]').click()
    cy.contains('aside', 'Excluir negócio').click()
    cy.contains('a', 'Confirmar').click()
    cy.consultaNegocioTitulo(nameDeal)
    cy.wait(10000) //Preciso dessa espera explícita, para que minha verificação não gere um falso positivo
    cy.get('div[uib-tooltip="'+ nameDeal +'"]')
                .should('not.exist')
    cy.log('Título do negócio excluído: ' + nameDeal)
})

