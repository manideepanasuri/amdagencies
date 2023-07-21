hamburger=document.querySelector("#menu");
hamburger.onclick=function(){
    navimpmedia = document.querySelector(".nav-imp-media");
    navimpmedia.classList.toggle("active");
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzPS3dJHbXH9-5DRmMAewrJR0u8T7rHGhiXlRTunyVNrFMdOYFYibCYiqNOfXvtMcA/exec'
    const form = document.forms['google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
    })
}