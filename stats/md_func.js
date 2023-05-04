const PromptSync = require("prompt-sync");
const prompt = PromptSync();

const midpoint = [];
const frequency = [];


midean();
frequency();
f_m_d();
f_into();





function midean(){
    for (;;){
        let inp = prompt("Enter Midpoint -->  ");
        if (inp != ""){
            midpoint.push(inp);
        }else{
            break;
        }
    }
}

function frequency(){
    for (;;){
        let val = prompt("Enter Frequency -->  ");
        if (val != ""){
            frequency.push(val);
        }else{
            break;
        }
    }
    const midean = prompt("Enter Midean -->  ");
}

function f_m_d(){
    for (let i = 0;i<midpoint.length;i++){
        arrSub = midpoint[i]- midean;
        new_arr.push(arrSub);
    
    };
    
    
    for (let  i = 0 ;i<new_arr.length;i++){
        if (new_arr[i]<0){
            new_arr[i] = new_arr[i]* -1;
        }
    };
    return new_arr;
}
function f_into(){
    const my_arr = f_m_d();
    const multipliedArr = [];
    for (let i = 0; i < new_arr.length; i++) {
      multipliedArr.push(new_arr[i] * frequency[i]);
    }

    console.log(new_arr);
    console.log(multipliedArr);
}
