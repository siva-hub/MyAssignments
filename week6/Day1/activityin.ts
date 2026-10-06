export class Webcomponent{
    public selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public click():void{
        console.log("Click the action")
    }
    public focus():void{
        console.log('Focus on the button/dom')
    }
}
