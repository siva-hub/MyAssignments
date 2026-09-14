import{test,expect} from '@playwright/test'
test('To edit indiviuals',async({page})=>{
await page.goto('https://login.salesforce.com')
await page.locator("#username").fill('dilipkumar.rajendran@testleaf.com')
await page.locator("#Login").click()
await page.locator("#password").fill('TestLeaf@2025')
await page.locator("#Login").click()
await page.locator('.slds-icon-waffle').click()
await page.locator('[class="slds-button"]').nth(1).click()
await page.locator("//p[text()='Individuals']").click()
await page.locator('//a[@title="New"]').nth(0).click()
await page.locator('[class="lastName compoundBLRadius compoundBRRadius form-element__row input"]').fill('Prakash')
await page.locator('//span[@class=" label bBody"]').nth(2).click()
await expect(page.locator("(//span[text()='Prakash'])[1]")).toBeVisible()

})