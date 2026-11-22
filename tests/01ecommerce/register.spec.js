import test, { expect } from "@playwright/test";
import { afterEach } from "node:test";

// async: espera inteligente
// page: lleva a la página web, al sitio
// estructura de un test: SELECTORES, ACCIONES, VALIDACIONES

// set de pruebas: elemento que agrupa las pruebas
test.describe("Pruebas de Register", () => {

  // HOOKS para preparar datos o guardar algo
  test.beforeEach(async ({ page }) => {
    // ir a una URL
    await page.goto('/')
    // seleccionar el elemento
    const clickRegister = page.getByRole('link', { name: 'Register' });
    // ejecutar una acción
    await clickRegister.click();
  });

  test.afterEach(async ({ page }) => {
      console.log("Finalizó una prueba")
    })

  test("Registrar con datos validos", async ({ page }) => {
    // completar formulario  
    await page.getByRole('textBox', { name: 'name' }).fill("Nombre Prueba");
    await page.getByRole('textBox', { name: 'email' }).fill("prueba@example.com");
    await page.getByPlaceholder('Create a password').fill('abc123');
    await page.getByPlaceholder('Confirm your password').fill('abc123');
    
    await page.getByRole('button', { name: 'Create Account' }).click();
  
    //validar lo obtenido con lo esperado
  //  await expect(page).toHaveTitle('ShopHub - Your Premium E-commerce Experience');
    await expect(page.getByText('Logout', {exact: true})).toBeVisible();
  
  });

  test("Registrar con datos invalidos", async ({ page }) => {
    // completar formulario  
    await page.getByRole('textBox', { name: 'name' }).fill("Nombre Prueba");
    await page.getByRole('textBox', { name: 'email' }).fill("prueba@example.com");
    await page.getByPlaceholder('Create a password').fill('abc123');
    await page.getByPlaceholder('Confirm your password').fill('abc12345');
    
    await page.getByRole('button', { name: 'Create Account' }).click();
  
    //validar lo obtenido con lo esperado
    await expect(page.getByText('Passwords do not match', { exact: true })).toBeVisible();
  
  });

  test("Registro con email existente", async ({ page }) => {

    // completar formulario  
    await page.getByRole('textBox', { name: 'name' }).fill("Nombre Existente");
    await page.getByRole('textBox', { name: 'email' }).fill("admin@example.com");
    await page.getByPlaceholder('Create a password').fill('abc123');
    await page.getByPlaceholder('Confirm your password').fill('abc123');
    
    await page.getByRole('button', { name: 'Create Account' }).click();

    //validar lo obtenido con lo esperado
    await expect(page.getByText('Email already registered')).toBeVisible();
  });
  
})
