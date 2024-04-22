import { expect, Page } from '@playwright/test';
import { faker } from '@faker-js/faker'; // Importing Faker.js

export async function newProject(page: Page) {
    await page.goto('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/dashboard/active');
    await page.getByRole('button', { name: 'Add new project' }).click();
     // Generate random project name and description using Faker.js
    const projectName = faker.commerce.productName(); // Generates a random product name
    const projectDescription = faker.lorem.sentence(); // Generates a random sentence for project description
    await page.getByPlaceholder('Enter project name').click();
    await page.getByPlaceholder('Enter project name').fill(projectName);
    await page.getByPlaceholder('Enter description').click();
    await page.getByPlaceholder('Enter description').fill(projectDescription);
    // Click on the input field to trigger its placeholder
    await page.getByPlaceholder('Enter project identifier').click();
    const value = await page.getByPlaceholder('Enter project identifier').inputValue();
    // console.log("Placeholder Value:", value);
    await page.getByRole('button', { name: 'Save changes' }).click();
    await expect(page).toHaveURL(`https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/${value}/list`);
};