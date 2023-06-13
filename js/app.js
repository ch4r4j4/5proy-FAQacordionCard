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
