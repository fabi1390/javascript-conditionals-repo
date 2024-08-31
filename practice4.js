const myResult = 89;
const friendResult = 40;
if( myResult > 80){
    if(friendResult > 80){
        console.log('Go for a lunch')
    }
    else if (friendResult >= 60){
        console.log('Good luck next time')
    }else if(friendResult >=40){
        console.log('Message Unseen')
    }else{
        console.log('BLOCKED')
    }

}else{
    console.log('go to home and act sad')
}