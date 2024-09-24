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
//         cross++;
//         move.classList.add('moved-element');
//         move.classList.remove('original');
//         const right_bank = document.querySelector(".right-bank");
//         // let human_on_bank = right_bank.querySelectorAll(".human");
//         // let zombie_on_bank = right_bank.querySelectorAll(".zombie");
//         // let human_on_boat = 0;
//         // let zombie_on_boat = 0;
//         // if(boat_right.querySelector(".human")){
//         //     human_on_boat = boat_right.querySelectorAll(".human").length;
//         // }
//         // if(boat_right.querySelector(".zombie")){
//         //     zombie_on_boat = boat_right.querySelectorAll(".zombie").length;
//         // }
//         // human_on_right += human_on_bank.length;
//         // human_on_right += human_on_boat.length;
//         // zombie_on_right += zombie_on_bank.length;
//         // zombie_on_right += zombie_on_boat.length;
//         // if(checkCondition(human_on_right,zombie_on_right)){
//         //     alert("Try again");
//         // }

//     }
//     else{
//         alert("Atleast one animal should be present in the boat");
//     }
// }
// const bck_btn = document.querySelector("#bck_btn");
// bck_btn.onclick = (e) =>{
//     if(cap>0){
//         cross++;
//         move.classList.remove('moved-element');
//         move.classList.add('original');
//         boat_left = document.querySelector(".original");
//         const left_bank = document.querySelector(".left-bank");
//         // let human_on_bank = left_bank.querySelectorAll(".human");
//         // let zombie_on_bank = left_bank.querySelectorAll(".zombie");
//         // let human_on_boat = boat_left.querySelectorAll(".human");
//         // let zombie_on_boat = boat_left.querySelectorAll(".zombie");
//         // human_on_left += human_on_bank.length;
//         // human_on_left += human_on_boat.length;
//         // zombie_on_left += zombie_on_bank.length;
//         // zombie_on_left+= zombie_on_boat.length;
//         // if(checkCondition(human_on_left,zombie_on_left)){
//         //     alert("Try again");
//         // }
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

svdshv vhsv hsvyudsvy ValidityState
sdvdsvdsv
sdvdsvdsvdsvsv
  
 
debuggervds
varvs
dispatchEvent  
caches
