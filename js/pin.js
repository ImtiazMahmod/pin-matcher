///generate pin
function generatepin(){
    const pinDisplay = document.getElementById('pin-display');
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length==4){
        pinDisplay.value = pin;
    }
    
}
const pinConfirm = document.getElementById('pin-confirm');
///pin match function
function matchPin(){
    const pin = document.getElementById('pin-display');
    const success = document.getElementById('success');
    const error = document.getElementById('error');
        if(pinConfirm.value == pin.value){          
            success.style.display = 'block';
            error.style.display = 'none';
        }
        else{
            error.style.display = 'block';
            success.style.display = 'none';
        }
}
///pin confirmation

document.getElementById('calc').addEventListener('click',e=>{
    const number = e.target.textContent;
    if(isNaN(number)){
        if(number=='C'){
            pinConfirm.value = '';
        }
        else if(number== '<'){
            // pinConfirm.value = pinConfirm.value/10 | 0;
            //remove last digit 
            pinConfirm.value = pinConfirm.value.slice(0,-1);
         
        }
        
    }
    else{
        const previousNumber = pinConfirm.value;
    const newNumber = previousNumber + number;
    pinConfirm.value = newNumber;
    }
}
);

document.getElementById('submit').addEventListener('click',function(){
    matchPin();
})