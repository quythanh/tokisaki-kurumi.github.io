const mode = document.querySelector('.header__mode')

mode.addEventListener('click', () => {
    mode.querySelectorAll('i').forEach(e => e.classList.toggle('hide'))
    document.body.classList.toggle('dark')
})