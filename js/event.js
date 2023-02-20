console.log("hello");
// <!-- option 3 -->
function makeGreen() {
  document.body.style.backgroundColor = "green";
}
//   option 4
const yellowButton = document.getElementById("makeYellow");
yellowButton.onclick = makeYellowButton;
function makeYellowButton() {
  document.body.style.backgroundColor = "yellow";
}
//   option 5
const orangeButton = document.getElementById("makeOrange");
orangeButton.onclick = function orangeMake() {
  document.body.style.backgroundColor = "orange";
};
 //   option 6
 const pinkButton = document.getElementById("makePink");
 pinkButton.addEventListener("click", pinkMake);

 function pinkMake() {
   document.body.style.backgroundColor = "pink";
 }
 // option 7
 const violetButton = document.getElementById("makeViolet");
 violetButton.addEventListener("click", function violetMake() {
   document.body.style.backgroundColor = "violet";
 });
//   option 8
document.getElementById('makeStillblue').addEventListener('click',function(){
   document.body.style.backgroundColor='steelblue';
})
