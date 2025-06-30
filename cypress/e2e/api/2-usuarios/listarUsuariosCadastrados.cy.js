/// <reference types="cypress" />

describe("Listar usuários", () => {
  it("Deve listar os usuários cadastrados", () => {
    cy.listarUsuarioCadastrados().then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.body);
    });
  });
});
