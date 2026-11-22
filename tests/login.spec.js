import test, { expect } from "@playwright/test";
import LoginPage from "./05pages/Login";
import * as allure from "allure-js-commons";
//import { allure } from "allure-playwright";

// a partir de ahora, cada vez que se haga un push request a Staging, se activarán las pruebas
let loginPage;

test.describe("Pruebas de login", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test("Login con datos válidos", async ({ page }) => {
    allure.epic("Datos válidos");
    allure.severity("blocker");
    console.info("Inicio pruebas de LOGIN");
    await loginPage.login("admin@example.com", "admin123");
    await expect(page.getByText("Logout", { exact: true })).toBeVisible();
  });
  test("Login con datos inválidos", async ({ page }) => {
    // TODO
    allure.epic("Datos inválidos");
    allure.severity("crítical");
    console.log("Inicio pruebas de LOGIN INVALIDA");
    await loginPage.login("admin@exampwwwle.com", "admin123");
    await expect(page).toHaveURL(/login/);
  });
});
