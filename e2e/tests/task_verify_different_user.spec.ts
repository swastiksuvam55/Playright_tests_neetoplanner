import { test } from "../fixtures";
import { expect, Browser, BrowserContext } from "@playwright/test";
import { faker } from "@faker-js/faker";


test.describe("Verify different User", () => {
    let projectName: string;
    let projectDescription: string;
    let taskName: string;
    let taskDescription: string;
    let taskComment: string;
    let projectName1: string;
    let projectDescription1: string;
    let taskName1: string;
    let taskDescription1: string;
    let taskComment1: string;

    test.beforeEach(() => {
        faker.seed(Date.now());
        projectName = faker.person.fullName();
        projectDescription = faker.lorem.sentence();
        taskName = faker.lorem.word();
        taskDescription = faker.lorem.sentence();
        taskComment = faker.lorem.sentence();
        projectName1 = faker.person.fullName();
        projectDescription1 = faker.lorem.sentence();
        taskName1 = faker.lorem.word();
        taskDescription1 = faker.lorem.sentence();
        taskComment1 = faker.lorem.sentence();


    });

    test("should create a new project", async ({ loginPage, page, projectPage, differentTaskPage, verifyTaskPage, clearTaskPage }) => {
        // Step 1: Navigate to the sign-up page and login



        await test.step("Step 1: Navigate to the sign-up page and login for standard user", async () => {
            await page.goto("https://app.neetoauth.net/signups/new?redirect_uri=neetoplanner.net");
            await page.getByRole('link', { name: 'Log in' }).click();
            await loginPage.loginAndVerifyUser({
                email: "cpts9gnqty9-planner-swastik_suvam_singh-iiit_bhubaneswar+standard@bigbinary.com",
            });
            // await page.getByText("swastik singh standard").click();
            await page.pause();
            // await page.waitForURL('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/');
            await page.waitForURL('https://swastik-suvam-singh.neetoplanner.net/dashboard/active');
        });

        await test.step("Step 2: Check for assigned tasks and logout", async () => {
            await page.getByTestId('navlink-tasks').click();
            await expect(page.getByRole('heading', { name: '0 tasks' })).toHaveCount(1);
            await page.getByTestId('floating-action-menu-container').getByRole('button').click();
            await page.getByRole('button', { name: 'Log out' }).click();
        });

        // // Create a new incognito browser context.
        // const context = await browser.newContext();
        // // Create a new page in a pristine context.
        // const page1 = await context.newPage();
        await test.step("Step 3: Navigate to the sign-up page and login for standard user", async () => {
            await page.goto("https://app.neetoauth.net/signups/new?redirect_uri=neetoplanner.net");
            await page.getByRole('link', { name: 'Log in' }).click();
            // await loginPage.loginAndVerifyUser({
            //     email: "cpts9gnqty9-planner-swastik_singh-iiit_bhubaneswar@bigbinary.com",
            // });
            await loginPage.loginAndVerifyUser({
                email: "cpts9gnqty9-planner-swastik_suvam_singh-iiit_bhubaneswar@bigbinary.com",
            });
            await page.waitForURL('https://swastik-suvam-singh.neetoplanner.net/');
            await page.waitForURL('https://swastik-suvam-singh.neetoplanner.net/dashboard/active');
        });

        await test.step("Step 4: Create a new project and verify", async () => {
            await projectPage.createProjectAndVerify({ projectName, projectDescription });
        });

        await test.step("Step 5: Create a new Task and verify", async () => {
            await differentTaskPage.createTasks({ taskName, taskDescription, taskComment })
        })



        await test.step("Step 6: Create a new project 2 and verify", async () => {
            await page.getByRole('link', { name: 'swastik suvam singh' }).click();
            await projectPage.createProjectAndVerify({ projectName: projectName1, projectDescription: projectDescription1 });
        });

        await test.step("Step 7: Create a new Task 2 and verify", async () => {
            await differentTaskPage.createTasks({ taskName: taskName1, taskDescription: taskDescription1, taskComment: taskComment1 })
        })


        await test.step("Step 8: logout of admin", async () => {
            await page.getByTestId('floating-action-menu-container').getByRole('button').click();
            await page.getByRole('button', { name: 'Log out' }).click();
        });

        await test.step("Step 9: Navigate to the sign-up page and login for standard user", async () => {
            await page.goto("https://app.neetoauth.net/signups/new?redirect_uri=neetoplanner.net");
            await page.getByRole('link', { name: 'Log in' }).click();
            await loginPage.loginAndVerifyUser({
                email: "cpts9gnqty9-planner-swastik_suvam_singh-iiit_bhubaneswar+standard@bigbinary.com",
            });
            // await page.getByText("swastik singh standard").click();
            // await page.pause();
            await page.waitForURL('https://swastik-suvam-singh.neetoplanner.net');
            await page.goto('https://swastik-suvam-singh.neetoplanner.net/dashboard/active');
        });

        await test.step("Step 10: verify", async () => {
            await verifyTaskPage.verifyTask({ taskName: taskName, taskDescription: taskDescription, taskComment: taskComment, taskName1: taskName1, taskDescription1: taskDescription1, taskComment1: taskComment1 });
        })
        await test.step("Step 11: Delete all tasks", async () => {
                        await clearTaskPage.clearTask({ taskName: taskName, taskName1: taskName1});
                    })



    });






});


