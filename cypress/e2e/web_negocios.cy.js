import { faker } from '@faker-js/faker';

describe('Negócios - Web', () => {

    let credenciaisData

    before(() => {
        cy.fixture('credenciais').then(c => {
            credenciaisData = c
        })
    })

    beforeEach(() => {
        cy.login(credenciaisData)
    })

    it('deve cadastrar um negócio', () => {
        const nameDeal = faker.random.word() + ' ' + faker.random.numeric(8)
        cy.cadastraNovoNegocio(nameDeal)
    })

    it('deve editar um negócio', () => {
        const nameDeal = faker.random.word() + ' ' + faker.random.numeric(8)
        cy.cadastraNovoNegocio(nameDeal)
        cy.editaNegocio(nameDeal)
    })

    it('deve consultar um negócio pelo nome', () => {
        const nameDeal = faker.random.word() + ' ' + faker.random.numeric(8)
        cy.cadastraNovoNegocio(nameDeal)
        cy.consultaNegocioTitulo(nameDeal)
        cy.get('div[uib-tooltip="'+ 'nameDeal' +'"]')
                .should('be.visible')
        cy.log('Título do negócio consultado: ' + nameDeal)
    })

    it('deve excluir um negócio', () => {
        const nameDeal = faker.random.word() + ' ' + faker.random.numeric(8)
        cy.cadastraNovoNegocio(nameDeal)
        cy.excluiNegocio(nameDeal)
    })

    //TODO: Implementar mais testes de clientes
})