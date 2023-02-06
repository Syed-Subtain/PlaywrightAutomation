const { test, expect } = require('@playwright/test');
import { Homepage } from './Pages/Login';
test.describe('Plentiful Client Test',()=>{
    test('Login Test', async ({page}) => {
        await page.goto('https://plentifulapp.com/');
        //create Homepage object
    
        await expect(page).toHaveTitle(/Plentiful/);
        await page.locator('.small-green-border-button').click();
        await expect(page.locator('.hero-menu-login-wrapper')).toBeVisible();
        await page.getByRole('link', { name: 'CLIENT LOGIN' }).click();
        await page.goto('https://app.plentifulapp.com/a/pantries');
        // call hompage signin Click function
        const Home = new Homepage(page);
        await page.getByText('Sign In').click();
        // await page.pause()

        Home.clickSignIN(page)
        await page.pause()

     // await expect(page.locator('.hero-menu-login-wrapper')).toBeVisible();
    
        // await expect(page).toHaveURL('https://app.plentifulapp.com/a/pantries');

    })
})