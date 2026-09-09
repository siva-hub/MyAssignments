import {test,chromium,webkit} from '@playwright/test'
test("to launch two browser",async()=>{
    const edge = await chromium.launch({
        channel: "msedge"
});
    const edgepage = await edge.newPage();
    await edgepage.goto("https://www.youtube.com/");
    console.log(await edgepage.title("YouTube"))
    console.log(edgepage.url("https://www.youtube.com/"))

    const webkitbrowser = await webkit.launch();
    const webkitpage = await webkitbrowser.newPage();
    await webkitpage.goto("https://www.flipkart.com/");
    console.log(await webkitpage.title("Flipkart") )
    console.log(webkitpage.url("https://www.flipkart.com/"))
  
});