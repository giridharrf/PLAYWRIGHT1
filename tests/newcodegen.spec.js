import { test, expect } from '@playwright/test';
import { timeout } from '../playwright.config';

test('should browse the items', async({page}) => {
  await page.goto('https://magento.softwaretestingboard.com/');

  const logo = await page.$('.logo');
  await logo.screenshot({path : 'logo.png'});
  await expect(page.getByRole('link', { name: 'Sign In' })).toHaveText('Sign In');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('testsample@yopmail.com');
  await page.getByRole('textbox', { name: 'Email*' }).press('Tab');
  await page.getByLabel('Password').fill('Test@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(5000)
  await page.getByRole('menuitem').filter({hasText:'Gear'}).hover()
  await page.getByRole('menuitem', { name: 'Bags' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Push It Messenger Bag Rating: 67% 3 Reviews $45.00 Add to Cart Add to Wish List ' }).getByRole('link', { name: 'Image' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: ' My Cart 1 1\nitems' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('radio', { name: 'Fixed Flat Rate' }).check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
});

