import { test } from "../fixtures";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Projects page", () => {
    let projectName: string;
    let projectDescription: string;

    test.beforeEach(() => {
        faker.seed(Date.now());

        projectName = faker.commerce.productName();;
        projectDescription = faker.lorem.sentence();
    });

    test("should create a new project", async ({ loginPage, page, projectPage }) => {
        // Step 1: Navigate to the sign-up page and login
        await test.step("Step 1: Navigate to the sign-up page and login", async () => {
            await page.goto("https://app.neetoauth.net/signups/new?redirect_uri=neetoplanner.net");
            await page.getByRole('link', { name: 'Log in' }).click();
            await loginPage.loginAndVerifyUser({
                email: "cpts9gnqty9-planner-swastik_singh-iiit_bhubaneswar@bigbinary.com",
            });
            await page.waitForURL('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/');
            await page.waitForURL('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/dashboard/active');
        });

        // Step 2: Create a new project and verify
        await test.step("Step 2: Create a new project and verify", async () => {
            await projectPage.createProjectAndVerify({ projectName, projectDescription });
        });

        // Optional: Add additional verification steps if necessary
    });
});
