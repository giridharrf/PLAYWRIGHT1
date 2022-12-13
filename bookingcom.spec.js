import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.booking.com/');
  await page.getByRole('banner').filter({ hasText: 'INR Choose your currency. Your current currency is Indian Rupee Choose your lang' }).click();
  await page.getByPlaceholder('Where are you going?').click();
  await page.getByRole('option', { name: 'Hyderabad India' }).click();
  await page.getByRole('checkbox', { name: '16 December 2022' }).click();
  await page.getByRole('checkbox', { name: '19 December 2022' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('.a68bfa09c2 > .fc63351294').first().click()
  ]);
  await page1.locator('#hp_book_now_button').click();
  await page1.getByRole('button', { name: 'I\'ll reserve' }).click();
  await page1.getByLabel('First Name\n *').click();
  await page1.getByLabel('First Name\n *').fill('sample');
  await page1.getByLabel('Last Name\n *').click();
  await page1.getByLabel('Last Name\n *').fill('demo');
  await page1.getByPlaceholder('Double-check for typos').click();
  await page1.getByPlaceholder('Double-check for typos').fill('demosample@yopmail.com');
  await page1.getByPlaceholder('Double-check for typos').click({
    clickCount: 3
  });
  await page1.getByPlaceholder('Double-check for typos').click({
    clickCount: 4
  });
  await page1.getByPlaceholder('Double-check for typos').press('Control+c');
  await page1.getByLabel('Confirm Email Address\n *').click({
    modifiers: ['Control']
  });
  await page1.getByLabel('Confirm Email Address\n *').fill('demosample@yopmail.com');
  await page1.getByText('I\'m the main guest').click();
  await page1.getByRole('combobox', { name: 'Add your estimated arrival time (optional)' }).selectOption('0');
  await page1.getByRole('button',{name:' Next: Final details '}).click();
  await page1.getByPlaceholder('+91').fill('+919848022338');
  await page1.locator('label').filter({ hasText: 'Yes, I consent to receiving marketing emails from Booking.com about transportati' }).click();
  await page1.getByRole('button', { name: 'Complete booking' }).click();
});