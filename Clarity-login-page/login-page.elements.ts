import  {Page} from '@playwright/test';

export class LoginPageElements {   
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }   

    // Define the locators for the login page elements
    get usernameInput() {
        return this.page.locator('#username');
    }
    get passwordInput() {
        return this.page.locator('#password');
    }
    get loginButton() {
        return this.page.locator('button[type="submit"]');
    }
    get forgotPasswordLink() {
        const link = this.page.getByRole('link', { name: 'Forgot your password?' });
        return link.click();
    }

    //

}