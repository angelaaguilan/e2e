import test, { expect } from "@playwright/test";

test.describe("Set de pruebas de descargas", () => {

    test("Validando nombre de archivos", async ({ page }) => {
        
        await page.goto("https://e2e-ecommerce-app.vercel.app/products/1");

        // iniciamos la espera del evento de descarga
        // revisar el resto de las opciones de waitForEvent
        const resposabledownload = page.waitForEvent('download');

        // realizamos la acción que desencadena la descarga
        await page.getByRole('link', { name: 'Descargar ficha PDF' }).click();

        // resolvemmos la promesa y capturamos los metadatos de descarga
        const descarga = await resposabledownload;

        // consultamos qué archivo se bajó con suggestedFilename
        expect(descarga.suggestedFilename()).toBe('fichaProducto.pdf');

    });

});