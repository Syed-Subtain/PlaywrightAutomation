const { expect } = require('@playwright/test');
export class Homepage{

    constructor(page){
        this.page=page;
        // this.clientLogin_button = page.getByRole('link', { name: 'CLIENT LOGIN' });
        this.signIn_button = page.getByText('Sign In');
        // this.next_button = page.getByTestId('button-next');
        // this.email_textbox = page.getByRole('textbox');  
        // this.email_nextbtn = page.
        // this.submit_button = page.getByTestId('button-submit');  
    }

    async clickSignIN(page){
        // await expect(page.locator('.hero-menu-login-wrapper')).toBeVisible();
        // this.clientLogin_button.click();
        // await expect(page).toHaveURL('https://app.plentifulapp.com/a/pantries');
         this.signIn_button.click();
        // this.page=page
        //  await page.getByText('Sign In').click()
    }
}