const elements = document.querySelectorAll(".element");
let cap = 0;
var cross=0;
let human_on_right= 0;
let zombie_on_right = 0;
let human_on_left= 0;
let zombie_on_left = 0;
elements.forEach(eachElement => {
    eachElement.onclick = (event) => {
        if (hasAncestor(eachElement, "bank") && cap < 2) {
            eachElement.remove();
            addBoat(eachElement);
        }
    };
});
function hasAncestor(ele, classname) {
    while (ele) {
        if (ele.classList && ele.classList.contains(classname)) {
            return true;
        }
        ele = ele.parentElement;
    }
    return false;
}
function addBoat(element) {
    const space = document.querySelector(".contain-element");
    const el = element.cloneNode(true);
    space.appendChild(el);
    el.style.visibility = "visible";
    cap++;
    el.onclick = () => {
        removeBoat(el);
    };
}

function removeBoat(element) {
    cap--;
    let space;
    const move = document.querySelector(".move-part");
    element.remove();
    if(move.classList.contains("moved-element")){
        space = document.querySelector(".right-bank");
    }
    else{
        space = document.querySelector(".left-bank");
    }
    const el = element.cloneNode(true);
    space.appendChild(el);
    el.style.visibility = "visible";
    el.onclick = () => {
        if (hasAncestor(el, "bank") && cap < 2) {
            el.remove();
            addBoat(el);
        }
    };
}

const fwd_btn = document.querySelector("#fwd_btn");
const move = document.querySelector(".move-part");
fwd_btn.onclick = (e) =>{
    if(cap>0){
        cross++;
        move.classList.add('moved-element');
        move.classList.remove('original');
        check_right();
    }
    else{
        alert("Atleast one animal should be present in the boat");
    }
}
const bck_btn = document.querySelector("#bck_btn");
bck_btn.onclick = (e) =>{
    if(cap>0){
        cross++;
        move.classList.remove('moved-element');
        move.classList.add('original');
        boat_left = document.querySelector(".original");
        const left_bank = document.querySelector(".left-bank");
        check_left();
    }
    else{
        alert("Atleast one animal should be present in the boat");
    }
}
document.getElementById("crossing").innerHTML = cross;


function checkCondition(humans,zombie){
    if(humans<zombie && humans!=0){
        alert("You lost");
    }
    else return false;
}

const check_right = () =>{
    const boat_right = document.querySelector(".moved-element");
    const right_bank = document.querySelector(".right-bank");
    let human_on_right = right_bank.querySelectorAll(".human");
    human_on_right = human_on_right ? human_on_right.length : 0;
    let zombie_on_right = right_bank.querySelectorAll(".zombie");
    zombie_on_right = zombie_on_right ? zombie_on_right.length : 0;
    let zombie_on_boat = boat_right.querySelectorAll(".zombie");
    zombie_on_boat = zombie_on_boat ? zombie_on_boat.length : 0;
    let human_on_boat = boat_right.querySelectorAll(".human");
    human_on_boat = human_on_boat ? human_on_boat.length : 0;
    console.log(human_on_right+human_on_boat , zombie_on_right+zombie_on_boat)
    checkCondition(human_on_right+human_on_boat , zombie_on_right+zombie_on_boat);
}

const check_left = () =>{
    const boat_left = document.querySelector(".original");
    const left_bank = document.querySelector(".left-bank");
    let human_on_left = left_bank.querySelectorAll(".human");
    human_on_left = human_on_left ? human_on_left.length : 0;
    let zombie_on_left = left_bank.querySelectorAll(".zombie");
    zombie_on_left = zombie_on_left ? zombie_on_left.length : 0;
    let zombie_on_boat = boat_left.querySelectorAll(".zombie");
    zombie_on_boat = zombie_on_boat ? zombie_on_boat.length : 0;
    let human_on_boat = boat_left.querySelectorAll(".human");
    human_on_boat = human_on_boat ? human_on_boat.length : 0;
    console.log(human_on_left+human_on_boat , zombie_on_left+zombie_on_boat)
    checkCondition(human_on_left+human_on_boat , zombie_on_left+zombie_on_boat);
}
