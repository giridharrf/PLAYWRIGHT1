import { test, expect } from '@playwright/test';

test('download test', async ({ page }) => {
  await page.goto('https://feujidemo.appiancloud.com/suite/sites/patient-onboarding/page/home');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('saigiridhar.rv@feuji.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Sai@#54321');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Navigation' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByText('System Logs').click()
  ]);
  const [download] = await Promise.all([
    page1.waitForEvent('download'),
    page1.getByRole('link', { name: 'login-audit.csv.2020-11-10.gz' }).click()
  ]);
});

test('Upload survey', async ({ page }) => {
    await page.goto('https://feujidemo.appiancloud.com/suite/sites/feuji-survey/page/create');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('saigiridhar.rv@feuji.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Sai@#54321');
    await page.getByText('Remember me').click();
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Create New Survey' }).click();
    await page.getByText('By Upload').click();
    await page.getByLabel('Survey Name').click();
    await page.getByLabel('Survey Name').fill('Feuji Survey Sample');
    await page.getByTestId('DatePickerWidget-calendarButton').click();
    await page.getByRole('button', { name: 'Select Thursday, December 29th 2022' }).click();
    await page.getByText('Immediately').click();
    await page.getByRole('button', { name: 'Upload Drop file here' }).click();
    await page.getByRole('button', { name: 'Upload Drop file here' }).setInputFiles('Vaccination status.xlsx');
    await page.getByRole('textbox', { name: 'Select the team who need to complete the surveyRequired asterisk' }).fill('2');
    await page.getByRole('option', { name: 'Group BD_practice2' }).getByTestId('ParagraphText-paragraph').click();
    await page.getByRole('button', { name: 'SUBMIT' }).click();
  });