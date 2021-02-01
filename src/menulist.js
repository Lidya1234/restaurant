const menulist = () => {
  const menus = [];
  function Menu(image, name, price) {
    this.image = image;
    this.name = name;
    this.price = price;
  }
  const menu1 = new Menu('images/food1.jpg', 'Fried chicken', '$5');
  const menu2 = new Menu('images/food2.jpg', 'Roasted fish', '$10');

  const menu4 = new Menu('images/food4.jpg', 'Zigni', '$9');
  const menu5 = new Menu('images/food5.jpg', 'Rollex', '$3');
  const menu6 = new Menu('images/food6.jpg', 'Salad', '$2');

  function addmenu(c) {
    menus.push(c);
  }
  addmenu(menu1);
  addmenu(menu2);

  addmenu(menu4);
  addmenu(menu5);
  addmenu(menu6);

  return menus;
};
export default menulist;