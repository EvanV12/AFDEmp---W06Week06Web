/**
 * 
 */

// script 1
var name='John';
var age=28;
var greeting='Hello, my name is '+name+' and I am '+age+' years old.';

console.log(greeting);

// script 2
//output 5 times: My name is Mad Dog.
var name='Mad Dog';

for(var i=0;i<110;i++) {
	console.log('My name is '+name+'.');
}


// script 3
console.log(x === undefined); //true
var x = 3;

// OR

var x;
console.log(x === undefined); //true
x = 3;



function greetingV12(){
	
var hourOfDay;
var greeting;

if (hourOfDay >= 4 && hourOfDay < 12) {
	greeting = "Good Morning";
}

else if (hourOfDay >= 12 && hourOfDay < 18) {
	greeting = "Good Afternoon";
}

else {
	greeting = "Good Evening";
}

alert: alert("Time of Day is " + hourOfDay + " so " + greeting);

confirm: var r = confirm("question");

prompt: var srt = prompt("Enter text here", "default text");

}



function hourOfDayDefault(){
	
alert: alert("message");

confirm: var r = confirm("question");

prompt: var srt = prompt("message", "default text");

}



function greetingKourmpanis(){
	
alert: alert("message");

confirm: var r = confirm("question");
 
prompt: var hourOfDay = prompt("Give the Hour of the Day", "default placeholder")


var greeting;

if (hourOfDay>4 && hourOfDay<12) {
    greeting="Good Morning!";
}

else if (hourOfDay>12 && hourOfDay<18) {
    greeting="Good Afternoon!";
}

else {
    greeting="Good Evening!";
}
 
alert:alert (greeting);
console.log(greeting);

}


function selectFruit(){
	
	var fruit;
	var price;

	prompt: var fruit = prompt("Enter fruit", "Write text here")

	switch(fruit) {
	case "Bananas":
	    price = "0.99";
	    break;
	case "Oranges":
		price = "079";
	    break;
	case "Apples":
		price = "0,89";
		break;
	case "Cherries":
		price = "2,99";
		break;
	case "Grapes":
		price = "3,99";
		break;
	default:
		price = "100";
	}

	alert:alert ("Price is " + price);
	console.log(greeting);

}


function myCar(brand, model, year) {
	this.brand = brand;
	this.model = model;
	this.year = year;
	
	//alert: alert (brand + model + year);
	

	var myCar1 = {brand: "Fiat", model: "Punto", year: "2007"}
	
	//alert: alert (myCar1.brand + mycar1.model + myCar1.year);
	
	var myCar2 = {brand: "Toyota", model: "Corolla", year: "1998"}
	
	//var myCar3 = new myCar ("Ford", "Monteo", 2008);
	
	//alert: alert (myCar1.brand + myCar1.model + myCar1.year);
	
	
	var txt = "";
	var car = {brand: "Alfa Romeo", model: "Cool", year: "2000"};
	for (var x in car) {
		txt += car[x] + " ";
	}
	alert (car);
	console.log(car);
}




function listAllProperties(o){
	var object1;
	var result = [];
	
	for (object1 = o; object1 !== null; object1 = Object.getPrototypeOf(object1)){
		result = result.concat(Object.getOwnPropertyNames(object1));
	}
	
	return result;
	//console.log(result);
}


function boolean(){
	var n;
	var isZero;
	
	prompt: var n = prompt("Enter number", "Write text here")

	if (n==0){
		isZero = true;
	}
	if (n!=0){
		isZero = false;
	}
	
	alert ("Number is " + isZero);
}


function polynomial(){
	
	var a;
	var b;
	var c;
	
	prompt: var a = prompt("Enter number a", "Write text here");
	prompt: var b = prompt("Enter number b", "Write text here");
	prompt: var c = prompt("Enter number c", "Write text here");
	
	alert ("Result is " + ((b*b) - (4*a*c)));
	
}



function guesstheInteger(){
	
	var rand = Math.floor((Math.random() * 100)+1);
	var count = 0;
	prompt: var guess = prompt("Guess the number! (1 - 100)");
	 
	do {
	    if (guess>rand) {
	        count++;
	        guess = prompt("Try lower!")
	    }else if (guess<rand) {
	        count++;
	        guess = prompt("Try higher!")
	    }
	    
	}while(rand!=guess);
	count++;
	alert("Congratulations you found it after " + count + " tries!");
	if (count>6) {
	    alert("You could do better!!!!!")
	}
}

function hiddenDiv(){

	    var x = document.getElementById("myDIV");
	    if (x.style.display === "none") {
	        x.style.display = "block";
	    } else {
	        x.style.display = "none";
	    }
}

function hiddenDiv2(){

    var x = document.getElementById("myDIV");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }

}


function image() {
	
	    var x = document.createElement("IMG");
	    x.setAttribute("src", "background.gif");
	    x.setAttribute("width", "304");
	    x.setAttribute("height", "228");
	    document.body.appendChild(x);
}










