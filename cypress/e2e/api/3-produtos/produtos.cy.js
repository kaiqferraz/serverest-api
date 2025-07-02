/// <reference  types="cypress" />

// it("Deve validar o token de autenticação", () => {
//   cy.autenticar();
// });

describe("Cadastro de Produto", () => {
  beforeEach(() => {
    cy.autenticar();
  });
  it("Deve cadastrar um produto com sucesso", () => {
    cy.request({
      method: "POST",
      url: "produtos",
      headers: {
        Authorization: Cypress.env("token"), // Recupera o token salvo
      },
      body: {
        nome: "Produto Teste 01",
        preco: 100,
        descricao: "Descrição do Produto Teste",
        quantidade: 10,
      },
    }).then((response) => {
      cy.log(response.body.message);
      expect(response.status).to.eq(201);
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");
    });
  });
});
