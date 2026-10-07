import { Pagerules,Basepage } from '../day2/ecommerceinterface'
class Loginpage extends Basepage implements Pagerules{

    verifyPage(){
    console.log("login page verified")
}
    enterUsername():void{
        console.log("Enter username")
    }
enterPassword():void{
    console.log("Enterpassword")
}
clickLogin():void{
console.log('login')
}
}
export class productpage extends Basepage implements Pagerules{
    verifyPage(){
        console.log('Product Page Verified')
    }
    searchProduct():void{
        console.log("search product")
    }
    addToCart():void{
        console.log("product is added to cart")
    }
}

let lp = new Loginpage()
lp.enterUsername()
lp.clickLogin()
lp.enterPassword()
lp.verifyPage()
lp.getPageTitle()
let Pp = new productpage()
Pp.verifyPage()
Pp.addToCart()