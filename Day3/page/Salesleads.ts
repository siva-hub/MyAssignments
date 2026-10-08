import { expect } from "@playwright/test";
import { salesHome } from "./salesH";

export class saleslcreate extends salesHome{
    async newleads(){
        await this.page.locator("//button[text()='New']").click()
    }
    async filldetails(){
        await this.page.locator("//button[@name='salutation']").click()
        await this.page.locator('//lightning-base-combobox-item[@data-value="Mr."]').click()
        await this.page.locator('//input[@name="lastName"]').fill('sivaprakash')
        await this.page.locator('//input[@name="Company"]').fill('Square')
    }
    async clicksave(){
        await this.page.locator('//button[@name="SaveEdit"]').click()
    }
    async verifylead(){
        let createdvalue = await this.page.locator('lightning-formatted-name[slot="primaryField"]').innerText()
        expect(createdvalue).toBe('Mr. sivaprakash')
        await expect(this.page.locator('lightning-formatted-name[slot="primaryField"]')).toContainText('sivaprakash')

    }
}