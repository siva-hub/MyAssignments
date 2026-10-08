import {  Saleslogin } from "./salesL";

export class salesHome extends Saleslogin{
    async Applauncher(){
        await this.page.locator('[title="App Launcher"]').click()
        //const appLauncher = this.page.getByRole('button', { name: 'App Launcher' });
        
        // Wait for Salesforce home page to complete loading
        //await appLauncher.waitFor({ state: 'visible', timeout: 15000 });
        //await appLauncher.click();
    //}
    //async viewAll(){
        await this.page.locator('//button[@aria-label="View All Applications"]').click()
    }
    async  searchbox(search:string){
        await this.page.getByPlaceholder("Search apps or items...").fill(search)
    //}
    //async Leadsclick(){
        await this.page.locator("//mark[contains(text(),'Leads')]").click()
    }
}