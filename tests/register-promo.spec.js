const { test, expect } = require('@playwright/test');

test('REG-05: Show error for an invalid promo code', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.getByText('ใช้โค้ดส่วนลด', { exact: true }).click();

  await page.getByTestId('input_text_registration_coupon_code')
    .fill('INVALIDCODE123');

  await page.getByTestId('input_button_registration_btn_apply').click();

  await expect(page.getByText('คูปองโค้ดไม่ถูกต้อง'))
    .toBeVisible({ timeout: 10000 });
});

test('REG-06: Inspect response for FREE15DAY promo code', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.getByText('ใช้โค้ดส่วนลด', { exact: true }).click();

  const promo = page.getByTestId('input_text_registration_coupon_code');
  await promo.fill('FREE15DAY');

  await page.getByTestId('input_button_registration_btn_apply').click();

  await page.waitForTimeout(1500);

  console.log('PROMO AREA:', await page.locator('.form-coupon-code')
    .locator('..').innerText());

  console.log('PAGE MESSAGES:', await page.locator('body').innerText());
});
