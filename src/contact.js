const contact = (arr) =>
{   
    const contactcontainer =document.createElement('div');
    contactcontainer.classList.add('contact');

    const contactus = document.createElement('div');
    const heading = document.createElement('h1');
    contactus.classList.add('contactus')
    heading.classList.add("heading");
    heading.textContent= "Contacts"
    contactus.appendChild(heading);
    contactus.appendChild(contactcontainer);
    for (let i=0; i < arr.length;i+=1 )
    {  let contactarray= arr[i];
        const contact1 = document.createElement('div');
        const place =document.createElement('h6');
        const address1 =document.createElement('p');
        const address2 =document.createElement('p');
        const phoneno =document.createElement('p');
   
      
        contact1.classList.add('contact1');

        //textcontent
        place.textContent=contactarray.place;
        address1.textContent=contactarray.address1;
        address2.textContent=contactarray.address2;
        phoneno.textContent=contactarray.phoneno;

        contactcontainer.appendChild(contact1)
        contact1.appendChild(place);
 
     contact1.appendChild(address1);
     
     contact1.appendChild(address2);
     
     contact1.appendChild(phoneno);

      
    }
    
    return contactus;

}
export default contact;