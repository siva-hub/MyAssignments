import { test, expect } from '@playwright/test';

test.describe('saleforce actions', { tag: '@sftes' }, () => {
  test.use({ storageState: 'Data/sffstorage.json' });

  test.beforeEach("Welcome home", async ({ page }) => {
    await page.goto(
      'https://orgfarm-a8e3dbe83d-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome'
    );
  });

  test('To validate url', async ({ page }) => {
    
    await expect(page).toHaveURL(/welcome/i);
  });

  test('search test', async ({ page }) => {
    await expect(page.locator('//button[@aria-label="Search"]')).toBeVisible();
  });

  
  test('Page navigating', async ({ page }) => {
   test.slow();
  await page.locator('//button[@title="App Launcher"]').click();
  await expect(page.locator('//h2[text()="App Launcher"]')).toHaveText('App Launcher');
});
});
