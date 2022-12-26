import { test, expect } from '@playwright/test';

import {HomePage} from '../src/pom/models/HomePage.page';
import {LoginPage} from '../src/pom/models/LoginPage.page';
test.describe('Applitools demo page',async () => {
let browser = null;
let context = null;
let page = null;
let homepage = null;
let loginpage = null;



test.beforeAll('before all', async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    homepage = new HomePage();
    loginpage = new LoginPage();
    await loginpage.navigate();
});
test.afterAll('after all',async () =>{
 await context.close();
 await browser.close();
}); 

test('it should be able to login', async () => {
    await loginpage.login('username','password');
    expect(await page.title()).not.toBeNull();
})

test('it should be logged in as Jack Gomez' , async () => {
expect(await homepage.getUserName()).toBe('jackGomez');
})

test('it should have balance of $350', async ()=> {
expect (await homepage.getBalance('total')).toBe('$350');
})

test('should have credit the available balance of $17800', async () =>{
    expect (await homepage.getBalance('credit')).toBe('$17,800');
})
test('you should have due today of $180', async () =>{
    expect (await homepage.getBalance('due')).toBe('$180');
})
});