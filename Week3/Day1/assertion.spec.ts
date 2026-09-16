import { test,expect } from '@playwright/test'

test('Assertion checks',async({page})=>{
    await page.goto(' https://leafground.com/input.xhtml')

    //validate a disabled textbox
    const disabledtext = page.locator('//input[@placeholder="Disabled"]')
    await expect(disabledtext).toBeDisabled()

    //Validate an Enabled Textbox
    const Enabledtextbox = page.locator('//input[@placeholder="Babu Manickam"]')
    await expect(Enabledtextbox).toBeEditable()
    await Enabledtextbox.fill('Sivaprakash')

    //not disabled
    const notDisabled = page.locator('//input[@value="Chennai"]')
    await expect.soft(notDisabled).toBeDisabled()

     //Fill Data
     let typedText = page.locator('//input[@value="Can you clear me, please?"]')
     await typedText.fill('')
     await page.waitForTimeout(1000)
     await typedText.fill('Playwright Learning')
})