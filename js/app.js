// generate pin and match

function generatepin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        console.log(pin);
    }
    else{
       generatepin();
    }    
}