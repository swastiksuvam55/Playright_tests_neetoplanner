import { test, expect, Page } from '@playwright/test';
import { login } from '../fixtures/login';
import { newProject } from '../fixtures/new_project';

test.describe('Login Functionality', () => {
  test('should successfully login to neetoPlanner', async ({ page }: { page: Page }) => {
    // Step 1: Login to neetoPlanner
    await login(page);
    console.log('login successful');
  });
});

test.describe('New Project creation successful', () => {
    test('should successfully able to create a new project', async ({ page }: { page: Page }) => {
        await login(page);
        await newProject(page);
        console.log('new project creation successful');
    });
});


