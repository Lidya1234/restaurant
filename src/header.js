const header = () => {
  const container = document.createElement('div');
  const mainImage = document.createElement('img');
  mainImage.src = 'images/restaurant.jpg';
  const block = document.createElement('div');
  const heading = document.createElement('h1');
  const desc = document.createElement('p');
  const orderbtn = document.createElement('button');
  container.classList.add('banner');
  mainImage.classList.add('main-img');
  block.classList.add('block');
  orderbtn.classList.add('btn');
  orderbtn.classList.add('btn-dark');
  heading.textContent = 'FAMILY RESTAURANT';
  desc.textContent = 'Come and visit us,We offer also online delivery';
  orderbtn.textContent = 'ORDER NOW';
  orderbtn.classList.add('order');

  container.appendChild(mainImage);
  container.appendChild(block);
  block.appendChild(heading);
  block.appendChild(desc);
  block.appendChild(orderbtn);
  return container;
};
export default header;