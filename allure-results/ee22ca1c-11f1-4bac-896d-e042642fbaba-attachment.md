# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Pruebas de login >> Login con datos NO validos
- Location: tests\login.spec.js:20:9

# Error details

```
ReferenceError: allure is not defined
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | import LoginPage from "./05pages/Login";
  3  | 
  4  | let loginPage
  5  | 
  6  | test.describe("Pruebas de login", () => {
  7  |     test.beforeEach(async ({ page }) => {
  8  |         loginPage = new LoginPage(page)
  9  |     })
  10 |     test("Login con datos validos", async ({ page }) => {
  11 |         allure.epic('Datos válidos');
  12 |         await loginPage.login(
  13 |             "admin@example.com",
  14 |             "admin123"
  15 |         )
  16 |         await expect(
  17 |             page.getByText('Logout', { exact: true })
  18 |         ).toBeVisible()
  19 |     })
  20 |     test("Login con datos NO validos", async ({ page }) => {
  21 |         // TODO
> 22 |         allure.epic('Datos inválidos');
     |         ^ ReferenceError: allure is not defined
  23 |         await loginPage.login(
  24 |             "admin@exampwwwle.com",
  25 |             "admin123"
  26 |         )
  27 |         await expect(
  28 |             page
  29 |         ).toHaveURL(/login/);
  30 |     })
  31 | })
```