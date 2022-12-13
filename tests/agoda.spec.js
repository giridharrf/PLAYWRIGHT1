import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://www.agoda.com/');
  await page.getByPlaceholder('Enter a destination or property').click();
  await page.getByPlaceholder('Enter a destination or property').fill('hy');
  await page.getByRole('option', { name: ' Hyderabad , India Popular City' }).click();
  await page.getByRole('gridcell', { name: 'Sat Dec 10 2022' }).locator('div').nth(1).click();
  await page.getByRole('gridcell', { name: 'Sat Dec 17 2022' }).locator('div').nth(1).click();
  await page.getByRole('button', { name: 'SEARCH' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Lemon Tree Premier - Hitec City - Hyderabad' }).getByRole('button', { name: 'Select room' }).click()
  ]);
  await page1.getByRole('button', { name: 'VIEW THIS DEAL' }).click();
  await page1.locator('#MasterRoom-3203525').getByRole('button', { name: 'Reserve' }).click();
  await page1.getByRole('button', { name: 'NEXT: FINAL STEP' }).click();
});