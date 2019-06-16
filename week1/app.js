//strings

let myString = "hello,this,is,a,difficult,to,read,sentence";
myString; //1.1

console.log(myString.length); //1.2karakter sayısını verir
myString;

let modifiedStr = myString.split(",").join("  "); //1.3istenilern karakteri silip yerine yeni bir karakter atanır.
console.log(modifiedStr); //1.4

// arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle"); //2.1 turtle adında dizinin sonuna  obje ekler
favoriteAnimals; //2.2
favoriteAnimals.unshift("teerkat"); // teerkat adınca dizinin başına obje ekler
favoriteAnimals;
console.log(`dizinin uzunlugu: ${favoriteAnimals.length}`);
favoriteAnimals.splice(3, 1); // hangi karakterden başlayıp hangisine kdar silecegimizi yapar.
favoriteAnimals;
function removeItem(item, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
    }
  }
}
removeItem("teerkat", favoriteAnimals); // bir fonksiyon olusturup
favoriteAnimals;

function findIndex(item, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      console.log(`objenin degeri: ${i}`);
    }
  }
}
findIndex("turtle", favoriteAnimals);
let deneme = "hi,mehmet,is,a,bjk,sakarya,25,42";
console.log(deneme.length);
let update = deneme.split(",").join(" ");
console.log(modifiedStr);

let denemee = "mystirnd,merhaba, adem, mehmet,talip,emre,45,54";
console.log(denemee.length);
let update1 = denemee.split(",").join(" + ");
console.log(update1);
let animals = ["cat", "dog", "leon", "pars"];
animals;
animals.push("fox");
animals;
animals.unshift("fox2");
animals;
console.log(`Baktiginiz hayvan su indexte bulunuyor: ${animals.length}`);




//------MORE JAVASCRİPT---------
//--1--
const rent = require('rent');
function sum(a, b, c) {
  return a + b + c;
}
sum;

function merhaba(a, b) {
  if (typeof a === "undefined") a = "bilgi giriniz";
  if (typeof b === "undefined") b = "lütfen sayı giriniz";
  console.log(`isim: ${a}  yaş: ${b}`);
}
merhaba("mehmet", 43);
merhaba();
merhaba();

function sguare(x) {
  return x*x;
}
function cube(x) {
  return x*x*x ;
}
let a = sguare(12);
a = cube(a);
console.log(a);

function num(a) {
  return a * a + 12;
}
let a = num(12);
a;

function ber(a, b, c) {
  return a + b + c;
}
let d = ber(9, 8, 5);
d;
console.log(d);
//------ 2---- ;
function colorCAr(color) {
  console.log(`a ${(color = "black")} car `);
}
let f = colorCAr();

//--------3-----------
let object1 = { a: 'somestring',  b: 42,  c: false};
console.log(Object.keys(object1));
console.log(Object.values(object1));

//------4------------

function vehiclType(color,code) {
  if( code === 1){
   console.log (`a ${color} motosiklet `) ;
  } else{
    console.log(`a  ${color} araba`);
  }
}
vehiclType("black",2);

let test2 = function(color, code) {
 if (code === 1) {
   console.log("a ", color, " motosiklet");
 } else {
   console.log("a ", color, "araba");
 }
};
test2("yellow", 2);

// -5-
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}
//--5--
console.log(3 === 3 ? "yes" : "no");

function vehiclType(color,code,) {
  if( code === 1){
   console.log (`a ${color} motosiklet `) ;
  } else{
    console.log(`a  ${color} araba`);
  }
}
vehiclType("black",2)

function type(color,code,age) {
  if (age === 0){
    console.log(`new`);
  }else  ( code === 1){
    console.log (`a ${color} motosiklet `) ;
   } else{
     console.log(`a  ${color} araba`);
   }
}

//----6-----
function vehicle(color, code, age) {
  if (code === 1 && age === 0) {
    console.log("a ", color, " new motorbike");
  } else if (code === 1 && age !== 0) {
    console.log("a ", color, " used motorbike");
  } else if (code === 2 && age === 0) {
    console.log("a ", color, " new car");
  } else {
    console.log("a ", color, " used car ");
  }
}
vehicle("black", 1, 2);

function vehic(color, code, age) {}

function vehic(color, code, age) {
  let status = "";
  age === 0 ? (status = "new") : (status = "used");
  if (code === 1) console.log(`a ${status}, ${color} car`);
  else if (code === 2) console.log(`a ${status} ${color} motorbike`);
}
 vehic("red", 2, 1);

//--7---
 var abd = ["motorbike", "caravan", "bike"];
// //--8--
 console.log(abd[2]);

// //---9---
function vehicle(color, age, motorbike, caravan, bike) {
  let status = "";
  age === 0 ? (status = "new") : (status = "used");
  if (motorbike === 1) console.log(`a ${status} ${color} motorbike`);
  else if (caravan === 2) console.log(`a ${status} ${color} caravan`);
  else if (bike === 3) console.log(`a ${status} ${color} bike`);
  console.log("yanlış sayı girdiniz");
}
vehicle("green", 1, 11, 12, 31);

//--10--
function vehicle(color, age, motorbike, caravan, bike) {
  let status = "";
  age === 0 ? (status = "new") : (status = "used");
  if (motorbike === 1) console.log(`a ${status} ${color} motorbike`);
  else if (caravan === 2) console.log(`a ${status} ${color} caravan`);
  else if (bike === 3) console.log(`a ${status} ${color} bike`);
  console.log(`Amazing Joe's Garage, we service cars ${motorbike} ${caravan}  and ${bikes}.`);
}

 vehicle("red", 0, 2,2)
//---12--- ve --13---
let obj = "";
let obj = "talip, adem, mehmet";

