import { test } from "../fixtures";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";


test.describe("Tasks page", () => {
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
        projectName = faker.commerce.productName();
        projectDescription = faker.lorem.sentence();
        taskName = faker.lorem.word();
        taskDescription = faker.lorem.sentence();
        taskComment = faker.lorem.sentence();
        projectName1 = faker.commerce.productName();
        projectDescription1 = faker.lorem.sentence();
        taskName1 = faker.lorem.word();
        taskDescription1 = faker.lorem.sentence();
        taskComment1 = faker.lorem.sentence();


    });

    test("should create a new project", async ({ loginPage, page, projectPage, TaskPage, verifyTaskPage, clearTaskPage }) => {
        // Step 1: Navigate to the sign-up page and login
        await test.step("Step 1: Navigate to the sign-up page and login", async () => {
            await page.goto("https://app.neetoauth.net/signups/new?redirect_uri=neetoplanner.net");
            await page.getByRole('link', { name: 'Log in' }).click();
            await loginPage.loginAndVerifyUser({
                email: "cpts9gnqty9-planner-swastik_singh-iiit_bhubaneswar@bigbinary.com",
            });
        });
        // await page.pause();

        await page.getByTestId('navlink-tasks').click();
        await expect(page.getByRole('heading', { name: '0 tasks' })).toHaveCount(1);


        // Step 2: Create a new project and verify
        await test.step("Step 2: Create a new project and verify", async () => {
            await projectPage.createProjectAndVerify({ projectName, projectDescription });
        });

        await test.step("Step 3: Create a new Task and verify", async () => {
            await TaskPage.createTasks({ taskName, taskDescription, taskComment })
        })

        await page.getByRole('link', { name: 'swastik singh IIIT Bhubaneswar' }).click();

        await test.step("Step 4: Create a new project 2 and verify", async () => {
            await projectPage.createProjectAndVerify({ projectName: projectName1, projectDescription: projectDescription1 });
        });

        await test.step("Step 5: Create a new Task 2 and verify", async () => {
            await TaskPage.createTasks({ taskName: taskName1, taskDescription: taskDescription1, taskComment: taskComment1 })
        })
        
        await test.step("Step 6: verify", async () => {
            await verifyTaskPage.verifyTask({ taskName: taskName, taskDescription: taskDescription, taskComment: taskComment, taskName1: taskName1, taskDescription1: taskDescription1, taskComment1: taskComment1});
        })
        await test.step("Step 7: Delete all tasks", async () => {
            await clearTaskPage.clearTask({ taskName: taskName, taskName1: taskName1});
        })
    });
});
