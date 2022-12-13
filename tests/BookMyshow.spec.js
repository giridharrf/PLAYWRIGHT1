import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://in.bookmyshow.com/');
  await page.getByText('Hyderabad').click();
  await page.getByRole('link', { name: 'HIT: The 2nd Case HIT: The 2nd Case HIT: The 2nd Case Crime/Mystery/Thriller' }).click();
  await page.getByRole('button', { name: 'Book tickets' }).click();
  await page.getByRole('button', { name: 'Not Now' }).click();
  await page.getByRole('link', { name: 'Alankar (Pratap Theatre): Langer House' }).click();
  await page.getByRole('link', { name: '09:00 PM' }).click();
  await page.getByText('Select Seats').click();
  await page.locator('#A_1_01').getByRole('link', { name: '1' }).click();
});