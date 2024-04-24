import { Page } from "@playwright/test";

export default class LoginPage {
    page: Page;
 

    constructor(page: Page) {
        this.page = page;
      
    }

    loginAndVerifyUser = async ({
        email,
    }: {
        email: string;

    }): Promise<void> => {
        
        await this.page.getByPlaceholder('Please enter your email').fill(email);
        await this.page.getByRole('button', { name: 'Next' }).click();
        await this.page.getByPlaceholder('Enter 6 digit login code').fill('123456');
        await this.page.waitForURL('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/');
        await this.page.waitForURL('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/dashboard/active');


        

    };
}













//   async loginAndVerifyUser(email: string): Promise<void> {
//     await this.page.getByPlaceholder('Please enter your email').fill(email);
//     await this.page.getByRole('button', { name: 'Next' }).click();

//   }