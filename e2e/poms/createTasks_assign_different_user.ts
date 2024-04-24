import { Page, expect } from "@playwright/test";

export class differentTaskPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    createTasks = async ({ taskName, taskDescription, taskComment }: { taskName: string, taskDescription: string, taskComment: string }) => {

        await this.page.getByRole('button', { name: 'Add new task' }).click();
        await this.page.getByTestId('neeto-molecules-autosave-input').fill(taskName);
        await this.page.getByTestId('neeto-molecules-autosave-input-save').click();
        // await this.page.getByText(new RegExp(`${taskName}`)).getByRole('button').nth(2).click();
        await this.page.getByTestId('neeto-molecules-header').getByRole('button').nth(2).click();
        await this.page.getByRole('button', { name: 'Manage people' }).click();
        await this.page.getByRole('button', { name: 'Add new member' }).click();
        await this.page.getByTestId('backdrop').getByRole('checkbox').check();
        await this.page.getByRole('button', { name: 'Add as' }).click();
        await this.page.getByRole('button', { name: 'Regular' }).click();
        await this.page.getByTestId('close-button').click();
        await this.page.getByRole('button', { name: 'List' }).click();
        await this.page.getByRole('row', { name: new RegExp(`${taskName}` )}).getByRole('button').nth(2).click();
        await this.page.getByRole('button', { name: 'swastik singh standard' }).click();
        // await this.page.getByRole('row', { name: new RegExp(`${taskName}`) }).getByRole('button').nth(2).click();
        // await this.page.getByRole('button', { name: 'swastik singh (you)' }).click();

        await this.page.getByText(new RegExp(`${taskName}`)).click();
        await this.page.getByText('Add a description here.').click();
        await this.page.locator('div').filter({ hasText: /^ParagraphSave changesCancelAdd attachment$/ }).getByRole('textbox').fill(taskDescription);
        await this.page.getByRole('button', { name: 'Save changes' }).click();
        await this.page.getByRole('button', { name: 'Comments' }).click();
        await this.page.fill('p[data-placeholder="Type your comment here..."]', taskComment);
        // await this.page.pause();
        await this.page.getByRole('button', { name: 'Comment', exact: true }).click();
        await this.page.getByTestId('close-button').click();

    };
}