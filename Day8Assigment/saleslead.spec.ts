import {test} from "@playwright/test"
test ('salesforce login', async({page})=>{
    await page.goto ("https://login.salesforce.com/?locale=in")
    await page.locator("[id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("[id='Login']").click()
    await page.locator("[id='password']").fill("TestLeaf@2025")
    await page.locator("[id='Login']").click()
    await page.locator(".slds-icon-waffle").click()//Toggler
    await page.locator("//button[@aria-label='View All Applications']").click()//viewAll
    await page.waitForTimeout(5000);
    await page.locator("//a[.//p[text()='Sales']]").click();


})