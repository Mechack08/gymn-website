const btns = document.querySelectorAll('.btn-modal');
const modal = document.querySelector('.bloc-modal');
const close = document.querySelector('.close');
const index = document.querySelector('.bloc-img img');


function checkMediaQuery() {
    if (window.innerWidth > 850) {
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                index.src = `img/equipement${e.target.getAttribute('data-index')}.jpg`;
                modal.classList.add('active');
            })
        })
        modal.addEventListener('click', () => {
            modal.classList.remove('active');
        })
    }
  }
  window.addEventListener('resize', checkMediaQuery);

  // NAV Animation

  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
      if(window.scrollY > 30){
          nav.classList.add('nav-animate')
      }else{
          nav.classList.remove('nav-animate')
      }
  })
