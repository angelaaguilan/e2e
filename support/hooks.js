const { Before, After } = require("@cucumber/cucumber");
const LoginPage = require("../tests/05pages/Login");
const RegistroPage = require("../tests/05pages/Registro");
//const { default: LoginPage } = require("../tests/05pages/Login");

Before(async function () {
  await this.init();
  // deja disponible el LoginPage
  this.loginPage = new LoginPage(this.page);
  //this.registerPage = new RegistroPage(this.page);
});

After(async function (scenario) {
  const screenshot = await this.page.screenshot({ fullPage: true });
  this.attach(screenshot, "image/png");
});
