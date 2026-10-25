const { test, expect } = require('@playwright/test');

test('REG-02: Accept a mobile phone number', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const phone = page.locator('#phone');
  await phone.fill('0967690708');

  await expect(phone).toHaveValue('0967690708');
});

test('REG-03: Reject a phone number that is too short', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const phone = page.locator('#phone');
  await phone.fill('123');

  const isValid = await phone.evaluate(
    el => el.checkValidity()
  );

  expect(isValid).toBe(false);
});
