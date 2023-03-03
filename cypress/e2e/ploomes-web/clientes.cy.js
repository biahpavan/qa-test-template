import { faker } from '@faker-js/faker';

describe('Clientes - Web', () => {

    let credenciaisData

    before(() => {
        cy.fixture('credenciais').then(c => {
            credenciaisData = c
        })
    })

    it('deve cadastrar um cliente Pessoa Física', () => {
        let nameCli = faker.name.fullName()
       cy.criaNovoCliente(credenciaisData, nameCli)
    })

    //TODO - Implementar mais testes de clientes
})