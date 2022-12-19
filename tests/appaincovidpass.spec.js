import { test, expect } from '@playwright/test';

test('testing for profile update', async ({ page }) => {
  await page.goto('https://feujidemo.appiancloud.com/suite/sites/patient-onboarding/page/home');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('saigiridhar.rv@feuji.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Sai@#54321');
  await page.getByRole('button', { name: 'Sign In' }).click();  
  await page.getByRole('button', { name: 'Navigation' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByText('COVID-19 Campus Pass').click()
  ]);
  await page1.getByRole('link', { name: 'Profile Profile Profile' }).click();
  await page1.waitForTimeout(3000);
  await page1.getByRole('listbox', { name: 'RoleRequired asterisk' }).click();
  await page1.getByRole('link', { name: 'Clear value' }).click();
  await page1.getByText('Student').click();
  await page1.getByRole('listbox', { name: 'Which of the following best describes your COVID-19 vaccination status?' }).click();
  await page1.getByText('Partially vaccinated and awaiting more doses').click();
  await page1.getByRole('button', { name: 'Update' }).click();
});

test('Reporting an incident', async ({ page }) => {
    await page.goto('https://feujidemo.appiancloud.com/suite/sites/patient-onboarding/page/home');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('saigiridhar.rv@feuji.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Sai@#54321');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Navigation' }).click();
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByText('COVID-19 Campus Pass').click()
    ]);
    await page1.getByRole('link', { name: 'REPORT AN INCIDENT' }).click();
    await page1.getByRole('radiogroup', { name: 'Have you had symptoms of, been exposed to, or been diagnosed with COVID-19 recently?Required asterisk' }).getByText('No').click();
    await page1.getByRole('radiogroup', { name: 'Have you visited any campuses in the last 14 days?Required asterisk' }).getByText('No').click();
    await page1.getByRole('button', { name: 'Next' }).click();
    await page1.waitForTimeout(3000);
    await page1.getByRole('listbox', { name: 'TypeRequired asterisk' }).click();
    await page1.getByText('TypeGeneralGeneralTitleIncident DateCampusHitechCity CampusHitechCity CampusDesc').click();
    await page1.getByPlaceholder('e.g., Sick employee attended event').click();
    await page1.getByPlaceholder('e.g., Sick employee attended event').fill('Sick employee attend eve');
    await page1.getByTestId('DatePickerWidget-calendarButton').click();
    await page1.getByRole('button', { name: 'Select Tuesday, December 20th 2022' }).click();
    await page1.getByLabel('Description').click();
    await page1.getByLabel('Description').fill('Employee fallen sick');
    await page1.getByLabel('Impact').click();
    await page1.getByLabel('Impact').fill('Employee fallen sick');
    await page1.getByRole('link').nth(3).click();
    await page1.getByLabel('First Name').click();
    await page1.getByLabel('First Name').fill('Sample');
    await page1.getByLabel('Last Name').click({
      modifiers: ['Shift']
    });
    await page1.getByLabel('Last Name').click();
    await page1.getByLabel('Last Name').fill('Demo');
    await page1.getByLabel('Email Address').click();
    await page1.getByLabel('Email Address').fill('sampletes09t@yopmail.com');
    await page1.getByPlaceholder('e.g. 1234567890 or +1234567890').click();
    await page1.getByPlaceholder('e.g. 1234567890 or +1234567890').fill('9848022999');
    //await page1.getByRole('button', { name: 'Attach New File' }).click();
    //await page1.getByRole('button', { name: 'Upload Drop file here' }).click();
    //await page.locator("//button[@class='Button---btn Button---default_direction Button---secondary Button---small Button---minimize_width Button---inGridLayout']").setInputFiles('tests/Vaccination status.xlsx');
    //await page.getByRole('button', { name: 'Upload Drop file here' }).setInputFiles('Vaccination status.xlsx');
    await page.getByRole('button', { name: 'Report Incident' }).click();
  });

  test('campus search', async ({ page }) => {
    await page.goto('https://feujidemo.appiancloud.com/suite/sites/patient-onboarding/page/home');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('saigiridhar.rv@feuji.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Sai@#54321');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Navigation' }).click();
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByText('COVID-19 Campus Pass').click()
    ]);
    await page1.getByRole('link', { name: 'Campuses Campuses Campuses' }).click();
    await page1.getByPlaceholder('Search Campuses').click();
    await page1.getByPlaceholder('Search Campuses').fill('main');
    await page1.getByRole('button', { name: 'Search' }).click();
  });