import { test, expect } from '@playwright/test';

test('holiday homes', async ({ page }) => {
  await page.goto('https://www.tripadvisor.in/');
  await page.getByRole('link', { name: 'Holiday Homes' }).click();
  await page.getByRole('search').filter({ hasText: 'Nearby' }).getByPlaceholder('Where to?').fill('goa');
  await page.getByRole('option', { name: 'Goa India, Asia' }).click();
  await page.getByRole('list').filter({ hasText: 'BardezCandolimCalanguteArporaColvaBenaulimAnjunaCanaconaGoa VelhaVagator' }).getByRole('link', { name: 'Candolim' }).click();
  await page.goto('https://www.tripadvisor.in/VacationRentals-g297605-Reviews-Candolim_Bardez_North_Goa_District_Goa-Vacation_Rentals.html')
  await page.locator('.duUGc').first().click();
  await page.getByRole('rowgroup').filter({ hasText: '282930123456789101112131415161718192021222324252627282930311' }).getByRole('gridcell', { name: '30 December 2022' }).click();
  await page.getByRole('rowgroup').filter({ hasText: '282930123456789101112131415161718192021222324252627282930311' }).getByRole('gridcell', { name: '31 December 2022' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
   page.locator('.qhYuW > div:nth-child(2) > .rmyCe').first().click()
  ]);
  await page1.getByRole('button', { name: 'Book Now' }).click();
});
test('things to do',async ({page})=>{
  await page.goto('https://www.tripadvisor.in/');
  await page.getByRole('link', { name: 'Things to Do' }).first().click();
  await page.getByRole('search').filter({ hasText: 'Nearby' }).getByPlaceholder('Where to?').fill('dudh');
  await page.getByRole('option', { name: 'Dudhsagar Falls Mollem National Park, Goa, India' }).click();
  await page.goto('https://www.tripadvisor.in/Attraction_Review-g1833171-d3187540-Reviews-Dudhsagar_Falls-Mollem_National_Park_South_Goa_District_Goa.html');
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'LIKELY TO SELL OUT* Full-Day Tour Old Goa Dudhsagar Falls and Spice Plantation 3.5 of 5 bubbles. 6 reviews Adventure Tours from ₹2,800.00 per adult' }).click()
  ]);
  await page1.goto('https://www.tripadvisor.in/AttractionProductReview-g1584785-d21137179-Full_Day_Tour_Old_Goa_Dudhsagar_Falls_and_Spice_Plantation-Ponda_North_Goa_Distri.html');
  await page1.locator('section').filter({ hasText: 'Full viewAll photos (27)LIKELY TO SELL OUT*Full-Day Tour Old Goa Dudhsagar Falls' }).getByRole('button', { name: 'Check availability' }).click();
  await page1.getByRole('dialog').getByRole('button', { name: 'Reserve Now' }).click();
});
test('looking for restaurent', async ({ page }) => {
    await page.goto('https://www.tripadvisor.in/');
    await page.getByRole('link', { name: 'Restaurants' }).click();
    await page.getByRole('search').filter({ hasText: 'Nearby' }).getByPlaceholder('Where to?').fill('goa');
    await page.getByRole('option', { name: 'Goa India, Asia' }).click();
    await page.locator('.zjwAK > a').first().click();
    await page.getByRole('link', { name: 'Read more' }).click();
  });