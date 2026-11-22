import test, { expect } from "@playwright/test";

test.describe("Validación de comportamiento del backend", () => {

    // capturamos el comportamiento de la aplicación
    test("Lista de productos vacía", async ({ page }) => { //page es un objeto similar al JSON
        // intersecta cualquier cosa que tenga "products"
        // luego recibe 2 parámetros: route (condicion) y request (repuesta)
        await page.route('**/products', async (route, request) => {
            // resolver la llamada a la red
            route.fulfill({
                // la respuesta que espera
                // en este ejemplo le llega un dato vacío, convierte el texto en JSON
                body: JSON.stringify([])
            })
        });

        //Visitar el sitio web a probar
        await page.goto('https://ecommerce-js-test.vercel.app/');

        await expect(page.getByText('Ningún producto disponible.', { exact: true })).toBeVisible();

    });

    test("Estatus 404", async ({ page }) => {
        await page.route('**/products', async (route, request) => {
            route.fulfill({
                status: 404
            })
        });

        await page.goto('https://ecommerce-js-test.vercel.app/');
        await expect(page.getByText('Error: Solicitud de consulta no válida', { exact: true })).toBeVisible();
    });

    test("Estatus 500", async ({ page }) => {
        await page.route('**/products', async (route, request) => {
            route.fulfill({
                status: 500
            })
        });

        await page.goto('https://ecommerce-js-test.vercel.app/');
        await expect(page.getByText('Error: Error general de la API', { exact: true })).toBeVisible();
    });



});