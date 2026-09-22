import { test } from '@playwright/test'
test ('To check Prompt',async({page})=>{
await page.goto('https://www.leafground.com/alert.xhtml')
await page.on('dialog',async(dialog)=>{
    let alertDialogue = dialog.message()
    console.log("Prompt message:",alertDialogue)
    await dialog.accept('Playwright')
})
await page.locator("//span[text()='Show']").nth(5).click()
})

