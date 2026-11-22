import test, { expect } from "@playwright/test";
import { afterEach } from "node:test";

// async: espera inteligente
// page: lleva a la página web, al sitio
// estructura de un test: SELECTORES, ACCIONES, VALIDACIONES

// set de pruebas: elemento que agrupa las pruebas
test.describe("Pruebas de Login", () => {

  test.beforeEach(async ({ page }) => {
    // ir al site
    await page.goto('/');
    // seleccionar el elemento
    const liklogin = page.getByRole('link', { name: 'Login' });
    // ejecutar una acción
    await liklogin.click();
  });

  test.afterEach(async ({ page }) => {
    console.log("Finalizó una prueba")
  })

  test("LOGIN con datos validos", async ({ page }) => {
    // seleccionar la caja de email e ingresa un valor
    await page.getByRole('textBox', { name: 'Email Address' }).fill("admin@example.com");
    // seleccionar la caja de password e ingresa un valor
    await page.getByPlaceholder('Enter your password').fill('admin123');
    // seleccionar botón "Sign in"
    await page.getByRole('button', { name: 'Sign In' }).click();

    //validar lo obtenido con lo esperado
    await expect(page.getByText('Logout', { exact: true })).toBeVisible();
    // await expect(page.getByRole('heading', { name: 'Welcome Back!' })).toBeVisible();
    //await expect(page).toHaveURL(/login/);
  });

  test("LOGIN con datos Invalidos", async ({ page }) => {

    // seleccionar la caja de email e ingresa un valor
    await page.getByRole('textBox', { name: 'Email Address' }).fill("admin11@example.com");
    // seleccionar la caja de password e ingresa un valor
    await page.getByPlaceholder('Enter your password').fill('admin123');

    await page.getByRole('button', { name: 'Sign In' }).click();

    //validar lo obtenido con lo esperado
    await expect(page.getByText('Invalid email or password', { exact: true })).toBeVisible();
  });
 
})