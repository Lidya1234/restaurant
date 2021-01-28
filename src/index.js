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

document.querySelector('body').appendChild(footer());
let special = speciallist();

content.appendChild(specialscard(special));