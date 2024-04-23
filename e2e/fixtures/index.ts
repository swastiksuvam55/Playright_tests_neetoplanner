// fixtures/index.ts

import { test as base } from "@playwright/test";
import LoginPage from "../poms/login";
import { projectPage } from "../poms/project";

interface ExtendedFixtures {
  loginPage: LoginPage;
  projectPage: projectPage;
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
      const taskPage = new projectPage(page);
      await use(taskPage);
    },
  });