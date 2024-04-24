// change navbar style on scroll
     window.addEventListener('scroll', () =>{
      document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 100)
    })
    // SHOW/HIDE QUESTION ANSWER
    const qa = document.querySelectorAll('.faq');
    qa.forEach(event => {
      event.addEventListener('click', () =>{
        event.classList.toggle('open');
        // CHANGE ICON
        const icon = event.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
          icon.className = "uil uil-minus";
        }
        else{
          icon.className = "uil uil-plus";
        }
      })
    })
    // SHOW NAV MENU(UL)
    const nam = document.querySelector('.nav_menu');
    const openBtn = document.querySelector('#open-menu-btn');
    const closeBtn = document.querySelector('#close-menu-btn');
    openBtn.addEventListener('click', () =>{
     nam.style.display = "flex";
      closeBtn.style.display = "inline-block";
      openBtn.style.display = "none";
    })
// CLOSE NAV-MENU
const closeNav = () => {
nam.style.display = "none";
closeBtn.style.display = "none";
openBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)
  
    