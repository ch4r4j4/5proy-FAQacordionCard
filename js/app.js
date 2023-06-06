/// tengo que revisar l del primer dia de github 50 days y agreggar las funcionalidades a github
const respuestas = document.querySelectorAll('.answer');

respuestas.forEach(respuesta =>{
    respuesta.addEventListener('click',()=>{
        removeActiveClasses()
        respuesta.classList.add('active')
    })
})

function removeActiveClasses(){
    respuestas.forEach(respuesta => {
        respuesta.classList.remove('active')
    })
}
// literal me bloquee en el desarrollo de esta actividad tengo que ver manejo del dom