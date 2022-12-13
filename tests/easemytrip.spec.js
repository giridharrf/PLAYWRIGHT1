import { test, expect } from '@playwright/test';

test('hotel booking', async ({ page }) => {
  await page.goto('https://www.easemytrip.com/hotels/');
  await page.locator('form').getByText('India').click();
  await page.getByText('New Delhi, India').click();
  await page.getByRole('row', { name: '18 19 20 21 22 23 24' }).getByRole('link', { name: '20' }).click();
  await page.getByRole('row', { name: '18 19 20 21 22 23 24' }).getByRole('link', { name: '21' }).click();
  await page.getByRole('link', { name: 'Done' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Hotel Excellent 4622 reviews 4.5 LE MERIDIEN NEW DELHI Windsor Palace 1.4 km from NEW DELHI City Center Breakfast' }).click()
  ]);
  await page1.locator('.fill-btn').first().click();
  await page1.getByPlaceholder('Enter your email address').fill('sampledemo@yopmail.com');
  await page1.getByPlaceholder('Enter Mobile No').fill('9848022338');
  await page1.locator('#txtFirstName1').fill('Sample');
  await page1.locator('input[name="txtLastName"]');
});
test('bus booking', async ({ page }) => {
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
  test('holiday booking', async ({ page }) => {
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