import test from "@playwright/test";

// async: espera inteligente
// page: lleva a la página web, al sitio

test("Validar Login valido", async ({ page }) => {
    // await al ser asincrono, p´layw espera hasta que la página se abre
    // abrir la página
  await page.goto("https://crm-matosso.leonardojose.dev/login");

  await page.locator('#email').fill('leo@leo.com');
});
