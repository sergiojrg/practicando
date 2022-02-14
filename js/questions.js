(function(){
    const contenidos = [...document.querySelectorAll('.questions-title__container')]

    contenidos.forEach(contenido=>{
        contenido.addEventListener('click',()=>{
            const flecha = contenido.children[1]
            flecha.classList.toggle('arrow__container--rotate')

            const answer = contenido.nextElementSibling
            answer.classList.toggle('questions__paragraph--show')

        })
    })
})();