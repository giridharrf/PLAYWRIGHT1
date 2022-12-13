import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.easemytrip.com/');
  await page.locator('#divnewlogin').getByRole('link', { name: 'Holidays' }).click();
  await page.getByPlaceholder('Where you want to go?').click();
  await page.getByPlaceholder('Where you want to go?').fill('goa');
  await page.locator('.listing_opt > li:nth-child(3)').click();
  await page.getByRole('link', { name: 'View Details' }).first().click();
  await page.locator('#PackageDepartureCity').selectOption('Bangalore');
  await page.getByPlaceholder('Date of Departure').click();
  await page.getByRole('cell', { name: '14' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').fill('sampledemo');
  await page.locator('.contact-right > .inp_n > fieldset > .icon1').click();
  await page.getByPlaceholder('Your E-mail Address').click();
  await page.getByPlaceholder('Your E-mail Address').fill('sampledemo@yopmail.com');
  await page.getByPlaceholder('Mobile No.').click();
  await page.getByPlaceholder('Mobile No.').fill('9848022338');
  await page.getByRole('button', { name: 'Send Query' }).click();
});