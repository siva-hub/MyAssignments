import { test,expect } from "@playwright/test"
test ('salesforce login', async({page})=>{
    await page.goto ("https://login.salesforce.com/?locale=in")
    await page.locator("[id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("[id='Login']").click()
    await page.locator("[id='password']").fill("TestLeaf@2025")
    await page.locator("[id='Login']").click()
    await page.locator(".slds-icon-waffle").click()
    await page.locator("//button[@aria-label='View All Applications']").click()
    await page.locator("//p[text()='Individuals']").click()
    await page.locator("//span[text()='Individuals']").nth(0).click()
    await page.locator("[name='Individual-search-input']").fill("Prakash")
    await page.locator('//button[@class="slds-button slds-button_icon-border slds-button_icon-x-small"]').nth(1).click()
    await page.locator('//a[@class="highlightButton"]').nth(0).click()
    await page.locator("//span[text()='Mr.']").click()
    await page.locator("//input[@placeholder='First Name']").fill("Siva")//First
    await page.locator('//span[@class=" label bBody"])').nth(2).click()//Save
    await expect(page.locator("//span[text()='Siva Prakash']")).toBeVisible()

}
) //lightning-formatted-rich-text[@class="slds-rich-text-editor__output"])[88]
