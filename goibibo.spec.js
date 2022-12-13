import { test, expect } from '@playwright/test';

test('booking bus ticket', async ({ page }) => {
  await page.goto('https://www.goibibo.com/');
  await page.getByRole('banner').getByRole('link', { name: 'Bus' }).click();
  await page.getByPlaceholder('Enter Source').click();
  await page.getByPlaceholder('Enter Source').fill('hy');
  await page.getByRole('option', { name: 'Hyderabad, Telangana' }).getByRole('listitem').click();
  await page.getByPlaceholder('Enter Destination').click();
  await page.getByPlaceholder('Enter Destination').fill('ba');
  await page.getByRole('option', { name: 'Bangalore, Karnataka' }).getByRole('listitem').click();
  await page.getByTestId('openCheckinCalendar').click();
  await page.getByText('10').click();
  await page.getByTestId('searchBusBtn').click();
  await page.getByRole('button', { name: 'SHOW BUSES' }).click();
  await page.locator('div:nth-child(5) > .SrpActiveCardstyles__ActivepcardInnerLayoutDiv-sc-yk1110-2 > .SrpActiveCardstyles__LayoutThirdDiv-sc-yk1110-6 > .SrpActiveCardstyles__BusPriceDetailsDiv-sc-yk1110-32 > .SrpActiveCardstyles__BusDetailsDiv-sc-yk1110-37 > .SrpActiveCardstyles__BusTimingWrapNewDiv-sc-yk1110-28 > .SrpActiveCardstyles__BusBtnDiv-sc-yk1110-29 > .Button-sc-110xfhu-4').click();
  await page.locator('label').filter({ hasText: 'HYDERNAGARCITY BUS STOPHYDERNAGAR 9246783451' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'YALAHANKABESIDE MAHINDRA SHOWROOM & COFFEE DAY' }).locator('span').first().click();
  await page.locator('div:nth-child(35) > .SeatWithTooltipstyles__BusSeat-sc-dkrka-2 > .BusSeatIcon-sc-fk5j7x-0').click();
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByPlaceholder('Enter Full Name').click();
  await page.getByPlaceholder('Enter Full Name').fill('sample demo');
  await page.getByPlaceholder('Enter Full Name').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Enter Full Name').click();
  await page.getByPlaceholder('Enter Full Name').press('Control+c');
  await page.getByPlaceholder('Enter Email Address').click({
    modifiers: ['Control']
  });
  await page.getByPlaceholder('Enter Email Address').fill('https://www.goibibo.com/bus/');
  await page.getByPlaceholder('Enter Email Address').press('Control+z');
  await page.getByPlaceholder('Enter Email Address').fill('sampledemo@yopmail.com');
  await page.getByPlaceholder('Enter Mobile Number').click();
  await page.getByPlaceholder('Enter Mobile Number').fill('9848022338');
  await page.getByPlaceholder('Age').click();
  await page.getByPlaceholder('Age').fill('29');
  await page.getByText('Male').first().click();
 // await page.getByRole('button', { name: 'Pay ₹ 1195' }).click();
});


