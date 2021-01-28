const speciallist =() =>
{
    const specials=[];
    function Special(image,description,title,price)
    {
     this.image=image;
     this.title= title;
     this.description= description;
     this.price = price;
    }

    const special1= new Special('./images/special1', "My family special","tomato,mashroom","$12");
    const special2= new Special('./images/special2',"My family special1","cheese,beef",'$25');
    const special3= new Special('./images/special3',"My family special3","Tuna,eggs",'$30');

    function addSpecial (spec)
    {
    specials.push(spec);
    }

addSpecial(special1);
addSpecial(special2);
addSpecial(special3);

return specials;
}
export default speciallist;