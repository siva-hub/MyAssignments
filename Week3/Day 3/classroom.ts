type Paymentmethod = "UPI" | "Credit Card" | "Pay pal"

function payment(payementcheck: Paymentmethod) {
    console.log('method is chosen as', payementcheck)
}

payment('UPI')
payment('Credit Card')