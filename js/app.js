const respuestas = document.querySelectorAll('.item');

respuestas.forEach(function(item){
    item.addEventListener('click',function(){
        const outputAnswer = item.querySelector(".answer");
        const question = item.querySelector(".question");
        const arrow = item.querySelector(".signal");
        //removeActiveClasses(); 
        outputAnswer.classList.toggle("active");
        question.classList.toggle("active");
        arrow.classList.toggle("rotate");
    })
});
//solo pruebas
/*
function removeActiveClasses(){
    respuestas.forEach(function(item){
        const salidaAnswer = item.querySelector(".answer");
        const pregunta = item.querySelector(".question");
        const flecha = item.querySelector(".signal");

        salidaAnswer.classList.remove("active");
        pregunta.classList.remove("active");
        flecha.classList.remove("rotate");
    })
}*/