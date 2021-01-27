const footer = () =>
{   let content =document.querySelector('#content');
    const footerdiv= document.createElement('div');
    const copyright = document.createElement('p');
    footerdiv.classList.add("footer");
    copyright.textContent = "Copy right  reserved @2021"
    content.appendChild(footerdiv);
    footerdiv.appendChild(copyright);

    return content;

};
export default footer;