/// <reference types="cypress" />

describe("Testes de Login", () => {
  it("Deve realizar o login com sucesso", () => {
    cy.login("fulano@qa.com", "teste").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.equal("Login realizado com sucesso");
    });
  });

  it("Deve validar a senha incorreta", () => {
    cy.login("fulano@qa.com", "testeErrado").then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.equal("Email e/ou senha inválidos");
    });
  });
});
