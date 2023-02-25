const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 100);
});

function toggleText() {
    var text = document.getElementById("demo");
    if (text.style.display === "none") {
      text.style.display = "block";
      document.querySelector("#Morebtn").textContent = "Less About";
    } else {
      text.style.display = "none";
      document.querySelector("#Morebtn").textContent = "More About";
    }
  };

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
span2.onclick = function() {
  modal2.style.display = "none";
};
span3.onclick = function() {
  modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

// var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
// var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

// function showPanel(panelIndex,colorCode) {
//   tabButtons.forEach(function(node){
//   node.style.backgroundColor="";
//   node.style.color="";
//     });
// tabButtons[panelIndex] .style.backgroundColor=colorCode;
// tabButtons[panelIndex] .style.color="white";
// tabPanels.forEach(function(node){
//   node.style.display ="none";
//     });
//     tabPanels[panelIndex] .style.display="block";
//     tabPanels[panelIndex] .style.backgroundColor=colorCode;
// }
const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) =>{
  tab.addEventListener('click', (e)=>{
    tabs.forEach(tab=>{tab.classList.remove('active')});
    tab.classList.add('active');

    var line = document.querySelector('.line');
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    all_content.forEach(content=>{content.classList.remove('active')});
    all_content[index].classList.add('active');

  })
})