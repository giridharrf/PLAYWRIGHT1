import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shop.demoqa.com/');
  const scrnsht= await page.getByRole('link', { name: 'ToolsQA Demo Site' }).screenshot({path:'screen.png'});
  await expect(page.getByRole('link', { name: 'Dismiss' })).toHaveText('Dismiss');
  await page.getByRole('link', { name: 'Dismiss' }).click();
  await expect(page.getByRole('link', { name: 'My Account' })).toHaveText('My Account');
  await page.getByRole('link', { name: 'My Account' }).click();
  await page.getByLabel('Username or email address *').click();
  await page.getByLabel('Username or email address *').fill('demosample@yopmail.com');
  await page.locator('#password').click({
    modifiers: ['Control']
  });
  await page.locator('#password').fill('Test@#12345');
  await expect(page.getByRole('button', { name: 'Log in' })).toHaveText('Log in');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'ToolsQA Demo Site' }).filter({ hasText: 'ToolsQA Demo Site' }).click();
  await expect(page.getByText('red satin round neck backless maxi dress')).toHaveText('red satin round neck backless maxi dress');
  await page.getByText('red satin round neck backless maxi dress').click();
  await page.waitForTimeout(3000)
  await page.getByRole('combobox', { name: 'Color' }).selectOption('mauve');
  await page.waitForTimeout(3000)
  await page.getByRole('combobox', { name: 'Size' }).selectOption('medium');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('link', { name: 'View cart' })).toHaveText('View cart');
  await page.getByRole('link', { name: 'View cart' }).click();
  await page.getByRole('link', { name: 'Proceed to checkout' }).click();
  await page.getByLabel('I have read and agree to the website terms and conditions *').check();
  await page.getByRole('button', { name: 'Place order' }).click();
});