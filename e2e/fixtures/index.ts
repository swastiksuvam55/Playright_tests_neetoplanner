// fixtures/index.ts

import { test as base } from "@playwright/test";
import LoginPage from "../poms/login";
import { projectPage } from "../poms/project";
import { TaskPage } from "../poms/createTasks";
import { verifyTaskPage } from "../poms/verifyTasks";
import { clearTaskPage } from "../poms/clearTasks";

interface ExtendedFixtures {
  loginPage: LoginPage;
  projectPage: projectPage;
  TaskPage: TaskPage;
  verifyTaskPage: verifyTaskPage;
  clearTaskPage: clearTaskPage;
}

// export const test = base.extend<ExtendedFixtures>({
//   loginPage: async ({ page }, use) => {
//     const loginPage = new LoginPage(page);
//     await use(loginPage);
//   },
// });

export const test = base.extend<ExtendedFixtures>({
    loginPage: async ({ page }, use) => {
      const loginPage = new LoginPage(page);
      await use(loginPage);
    },
    projectPage: async ({ page }, use) => {
      const ProjectPage = new projectPage(page);
      await use(ProjectPage);
    },
    TaskPage: async ({ page }, use) => {
        const taskPage = new TaskPage(page);
        await use(taskPage);
    },
    verifyTaskPage: async ({ page }, use) => {
        const verifytaskPage = new verifyTaskPage(page);
        await use(verifytaskPage);
    },
    clearTaskPage: async ({ page }, use) => {
        const clearTask = new clearTaskPage(page);
        await use(clearTask);
    },
  });