import { test,expect } from '@playwright/test'
test('PVR ticket',async({page})=>{
    await page.goto('https://www.pvrcinemas.com/')
    await page.locator("//div[@class='cities-names']/h6[text()='Chennai']").click()
    await page.locator('//span[@class="cinemas-inactive"]').click()
    await page.locator('//span[text()="Select Cinema"]').click()
    await page.locator('//span[text()="INOX National,Virugambakkam Chennai"]').click()
    await page.locator("//li[@role='option'][contains(.,'Today, 18 Sep')]").click()
    await page.locator("//li[@class='p-dropdown-item']/span[text()='MANDAADI']").click()
    await page.locator("//li[@role='option']//span[text()='03:30 PM']").click()
    await page.getByRole('button',{name:'Submit'}).click()
    await page.waitForTimeout(3000);
    await page.getByRole('button',{name:"Accept"}).click()
   
    const availableSeat = page.locator("//span[starts-with(@id,'SL.SILVER') and @class='seat-current-pvr']").first()

    await availableSeat.click()

    await expect(availableSeat).toBeVisible()

    const grandTotal = await page.getByText('218.02', { exact: true }).textContent()

    console.log("Grand Total =", grandTotal)

    await expect(
        page.getByText('218.02', { exact: true })
    ).toBeVisible()

    await expect(page).toHaveTitle(/PVR/i)



})
