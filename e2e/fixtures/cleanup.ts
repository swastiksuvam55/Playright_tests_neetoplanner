import { Page } from '@playwright/test';

export async function cleanupTasks(page: Page, taskName1: string, taskName2: string) {
    // Call the verify function if needed
    // await verifySameUser(page);

    // Your cleanup logic here
    await page.getByRole('row', { name: taskName1 }).getByRole('button').nth(1).click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('row', { name: taskName2 }).getByRole('button').nth(1).click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();
}
