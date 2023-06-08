/// tengo que revisar l del primer dia de github 50 days y agreggar las funcionalidades a github
/*const respuestas = document.querySelectorAll('.item');

/*respuestas.forEach(item =>{
    item.addEventListener('click',()=>{
        removeActiveClasses()
        respuesta.classList.add('active')
    })
})

function removeActiveClasses(){
    respuestas.forEach(item => {
        respuesta.classList.remove('active')
    })
}*/
// literal me bloquee en el desarrollo de esta actividad tengo que ver manejo del dom
"use strict";
const allQuestions = document.querySelectorAll(".item");

allQuestions.forEach(function(item){
    item.addEventListener("click", function(){
        const outputAnswer = item.querySelector(".answer");
        const question = item.querySelector(".question");
        const arrow = item.querySelector(".arrow");

        outputAnswer.classList.add("active");
        question.classList.toggle("active");
        arrow.classList.toggle("rotate");
    });
});
