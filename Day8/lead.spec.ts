import {test} from '@playwright/test'
test('Create lead',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('democsr2');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click();
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href="/crmsfa/control/createLeadForm" ]').click();
    await page.locator('#createLeadForm_companyName').fill('square');
    await page.locator('#createLeadForm_firstName').fill('siva');
    await page.locator('#createLeadForm_lastName').fill('prakash');
    await page.locator('#createLeadForm_personalTitle').fill('welcome');
    await page.locator('#createLeadForm_generalProfTitle').fill('SDET');
    await page.locator('#createLeadForm_annualRevenue').fill('1111111');
    await page.locator('#createLeadForm_departmentName').fill('IT');
    const sourceOptions = await page
        .locator('#createLeadForm_dataSourceId option')
        .allTextContents();

    for (const option of sourceOptions) {
        console.log(option);
    }
    // await page.locator('#createLeadForm_currencyUomId').selectOption('AED');
    // await page.locator('#createLeadForm_industryEnumId').selectOption('IND_HARDWARE');
    // await page.locator('#createLeadForm_ownershipEnumId').selectOption('OWN_PARTNERSHIP');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('+91-800000000');
    await page.locator('input[name=submitButton]').click();
});