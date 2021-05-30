// FUNKCIJE //
/*
function addNums(num1,num2) {  funckija dodavanja brojeva
	console.log(num1+num2);  mozemo konzoli raditi obicne matematicke operacije
}

addNums(5,4);  ovjde dodajemo perimetar

function addNums(num1=1,num2=1) {  
	return num1+num2; 
}
console.log(addNums(3,3))


// OOP //

function Osoba(ime,prezime, dr) {  ovo je konstruktor funkcija
	this.ime = ime;
	this.prezime = prezime;
	this.dr = new Date(dr);
	this.getBirthYear = function () {
		return this.dr.getFullYear();
	}
	this.getFullName = function () {
		return `${this.ime} ${this.prezime}`;
	}
}

Osoba.prototype.getBirthYear = function() {
	return this.dr.getFullYear();
};

Osoba.prototype.getFullName = function() {
	return `${this.ime} ${this.prezime}`
};


const osoba1 = new Osoba ('Niko', 'Nikic','1-2-2003');  ovdje 'kreiramu' nove osobe; mozemo ih kreirati koliko zelimo

console.log(osoba1.getBirthYear());
console.log(osoba1.getFullName());
console.log(osoba1)


// CLASS //

class Osoba {   metoda je funkcija unutar classa
	constructor(ime,prezime,dr) {
		this.ime = ime;
		this.prezime = prezime;
		this.dr = dr;
		this.dr = new Date(dr)
	}
  getBirthYear() {  getBirthYear nam daje godinu rodjenja objekta
    return this.dr.getFullYear();
  }
 
  getFullName() {  getFullName nam daje puno ime objekta
    return `${this.ime} ${this.prezime}`
  }
}    
*/
