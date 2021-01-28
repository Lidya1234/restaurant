const menu = () =>
{
    const specials = document.createElement('div');
    const heading = document.createElement('h1');
    const cards = document.createElement('div');
    const monday = document.createElement('div');
    const monspec = document.createElement('img');
    monspec.src="";
    const thursday = document.createElement('div');
    const thuspec = document.createElement('img');
    thuspec.src="";
    const saturday = document.createElement('div');
    const satspec = document.createElement('img');
    satspec.src="";
    heading.classList.add("specheading");
    heading.textContent= "Our Specials";
    cards.classList.add("card-columns");
    monday.classList.add("card");
    thursday.classList.add("card");
    saturday.classList.add("card");
    specials.appendChild(cards);
    cards.appendChild(monday);
    cards.appendChild(thursday);
    cards.appendChild(saturday);
    monday.appendChild(monspec);
    monday.appendChild(mondesc)
    thursday.appendChild(thuspec);
    thursday.appendChild(thudesc);
    saturday.appendChild(satspec);
    saturday.appendChild(satdesc);


    return specials;
}
export default menu;