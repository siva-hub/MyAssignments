import { test,expect } from '@playwright/test'
test('edit lead',async({page})=>{
await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('democsr2');
await page.locator('#password').fill('crmsfa');
await page.locator('.decorativeSubmit').click();
await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click();
await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
await page.locator('#createLeadForm_companyName').fill('square')
await page.locator('[id="createLeadForm_firstName"]').fill('siva')
await page.locator('[id="createLeadForm_lastName"]').fill('prakash')
await page.locator('[class="smallSubmit"]').click()
await page.locator(".subMenuButton").nth(2).click()
await page.locator("#updateLeadForm_companyName").fill('iOPEX')
await page.locator('input[type="submit"]').nth(0).click()
const viewCompanyName = page.locator('#viewLead_companyName_sp');
await expect(viewCompanyName).toContainText('iOPEX');
})