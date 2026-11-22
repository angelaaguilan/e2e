const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

// esto se genera con POM
Given("que el usuario está en la pantalla del Login", async function () {
  // este given llega a la página Login
  await this.loginPage.accessLoginPage();
});

When("el usuario ingresa el correo {string}", async function (username) {
  await this.loginPage.fillEmail(username);
});

When("el usuario ingresa la clave {string}", async function (password) {
  await this.loginPage.fillPassword(password);
});

When('el usuario hace clic en el botón "Sign In"', async function () {
  await this.loginPage.clickSignIn();
});

// THEN es el expect (valida), que se encuentra en las pruebas
Then('debería verse el botón "Logout"', async function () {
  await expect(this.page.getByText("Logout", { exact: true })).toBeVisible();
});

Then("debería verse el mensaje de error {string}", async function (mensaje) {
  await expect(this.page.locator("p.text-sm.text-red-800")).toHaveText(mensaje);
});

Then(
  "no debería verse habilitado el botón {string}",
  async function (textoBoton) {
    await expect(
      this.page.getByText(textoBoton, { exact: true }),
    ).not.toBeEnabled();
  },
);
