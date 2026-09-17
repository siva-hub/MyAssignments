import { test } from '@playwright/test'
test ('Create Test using playwright',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox',{name:'Username'}).fill('democsr2')
    await page.getByRole('textbox',{name:'PASSWORD'}).fill('crmsfa')
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('link',{name:"CRM/SFA"}).click()
    await page.getByText("//a[text()='Leads']").click
    await page.getByRole('link',{name:'Create Lead'}).click()
    await page.locator("//input[@id='createLeadForm_companyName']").fill('Square')
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('siva')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('prakash')
    await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Hello')
    await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('Mr')
    await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('1111111')
    await page.locator('//input[@id="createLeadForm_departmentName"]').fill('Sr.Testengineer')
    await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('+91-8056431217')
    await page.locator('//input[@class="smallSubmit"]').click()


})