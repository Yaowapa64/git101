const { test, expect } = require('@playwright/test');

test('REG-01: Show required-field errors when submitting an empty form', async ({ page }) => {
  await page.goto('https://portal.uat.gofive.co.th/Register/empeo', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.getByRole('button', { name: 'ทดลองใช้ฟรี' }).click();

  await expect(page.getByText('กรุณากรอกเลขประจำตัวผู้เสียภาษีหรือชื่อบริษัท')).toBeVisible();
  await expect(page.getByText('กรุณากรอกประเภทธุรกิจ')).toBeVisible();
  await expect(page.getByText('กรุณากรอกผู้ใช้งาน')).toBeVisible();
  await expect(page.getByText('กรุณากรอกอีเมล')).toBeVisible();
  await expect(page.getByText('กรุณากรอกชื่อ', { exact: true })).toBeVisible();
  await expect(page.getByText('กรุณากรอกนามสกุล')).toBeVisible();
  await expect(page.getByText('กรุณากรอกเบอร์โทรศัพท์มือถือ')).toBeVisible();
  await expect(page.getByText('กรุณารับทราบนโยบายความเป็นส่วนตัว และข้อกำหนดและเงื่อนไขการใช้งาน')).toBeVisible();
});
