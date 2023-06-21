//selector adentro de los elementos

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function(){
  
  questions.forEach(function(item){
    if (item !== question) {
      item.classList.remove("show-text");
    }
  })


  question.classList.toggle("show-text");
  }   
)}
)


window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = characters.map(function(item) {
      
    })
})
















/*  
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
  const question = e.currentTarget.parentElement.parentElement;
  question.classList.toggle("show-text");  
    })     
}) */

