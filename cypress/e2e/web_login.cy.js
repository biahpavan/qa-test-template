describe('Login - Web', () => {

    let credenciaisData

    before(() => {
        cy.fixture('credenciais').then(c => {
            credenciaisData = c
        })
    })

    it('deve realizar login na plataforma', () => {
        cy.login(credenciaisData)
    })

    //TODO - Implementar mais testes de login
})