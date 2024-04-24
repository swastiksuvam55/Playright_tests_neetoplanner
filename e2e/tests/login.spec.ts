import { test } from "../fixtures";

test.describe("Login page", () => {
    test("should login with the correct credentials", async ({ page, loginPage }) => {
        // Step 1: Navigate to the sign-up page
        await test.step("Step 1: Navigate to the sign-up page", () => page.goto("https://app.neetoauth.net/signups/new?redirect_uri=neetoplanner.net"));

        // Step 2: Click on the login link
        await test.step("Step 2: Click on the login link", () => page.getByRole('link', { name: 'Log in' }).click());

        // Step 3: Login with correct credentials and verify
        await test.step("Step 3: Login with correct credentials and verify", () => loginPage.loginAndVerifyUser({
            email: "cpts9gnqty9-planner-swastik_singh-iiit_bhubaneswar@bigbinary.com",
        }));

        await test.step("Step 4: wait for the user dashboard", () => page.waitForURL('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/') );
        

        // Optional: Add verification steps here if necessary
    });
});
