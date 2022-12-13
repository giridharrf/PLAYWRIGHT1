import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.agoda.com/');
  await page.getByRole('button', { name: 'Close Message' }).click();
  await page.locator('#page-header div').filter({ hasText: 'List your placeRs.Sign inCreate account' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.frameLocator('iframe').getByPlaceholder('Email').click();
  await page.frameLocator('#universal-login-app-464 iframe').getByPlaceholder('Email').fill('demosample@yopmail.com');
  await page.frameLocator('#universal-login-app-464 iframe').getByPlaceholder('Email').press('Tab');
  await page.frameLocator('#universal-login-app-464 iframe').getByPlaceholder('Password').fill('Test@#54321');
  await page.frameLocator('#universal-login-app-464 iframe').getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Close Message' }).click();
  await page.getByPlaceholder('Enter a destination or property').click();
  await page.getByPlaceholder('Enter a destination or property').fill('hy');
  await page.getByText('HyderabadIndiaPopular').click();
  await page.getByRole('gridcell', { name: 'Fri Dec 16 2022' }).getByText('16').click();
  await page.getByRole('gridcell', { name: 'Sat Dec 17 2022' }).getByText('17').click();
  await page.getByRole('button', { name: 'SEARCH' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'The Manohar Hyderabad' }).filter({ hasText: 'See allThe Manohar HyderabadBegumpet, Hyderabad - 87 m to centerBreakfastFitness' }).getByRole('button', { name: 'Select room' }).click()
  ]);
  await page1.getByRole('button', { name: 'VIEW THIS DEAL' }).click();
  await page1.locator('[id="ChildRoom-ChwItMCHAxACIMIRKK60WDAESgcxRDFOXzFOUJgFEgcIASIDbJQRGggQAhgBKAQwAQ\\=\\="]').getByRole('button', { name: 'Reserve' }).click();
  await page1.getByRole('button', { name: 'NEXT: FINAL STEP' }).click();
});