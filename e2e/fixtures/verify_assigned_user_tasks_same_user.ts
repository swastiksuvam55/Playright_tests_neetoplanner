import { expect, Page } from '@playwright/test';
import { faker } from '@faker-js/faker'; // Importing Faker.js

export async function verifySameUser(page: Page) {
  await page.getByTestId('navlink-tasks').click();
//   await page.pause();
  await expect(page.getByRole('heading', { name: '0 tasks' })).toHaveCount(1);
       // Generate random project name and description using Faker.js
  const projectName1 = faker.commerce.productName(); // Generates a random product name
  const projectDescription1 = faker.lorem.sentence(); // Generates a random sentence for project description
  await page.getByTestId('navlink-projects').click();
  await page.getByRole('button', { name: 'Add new project' }).click();
  await page.getByPlaceholder('Enter project name').click();
  await page.getByPlaceholder('Enter project name').fill(projectName1);
  await page.getByPlaceholder('Enter description').click();
  await page.getByPlaceholder('Enter description').fill(projectDescription1);
  await page.getByPlaceholder('Enter project identifier').click();
  const value1 = await page.getByPlaceholder('Enter project identifier').inputValue();
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.getByRole('button', { name: 'Add new task' }).click();
  const taskName1 = faker.commerce.productName();
  await page.getByTestId('neeto-molecules-autosave-input').fill(taskName1);
  await page.getByTestId('neeto-molecules-autosave-input-save').click();
  await page.getByRole('row', { name: `${taskName1} #${value1}106 Select date` }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'swastik singh (you)' }).click();
  await page.getByText(`${taskName1}#${value1}106`).click();
  await page.getByText('Add a description here.').click();
  const taskDescription1 = faker.lorem.sentence();
  const taskComment1 = faker.lorem.sentence();
  await page.locator('div').filter({ hasText: /^ParagraphSave changesCancelAdd attachment$/ }).getByRole('textbox').fill(taskDescription1);
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.getByRole('button', { name: 'Comments' }).click();
  await page.fill('p[data-placeholder="Type your comment here..."]', taskComment1);
// await page.pause();
  await page.getByRole('button', { name: 'Comment', exact: true }).click();
  await page.getByTestId('close-button').click();  
  

  // Generate random project name and description using Faker.js
  const projectName2 = faker.commerce.productName(); // Generates a random product name
  const projectDescription2 = faker.lorem.sentence(); // Generates a random sentence for project description

  await page.getByTestId('navlink-projects').click();
//   await page.pause();
  await page.goto('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/dashboard/active');
//   await page.getByRole('link', { name: 'Active' }).click();
 
  await page.getByRole('button', { name: 'Add new project' }).click();
  await page.getByPlaceholder('Enter project name').fill('pro');
  await page.getByPlaceholder('Enter project name').click();
  await page.getByPlaceholder('Enter project name').fill(projectName2);
  await page.getByPlaceholder('Enter description').click();
  await page.getByPlaceholder('Enter description').fill(projectDescription2);
  await page.getByPlaceholder('Enter project identifier').click();
  const value2 = await page.getByPlaceholder('Enter project identifier').inputValue();
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.getByRole('button', { name: 'Add new task' }).click();
  const taskName2 = faker.commerce.productName();
  await page.getByTestId('neeto-molecules-autosave-input').fill(taskName2);
  await page.getByTestId('neeto-molecules-autosave-input-save').click();
  await page.getByRole('row', { name: `${taskName2} #${value2}106 Select date` }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'swastik singh (you)' }).click();
  await page.getByText(`${taskName2}#${value2}106`).click();
  await page.getByText('Add a description here.').click();
  const taskDescription2 = faker.lorem.sentence();
  const taskComment2 = faker.lorem.sentence();
  await page.locator('div').filter({ hasText: /^ParagraphSave changesCancelAdd attachment$/ }).getByRole('textbox').fill(taskDescription2);
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.getByRole('button', { name: 'Comments' }).click();
//   await page.getByRole('textbox', { name: 'editor-content' }).getByRole('paragraph').click();
//   await page.getByRole('textbox', { name: 'editor-content' }).getByPlaceholder('Type your comment here...').fill(taskComment2);
await page.fill('p[data-placeholder="Type your comment here..."]', taskComment2);
  await page.getByRole('button', { name: 'Comment', exact: true }).click();
  await page.getByTestId('close-button').click();
  await page.getByTestId('navlink-tasks').click();
  await page.getByRole('link', { name: 'Assigned to me' }).click();
  await page.getByRole('heading', { name: '2 tasks' }).click();
  await page.getByRole('button', { name: `${taskName1}` }).click();
  await page.getByText(taskDescription1).first();
  await page.getByText(taskComment1).nth(1);
  await page.getByRole('textbox', { name: 'editor-content' }).getByRole('paragraph').click();
  await page.getByTestId('close-button').click();
  await page.getByRole('button', { name: `${taskName2}` }).click();
  await page.getByText(taskDescription2).first();
  await page.getByText(taskComment2).nth(1);
  await page.getByTestId('close-button').click();
};