import './styles/global.scss';
import App from './app.js';

// Adding App to the body

const container = document.getElementById('app');
const HTMLString = App();
const html = document.implementation.createHTMLDocument();
html.body.innerHTML = HTMLString;
container.append(html.body.children[0]);

// Adding interactivity to our page

//***  Showing Header Modal  ***//

const $header__button = document.getElementById('header__button');  // Button to show
const $modal__button = document.querySelector('.modal__button--hide'); // Button to hide

const $modal__header = document.querySelector('.modal__nav'); // Modal to Show/Hide

$header__button.addEventListener('click', showModal); // Listener to Show Modal
$modal__button.addEventListener('click', hideModal); // Listener to Hide Modal

function showModal() {
    $modal__header.classList.add('fadeIn');
    $header__button.removeEventListener('click', showModal);
}

function hideModal() { 
    $header__button.addEventListener('click', showModal);     
    $modal__header.classList.add('fadeOut');
    setTimeout(() => {
        $modal__header.className = 'modal__nav';
    }, 1001 );
}

//***  Showing "Back this project" Modal  ***//

const $mastercraft__show = document.getElementById('mastercraft__button'); // Button Mastercraft

const $modal__mastercraft = document.querySelector('.modal-back__container'); // Modal Mastercraft
const $mastercraft__hide = document.querySelector('.modalBack__button--hide');

$mastercraft__show.addEventListener('click', showModalBack);
$mastercraft__hide.addEventListener('click', hideModalBack);

function showModalBack() {
    $modal__mastercraft.classList.add('show');
}

function hideModalBack() {     
    $modal__mastercraft.classList.add('hide');
    setTimeout(() => {
        $modal__mastercraft.className = 'modal-back__container';
    }, 1 );
}

//**  Interaction on the modal Back  **//

//-----  Getting checkboxes  -----//
const $inputOne = document.getElementById('0');   
const $inputTwo = document.getElementById('1');
const $inputThree = document.getElementById('2');
const $inputFour = document.getElementById('3');

//-----  Adding listeners to the checkboxes  -----//
$inputOne.removeEventListener('change', showDiploy);
$inputTwo.addEventListener('change', showDiploy);
$inputThree.addEventListener('change', showDiploy);
$inputFour.removeEventListener('change', showDiploy);

//----- Getting elements to add interactivity  -----//
const $article = document.querySelectorAll('.articleBack__container');
const $diploy = document.querySelectorAll('.diploy-content');

//-----  Detail of Media Query on the Modal Back  -----//
let width = self.innerWidth;
let valueOfDisplay;

if(width <= 600) {
    valueOfDisplay = 'block';
} else {
    valueOfDisplay = 'flex';
}

//----- Function that get to the elements interactivity  -----//
function showDiploy(ev) {
    let id = parseInt(ev.target.id);    
    if(ev.target.checked === true) {
        $article[id].classList.add('border');
        $diploy[id].setAttribute('style', `display: ${ valueOfDisplay } `);
    }
    if(ev.target.checked === false) {
        $article[id].classList.remove('border');
        $diploy[id].setAttribute('style','display: none');
    }
}

//----- Marking the button  -----//
const $bookmark = document.getElementById('bookmark__button'); // Button bookmark
const $span = document.querySelector('span');
const $image = document.getElementById('img');
console.log($span, $image)
$bookmark.addEventListener('click', validMark);

function validMark(ev) {    
    if($span.textContent === 'Bookmarked'){
        $span.textContent = 'Bookmark';
        $bookmark.setAttribute('style', 'border: none');
        $span.setAttribute('style', 'color: black');
    } else {
        $span.textContent = 'Bookmarked'
        $bookmark.setAttribute('style', 'border: 2px solid hsl(176, 72%, 28%)');
        $span.setAttribute('style', 'color:hsl(176, 72%, 28%)');
    }    
}