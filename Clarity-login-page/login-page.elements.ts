import  {Page} from '@playwright/test';

export class LoginPageElements {   
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }   

    // Define the locators for the login page elements
    get textBoxes() {
        return {
            username: this.page.locator('#username'),
            password: this.page.locator('#password')
        }
    }
    // Define the locator for the login button and the forgot password link
    get loginButton() {
        return this.page.locator('button[type="submit"]');
    }
    get forgotPasswordLink() {
        const link = this.page.getByRole('link', { name: 'Forgot your password?' });
        return link.click();
    }

    

}