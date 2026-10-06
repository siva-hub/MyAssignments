export class Basepage{
    login(){
    console.log("Login into the page")
    }

}
class findelement extends Basepage{
    login(): void {
        console.log("Findelemet in the page")
    }
}
class clickelement extends Basepage{
    login(): void {
        console.log("Click the element ")
    }
}
class findtext extends Basepage{
    login(): void {
        console.log("find text element in the page")
    }
}
class Performtask extends Basepage{
    login(): void {
        console.log("perform the task")
    }
}
let find = new findelement()
find.login()
let Click = new clickelement()
Click.login()
let text = new findtext()
text.login()
let perform = new Performtask()
perform.login()
