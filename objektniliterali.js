// OBJEKTNI LITERALI - u osnovu parovi kljucnih vrijednosti //
/*
const osoba = {  - sa {} oznacavamo objekte
	ime: 'Niko',
	prezime: 'Nikic',
	godine: 20,
	hobiji: ['fudbal', 'historija', 'mačevanje'],
	informacije: {
		adresa: 'Trg Alije',
		obrazovanje: 'Prva Gimnazija',
	}
}

cosnole.log(osoba.ime); - ovako dobijamo jednu vrijednost
console.log(osoba.hobiji[2]);  - ovako izvlacimo vrijednost iz niza
console.log(osoba.informacije.adresa);	- ovako dobijamo ugnježdeni objekat

// destruktiranje 

const {ime, prezime, informacije: {adresa} } = osoba;  - ovo nije dodjeljivanje vrijednosti nego samo ivlacnje neke varijable iz objekta (DESTRUKTIRANJE)
console.log(ime, prezime, adresa);

osoba.email = 'niko@gmail.com';  - ovako dodajemo sama svojstva
console.log(osoba);

const uraditi = [
	{
		id : 3,
		text : 'izbaci smece'.
		isCompleted	: true,
	},
	{
		id : 4,
		text : 'trening',
		isCompleted : true,
	},
	{
		id : 5,
		text : 'zdaca',
		isCompleted : false,
	}

];

console.log(uraditi[1].text);  - ovako izabiremo oređenu vrijednost iz objekta iz niza; prvo izaberemo vrijednost koju želimo preko [] a zatim .vrijednost
 

 JSON se koristi u full stack development, kada se šalju podaci nekom serveru itd.

const uraditiJSON = JSON.stringify(uraditi);  ovako convertamo neki kod u JSON 
console.log(uraditiJSON)
*/