import test, { expect } from "@playwright/test";

// iframe se llama una página dentro de otra
test.describe("Envio regisro desde iframe", () => {

    test("Envio de email válido", async ({ page }) => {
        const emailPrueba = 'angela@angela.com'
        
        //Visitar el sitio web a probar
        await page.goto('http://e2e-ecommerce-app.vercel.app/iframe');

        // definimos el locator de un iframe
        const iframeEmail = page.frameLocator('#practice-iframe')

        // interactuamos con iframe 
        // escribimos el correo en la caja de texto EMAIL
        await iframeEmail.getByLabel('Email').fill(emailPrueba);
        // seleccionamos el botón Enviar
        await iframeEmail.getByRole('button', {name: 'Enviar'}).click();

        // validamos que retorne el texto de envío exitoso
        await expect(iframeEmail.getByText('Email recibido: ' + emailPrueba, { exact: true })).toBeVisible();
        
        // con esta opción no retorna un mensaje exitoso porque le falta completar todo el texto
        // await expect(iframeEmail.getByText('Email recibido', {exact: true})).toBeVisible();

    });

});