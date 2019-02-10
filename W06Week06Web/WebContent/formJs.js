/**
 * 
 */

/*console.log(x === undefined); //true
var x = 3;

// OR

var x;
console.log(x === undefined); //true
x = 3;*/


function test() {
	window.alert("Are you sure?");
}

function validate() {
	/*Η συγκεκριμένη συνάρτηση θα καλείται όταν ο χρήστης πατήσει το κουμπί
	αποστολής της φόρμας και θα ελέγχει τα πεδία Επώνυμο, Όνομα και Email ώστε να εξακριβώσει
	πως αυτά περιέχουν τιμές και δεν είναι κενά. Αν έστω ένα από αυτά τα πεδία είναι κενό, θα
	προβάλλεται μήνυμα λάθους στο χρήστη και η φόρμα δεν θα αποστέλλεται.*/
	 	
	var x = document.getElementById("primaryFields");
	
		if (x.value = "") {
			window.alert("Primary fields cannot be empty");
			/*return false;*/
		}
}

function updateForm(){
	/*Η συνάρτηση αυτή θα εκτελείται κάθε φορά που η τιμή των radio buttons της
	ερώτησης 1 αλλάζει από τον χρήστη και στην περίπτωση που ή απάντηση είναι «Nαι» θα
	ενεργοποιεί τις ερωτήσεις 2,3 και 4, ενώ στην περίπτωση που είναι «Όχι» θα τις απενεργοποιεί.*/
	
	var but1 = document.getElementById("radioButtons1");
	var but2 = document.getElementByName("q2");
	//var testDiv = document.getElementById("testDiv");
	
	if (but1.value = "no") {
		but2.disabled = true;
	}
		else {
			but2.disabled = false;
		}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
