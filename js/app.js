/// tengo que revisar l del primer dia de github 50 days y agreggar las funcionalidades a github
const respuestas = document.querySelectorAll('.item');

respuestas.forEach(function(item){
    item.addEventListener('click',function(){
        const outputAnswer = item.querySelector(".answer");
        const question = item.querySelector(".question");
        const arrow = item.querySelector(".signal");
        removeActiveClasses();
        outputAnswer.classList.add("active");
        question.classList.toggle("active");
        arrow.classList.toggle("rotate");
    })
});

function removeActiveClasses(){
    respuestas.forEach(function(item){
        const salidaAnswer = item.querySelector(".answer");
        const pregunta = item.querySelector(".question");
        const flecha = item.querySelector(".signal");

        salidaAnswer.classList.remove("active");
        pregunta.classList.remove("active");
        flecha.classList.remove("rotate");
    })
}
///podemos solucionarlo con un if averiguar como utilizar esta condicion;