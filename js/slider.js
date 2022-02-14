(function(){
    const nextBtn = document.querySelector('#right'); 
    const backBtn = document.querySelector('#left');
    const experienciaBody = [...document.querySelectorAll('.experiencia__body')];

    let valorID = 0; 

    nextBtn.addEventListener('click',()=>{
        cambiarBody(1);
    });
    backBtn.addEventListener('click',()=>{
        cambiarBody(-1);
    });

    
    function cambiarBody(valor){
        const idActual = document.querySelector('.experiencia__body--show').dataset.id;   

        valorID = Number(idActual)
        valorID += valor

        experienciaBody[Number(idActual)-1].classList.remove('experiencia__body--show')

        if(valorID === experienciaBody.length+1 || valorID === 0){
            valorID = valorID===0 ? valorID = experienciaBody.length : valor = 1 
        }

        experienciaBody[valorID-1].classList.add('experiencia__body--show')


    }


})();