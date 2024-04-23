// poms/tasks.ts

import { Page, expect } from "@playwright/test";

export class clearTaskPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  clearTask = async ({ taskName, taskName1 }: { taskName: string, taskName1: string }) => {
        await this.page.getByRole('cell', { name: taskName }).getByRole('button').nth(1).click();
        await this.page.getByRole('button', { name: 'Delete' }).click();
        await this.page.getByRole('button', { name: 'Delete' }).click();
        await this.page.getByRole('cell', { name: taskName1 }).getByRole('button').nth(1).click();
        await this.page.getByRole('button', { name: 'Delete' }).click();
        await this.page.getByRole('button', { name: 'Delete' }).click();

  };
}