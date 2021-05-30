/*
const myForm = document.querySelector('#my-form');
const  ime= document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSumbit);

function onSumbit(e) {
	e.preventDefault();

	if(ime.value==='' || email.value === '') {
		msg.classList.add('error') ovo i naredba ispod ce nam izbaciti error i poruku sta streba korisnik da radi/ne radi 
		msg.innerHTML='Molimo popunite polja';

		setTimeout(()=> msg.remove(), 3000)  setTimeout ce uzeti funkciju i dodace/uklnit ce nesto nakon vremena koje mu mi odredimo
	} else {
		const li = document.createElement('li'); elemente mozemo stvarati kad i kako zelimo i stavlajti ih u DOM
		li.appendChild(document.createTextNode(`${ime.value}: ${email.value}`))

		userList.appendChild(li);	

		ciscenje polja
		ime.value='';
		email.value='';
	}
	kada reloadamo page svi ovi useri ce nestati jer nisu sejvani nigdje; trebamo napisati backend kod koji ce ih sejvati
	console.log(ime.value) // samo 'ime' ce nam dati element ali nama treba vrijednost koju dobijamo dodavanjem 'value'
}

*/