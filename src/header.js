const header = () =>
{  const content =document.querySelector("#content")
   const container = document.createElement("div");
   const mainImage = document.createElement("img")
   mainImage.src ="D:\Microverse projects\javascript\restaurant\images\restaurant.jpg"
   const block =document.createElement("div");
   const heading = document.createElement("h1");
   const desc =document.createElement("p");
   const orderbtn= document.createElement("button")
   container.classList.add("container");
   block.classList.add("block");
   heading.textContent = "MY RESTAURANT";
   desc.textContent = "We offer online delivery"
   orderbtn.textContent = "ORDER";
   orderbtn.classList.add("order");
   content.appendChild(container);
   container.appendChild(mainImage);
   container.appendChild(block);
   block.appendChild(heading);
   block.appendChild(desc);
   block.appendChild(orderbtn);
   return content;

};
export default header;