class APIclient{
    sendrequest(endpoint:string):void
    sendrequest(endpoint:string,requestbody?:string,requestparament?:boolean):void
    
    sendrequest(endpoint:string,requestbody?:string,requestparament?:boolean):void{
        if(requestbody!==undefined && requestparament!=undefined){
            console.log("Endpoint url is",endpoint)
            console.log(`Payload: ${requestbody}`);
            console.log(`Request Status: ${requestparament ? 'Success (200)' : 'Failed (500)'}`);
        } else {
            console.log(`[GET] Endpoint: ${endpoint}`);
        }

    }

}


let send = new APIclient()
send.sendrequest("https://api.salesforce.com/services/data/v58.0")
send.sendrequest("https://api.salesforce.com/services/data/v58.0",'{"Name": "square"}',true)