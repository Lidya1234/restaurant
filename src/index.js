import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import navbar  from './nav.js'
import header from './header.js'
import speciallist from './speciallist.js'
import specialscard from './home.js'
import menulist from './menulist.js'
import menu from './menu.js'
import contactlist from './contactlist'
import contact from './contact'
import footer from './footer.js'
import clear from './clear.js';

document.body.prepend(navbar());
document.body.prepend(header());
document.querySelector('body').appendChild(footer());

const content = document.querySelector('#content');






 const homebtn=document.getElementById('home');
 const menubtn=document.getElementById('menu');
 const contactbtn=document.getElementById('contact');
 const special = speciallist();
 const menu1 =menulist();
 const contacts =contactlist();
 content.appendChild(specialscard(special));


 homebtn.onclick = () =>
 {  clear();
  content.appendChild(specialscard(special));
 }

 menubtn.onclick = () =>
 {  clear();
   
    content.appendChild(menu(menu1));
 }

contactbtn.onclick = () =>
{
    clear();

content.appendChild(contact(contacts));
}

