// @ts-check
import { test, expect } from '@playwright/test';

test('Validar título', async ({ page }) => {
  // abre el sitio web playwright
  await page.goto('https://playwright.dev/');

  // busca que el titulo de la pagina tenga playwright
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click en link "get started".
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
