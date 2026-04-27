describe('Cadastro de usuário', () => {
  it('deve cadastrar usuário com sucesso', () => {
    cy.visit('http://localhost:5173/cadastro')

    // Informações básicas
    cy.get('input[name=nomeCompleto]').type('João Silva')
    cy.get('input[name=cpf]').type('12345678900')
    cy.get('input[name=email]').type('joao@gmail.com')
    cy.get('input[name=senha]').type('@Joao534')

    // Endereço
    cy.get('input[name=cep]').type('01001000')
    cy.get('input[name=numero]').type('123')
    cy.get('input[name=logradouro]').type('Rua Central')
    cy.get('input[name=complemento]').type('Apto 12')
    cy.get('input[name=bairro]').type('Centro')
    cy.get('input[name=cidade]').type('São Paulo')
    cy.get('input[name=uf]').type('SP')

    // Submeter
    cy.get('button[type=submit]').click()

    // validação final
    cy.contains('Cadastro realizado com sucesso').should('exist')
  })
})