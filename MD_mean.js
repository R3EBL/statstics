

// MADE MY SAGYAN REGMI TO AUTOMATE STATSTISTICS HOMEWORK
// its works!!!

const midpoint = [5,15,25,35,45,55,65,75,85];
const frequency = [10,15,15,5,25,15,15,10,10];

let fmd = [];

let finto = 1;

const midean = 46;

let arrSub = 0;

let new_arr = [];


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