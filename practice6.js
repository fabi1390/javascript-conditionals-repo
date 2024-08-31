let age = 63;
let price =800;
let isStudent = false;
if (age < 10){
     console.log('Free')
}else if( isStudent===true){
    let discount = price * 50 / 100;
    let  payAmount = price - discount;
    console.log("you have got 50% discount = "+payAmount)
}else if(age >= 60){
    let discount = price * 15 /100;
    let payAmount =price -discount;
    console.log("you have got 15% discount = "+payAmount)
}else{
    console.log("Buy ticket with regular price "+ price)
}