import { test, expect } from '@playwright/test';
import { login } from '../fixtures/login'; // Assuming login is exported as default from login.ts

test.describe('Login Functionality', () => {
  test('should successfully login to neetoPlanner', async ({ page }) => {
    // Step 1: Login to neetoPlanner
    await login(page);
    console.log('login successful');
  });
});


