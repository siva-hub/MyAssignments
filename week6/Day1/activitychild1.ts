import { Webcomponent } from "./activityin";
class text extends Webcomponent{
   constructor(selector: string) {
        super(selector); // Pass selector to WebComponent constructor
    }
    public text():void{
        console.log("text is visible")
    }
}
    
let lt = new text("new")
lt.text()
