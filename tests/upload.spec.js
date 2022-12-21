import { test, expect } from '@playwright/test';

test('download test', async ({ page }) => {
await page.goto('http://autopract.com/');
await page.locator("button.close").click();
await page.locator("input[type='file']").setInputFiles('tests/Vaccination status.xlsx');
});