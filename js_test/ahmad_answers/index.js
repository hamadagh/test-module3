//1

let cityList = "Newyork"

if(cityList.includes("New")){
    console.log(cityList)
}else if(cityList.includes("los")){
    console.log(cityList)
}else{
    console.log(`The city name does not begin with Los or New`)
}

//2

let Num = [8, 15, 25];

console.log(Num[0] + Num[1] + Num[2]);

//3

let firstName = "Ahmed";
let lastName = "Ghanem";

console.log(`${lastName} ${firstName}`);

// 4
let int = 1000;
if(int % 100 == 0){
    console.log(true);
}else{
    console.log(false);
}


// 5

let array = ["one", "two", "three", "four"];

for(let i=0; i < array.length; i++){
    console.log(array[i]=array[i] + "z");
}

// 6

let number = 8;

if(number % 2 == 0){
    console.log(`${number} is even`)
}else {
    console.log(`${number} is odd`)
}

// 7




//8

let newName = "john james smith";

newName = newName.toLowerCase();
newName = newName.split(" ");
for (var i = 0; i < newName.length; i++) {
 console.log(newName[i] = newName[i].charAt(0).toUpperCase() + newName[i].slice(1)); 
  
}






//9

let str = "i dont know what to write";
console.log(str.split(" ").length);

//10

let lastArray = [5, 10, 15];
for(let i = 0 ; i < lastArray.length; i++) {
   console.log(lastArray[i] *= lastArray.length);
}
