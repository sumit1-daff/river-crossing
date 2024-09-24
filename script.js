const element = document.querySelectorAll(".element");

const ele = document.getElementsByClassName("zombie");
element.forEach(eachElement =>{
    eachElement.onclick = (event) =>{
        event.preventDefault();
        eachElement.style.visibility = 'hidden';
        addBoat(eachElement);
    }
});
function addBoat(element){
   const space = document.querySelector(".contain-element");
   const el = element.cloneNode(true);
   space.appendChild(el);
   el.style.visibility = "visible";
    
}
