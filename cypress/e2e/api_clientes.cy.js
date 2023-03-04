import { faker } from '@faker-js/faker';

describe('Clientes - API(/Contacts)', () => {

    let testData, credenciaisData

    before(() => {
        cy.fixture('post_clientes').then(t => {
            testData = t
        })
        cy.fixture('credenciais').then(c => {
            credenciaisData = c
        })
    })

    context('post', () => {
        it('deve cadastrar um novo cliente', () => {
            cy.postContacts(credenciaisData, testData)
        })
        // TODO: implementar mais cenários de POST /Contracts
    })

    context('patch', () => {
        let patchData
        beforeEach(() => {
            cy.postContacts(credenciaisData, testData)
            cy.fixture('cliente').then(p => {
                patchData = p
            })
        })
        it('deve alterar o Nome no registro de um cliente', () => {
            const id = patchData.Id
            const name = faker.name.fullName()
            cy.patchContacts(credenciaisData, id, name)
        })
    })
    // TODO: implementar mais cenários de Patch /Contracts

    context('delete', () => {
        let patchData
        beforeEach(() => {
            cy.postContacts(credenciaisData, testData)
            cy.fixture('cliente').then(p => {
                patchData = p
            })
        })
        it('deve remover o registro de um cliente', () => {
            const id = patchData.Id
            cy.deleteContacts(credenciaisData, id)
        })
    })
    // TODO: implementar mais cenários de Delete /Contracts

    context('get', () => {
        it('deve retornar todos os registros de clientes', () => {
            cy.getContacts(credenciaisData)
        })
    })
    // TODO: implementar mais cenários de Get /Contracts

})

