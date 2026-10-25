const { test, expect } = require('@playwright/test');

test('REG-01: Registration page opens', async ({ page }) => {
  const response = await page.goto(
    'https://portal.uat.gofive.co.th/Register/empeo',
    { waitUntil: 'domcontentloaded', timeout: 60000 }
  );

  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);
  await expect(page.locator('body')).not.toBeEmpty();
});
