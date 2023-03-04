import { faker } from '@faker-js/faker';

describe('Negócios - API(/Deals)', () => {

    let testData, credenciaisData

    before(() => {
        cy.fixture('post_negocios').then(t => {
            testData = t
        })
        cy.fixture('credenciais').then(c => {
            credenciaisData = c
        })
    })

    context('post', () => {
        it('deve cadastrar um novo negócio', () => {
            cy.postDeals(credenciaisData, testData)
        })
        // TODO: implementar mais cenários de POST /Deals
    })

    context('patch', () => {
        let patchData
        beforeEach(() => {
            cy.postDeals(credenciaisData, testData)
            cy.fixture('negocio').then(p => {
                patchData = p
            })
        })
        it('deve alterar o Título no registro de um negócio', () => {
            const id = patchData.Id
            const title = faker.name.fullName()
            cy.patchDeals(credenciaisData, id, title)
        })
    })
    // TODO: implementar mais cenários de Patch /Deals

    context('delete', () => {
        let patchData
        beforeEach(() => {
            cy.postDeals(credenciaisData, testData)
            cy.fixture('negocio').then(p => {
                patchData = p
            })
        })
        it('deve remover o registro de um negocio', () => {
            const id = patchData.Id
            cy.deleteDeals(credenciaisData, id)
        })
    })
    // TODO: implementar mais cenários de Delete /Deals

    context('get', () => {
        it('deve retornar todos os registros de negócios', () => {
            cy.getContacts(credenciaisData)
        })
    })
    // TODO: implementar mais cenários de Get /Deals

})

