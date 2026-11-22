import test, { expect } from "@playwright/test";
import RegistroPage from "./05pages/Registro";
import * as allure from "allure-js-commons";
// para allure.severity los valores deben ser: blocker, critical, normal, minor, trivial

let registroPage;
test.describe("Pruebas de Registro e2e", () => {

    test.beforeEach(async ({ page }) => {
        registroPage = new RegistroPage(page);
    });
    console.log('Inicio pruebas de REGISTRO');
    test('Registro con datos válidos', async ({ page }) => {
        allure.epic('Datos válidos');
        allure.severity('blocker');
        await allure.step('1. Ejecutar acciones del formulario', async () => {
            await registroPage.registrar('Angela', 'angela@gmail.com', '12345678', '12345678');
        });


        await allure.step('2. Ejecutar pruebas', async () => {
            await expect(page.getByText('Logout', { exact: true })).toHaveText('Logout');
            const screenshot = await page.screenshot({ path: 'screenshots/registro-valido.png' })
            //await page.video()?.saveAs('videos/registro.webm');
            await allure.attachment('Registro exitoso',screenshot, 'image/png') ;


        });
    });

    test('Registro con password diferente', async ({ page }) => {
        allure.epic('Datos inválidos');
        //allure.feature('Datos inválidos');
        allure.severity('critical');

        await allure.step('1. Ejecutar acciones del formulario', async () => {
            await registroPage.registrar('Otro usuario', 'otro@gmail.com', '12345678', '12343434348');        
        });

        await page.screenshot({ path: 'screenshots/registro-con-password-diferente.png', fullPage: true });

        await allure.step('2. Ejecutar pruebas', async () => {
            await expect(registroPage.mensajeError).toHaveText('Passwords do not match');
        });
    });

    test('Registro con password inválido', async ({ page }) => {
        allure.epic('Datos inválidos');
        allure.severity('crítical');
        await allure.step('1. Ejecutar acciones del formulario', async () => {
            await registroPage.registrar('Otro usuario con password invalido', 'passInvalido@gmail.com', '123', '123');        
        });

        await allure.step('2. Ejecutar pruebas', async () => {
            await expect(registroPage.mensajeError).toHaveText('Password must be at least 6 characters long');
        });
    });
});