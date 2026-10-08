import { test } from '@playwright/test';
import { saleslcreate } from '../page/Salesleads';

test ("To create lead in Salesforce", async ({ page }) => {
    let leadPage = new saleslcreate(page);

    await leadPage.loadUrl('https://login.salesforce.com/?locale=in');
    
    // 1. Fill credentials first
    await leadPage.salesforceusername('sivaprakashsingaravel.99a02fdde51b@agentforce.com','Test@1234');
    
    // 2. Click login once
    //await leadPage.clicklogin();

    // 3. Navigate & create lead
    await leadPage.Applauncher();
   // await leadPage.viewAll();
    await leadPage.searchbox('Leads');
    //await leadPage.Leadsclick();
    await leadPage.newleads();
    await leadPage.filldetails();
    await leadPage.clicksave();
    await leadPage.verifylead();
})
