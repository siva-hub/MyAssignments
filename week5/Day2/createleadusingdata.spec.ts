import { test } from '@playwright/test'
import dotenv from 'dotenv'
import fs from 'fs'
import path, { parse } from 'path'
import data from '../../Data/createlead.json'
import { isUtf8 } from 'buffer'


//login using env files
dotenv.config({path:'Data/createlead.env'});
let URL = process.env.cl_url as string
let userName = process.env.cl_username as string
let Password = process.env.cl_password as string


//Reading file from json
const createLead = JSON.parse(fs.readFileSync(path.join(__dirname,'../../Data/createlead.json'),'utf-8'),);

//login using  env files
test( 'to test lead',async({page}) =>{
    await page.goto(URL)
    await page.locator("#username").fill(userName)
    await page.locator("#password").fill(Password)
    await page.locator(".decorativeSubmit").click()
    await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click()
    await page.getByText('Leads',{exact:true}).click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator("#createLeadForm_companyName").fill(data['Company name'])
    await page.locator("#createLeadForm_firstName").fill(data['First name '])
    await page.locator("#createLeadForm_lastName").fill(data['Last name'])
    await page.locator('#createLeadForm_dataSourceId').selectOption( data.Label) 
    await page.locator('[name="marketingCampaignId"]').selectOption({label: "Demo Marketing Campaign"})
    //counting
    let market = await page.locator('#createLeadForm_marketingCampaignId').allTextContents()
    for (let cn of market) {
       console.log(cn)
    }
    console.log("Option is marketing is:",market.length)

    await page.locator('[name="industryEnumId"]').selectOption({index:6})
    await page.locator('#createLeadForm_currencyUomId').selectOption(data.Currency)
    await page.locator("#createLeadForm_generalCountryGeoId").selectOption(data.country)
    await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption({label:"TAMILNADU"})
    let statecount =  await page.locator("#createLeadForm_generalStateProvinceGeoId").allInnerTexts()
    for (let stc of statecount){
        console.log(stc)
    }
    console.log("Count the number",statecount.length)
    await page.locator('[name="submitButton"]').click()





})
