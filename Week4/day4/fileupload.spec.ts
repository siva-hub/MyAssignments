import {test,expect} from '@playwright/test'
test ("Upload files", async({page})=>{
    await page.goto(' https://login.salesforce.com/')
    await page.locator('//input[@id="username"]').fill('sivaprakashsingaravel.99a02fdde51b@agentforce.com')
    await page.locator('//input[@id="Login"]').click()
    await page.locator('//input[@id="password"]').fill('Test@1234')
    await page.locator('//input[@id="Login"]').click()
    await page.waitForTimeout(8000);
    await page.locator("//span[text()='App Launcher']").click()
    await page.getByRole('button',{name:'View All Applications'}).click()
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Search apps or items...").fill('Accounts')
    await page.waitForLoadState('domcontentloaded')
    await page.locator(".label-display").click()
    await page.locator("//div[text()='New']").click()
    await page.waitForTimeout(2000)
    await page.locator('//input[@name="Name"]').fill('Test')
    await page.locator('//button[@aria-label="Rating"]').click()
    await page.getByText('Warm',{exact:true}).click()
    await page.locator('//button[@aria-label="Type"]').click()
    await page.getByText('Prospect',{exact:true}).click()
    await page.locator('//button[@aria-label="Industry"]').click()
    await page.getByText('Banking',{exact:true}).click()
    await page.locator('button[aria-label="Ownership"]').click();
    await page.locator('//button[@aria-label="Ownership"]').click()
    await page.locator('//button[@name="SaveEdit"]').click()
    await expect(page.getByText(/was created\./)).toBeVisible();

    let filedupload =  page.locator('//input[@type="file"]')
    await filedupload.scrollIntoViewIfNeeded()
    await filedupload.setInputFiles('Data/john-wick-broke-every-rule-the-underworld-zx.jpg')
    await page.locator('//span[text()="Done"]').click()

})