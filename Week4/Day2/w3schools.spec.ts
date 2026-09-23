import { test,expect } from '@playwright/test'
test ('To check frame object', async ({page})=>{
await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
 page.on('dialog',async(alert)=>{
    let alerttype =alert.type()
 console.log('Press a button!',alerttype)
    await alert.accept()

 })
await page.frame({name:'iframeResult'})?.locator("//button[text()='Try it']").click()
await expect(page.frameLocator('#iframeResult').locator("#demo")).toBeVisible()
console.log(await page.frameLocator('#iframeResult').locator("//button[text()='Try it']").innerText())
await expect(page.frameLocator('#iframeResult').locator("#demo")).toHaveText('You pressed OK!')
})