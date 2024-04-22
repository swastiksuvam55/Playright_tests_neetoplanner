import { Page } from '@playwright/test';

export async function login(page: Page) {
    await page.goto('https://app.neetoauth.net/signups/new?redirect_uri=neetoplanner.net');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('[data-test-id="neeto-auth-email-input-field"]').fill('cpts9gnqty9-planner-swastik_singh-iiit_bhubaneswar@bigbinary.com');
    await page.locator('[data-test-id="neeto-auth-login-button"]').click();
    await page.getByPlaceholder('Enter 6 digit login code').fill('123456');
    await page.waitForURL('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/');
    await page.waitForURL('https://swastik-singh-iiit-bhubaneswar.neetoplanner.net/dashboard/active');
}



