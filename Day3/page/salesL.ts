import { Page } from "@playwright/test";

export class Saleslogin{

    page:Page;
    constructor(spage:Page){
        this.page=spage
    }
async loadUrl(url:string){
    await this.page.goto(url)
}
async salesforceusername(username:string,password:string){
    await this.page.locator('[id="username"]').fill(username)

    await this.clicklogin()

        await this.page.locator('[id=password]').fill(password)
       await this.clicklogin()
       await this.page.waitForTimeout(15000)
}
 async clicklogin(){
        await this.page.locator('[id="Login"]').click()
    }


}
