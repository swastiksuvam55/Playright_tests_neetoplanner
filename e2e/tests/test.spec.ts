import { test, expect, Page } from '@playwright/test';
import { login } from '../fixtures/login';

test.describe('Login Functionality', () => {
  test('should successfully login to neetoPlanner', async ({ page }: { page: Page }) => {
    // Step 1: Login to neetoPlanner
    await login(page);
    console.log('login successful');
  });
});



