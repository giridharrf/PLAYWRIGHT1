import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.makemytrip.com/');
  await page.locator('.loginModal').click();
  await page.getByText('FromDEL, Delhi Airport India').click();
  await page.getByRole('option', { name: 'icon Mumbai, India Chhatrapati Shivaji International Airport BOM' }).click();
  await page.locator('div:nth-child(3)').first().click();
  await page.getByRole('option', { name: 'icon New Delhi, India Indira Gandhi International Airport DEL' }).click();
  await page.locator('div').filter({ hasText: 'OneWayRound TripMulti CityBook International and Domestic Flights FromBOM, Chhat' }).nth(3).click();
  await page.locator('a').filter({ hasText: 'Search' }).click();
  await page.locator('.commonOverlay > span').click();
  await page.getByText('IndiGo6E 6085, 6E 673600:30Mumbai08 h 05 m 1 stop via Ahmedabad08:35New Delhi₹ 7').click();
  await page.locator('[id="bookbutton-RKEY\\:3b4e0678-3a41-4210-85d8-b092fe6b79e6\\:36_0"]').click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Book Now' }).first().click()
  ]);
  await page1.locator('label').filter({ hasText: 'Yes, Secure my trip.' }).locator('span').first().click();
  await page1.getByRole('button', { name: '+ ADD NEW ADULT' }).click();
  await page1.getByPlaceholder('First & Middle Name').click();
  await page1.getByPlaceholder('First & Middle Name').fill('Sample');
  await page1.getByPlaceholder('Last Name').click();
  await page1.getByPlaceholder('Last Name').fill('Test');
  await page1.locator('label').filter({ hasText: 'MALE' }).first().click();
  await page1.getByPlaceholder('Mobile No').click();
  await page1.getByPlaceholder('Mobile No').fill('9848022338');
  await page1.getByPlaceholder('Email').click();
  await page1.getByPlaceholder('Email').fill('sai@yopmail.com');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').press('ArrowLeft');
  await page1.getByPlaceholder('Email').fill('sample@yopmail.com');
  await page1.locator('#Email').getByRole('paragraph').click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.getByRole('button', { name: 'CONFIRM' }).click();
  await page1.getByText('No, Let Me Choose').click();
  await page1.locator('[id="BOM\\$AMD\\$2022-12-08\\ 00\\:30\\$6E-6085_31F"] > .seatBlock').click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.getByText('No, Let Me Choose').click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.getByText('Skip to add-ons').click();
  await page1.getByRole('button', { name: 'Proceed to pay' }).click();
  await page1.goto('https://payments.makemytrip.com/ui/checkout/?id=744841296896906');
});