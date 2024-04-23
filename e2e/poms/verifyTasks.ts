// poms/tasks.ts

import { Page, expect } from "@playwright/test";

export class verifyTaskPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  verifyTask = async ({ taskName, taskDescription, taskComment, taskName1, taskDescription1, taskComment1 }: { taskName: string, taskDescription: string, taskComment: string, taskName1: string, taskDescription1: string, taskComment1: string }) => {
        await this.page.getByTestId('navlink-tasks').click();
        await this.page.getByRole('link', { name: 'Assigned to me' }).click();
        await this.page.getByRole('heading', { name: '2 tasks' }).click();
        await this.page.getByRole('button', { name: `${taskName}` }).click();
        await this.page.getByText(taskDescription).first();
        await this.page.getByText(taskComment).nth(1);
        await this.page.getByRole('textbox', { name: 'editor-content' }).getByRole('paragraph').click();
        await this.page.getByTestId('close-button').click();
        await this.page.getByRole('button', { name: `${taskName1}` }).click();
        await this.page.getByText(taskDescription1).first();
        await this.page.getByText(taskComment1).nth(1);
        await this.page.getByTestId('close-button').click();


  };
}