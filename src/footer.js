const footer = () =>
{   
    const footerdiv= document.createElement('div');
    const copyright = document.createElement('p');
    footerdiv.classList.add("footer");
    
    copyright.textContent = "Copy right  reserved @2021"
    
    footerdiv.appendChild(copyright);

    return footerdiv;

};
export default footer;