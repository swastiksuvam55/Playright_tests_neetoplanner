import { test } from "../fixtures";

test.describe("Login page", () => {
  test("should login with the correct credentials", async ({
    page,
    loginPage,
  }) => {
    await page.goto("https://app.neetoauth.net/signups/new?redirect_uri=neetoplanner.net");
    await page.getByRole('link', { name: 'Log in' }).click();
    await loginPage.loginAndVerifyUser({
        email: "cpts9gnqty9-planner-swastik_singh-iiit_bhubaneswar@bigbinary.com",
    });
  });
});