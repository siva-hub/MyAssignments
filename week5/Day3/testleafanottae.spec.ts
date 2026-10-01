import { expect, test } from '@playwright/test';

test.describe('To work on leaftaps', { tag: '@leaf' }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('democsr2');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator('//img[@src="/opentaps_images/integratingweb/crm.png"]').click();
  });

  test('navigate to lead', async ({ page }) => {
    await page.locator("//a[text()='Leads']").click();
    await expect(page).toHaveURL(/leadsMain/i);
  });

 test('create lead', async ({ page }) => {
  await expect(page.locator("//a[contains(text(), 'Create Lead')]")).toHaveText(/create lead/i);
});

test.fail('Invalid login',async({page})=>{
     await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('democsr2');
    await page.locator('#password').fill('crms');
    await page.locator('.decorativeSubmit').click();

})
});