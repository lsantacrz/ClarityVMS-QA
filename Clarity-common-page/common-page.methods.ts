// Import necessary modules from Playwright
import {Page} from '@playwright/test';


// Create Export class to export the common methods for the tests
export class CommonPageMethods {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    // Navigate into the Clarity VMS application
    async navigateToApplication(){
        await this.page.goto('https://stg.clarityvms.com/auth/login');
    }
}