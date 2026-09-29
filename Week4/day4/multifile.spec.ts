import {test,expect} from '@playwright/test'
import path from 'path'
test ('To upload multifile', async({page})=>{
    await page.goto('https://www.leafground.com/file.xhtml')
    let Multup = page.locator('(//input[@type="file"])[2]')
    await Multup.setInputFiles([
        path.join('Data/download.jpeg'),
        path.join('Data/images.jpeg')

    ])
    await expect (page.getByText('download.jpeg')).toBeVisible()
    await expect(page.getByText('images.jpeg')).toBeVisible()

})