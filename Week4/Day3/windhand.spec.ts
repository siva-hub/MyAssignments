import { test,expect } from '@playwright/test'
test('To merge leads',async({page,context})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main ')
    await page.locator('#username').fill('demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.locator(".decorativeSubmit").click()
    await page.getByRole('link',{name:"CRM/SFA"}).click()
    await page.locator("//a[text()='Leads']").click()
    await page.getByRole('link',{name:"Merge Leads"}).click()

    const fromPage = context.waitForEvent('page') 
    await page.getByAltText('Lookup', { exact: true }).first().click();
    const fromResult = await fromPage;
    await fromResult.locator('(//a[@class="linktext"])[1]').click()

    const [toPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('(//img[@src="/images/fieldlookup.gif"])[2]').click()
    ]);
    await toPage.locator('(//a[@class="linktext"])[4]').click()
     page.on('dialog', async (alert) => {
        console.log(alert.type())
        console.log(alert.message())
        alert.accept()
    })
await page.locator('//a[@class="buttonDangerous"]').click()


})
