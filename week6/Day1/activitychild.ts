import { Webcomponent } from "./activityin";

export class button extends Webcomponent{
    constructor(selector: string) {
        super(selector); // Pass selector to WebComponent constructor
    }
    public override click(): void {
        console.log("additonal click")
    }
}

let bt = new button("#submit")
bt.click()