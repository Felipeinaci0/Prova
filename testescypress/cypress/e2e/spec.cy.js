/// <reference types="cypress"/>

describe('Criando cenario de teste para o site https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login', () => {

    it('Caso de teste 1: Adicionando dinheiro para "Harry Potter" ', () => {

      let info = criarDinheiro()
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get('.borderM > :nth-child(1) > .btn').click()
      cy.get('#userSelect').select("Harry Potter")
      cy.get('form.ng-valid > .btn').click()
      cy.get('[ng-class="btnClass2"]').click()
      cy.get('.form-control').type(info)
      cy.get('form.ng-dirty > .btn').click()
      cy.get('.error').should('have.text', 'Deposit Successful')

    })

    it('Caso de teste 2(Falho): Retirando mais dinheiro que "Harry Potter" tem ', () => {

      let info = criarDinheiro()
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get('.borderM > :nth-child(1) > .btn').click()
      cy.get('#userSelect').select("Harry Potter")
      cy.get('form.ng-valid > .btn').click()
      cy.get('[ng-class="btnClass3"]').click()
      cy.get('.form-control').type(info)
      cy.get('form.ng-dirty > .btn').click()
      cy.get('.error').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.')

    })

    it('Caso de teste 3: Adicionando novo usuário e entrando em sua conta ', () => {

      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get(':nth-child(3) > .btn').click()
      cy.get('[ng-class="btnClass1"]').click()
      cy.get(':nth-child(1) > .form-control').type('Teste')
      cy.get(':nth-child(2) > .form-control').type('da Silva')
      cy.get(':nth-child(3) > .form-control').type('E78911')
      cy.get('form.ng-dirty > .btn').click()
      cy.get('[ng-class="btnClass2"]').click()
      cy.get('#userSelect').select("Teste da Silva")
      cy.get('#currency').select("Dollar")
      cy.get('form.ng-dirty > button').click()
      cy.get('[ng-class="btnClass3"]').click()
      cy.get(':nth-child(6) > :nth-child(1)').should('have.text', 'Teste') && cy.get(':nth-child(6) > :nth-child(2)').should('have.text', 'da Silva')

    })
})

function criarDinheiro() {

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let dinheiro = horas + minutos + segundos

  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  cy.get('.borderM > :nth-child(1) > .btn').click()
  cy.get('#userSelect').select("Harry Potter")
  cy.get('form.ng-valid > .btn').click()
  cy.get('[ng-class="btnClass2"]').click()

  return dinheiro

}