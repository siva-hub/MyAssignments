import { test,expect } from '@playwright/test'
test ('launch and login salesforce',async({page})=>{
await page.goto('https://testleaf.my.salesforce.com/')    
await page.locator("#username").fill('dilipkumar.rajendran@testleaf.com')
await page.locator("#Login").click()
await page.locator("#password").fill('TestLeaf@2025')
await page.locator("#Login").click()
await page.locator('.slds-icon-waffle').click()
await page.locator('button[aria-label="View All Applications"]').click()
await page.locator("//p[text()='Sales']").click()
await page.locator("[class='slds-truncate']").nth(3).click()
await page.locator("[title='New']").nth(1).click()
await page.locator("[name='salutation']").click()
await page.locator('[name="lastName"]').fill("Prakash")
await page.locator('[name="Company"]').fill('Square')
await page.locator('[name="SaveEdit"]').click()
await expect(page).toHaveTitle("Prakash | Lead | Salesforce", { timeout: 15000 })

})