// const elements = document.querySelectorAll(".element");
// let cap = 0;
// var cross=0;
// let human_on_right= 0;
// let zombie_on_right = 0;
// let human_on_left= 0;
// let zombie_on_left = 0;
// elements.forEach(eachElement => {
//     eachElement.onclick = (event) => {
//         if (hasAncestor(eachElement, "bank") && cap < 2) {
//             eachElement.remove();
//             addBoat(eachElement);
//         }
//     };
// });
// function hasAncestor(ele, classname) {
//     while (ele) {
//         if (ele.classList && ele.classList.contains(classname)) {
//             return true;
//         }
//         ele = ele.parentElement;
//     }
//     return false;
// }
// function addBoat(element) {
//     const space = document.querySelector(".contain-element");
//     const el = element.cloneNode(true);
//     space.appendChild(el);
//     el.style.visibility = "visible";
//     cap++;
//     el.onclick = () => {
//         removeBoat(el);
//     };
// }

// function removeBoat(element) {
//     cap--;
//     let space;
//     const move = document.querySelector(".move-part");
//     element.remove();
//     if(move.classList.contains("moved-element")){
//         space = document.querySelector(".right-bank");
//     }
//     else{
//         space = document.querySelector(".left-bank");
//     }
//     const el = element.cloneNode(true);
//     space.appendChild(el);
//     el.style.visibility = "visible";
//     el.onclick = () => {
//         if (hasAncestor(el, "bank") && cap < 2) {
//             el.remove();
//             addBoat(el);
//         }
//     };
// }

// const fwd_btn = document.querySelector("#fwd_btn");
// const move = document.querySelector(".move-part");
// const boat_right = document.querySelector(".moved-element");
// fwd_btn.onclick = (e) =>{
//     if(cap>0){
//         console.log(cross);
//         cross++;
//         move.classList.add('moved-element');
//         move.classList.remove('original');
//         const right_bank = document.querySelector(".right-bank");
//         let human_on_bank = right_bank.querySelectorAll(".human");
//         let zombie_on_bank = right_bank.querySelectorAll(".zombie");
//         let human_on_boat = 0;
//         let zombie_on_boat = 0;
//         if(boat_right.querySelector(".human")){
//             human_on_boat = boat_right.querySelectorAll(".human").length;
//         }
//         if(boat_right.querySelector(".zombie")){
//             zombie_on_boat = boat_right.querySelectorAll(".zombie").length;
//         }
//         human_on_right += human_on_bank.length;
//         human_on_right += human_on_boat.length;
//         zombie_on_right += zombie_on_bank.length;
//         zombie_on_right += zombie_on_boat.length;
//         if(checkCondition(human_on_right,zombie_on_right)){
//             alert("Try again");
//         }

//     }
//     else{
//         alert("Atleast one animal should be present in the boat");
//     }
// }
// const bck_btn = document.querySelector("#bck_btn");
// bck_btn.onclick = (e) =>{
//     if(cap>0){
//         console.log(cross);
//         cross++;
//         move.classList.remove('moved-element');
//         move.classList.add('original');
//         boat_left = document.querySelector(".original");
//         const left_bank = document.querySelector(".left-bank");
//         let human_on_bank = left_bank.querySelectorAll(".human");
//         let zombie_on_bank = left_bank.querySelectorAll(".zombie");
//         let human_on_boat = boat_left.querySelectorAll(".human");
//         let zombie_on_boat = boat_left.querySelectorAll(".zombie");
//         human_on_left += human_on_bank.length;
//         human_on_left += human_on_boat.length;
//         zombie_on_left += zombie_on_bank.length;
//         zombie_on_left+= zombie_on_boat.length;
//         if(checkCondition(human_on_left,zombie_on_left)){
//             alert("Try again");
//         }
//     }
//     else{
//         alert("Atleast one animal should be present in the boat");
//     }
// }
// document.getElementById("crossing").innerHTML = cross;


// function checkCondition(humans,zombie){
//     if(humans<zombie)   return true;
//     else return false;
// }

const elements = document.querySelectorAll(".element");
let cap = 0;
let cross = 0;
let humanOnRight = 0;
let zombieOnRight = 0;
let humanOnLeft = 0;
let zombieOnLeft = 0;

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
    const move = document.querySelector(".move-part");
    element.remove();
    const space = move.classList.contains("moved-element") 
        ? document.querySelector(".right-bank") 
        : document.querySelector(".left-bank");
    
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
const boatRight = document.querySelector(".moved-element");

fwd_btn.onclick = () => {
    if (cap > 0) {
        cross++;
        move.classList.add('moved-element');
        move.classList.remove('original');

        const rightBank = document.querySelector(".right-bank");
        const humanOnBank = rightBank.querySelectorAll(".human").length;
        const zombieOnBank = rightBank.querySelectorAll(".zombie").length;
        const humanOnBoat = boatRight.querySelectorAll(".human").length;
        const zombieOnBoat = boatRight.querySelectorAll(".zombie").length;

        humanOnRight += humanOnBank + humanOnBoat;
        zombieOnRight += zombieOnBank + zombieOnBoat;

        if (checkCondition(humanOnRight, zombieOnRight)) {
            alert("Game Over: Zombies outnumber humans on the right bank!");
            resetGame(); // Optional: Reset the game
        }
        
        document.getElementById("crossing").innerHTML = cross;
    } else {
        alert("At least one animal should be present in the boat");
    }
}

const bck_btn = document.querySelector("#bck_btn");
bck_btn.onclick = () => {
    if (cap > 0) {
        cross++;
        move.classList.remove('moved-element');
        move.classList.add('original');

        const leftBank = document.querySelector(".left-bank");
        const humanOnBank = leftBank.querySelectorAll(".human").length;
        const zombieOnBank = leftBank.querySelectorAll(".zombie").length;
        const humanOnBoat = boatLeft.querySelectorAll(".human").length;
        const zombieOnBoat = boatLeft.querySelectorAll(".zombie").length;

        humanOnLeft += humanOnBank + humanOnBoat;
        zombieOnLeft += zombieOnBank + zombieOnBoat;

        if (checkCondition(humanOnLeft, zombieOnLeft)) {
            alert("Game Over: Zombies outnumber humans on the left bank!");
            resetGame(); // Optional: Reset the game
        }

        document.getElementById("crossing").innerHTML = cross;
    } else {
        alert("At least one animal should be present in the boat");
    }
}

function checkCondition(humans, zombies) {
    return humans < zombies;
}

function resetGame() {
    // Logic to reset the game, such as reloading the page or resetting counters
    location.reload(); // Simple reset for demo purposes
}
