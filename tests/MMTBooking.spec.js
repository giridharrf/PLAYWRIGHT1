import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.makemytrip.com/');
  await page.locator('.loginModal').click();
  await page.locator('a').filter({ hasText: 'Search' }).click();
  await page.locator('.commonOverlay > span').click();
  await page.locator('[id="bookbutton-RKEY\\:6e6c5eff-3416-40c2-ad41-913f91e269ba\\:22_0"]').hover()
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Book Now' }).first().click()
  ]);
  await page1.locator('label').filter({ hasText: 'Yes, Secure my trip.' }).locator('span').nth(1).click();
  await page1.getByRole('button', { name: '+ ADD NEW ADULT' }).click();
  await page1.getByPlaceholder('First & Middle Name').click();
  await page1.getByPlaceholder('First & Middle Name').fill('sample ');
  await page1.getByPlaceholder('Last Name').click();
  await page1.getByPlaceholder('Last Name').fill('Test');
  await page1.locator('label').filter({ hasText: 'MALE' }).first().click();
  await page1.getByPlaceholder('Mobile No').click();
  await page1.getByPlaceholder('Mobile No').fill('9848022338');
  await page1.getByPlaceholder('Email').click();
  await page1.getByPlaceholder('Email').fill('sampletest@yopmail.com');
  await page1.locator('#Email').getByRole('paragraph').click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.getByRole('button', { name: 'CONFIRM' }).click();
});