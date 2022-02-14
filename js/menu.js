(function(){
    const hamburgerBtn = document.querySelector('.hamburger')

    hamburgerBtn.addEventListener('click', ()=>{
        const navContainer = document.querySelector('.nav__links')

        navContainer.classList.toggle('nav__links--show')
    })
})();