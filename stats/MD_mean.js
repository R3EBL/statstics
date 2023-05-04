const PromptSync = require("prompt-sync");
const prompt = PromptSync();
const midpoint = [];
const frequency = [];
let fmd = [];

let finto = 1;



let arrSub = 0;

let new_arr = [];

for (;;){
    let inp = prompt("Enter Midpoint -->  ");
    if (inp != ""){
        midpoint.push(inp);
    }else{
        break;
    }
}
for (;;){
    let val = prompt("Enter Frequency -->  ");
    if (val != ""){
        frequency.push(val);
    }else{
        break;
    }
}

const midean = prompt("Enter Midean -->  ");


for (let i = 0;i<midpoint.length;i++){
    arrSub = midpoint[i]- midean;
    new_arr.push(arrSub);

};


for (let  i = 0 ;i<new_arr.length;i++){
    if (new_arr[i]<0){
        new_arr[i] = new_arr[i]* -1;
    }
};



const multipliedArr = [];
for (let i = 0; i < new_arr.length; i++) {
  multipliedArr.push(new_arr[i] * frequency[i]);
}

console.log(new_arr);
console.log(multipliedArr);

