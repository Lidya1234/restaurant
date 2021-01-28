import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import navbar  from './nav.js'
import header from './header.js'
import speciallist from './speciallist.js'
import specialscard from './specials.js'
import footer from './footer.js'

document.body.prepend(navbar());

const content = document.querySelector('#content');
content.appendChild(header());
const parent =document.createElement('div');
// const header1 = document.createElement('h1');
// header1.textContent="hello";
// parent.appendChild(header1);
content.appendChild(parent);


document.querySelector('body').appendChild(footer());
const special = speciallist();

parent.appendChild(specialscard(special));
