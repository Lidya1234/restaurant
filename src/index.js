import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import navbar from './nav';
import header from './header';
import speciallist from './speciallist';
import specialscard from './home';
import menulist from './menulist';
import menu from './menu';
import contactlist from './contactlist';
import contact from './contact';
import footer from './footer';
import clear from './clear';

document.body.prepend(navbar());
document.body.prepend(header());
document.querySelector('body').appendChild(footer());

const content = document.querySelector('#content');


const homebtn = document.getElementById('home');
const menubtn = document.getElementById('menu');
const contactbtn = document.getElementById('contact');
const special = speciallist();
const menu1 = menulist();
const contacts = contactlist();
content.appendChild(specialscard(special));


homebtn.onclick = () => {
  clear();
  content.appendChild(specialscard(special));
};

menubtn.onclick = () => {
  clear();

  content.appendChild(menu(menu1));
};

contactbtn.onclick = () => {
  clear();

  content.appendChild(contact(contacts));
};
