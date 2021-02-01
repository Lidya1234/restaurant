const navbar = () => {
  const nav = document.createElement('nav');
  const header = document.createElement('div');
  const navul = document.createElement('ul');
  const navli1 = document.createElement('li');
  const navli2 = document.createElement('li');
  const navli3 = document.createElement('li');
  const navli4 = document.createElement('li');
  const nava1 = document.createElement('a');
  const nava2 = document.createElement('a');
  const nava3 = document.createElement('a');

  nav.classList.add('navbar');
  nav.classList.add('navbar-light');
  nav.classList.add('bg-dark');
  header.classList.add('container-fluid');
  navul.classList.add('nav');

  navul.classList.add('navbar-right');
  navli1.classList.add('nav-item');
  navli2.classList.add('nav-item');
  navli3.classList.add('nav-item');
  navli4.classList.add('nav-item');
  nava1.classList.add('nav-link', 'active');
  nava2.classList.add('nav-link');
  nava3.classList.add('nav-link');

  // textcontent
  nava1.textContent = 'HOME';
  nava2.textContent = 'MENU';
  nava3.textContent = 'CONTACT';

  // nav ids
  nava1.id = 'home';
  nava2.id = 'menu';
  nava3.id = 'contact';

  // appendchild
  nav.appendChild(header);
  header.appendChild(navul);
  navul.appendChild(navli1);
  navul.appendChild(navli2);
  navul.appendChild(navli3);

  navli1.appendChild(nava1);
  navli2.appendChild(nava2);
  navli3.appendChild(nava3);


  return nav;
};
export default navbar;