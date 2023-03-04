import { faker } from '@faker-js/faker';

describe('Clientes - Web', () => {

    let credenciaisData

    before(() => {
        cy.fixture('credenciais').then(c => {
            credenciaisData = c
        })
    })

    beforeEach(() => {
        cy.login(credenciaisData)
    })

    it('deve cadastrar um cliente Pessoa Física', () => {
        const nameContact = faker.name.fullName()
        cy.cadastraNovoCliente(nameContact)
    })

    it('deve editar um cliente Pessoa Física', () => {
        const nameContact = faker.name.fullName()
        cy.cadastraNovoCliente(nameContact)
        cy.editaCliente(nameContact)
    })

    it('deve consultar um cliente pelo Nome', () => {
        const nameContact = faker.name.fullName()
        cy.cadastraNovoCliente(nameContact)
        cy.consultaClienteNome(nameContact)
        cy.contains('span', nameContact)
            .should('be.visible')
        cy.log('Cliente consultado: ' + nameContact)
    })

    it('deve excluir um cliente Pessoa Física', () => {
        const nameContact = faker.name.fullName()
        cy.cadastraNovoCliente(nameContact)
        cy.excluiCliente(nameContact)
    })

    //TODO: Implementar mais testes de clientes
})