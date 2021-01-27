const  navbar = () =>
{   let  content =document.querySelector("#content");
    const header = document.createElement("div");
    const navul =document.createElement("ul");
    const navli1 =document.createElement("li");
    const navli2 =document.createElement("li");
    const navli3 = document.createElement("li");
    const navli4 = document.createElement("li");
    const nava1 = document.createElement("a");
    const nava2 = document.createElement("a");
    const nava3 = document.createElement("a");
    const nava4 = document.createElement("a");
     navul.classList.add("nav-bar");
     navli1.classList.add("nav-item");
     navli2.classList.add("nav-item");
     navli3.classList.add("nav-item");
     navli4.classList.add("nav-item");
     nava1.classList.add("nav-link");
     nava2.classList.add("nav-link");
     nava3.classList.add("nav-link");
     nava4.classList.add("nav-link");
     nava1.textContent = "MENU";
     nava2.textContent= "SPECIAL";
     nava3.textContent= "RESERVATION";
     nava4.textContent= "CONTACT US";
     content.appendChild(header);
     header.appendChild(navul);
     navul.appendChild(navli1);
     navul.appendChild(navli2);
     navul.appendChild(navli3);
     navul.appendChild(navli4);
     navli1.appendChild(nava1);
     navli2.appendChild(nava2);
     navli3.appendChild(nava3);
     navli4.appendChild(nava4);
    

return content;

};
export default navbar;