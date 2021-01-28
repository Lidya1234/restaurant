const specialscard = (special) =>
{
    const specials = document.createElement('div');
    const heading = document.createElement('h1');
    const cards = document.createElement('div');
    heading.classList.add("specheading");
    heading.textContent= "Our Specials";
    cards.classList.add("card-columns");
 
    for(let i=0; i<special.length;i+=1)
    { let specialcard = special[i];
    const card = document.createElement('div');
    const cardimg = document.createElement('img');
    const cardbody = document.createElement('div');
    const cardtitle= document.createElement('h6');
    const carddesc = document.createElement('p');
    const cardprice= document.createElement('p')


    
//add class
   cards.classList.add('card-columns');
   card.classList.add("card");
   cardbody.classList.add("card-body");
   cardbody.classList.add("text-center");
//textContent
   cardimg.setAttribute('src',specialcard.image);
   cardtitle.textContent= "title";
   carddesc.textContent ="description";
   cardprice.textContent = "specialcard.price";


// append children
  specials.appendChild(heading);
   specials.appendChild(cards);
    cards.appendChild(card);
    card.appendChild(cardimg);
    card.appendChild(cardbody)
   
    cardbody.appendChild(cardtitle);
    cardbody.appendChild(carddesc);
    cardbody.appendChild(cardprice);
    }
return specials;
}
export default specialscard;