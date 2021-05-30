// DOM -  document object model//
/*
console.log(window); - widnow objekat je roditeljski objekat browsera
// jedan element
console.log(document.getElementById('my-form')) - getElementById izabira elemente pojedinacno
console.log(document.querySelector('.btn'));  - i querySelector bira pojedinacne elemente; ako ima vise elemenata sa istim nazivom, izabrace prvog

// vise elemenata
console.log(document.querySelectorAll('.item')); querySelectorAll bira sve elemente koje izaberemo; stavlja ih u NodeList koja je slicna nizu

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item)); ovako cemo loopati kroz odabrane elemente


//manipulisanje - mijenjanje DOMa 
const ul=document.querySelector('.items');

ul.remove();  - remove uklanja izabrani element skroz
ul.lastElementChild.remove();  - uklanja zadnjeg clana ili 'dijete' iz izabranog elemnta
ul.firstElementChild.textContent='Hello';  izabire prvog clana i mijenja tekst u ono sta zelimo
ul.children[1].innerText = 'Mujo';  - uzima bilo kojeg clana kojeg zelimo i mijenja mu tekst
ul.lastElementChild.innerHTML = '<h1>Haso</h1>'; -uzima zadnjeg clana i pretvara mu text u html stil


const btn = document.querySelector('.btn');
	btn.style.background = 'blue';  ovako mozemo mijenjati neke elemente kao u CSS-u; iako je u CSS-u lakse sa jednostavnim stvarimo kao npr boja elemnta, u JSu cemo to mijenjati zbog dinamicnosti i funckija

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {  addEventListener pridruzuje obradjivac nekog dogadjaja nekom elementu bez overwriting nekog drugog obradivaca dogadjaja (kao klik dugmeta)
e.preventDefault();  'e' oznavaca event(dogadjaj) objekt
console.log(e.target)  target nam daje tacan element na kojem se eent nalazi
})

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {  postoji mnogo stvari i funkcija koje su event npr 'mouseover' ce uraditi sve zadano ispod kada predjemo kursorom preko dugmeta itd.
e.preventDefault();
console.log(e.target) 
document.querySelector('#my-form')
.style.background = '#ccc';
document.querySelector('body').classList.add('bg-dark');  zapravo mogu dodati svaki element koji zelim ovdje i mijenjati mu svojstva ako postoji u CSSu i HTMLu ( i ako ne postoji kreiramo ga ovdje)
document.querySelector('.items').lastElementChild.innerHTML='<h1>Zdravo</h1>'
})
*/