import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.easemytrip.com/hotels/');
  await page.locator('#myTopnav').getByRole('link', { name: 'Bus' }).click();
  await page.getByPlaceholder('Source City').click();
  await page.getByText('Chennai 567').click();
  await page.getByPlaceholder('Destination City').click();
  await page.getByText('Hyderabad 501').click();
  await page.getByPlaceholder('dd-mm-yyyy').click();
  await page.getByPlaceholder('Source City').click();
  await page.getByText('Hyderabad 501').click();
  await page.getByPlaceholder('Destination City').click();
  await page.getByPlaceholder('Destination City').fill('srika');
  await page.getByText('Srikakulam 1881').click();
  await page.getByPlaceholder('dd-mm-yyyy').click();
  await page.getByRole('link', { name: '14' }).click();
  await page.getByRole('button', { name: 'Search Bus' }).click();
  await page.locator('#myBtn').first().click();
  await page.locator('div:nth-child(5) > ul > li:nth-child(6) > .sleeper_normal').click();
  await page.locator('#selectBoard').click();
  await page.getByRole('link', { name: '05:00 PM : Balanagar (Pickup Van) NEAR Reliance Bunk,RTC Bus Stop Ph,,,' }).click();
  await page.getByRole('link', { name: '---Select---' }).click();
  await page.getByRole('link', { name: '09:05 AM : rtc complex' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});