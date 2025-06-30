Cypress.Commands.add("login", (username, password) => {
  cy.request({
    method: "POST",
    url: "login",
    body: {
      email: username,
      password: password,
    },
    failOnStatusCode: false, // Não falhar se o status code não for 2xx
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add("listarUsuarioCadastrados", () => {
  cy.request({
    method: "GET",
    url: "usuarios",
  }).then((response) => {
    return response;
  });
});
