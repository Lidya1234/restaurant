const contactlist = () => {
  const contactarr = [];
  function Contact(place, address1, address2, phoneno) {
    this.place = place;
    this.address1 = address1;
    this.address2 = address2;
    this.phoneno = phoneno;
  }
  const contact1 = new Contact('King', '545,kingst', 'Toronto, on MSV IMI', '(416)312 - 4241)');
  const contact2 = new Contact('Danworth', '545,kingst', 'Toronto, on MSV IMI', '(416)312 - 4241)');
  const contact3 = new Contact('Ossington', '545,kingst', 'Toronto, on MSV IMI', '(416)312 - 4241)');
  const contact4 = new Contact('Junction', '545,kingst', 'Toronto, on MSV IMI', '(416)312 - 4241)');
  const contact5 = new Contact('University', '545,kingst', 'Toronto, on MSV IMI', '(416)312 - 4241)');

  function addContact(c) {
    contactarr.push(c);
  }

  addContact(contact1);
  addContact(contact2);
  addContact(contact3);
  addContact(contact4);
  addContact(contact5);

  return contactarr;
};
export default contactlist;