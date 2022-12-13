import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  const logo = await page.$('.logo');
  await logo.screenshot({path :'logo.png'});
  await expect(page.getByRole('link', { name: 'Log in' })).toHaveText('Log in');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('sampletest@yopmail.com');
  await page.getByLabel('Password:').click();  
  await page.getByLabel('Password:').fill('Test@#54321');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Computers Desktops Notebooks Accessories' }).getByRole('link', { name: 'Computers' }).click();
  await page.getByRole('link', { name: 'Picture for category Desktops' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.getByLabel('Image Viever  [+5.00]').check();
  await page.locator('#add-to-cart-button-72').click();
  await page.getByRole('link').filter({hasText:'Shopping cart'}).click();
  await page.getByRole('combobox', { name: 'Country:' }).selectOption('41');
  await page.locator('#termsofservice').check();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('#PickUpInStore').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('input[class="button-1 payment-method-next-step-button"]').click();
  await page.locator('input[class="button-1 payment-info-next-step-button"]').click();
  await page.locator('#checkout-step-confirm-order').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();

});