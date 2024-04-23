// poms/tasks.ts

import { Page, expect } from "@playwright/test";

export class projectPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  createProjectAndVerify = async ({ projectName, projectDescription }: { projectName: string, projectDescription: string }) => {
    // await page.goto('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/dashboard/active');
    await this.page.getByTestId('navlink-projects').click();
    await this.page.getByRole('button', { name: 'Add new project' }).click();
    await this.page.getByPlaceholder('Enter project name').click();
    await this.page.getByPlaceholder('Enter project name').fill(projectName);
    await this.page.getByPlaceholder('Enter description').click();
    await this.page.getByPlaceholder('Enter description').fill(projectDescription);
    // Click on the input field to trigger its placeholder
    await this.page.getByPlaceholder('Enter project identifier').click();
    const value = await this.page.getByPlaceholder('Enter project identifier').inputValue();
    // console.log("Placeholder Value:", value);
    await this.page.getByRole('button', { name: 'Save changes' }).click();
    await expect(this.page).toHaveURL(/https:\/\/swastik-singh-iiit-bhubaneswar.neetoplanner.net\/.*\//);


  };
}